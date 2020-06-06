<template>
  <v-app>
    <Navbar />

    <div
      class="vision"
      id="vision"
      v-for="(p,index) in stock"
      :key="index"
      :style="'background-image:url('+p.backImage+');'"
    >
      <v-container style="max-width:1170px">
        <v-img
          :src="p.logo"
          width="200px"
          class="logoImage"
          style="margin-left:500px;margin-top:100px"
        ></v-img>
        <router-link to="#vision" style="text-decoration: none;">
          <p
            class="flex font-weight-bold white--text"
            style="text-shadow:1px 2px 3px black;text-align: center;font-size: 74px;line-height: 1em;letter-spacing: -2px; margin-top:100px"
          >{{p.title}}</p>
        </router-link>
        <v-row justify-center>
          <v-col md="12">
            <div class="pa-2" outlined tile style="text-align: center">
              <div
                class="white--text font-weight-bold"
                style="text-shadow:1px 2px 3px black;font-size:30px;"
              >{{p.slogan}}</div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="small">
            <v-card>
              <v-img :src="p.firstCol_image" width="100%" height="250"></v-img>

              <v-card-title
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{p.firstCol_title}}</v-card-title>
              <v-card-text
                class="subtitle-1 font-weight-bold"
                v-for="point in p.firstCol_points"
                :key="point"
              >
                <v-icon left small>fiber_manual_record</v-icon>
                {{point}}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="4" class="small">
            <v-card>
              <v-img :src="p.secondCol_image" width="100%" height="250"></v-img>

              <v-card-title
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{p.secondCol_title}}</v-card-title>
              <v-card-text
                class="subtitle-1 font-weight-bold"
                v-for="point in p.secondCol_points"
                :key="point"
              >
                <v-icon left small>fiber_manual_record</v-icon>
                {{point}}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="4" class="small">
            <v-card>
              <v-img :src="p.thirdCol_image" width="100%" height="250"></v-img>

              <v-card-title
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{p.thirdCol_title}}</v-card-title>
              <v-card-text
                class="subtitle-1 font-weight-bold"
                v-for="point in p.thirdCol_points"
                :key="point"
              >
                <v-icon left small>fiber_manual_record</v-icon>
                {{point}}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div
      style="background-color:rgb(27, 157, 216);padding:70px 5px;"
      v-for="(p,index) in stock"
      :key="index"
    >
      <h1 class="text-center white--text mx-auto small" style="width:50%">{{p.help}}</h1>
      <v-row class="justify-center">
        <v-btn class="title mt-6 small" to="/donate">{{p.button}}</v-btn>
      </v-row>
    </div>
    <div
      class="story"
      v-for="(s,index) in product"
      :key="index"
      :style="'background-image: url('+s.backImage+');'"
    >
      <p
        class="flex font-weight-bold white--text"
        style="text-align: center;font-size: 74px;line-height: 1em;margin: 250px  0 30px 0;letter-spacing: -2px; "
      >{{s.title}}</p>
      <div class="px-12" outlined tile style="text-align: center">
        <div
          class="white--text font-weight-bold"
          style="font-size:40px;margin-top:48px;margin-left:48px;margin-right:48px;padding-left:48px;padding-right:48px;"
        >{{s.subtitle}}</div>
      </div>
      <v-container style="max-width:1170px">
        <v-card>
          <v-card-title class="title">{{s.breif}}</v-card-title>
          <v-img :src="s.image"></v-img>
          <v-card-text class="title">{{s.para_1}}</v-card-text>
          <v-card-text class="title">{{s.para_2}}</v-card-text>
          <v-img :src="s.image_1"></v-img>
          <v-card-text class="title">{{s.para_3}}</v-card-text>
        </v-card>
      </v-container>
      <p
        class="flex font-weight-bold white--text text"
        style="text-align: center;font-size: 75px;line-height: 1em;margin: 250px  250px 30px 250px;letter-spacing: -2px;padding:"
      >
        Sponsor a child today and change a life like
        <span style="font-style:italic;">{{s.name}}</span>
      </p>
      <v-row class="justify-center mb-12">
        <v-btn
          class="display-2 button"
          dark
          height="65"
          to="/donate"
          color="rgb(246, 147, 32)"
          x-large
        >Donate</v-btn>
      </v-row>
    </div>
    <Footer></Footer>
  </v-app>
</template>

<script>
import { fb, db } from "../../firebase";
import Navbar from "../../components/front/Navbar";
import Footer from "../../components/front/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      stock: [],
      product: []
    };
  },
  firestore() {
    // return {
    //   programs: db.collection("programs")
    // };
    let cityRef = db.collection("programs").doc("SHVYeMp8yWWml5vwNcU4");
    let productRef = db.collection("story").doc("LLsVyorWArLwnbPj9Q5M");
    let getDoc = cityRef
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
          this.stock.push(doc.data());
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
    let getPro = productRef
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
          this.product.push(doc.data());
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .vision {
    background-attachment: scroll !important;
    background-size: contain !important;
    background-position: top !important;
  }
  .logoImage {
    margin: auto !important;
    width: 80px !important;
  }
  #vision p {
    font-size: 25px !important;
    margin-top: 5px !important;
    margin-bottom: 5px !important;
  }
  #vision div {
    font-size: 14px !important;
  }
  .story p {
    font-size: 25px !important;
    margin-top: 5px !important;
    margin-bottom: 5px !important;
  }
  .story div {
    padding-right: 0 !important;
    padding-left: 0 !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
    margin-bottom: 100px !important;
    font-size: 14px !important;
  }
  .text {
    background-color: rgb(27, 157, 216);
    padding: 10px;
  }
  .story {
    background: linear-gradient(rgba(10, 10, 20, 0.2), rgba(10, 10, 20, 0.2));
    background-size: contain !important;
    background-attachment: scroll !important;
    background-position: top !important;
  }
}

.vision {
  background: linear-gradient(rgba(31, 31, 32, 0.5), rgba(10, 10, 20, 0.5));
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.story {
  background: linear-gradient(rgba(10, 10, 20, 0.2), rgba(10, 10, 20, 0.2));
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.boxshadow {
  font-family: "Righteous", cursive;
  text-shadow: 1px 2px 3px black;
}
</style>