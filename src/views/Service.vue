<template>
  <v-app>
    <Navbar />

    <div
      class="vision"
      id="vision"
      v-for="p in service"
      :key="p.title"
      :style="'background-image:url(' + p.backImage + ');'"
    >
      <v-container style="max-width: 1170px">
        <v-img
          :src="p.logo"
          width="200px"
          style="margin-left: 500px; margin-top: 100px"
        ></v-img>
        <router-link to="#vision" style="text-decoration: none">
          <p
            class="flex font-weight-bold white--text"
            style="
              text-shadow: 1px 2px 3px black;
              text-align: center;
              font-size: 74px;
              line-height: 1em;
              letter-spacing: -2px;
              margin-top: 100px;
            "
          >
            {{ p.title }}
          </p>
        </router-link>
        <v-row justify-center>
          <v-col md="12">
            <div class="pa-2" outlined tile style="text-align: center">
              <div
                class="white--text font-weight-bold"
                style="text-shadow: 1px 2px 3px black; font-size: 30px"
              >
                {{ p.slogan }}
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-img :src="p.firstCol_image" width="100%" height="250"></v-img>

              <v-card-title
                class="headline text--primary"
                style="
                  padding-top: 10px;
                  font-family: 'Josefin Sans', sans-serif;
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 700;
                "
                >{{ p.firstCol_title }}
              </v-card-title>
              <v-card-text
                class="subtitle-1 text--primary"
                style="
                  font-family: 'Josefin Sans', sans-serif;
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 700;
                "
                >{{ p.firstCol_subtitle }}
              </v-card-text>
              <v-card-text
                class="subtitle-1 font-weight-bold"
                v-for="point in p.firstCol_points"
                :key="point"
              >
                <v-icon left small>fiber_manual_record</v-icon>
                {{ point }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img :src="p.secondCol_image" width="100%" height="250"></v-img>

              <v-card-title
                class="headline text--primary"
                style="
                  padding-top: 10px;
                  font-family: 'Josefin Sans', sans-serif;
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 700;
                "
                >{{ p.secondCol_title }}</v-card-title
              >
              <v-card-text
                class="subtitle-1 text--primary"
                style="
                  font-family: 'Josefin Sans', sans-serif;
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 700;
                "
                >{{ p.secondCol_subtitle }}
              </v-card-text>
              <v-card-text
                class="subtitle-1 font-weight-bold"
                v-for="point in p.secondCol_points"
                :key="point"
              >
                <v-icon left small>fiber_manual_record</v-icon>{{ point }}
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img :src="p.thirdCol_image" width="100%" height="250"></v-img>

              <v-card-title
                class="headline text--primary"
                style="
                  padding-top: 10px;
                  font-family: 'Josefin Sans', sans-serif;
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 700;
                "
                >{{ p.thirdCol_title }}</v-card-title
              >
              <v-card-text
                class="subtitle-1 text--primary"
                style="
                  font-family: 'Josefin Sans', sans-serif;
                  font-size: 30px;
                  font-style: normal;
                  font-weight: 700;
                "
                >{{ p.thirdCol_subtitle }}
              </v-card-text>
              <v-card-text
                class="subtitle-1 font-weight-bold"
                v-for="point in p.thirdCol_points"
                :key="point"
              >
                <v-icon left small>fiber_manual_record</v-icon>{{ point }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div
      style="background-color: rgb(27, 157, 216); padding: 70px 5px"
      v-for="(p, index) in service"
      :key="index"
    >
      <h1 class="text-center white--text mx-auto" style="width: 50%">
        {{ p.help }}
      </h1>
      <v-row class="justify-center">
        <v-btn class="title mt-6">{{ p.button }}</v-btn>
      </v-row>
    </div>

    <Footer></Footer>
  </v-app>
</template>

<script>
import { fb, db } from "../firebase";
import Navbar from "../components/front/Navbar";
import Footer from "../components/front/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
  props: ["serviceId"],
  data() {
    return {
      service: [],
    };
  },
  firestore() {
    let serviceId = this.serviceId;
    let productRef = db.collection("services").doc(serviceId);
    let getPro = productRef
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
          this.service.push(doc.data());
        }
      })
      .catch((err) => {
        console.log("Error getting document", err);
      });
  },
};
</script>

<style lang="scss">
.back {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/gallery%2FGalary-Slider-(4).jpg?alt=media&token=7ef4ae37-3ace-4bcc-8d6b-ccff045004e3");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  background-position: top;
}
.vision {
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