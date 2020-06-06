<template>
  <div>
    <v-container class="pt-12">
      <div class="display-1">Home Page Slider</div>
      <v-card width="600" class="pa-8" elevation="4">
        <v-form ref="form" v-model="valid" lazy-validation class="align-center">
          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Selection is required']"
            label="Select Slider or Video"
            required
          ></v-select>
          <v-file-input
            chips
            multiple
            show-size
            label="Add One or More Images at Once"
            @change="uploadimage"
            v-model="Image"
          ></v-file-input>
          <v-row>
            <v-col cols="4" v-for="(iamge,i) in imageUrl" :key="i">
              <v-card class="mx-auto" max-width="344">
                <v-img :src="iamge" height="100px" contain></v-img>
              </v-card>
            </v-col>
          </v-row>

          <v-btn color="warning" @click="reset" class="mr-12 mt-12">Reset</v-btn>
          <v-btn color="primary" @click="save" class="mt-12">Submit</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>


<script>
import { fb, db } from "../../firebase";

export default {
  data: () => ({
    Image: [],
    valid: true,
    imageUrl: [],
    sliderData: [],
    select: 1,
    items: ["Video", "Slider"]
  }),
  firestore() {
    let sliderRef = db.collection("slider").doc("mtYHRL4KEDdDxafo0R0w");
    let getDoc = sliderRef
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
          this.sliderData.push(doc.data());

          let slides = this.sliderData;
          for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            this.select = slide.name;
            this.imageUrl = slide.images;
          }
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
  },
  methods: {
    uploadimage(e) {
      let slides = this.Image;

      let imageUrl = this.imageUrl;
      // var file = e.target.files[0];
      console.log(slides);

      slides.forEach(function(slide) {
        var storageRef = fb
          .storage()
          .ref("slider/" + Math.random() + "_slider");
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
    reset() {
      this.imageUrl = [];
    },
    save() {
      console.log("imagearray", this.imageUrl);
      db.collection("slider")
        .doc("mtYHRL4KEDdDxafo0R0w")
        .update("name", this.select)
        .then(docRef => {
          console.log("Name changed to", this.select);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      db.collection("slider")
        .doc("mtYHRL4KEDdDxafo0R0w")
        .update("images", this.imageUrl)
        .then(docRef => {
          console.log("Image changed to", this.imageUrl);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  }
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