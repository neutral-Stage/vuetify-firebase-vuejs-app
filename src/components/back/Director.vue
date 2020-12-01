<template>
  <div>
    <v-container class="pt-12">
      <div class="display-1 mb-4">Director's Message</div>
      <v-card width="600" class="pa-8" elevation="4">
        <v-form ref="form" v-model="valid" lazy-validation class="align-center">
          <vue-editor v-model="message"> </vue-editor>
          <!-- <v-textarea outlined label="Message" v-model="message"></v-textarea> -->
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="12"
              class="my-4"
              style="border: 2px solid #80cbc4; border-radius: 10px"
            >
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <h2>About Page Background Image</h2>
                  <v-file-input
                    label="Click here to upload Background Image"
                    v-model="aboutImage"
                    @change="uploadAboutImage"
                    show-size
                    small-chips
                  ></v-file-input>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-card class="mx-auto" max-width="344">
                    <v-img :src="aboutImageUrl" height="200px"></v-img>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <h2>Home Page Background Image</h2>
                  <v-file-input
                    label="Click here to upload Background Image"
                    v-model="homeImage"
                    @change="uploadHomeImage"
                    show-size
                    small-chips
                  ></v-file-input>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-card class="mx-auto" max-width="344">
                    <v-img :src="homeImageUrl" height="200px"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-btn color="warning" @click="reset" class="mr-12 mt-12"
            >Reset</v-btn
          >
          <v-btn color="primary" @click="save" class="mt-12">Submit</v-btn>
        </v-form>
      </v-card>
      <v-card width="600" class="pa-8 mt-6" elevation="4">
        <div>{{ message }}</div>
      </v-card>
    </v-container>
  </div>
</template>


<script>
import { fb, db } from "../../firebase";
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },

  data: () => ({
    valid: true,
    aboutImage: [],
    aboutImageUrl: "",
    homeImage: [],
    homeImageUrl: "",

    director: [],
    message: "",
  }),

  firestore() {
    let sliderRef = db.collection("director").doc("0MYrlOJoTMFK1VDIGKVi");
    let getDoc = sliderRef
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
          this.director.push(doc.data());

          let slides = this.director;
          for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            this.message = slide.message;
            this.aboutImageUrl = slide.aboutImageUrl;
            this.homeImageUrl = slide.homeImageUrl;
          }
        }
      })
      .catch((err) => {
        console.log("Error getting document", err);
      });
  },

  methods: {
    uploadAboutImage(e) {
      let aboutImage = this.aboutImage;
      console.log(aboutImage);

      var storageRef = fb
        .storage()
        .ref("director/" + Math.random() + "_" + aboutImage.title);

      let uploadTask = storageRef.put(aboutImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          // Handle unsuccessful uploads
          console.log("ERROR");
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...

          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.aboutImageUrl = downloadURL;

            console.log("Download URL: ", downloadURL);
          });
        }
      );
    },
    uploadHomeImage(e) {
      let homeImage = this.homeImage;
      console.log(homeImage);

      var storageRef = fb
        .storage()
        .ref("director/" + Math.random() + "_" + homeImage.title);

      let uploadTask = storageRef.put(homeImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          // Handle unsuccessful uploads
          console.log("ERROR");
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...

          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.homeImageUrl = downloadURL;

            console.log("Download URL: ", downloadURL);
          });
        }
      );
    },
    reset() {
      this.aboutImageUrl = "";
      this.homeImageUrl = "";
      this.message = "";
    },
    save() {
      db.collection("director")
        .doc("0MYrlOJoTMFK1VDIGKVi")
        .update("message", this.message)
        .then((docRef) => {
          console.log("Name changed to", this.message);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      db.collection("director")
        .doc("0MYrlOJoTMFK1VDIGKVi")
        .update("aboutImageUrl", this.aboutImageUrl)
        .then((docRef) => {
          console.log("aboutImageUrl changed to", this.aboutImageUrl);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      db.collection("director")
        .doc("0MYrlOJoTMFK1VDIGKVi")
        .update("homeImageUrl", this.homeImageUrl)
        .then((docRef) => {
          console.log("homeImageUrl changed to", this.homeImageUrl);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
#my-strictly-unique-vue-upload-multiple-image .image-container {
  width: 300px;
  margin: auto;
  height: 2000px;
  border: 1px dashed #d6d6d6;
  border-radius: 4px;

  background-color: #fff;
}
</style>