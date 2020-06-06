<template>
  <div>
    <v-data-table :headers="headers" :items="gallery" sort-by="calories" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Gallery</v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="100%">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-card-text>
                  Please fill info and click on save
                  <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.title"
                        color="#80CBC4"
                        label="Title"
                        outlined
                        clearable
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                      class="my-4"
                      style="border:2px solid #80CBC4;border-radius:10px;"
                    >
                      <v-row>
                        <v-col cols="12" sm="12" md="12">
                          <h2>Upload Image</h2>
                          <v-file-input
                            chips
                            multiple
                            show-size
                            label="Add One or More Images at Once"
                            @change="uploadimage"
                            v-model="Image"
                          ></v-file-input>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="3"
                          md="2"
                          v-for="(src,i) in editedItem.images"
                          :key="i"
                        >
                          <v-card max-width="344">
                            <v-img :src="src" height="200px"></v-img>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions class="pb-12">
                <v-btn color="blue darken-1" class="mx-12" dark large @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" class="mx-12" dark large @click="save">Save</v-btn>

                <v-spacer></v-spacer>
                <v-btn color="warning" @click="resetImages" class="mr-12" large>Reset</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.edit="{ item }">
        <v-icon class="mr-2" @click="editItem(item)">edit</v-icon>
      </template>
      <template v-slot:item.delete="{ item }">
        <v-icon @click="deleteItem(item)">delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db } from "../../firebase";

export default {
  components: { VueEditor },
  data: () => ({
    Image: [],
    imageUrl: [],
    dialog: false,
    dialogLoad: false,

    headers: [
      {
        text: "title",
        align: "left",
        value: "title"
      },

      { text: "id", value: "id" },
      { text: "Edit", value: "edit", sortable: false },
      { text: "Delete", value: "delete", sortable: false }
    ],
    gallery: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      images: []
    },
    defaultItem: {
      title: "",
      images: []
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogLoad(val) {
      // if (!val) return;
      // setTimeout(() => (this.dialogLoad = false), 4000);
    }
  },

  firestore() {
    return {
      gallery: db.collection("gallery")
    };
  },

  methods: {
    uploadimage(e) {
      let slides = this.Image;

      let imageUrl = this.editedItem.images;
      // var file = e.target.files[0];
      console.log(slides);

      slides.forEach(function(slide) {
        var storageRef = fb
          .storage()
          .ref("gallery/" + Math.random() + "_gallery");
        let uploadTask = storageRef.put(slide);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            // Handle unsuccessful uploads
            console.log("ERROR");
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              // imageUrl.push(downloadURL);
              // this.imageUrl = this.imgdata;

              console.log("Download URL: ", downloadURL);

              imageUrl.push(downloadURL);
            });
          }
        );
      });
    },

    editItem(item) {
      this.editedIndex = this.gallery.indexOf(item);
      this.editedItem = Object.assign({}, item);

      this.dialog = true;
    },

    deleteItem(item) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$firestore.gallery.doc(item.id).delete();
          console.log(item.id);
          Toast.fire({
            type: "error",
            title: "gallery Deleted in successfully"
          });
        }
      });
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    resetImages() {
      this.editedItem.images = [];
    },
    reset() {
      this.gallery = {
        title: null,
        id: null,
        images: []
      };
    },
    save() {
      if (this.editedIndex > -1) {
        {
          Object.assign({}, this.gallery[this.editedIndex], this.editedItem);
        }
        Toast.fire({
          type: "info",
          title: "gallery Updated in successfully"
        });
        this.$firestore.gallery
          .doc(this.editedItem.id)
          .update(this.editedItem)
          .then(docRef => {
            this.reset();
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      } else {
        //setTimeout(() => uploadbackImage(), 4000);
        // uploadbackImage();
        this.gallery.push(this.editedItem);
        db.collection("gallery")
          .add(this.editedItem)
          .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            this.reset();
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });

        Toast.fire({
          type: "success",
          title: "new gallery created successfully"
        });
      }
      this.close();
    }
  }
};
</script>