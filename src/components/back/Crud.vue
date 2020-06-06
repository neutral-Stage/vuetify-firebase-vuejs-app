<template>
  <div>
    <div class="text-center">
      <!-- <v-dialog
        v-model="dialogLoad"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="primary"
          dark
        >
          <v-card-text>
            Please stand by
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>-->
    </div>
    <v-data-table :headers="headers" :items="programs" sort-by="calories" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Programs</v-toolbar-title>

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
                  Please stand by
                  <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.button" label="Button"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.help" label="Help"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-textarea outlined label="Slogan" v-model="editedItem.slogan"></v-textarea>
                    </v-col>
                    <v-col cols="4" sm="4" md="4">
                      <v-text-field
                        outlined
                        label="First Column Title"
                        v-model="editedItem.firstCol_title"
                      ></v-text-field>

                      <div v-for="(point,index) in editedItem.firstCol_points" :key="index">
                        <v-textarea
                          outlined
                          label="First Column Points"
                          v-model="editedItem.firstCol_points[index]"
                        ></v-textarea>
                      </div>

                      <h2 style="text-align:center;">First Column Image</h2>
                      <v-file-input
                        label="First Column Image"
                        v-model="firstCol_image"
                        @change="uploadfirstCol_image"
                        show-size
                        small-chips
                      ></v-file-input>
                      <v-card class="mx-auto" max-width="344">
                        <v-img :src="editedItem.firstCol_image" height="200px"></v-img>
                      </v-card>
                    </v-col>
                    <v-col cols="4" sm="4" md="4">
                      <v-text-field
                        outlined
                        label="Second Column Title"
                        v-model="editedItem.secondCol_title"
                      ></v-text-field>
                      <div v-for="(point,index) in editedItem.secondCol_points" :key="index">
                        <v-textarea
                          outlined
                          label="Second Column Points"
                          v-model="editedItem.secondCol_points[index]"
                        ></v-textarea>
                      </div>
                      <h2 style="text-align:center;">Second Column Image</h2>
                      <v-file-input
                        label="Second Column Image"
                        v-model="secondCol_image"
                        @change="uploadsecondCol_image"
                        show-size
                        small-chips
                      ></v-file-input>
                      <v-card class="mx-auto" max-width="344">
                        <v-img :src="editedItem.secondCol_image" height="200px"></v-img>
                      </v-card>
                    </v-col>
                    <v-col cols="4" sm="4" md="4">
                      <v-text-field
                        outlined
                        label="Third Column Title"
                        v-model="editedItem.thirdCol_title"
                      ></v-text-field>
                      <div v-for="(point,index) in editedItem.thirdCol_points" :key="index">
                        <v-textarea
                          outlined
                          label="Third Column Points"
                          v-model="editedItem.thirdCol_points[index]"
                        ></v-textarea>
                      </div>
                      <h2 style="text-align:center;">Third Column Image</h2>
                      <v-file-input
                        label="Third Column Image"
                        v-model="thirdCol_image"
                        @change="uploadthirdCol_image"
                        show-size
                        small-chips
                      ></v-file-input>
                      <v-card class="mx-auto" max-width="344">
                        <v-img :src="editedItem.thirdCol_image" height="200px"></v-img>
                      </v-card>
                    </v-col>

                    <v-col cols="12" sm="12" md="12">
                      <v-file-input
                        label="Background Image"
                        v-model="backImage"
                        @change="uploadbackImage"
                        show-size
                        small-chips
                      ></v-file-input>
                      <v-row>
                        <v-col cols="6" sm="4">
                          <h2>Background Image</h2>
                          <v-card class="mx-auto" max-width="344">
                            <v-img :src="editedItem.backImage" height="200px"></v-img>
                          </v-card>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6" sm="4">
                          <h2>Logo</h2>
                          <v-file-input
                            label="Logo Image"
                            v-model="logo"
                            @change="uploadlogo"
                            show-size
                            small-chips
                          ></v-file-input>
                          <v-card class="mx-auto" max-width="200">
                            <v-img
                              :src="editedItem.logo"
                              style="background-color:#000;"
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
    logo: [],
    firstCol_image: [],
    secondCol_image: [],
    thirdCol_image: [],
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
    programs: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      button: "",
      content: "",
      help: "",
      backImage: "",
      logo: "",
      firstCol_image: "",
      secondCol_image: "",
      thirdCol_image: ""
    },
    defaultItem: {
      title: "",
      button: "",
      content: "",
      help: "",
      backImage: "",
      logo: "",
      firstCol_image: "",
      secondCol_image: "",
      thirdCol_image: ""
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
      programs: db.collection("programs")
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

    uploadbackImage(e) {
      let backImage = this.backImage;
      console.log(backImage);

      var storageRef = fb
        .storage()
        .ref("programs/hba/" + Math.random() + "_" + backImage.title);
      let uploadTask = storageRef.put(backImage);
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
            this.editedItem.backImage = downloadURL;

            console.log("Download URL: ", downloadURL);
          });
        }
      );
    },
    uploadfirstCol_image(e) {
      let firstCol_image = this.firstCol_image;
      console.log(firstCol_image);

      var storageRef = fb
        .storage()
        .ref("programs/hba/" + Math.random() + "_" + firstCol_image.title);
      let uploadTask = storageRef.put(firstCol_image);
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
            this.editedItem.firstCol_image = downloadURL;

            console.log("Download URL: ", downloadURL);
          });
        }
      );
    },
    uploadsecondCol_image(e) {
      let secondCol_image = this.secondCol_image;
      console.log(secondCol_image);

      var storageRef = fb
        .storage()
        .ref("programs/hba/" + Math.random() + "_" + secondCol_image.title);
      let uploadTask = storageRef.put(secondCol_image);
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
            this.editedItem.secondCol_image = downloadURL;

            console.log("Download URL: ", downloadURL);
          });
        }
      );
    },
    uploadthirdCol_image(e) {
      let thirdCol_image = this.thirdCol_image;
      console.log(thirdCol_image);

      var storageRef = fb
        .storage()
        .ref("programs/hba/" + Math.random() + "_" + thirdCol_image.title);
      let uploadTask = storageRef.put(thirdCol_image);
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
            this.editedItem.thirdCol_image = downloadURL;

            console.log("Download URL: ", downloadURL);
          });
        }
      );
    },
    uploadlogo(e) {
      let logo = this.logo;
      console.log(logo);

      var storageRef = fb
        .storage()
        .ref("programs/hba/" + Math.random() + "_" + logo.title);
      let uploadTask = storageRef.put(logo);
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
            this.editedItem.logo = downloadURL;

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
        db.collection("programs")
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
          title: "Program created successfully"
        });
      }
      this.close();
    }
  }
};
</script>