<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="programs"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Events</v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="100%">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                >New Item</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-card-text>
                  Please fill info and click on save
                  <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                  ></v-progress-linear>
                </v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.title"
                        label="Title"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.date"
                        label="Date"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.url"
                        label="URL Link"
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
                        <v-col cols="12" sm="6" md="6">
                          <h2>Image</h2>
                          <v-file-input
                            label="Click here to upload 1st Image"
                            v-model="image"
                            @change="uploadimage"
                            show-size
                            small-chips
                          ></v-file-input>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-card class="mx-auto" max-width="344">
                            <v-img
                              :src="editedItem.image"
                              height="200px"
                            ></v-img>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
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
    url: [],
    backImage: [],
    image: [],
    image_1: [],
    dialog: false,
    dialogLoad: false,

    headers: [
      {
        text: "id",
        align: "left",
        value: "id"
      },
      { text: "title", value: "title" },
      { text: "date", value: "date" },
      { text: "url", value: "url" },
      { text: "Edit", value: "edit", sortable: false },
      { text: "Delete", value: "delete", sortable: false }
    ],
    programs: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      date: "",
      image: "",
      url: ""
    },
    defaultItem: {
      title: "",
      date: "",
      image: "",
      url: ""
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
      programs: db.collection("events")
    };
  },

  methods: {
    onFileChange(e) {
      // if (this.backImage) {
      //   this.url = URL.createObjectURL(this.backImage);
      // } else {
      //   this.url = "";
      // }
      const files = this.files;
      console.log(this.files.length);
      for (let i = 0; i < files.length; i++) {
        const backImage = files[i];
        let imageUrl = URL.createObjectURL(backImage);
        this.url.push(imageUrl);
        console.log(this.url);
      }
    },

    uploadimage(e) {
      let image = this.image;
      console.log(image);

      var storageRef = fb.storage().ref("events/" + Math.random() + "_events");
      let uploadTask = storageRef.put(image);
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
            this.editedItem.image = downloadURL;

            console.log("Download URL: ", downloadURL);
          });
        }
      );
    },

    editItem(item) {
      this.editedIndex = this.programs.indexOf(item);
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
          this.$firestore.programs.doc(item.id).delete();
          console.log(item.id);
          Toast.fire({
            type: "error",
            title: "Deleted in successfully"
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
    reset() {
      this.product = {
        title: null,
        id: null,
        content: "",
        help: ""
      };
    },
    save() {
      if (this.editedIndex > -1) {
        {
          Object.assign({}, this.programs[this.editedIndex], this.editedItem);
        }
        Toast.fire({
          type: "info",
          title: "Updated in successfully"
        });
        this.$firestore.programs
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
        this.programs.push(this.editedItem);
        db.collection("events")
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
          title: "Event created successfully"
        });
      }
      this.close();
    }
  }
};
</script>