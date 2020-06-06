<template>
  <v-app>
    <Navbar />
    <div class="gallery" id="program">
      <v-container style="max-width:1600px;">
        <router-link to="#program" style="text-decoration: none;">
          <p
            class="flex font-weight-bold white--text my-12"
            style="text-align: center;font-size: 74px;line-height: 1em;letter-spacing: -2px; "
          >Gallery</p>
        </router-link>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-6">
              <v-container fluid>
                <v-row v-for="(p,i) in gallery" :key="i" class="justify-center">
                  <v-col cols="12">
                    <h1 class="text-center" style="text-decoration:underline;">{{p.title}}</h1>
                  </v-col>

                  <v-col cols="2" v-for="(src,index) in p.images" :key="index">
                    <v-card class="d-flex" @click="showSingle(src,index)">
                      <v-img :src="src" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                          <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-card>
                  </v-col>
                  <!-- <button @click="showMultiple(p.images)">Show a group of pictures.</button> -->
                  <VueEasyLightbox
                    :visible="visible"
                    :imgs="nowimg"
                    :index="index"
                    @hide="handleHide"
                  ></VueEasyLightbox>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </div>
    <Footer></Footer>
  </v-app>
</template>

<script>
import { fb, db } from "../firebase";
import VueEasyLightbox from "vue-easy-lightbox";
import Navbar from "../components/front/Navbar";
import Footer from "../components/front/Footer";

export default {
  components: {
    Navbar,
    Footer,
    VueEasyLightbox
  },
  data() {
    return {
      // Img Url , string or Array
      visible: false,
      index: 0, // default
      overlay: false,
      nowimg: [],
      program: [
        {
          title: "AJI SEDIN",
          link: [
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/gallery%2FAji-Se-Din-2014-(70).jpg?alt=media&token=73c7b661-bba1-4ed3-a245-3ee7f8205e73",
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/gallery%2FAji-Se-Din-2014-(91).jpg?alt=media&token=10ba01ba-eded-4643-b01f-8778c7b85fd0",
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/gallery%2FAji-Se-Din-2014-(93).jpg?alt=media&token=27ac129b-2990-4463-8f43-f5de7c0b567c",
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/gallery%2FAji-Se-Din-2014-(71).jpg?alt=media&token=43936d83-1f42-42e3-b569-a5f4f2c9523c",
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/gallery%2FGalary-Slider-(4).jpg?alt=media&token=7ef4ae37-3ace-4bcc-8d6b-ccff045004e3"
          ]
        }
      ],
      gallery: []
    };
  },
  firestore() {
    return {
      gallery: db.collection("gallery")
    };
  },
  methods: {
    showSingle(image, index) {
      // this.imgs = "http://via.placeholder.com/350x150";
      this.nowimg = image;
      this.index = index;
      this.show();
    },
    showMultiple(images) {
      // this.imgs = [
      //   "http://via.placeholder.com/350x150",
      //   "http://via.placeholder.com/350x150"
      // ];
      this.nowimg = images;
      // this.index = 0; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
@media only screen and (max-width: 600px) {
  .small {
    width: 100% !important;
    max-width: 100% !important;
  }

  .display {
    display: none;
  }
  .text {
    margin: 0 0 !important;
  }

  .button {
    margin: auto;
  }
  .gallery {
    background-image: url("https://visionrescue.co.in/wp-content/uploads/2015/04/restoration_bg.jpg");
    background-repeat: no-repeat !important;
    background-attachment: scroll !important;
    background-size: contain !important;

    background-position: top !important;
  }
}
.gallery {
  background-image: url("https://visionrescue.co.in/wp-content/uploads/2015/04/restoration_bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  background-position: center bottom;
}
</style>
