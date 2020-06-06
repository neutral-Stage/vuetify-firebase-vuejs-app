<template>
  <v-app>
    <v-row
      v-if="sliders[0].name=='Video'"
      style="position: relative;width: 100%;padding-bottom: 56.25%; height: 0;"
    >
      <video autoplay muted loop id="myVideo">
        <source src="../assets/BB.mp4" type="video/mp4" />Your browser does not support HTML5 video.
      </video>
    </v-row>

    <Slider v-if="sliders[0].name=='Slider'"></Slider>
    <Navbar />
    <div class="vision" id="about">
      <v-container style="max-width:1170px;padding-bottom:0px;">
        <router-link to="#about" style="text-decoration: none;">
          <p
            class="flex font-weight-bold white--text burn"
            style="text-shadow:1px 2px 3px black;text-align: center;font-size: 74px;line-height: 1em;margin: 30px 0;letter-spacing: -2px; margin-top:500px"
          >A Burning Vision</p>
        </router-link>
        <v-row justify-center>
          <v-col md="12">
            <div class="pa-2" outlined tile style="text-align: center">
              <div
                class="white--text font-weight-bold boxshadow"
                style="text-shadow:1px 2px 3px black; font-size:60px;"
              >
                We see every child's life will be...
                <div
                  style="font-family: 'Righteous', cursive;text-shadow:1px 2px 3px black;margin-bottom:200px;"
                  class="boxshadow"
                >FREE, EXEMPLARY and FRUITFUL</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="back" id="program">
      <v-container
        style="max-width:1170px;text-align: center;margin-left: auto;
    margin-right: auto;"
      >
        <router-link to="#program" style="text-decoration: none;">
          <p
            class="flex font-weight-bold white--text program"
            style="text-align: center;font-size: 60px;line-height: 1em;margin: 200px 0 100px 0;letter-spacing: -2px; "
          >Programs</p>
        </router-link>

        <v-row class="align-center justify-center hidden-xs-only">
          <v-col md="4" sm="4" class="small">
            <v-card
              outlined
              tile
              style="margin-top:60px;border-radius:5px;text-align:center;"
              :to="stocks[6].link"
            >
              <v-img
                :src="stocks[6].backImage"
                style="position:relative;"
                class="programOverlay"
                width="100%"
                height="250"
              ></v-img>
              <v-img
                :src="stocks[6].logo"
                width="150"
                style="position:absolute;top:50px;left:120px;right:50px;"
              ></v-img>

              <p
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{ stocks[6].title }}</p>
              <p
                class
                style="font-family: 'Crimson Pro', serif;font-size: 20px;font-style: normal;font-weight:500;padding:10px;"
              >{{ stocks[6].slogan }}</p>
            </v-card>
            <v-btn
              color="#F69320"
              style="margin-top: -10px;"
              block
              large
              :to="stocks[6].link"
            >Read More</v-btn>
          </v-col>
          <v-col md="4" sm="4" class="small">
            <v-card outlined tile style="margin-top:120px;border-radius:6px" :to="stocks[0].link">
              <v-img
                :src="stocks[0].backImage"
                style="position:relative;"
                class="programOverlay"
                width="100%"
                height="250"
              ></v-img>
              <v-img
                :src="stocks[0].logo"
                width="150"
                style="position:absolute;top:50px;left:120px;right:50px;"
              ></v-img>

              <p
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{ stocks[0].title }}</p>
              <p
                class
                style="font-family: 'Crimson Pro', serif;font-size: 20px;font-style: normal;font-weight:500;padding:10px;"
              >{{ stocks[0].slogan }}</p>
            </v-card>
            <v-btn
              color="#F69320"
              style="margin-top: -10px;"
              block
              large
              :to="stocks[0].link"
            >Read More</v-btn>
          </v-col>
          <v-col md="4" sm="4" class="small">
            <v-card outlined tile style="margin-top:230px;border-radius:7px" :to="stocks[7].link">
              <v-img
                :src="stocks[7].backImage"
                style="position:relative;"
                class="programOverlay"
                width="100%"
                height="250"
              ></v-img>
              <v-img
                :src="stocks[7].logo"
                width="150"
                style="position:absolute;top:50px;left:120px;right:50px;"
              ></v-img>

              <p
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{ stocks[7].title }}</p>
              <p
                class
                style="font-family: 'Crimson Pro', serif;font-size: 20px;font-style: normal;font-weight:500;padding:10px;"
              >{{ stocks[7].slogan }}</p>
            </v-card>
            <v-btn
              color="#F69320"
              style="margin-top: -10px;"
              block
              large
              :to="stocks[7].link"
            >Read More</v-btn>
          </v-col>
          <v-col md="4" sm="4" class="small">
            <v-card outlined tile style="margin-top:-120px;border-radius:7px" :to="stocks[1].link">
              <v-img
                :src="stocks[1].backImage"
                style="position:relative;"
                class="programOverlay"
                width="100%"
                height="250"
              ></v-img>
              <v-img
                :src="stocks[1].logo"
                width="150"
                style="position:absolute;top:50px;left:120px;right:50px;"
              ></v-img>

              <p
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{ stocks[1].title }}</p>
              <p
                class
                style="font-family: 'Crimson Pro', serif;font-size: 20px;font-style: normal;font-weight:500;padding:10px;"
              >{{ stocks[1].slogan }}</p>
            </v-card>
            <v-btn
              color="#F69320"
              style="margin-top: -10px;"
              block
              large
              :to="stocks[1].link"
            >Read More</v-btn>
          </v-col>
          <v-col md="4" sm="4" class="small">
            <v-card outlined tile style="margin-top:-80px;border-radius:7px" :to="stocks[3].link">
              <v-img
                :src="stocks[3].backImage"
                style="position:relative;"
                class="programOverlay"
                width="100%"
                height="250"
              ></v-img>
              <v-img
                :src="stocks[3].logo"
                width="150"
                style="position:absolute;top:50px;left:120px;right:50px;"
              ></v-img>

              <p
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{ stocks[3].title }}</p>
              <p
                class
                style="font-family: 'Crimson Pro', serif;font-size: 20px;font-style: normal;font-weight:500;padding:10px;"
              >{{ stocks[3].slogan }}</p>
            </v-card>
            <v-btn
              color="#F69320"
              style="margin-top: -10px;"
              block
              large
              :to="stocks[3].link"
            >Read More</v-btn>
          </v-col>
          <v-col md="4" sm="4" class="small">
            <v-card outlined tile style="margin-top:20px;border-radius:7px" :to="stocks[2].link">
              <v-img
                :src="stocks[2].backImage"
                style="position:relative;"
                class="programOverlay"
                width="100%"
                height="250"
              ></v-img>
              <v-img
                :src="stocks[2].logo"
                width="150"
                style="position:absolute;top:50px;left:120px;right:50px;"
              ></v-img>

              <p
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{ stocks[2].title }}</p>
              <p
                class
                style="font-family: 'Crimson Pro', serif;font-size: 20px;font-style: normal;font-weight:500;padding:10px;"
              >{{ stocks[2].slogan }}</p>
            </v-card>
            <v-btn
              color="#F69320"
              style="margin-top: -10px;"
              block
              large
              :to="stocks[2].link"
            >Read More</v-btn>
          </v-col>
          <v-col md="4" sm="4" class="small">
            <v-card outlined tile style="margin-top:-35px;border-radius:7px" :to="stocks[5].link">
              <v-img
                :src="stocks[5].backImage"
                style="position:relative;"
                class="programOverlay"
                width="100%"
                height="250"
              ></v-img>
              <v-img
                :src="stocks[5].logo"
                width="150"
                style="position:absolute;top:50px;left:120px;right:50px;"
              ></v-img>

              <p
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{ stocks[5].title }}</p>
              <p
                class
                style="font-family: 'Crimson Pro', serif;font-size: 20px;font-style: normal;font-weight:500;padding:10px;"
              >{{ stocks[5].slogan }}</p>
            </v-card>
            <v-btn
              color="#F69320"
              style="margin-top: -10px;"
              block
              large
              :to="stocks[5].link"
            >Read More</v-btn>
          </v-col>
          <v-col md="4" sm="4" class="small">
            <v-card outlined tile style="margin-top:-60px;border-radius:7px" :to="stocks[8].link">
              <v-img
                :src="stocks[8].backImage"
                style="position:relative;"
                class="programOverlay"
                width="100%"
                height="250"
              ></v-img>
              <v-img
                :src="stocks[8].logo"
                width="150"
                style="position:absolute;top:50px;left:120px;right:50px;"
              ></v-img>

              <p
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{ stocks[8].title }}</p>
              <p
                class
                style="font-family: 'Crimson Pro', serif;font-size: 20px;font-style: normal;font-weight:500;padding:10px;"
              >{{ stocks[8].slogan }}</p>
            </v-card>
            <v-btn
              color="#F69320"
              style="margin-top: -10px;"
              block
              large
              :to="stocks[8].link"
            >Read More</v-btn>
          </v-col>
          <v-col md="4" sm="4" class="small">
            <v-card outlined tile style="margin-top:20px;border-radius:7px" :to="stocks[4].link">
              <v-img
                :src="stocks[4].backImage"
                style="position:relative;"
                class="programOverlay"
                width="100%"
                height="250"
              ></v-img>
              <v-img
                :src="stocks[4].logo"
                width="150"
                style="position:absolute;top:50px;left:120px;right:50px;"
              ></v-img>

              <p
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{ stocks[4].title }}</p>
              <p
                class
                style="font-family: 'Crimson Pro', serif;font-size: 20px;font-style: normal;font-weight:500;padding:10px;"
              >{{ stocks[4].slogan }}</p>
            </v-card>
            <v-btn
              color="#F69320"
              style="margin-top: -10px;"
              block
              large
              :to="stocks[4].link"
            >Read More</v-btn>
          </v-col>
        </v-row>
        <v-row class="align-center justify-center hidden-sm-and-up">
          <v-col v-for="(p,i) in stocks" :key="i" cols="12">
            <v-card outlined tile :to="p.link">
              <v-img
                :src="p.backImage"
                style="position:relative;"
                class="programOverlay"
                width="100%"
                height="250"
              ></v-img>
              <v-img
                :src="p.logo"
                width="150"
                style="position:absolute;top:50px;left:120px;right:50px;"
              ></v-img>

              <p
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{ p.title }}</p>
              <p
                class
                style="font-family: 'Crimson Pro', serif;font-size: 20px;font-style: normal;font-weight:500;padding:10px;"
              >{{ p.slogan }}</p>
            </v-card>
            <v-btn color="#F69320" style="margin-top: -10px;" block large :to="p.link">Read More</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-row no-gutters>
      <v-col cols="12">
        <v-img
          max-height="400px"
          src="https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Fchanging-edited.jpg?alt=media&token=f2ba9c79-2b0f-4448-a784-d3760bd069f4"
        ></v-img>
      </v-col>
    </v-row>

    <v-container class="display">
      <v-row>
        <v-col cols="12">
          <div class="display-2 text-center pt-12 pb-12 font-weight-bold">Coming Events</div>
          <carousel>
            <v-img
              v-for="s in events"
              :key="s.title"
              :src="s.image"
              height="300"
              color="primary"
              class="d-inline-block"
            >
              <div class="actstyle">
                <span style="font-size:27px;">{{s.title}}</span>
                <v-row justify="center" no-gutters>
                  <v-col cols="10">
                    <p>Date: {{s.date}}</p>
                  </v-col>

                  <v-col cols="2">
                    <v-btn to="/Victory_Party">
                      <v-icon color="#1B9DD8">chevron_right</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-img>
          </carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="hidden-sm-and-up">
      <v-row>
        <v-col cols="12">
          <div class="display-2 text-center pt-12 pb-12 font-weight-bold">Coming Events</div>

          <v-img
            v-for="s in events"
            :key="s.title"
            :src="s.image"
            color="primary"
            height="300"
            class="mb-5"
          >
            <div class="actstyle">
              <span style="font-size:27px;">{{s.title}}</span>
              <v-row>
                <v-col cols="10">
                  <p>Date: {{s.date}}</p>
                </v-col>

                <v-col cols="2">
                  <v-btn class="pr-5" to="/Victory_Party">
                    <v-icon color="#1B9DD8">chevron_right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <div
      style="border:1px solid black;margin-right:50px;margin-left:50px;margin-top:50px"
      class="display"
    ></div>

    <div class="display-2 text-center pt-12 pb-12 display">Latest Activities</div>
    <Carousel></Carousel>

    <div class="director" id="director">
      <v-row class="align-center">
        <v-col md="6" sm="12">
          <v-card max-width="500" class="mx-auto cardmagrin" max-height="500">
            <v-card-title>Director’s Message</v-card-title>
            <v-card-text>
              <p
                class="subtitle-1 black--text"
                style="font-family:'Times New Roman', serif;font-style:italic;"
              >
                Fifteen years back, We found children at the dumpster area
                scavenging for food. It breaks our hearts and we just took a
                step by faith. Today we are serving thousands of children in
                different location of our country. We never thought that we will
                form any organization. We left our job and started to serve
                neighboring marginalized children.
              </p>

              <v-card-actions>
                <v-btn color="#F69320" to="/about#director">More</v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="getcon">
      <p
        class="text-center text_invent white--text text-uppercase"
        style="font-size:50px;margin-top: 48px "
      >Investing in the next generation</p>
      <p
        class="text-center text_invent white--text text-uppercase"
        style="font-size:50px;"
      >touching the future</p>
      <p
        class="font-italic text-center text_invent white--text"
        style="font-size:25px;margin-top: 48px "
      >
        "Then they would put their trust in God and would not forget his deeds
        but would keep his commands." - Psalm 78:7
      </p>
      <v-row class="align-center justify-center">
        <v-col cols="2" class="medium">
          <v-btn
            color="#F69320"
            elevation="12"
            dark
            width="200"
            large
            class="button"
            to="/contact"
          >Get Connected</v-btn>
        </v-col>

        <v-col cols="2" class="medium">
          <v-btn
            color="#F69320"
            elevation="12"
            dark
            width="200"
            to="/donate"
            large
            class="button"
          >Donate</v-btn>
        </v-col>
      </v-row>
    </div>

    <Footer></Footer>
  </v-app>
</template>

<script>
import { fb, db } from "../firebase";
import Navbar from "../components/front/Navbar";
import Carousel from "../components/front/Carousel";
import Footer from "../components/front/Footer";

import carousel from "vue-owl-carousel";
import Slider from "../components/front/Slider";
import EventSlide from "../components/front/EventSlide";

export default {
  components: {
    Navbar,
    Carousel,
    Footer,
    Slider,
    carousel,
    EventSlide
  },

  data() {
    return {
      stocks: [],
      events: [],
      sliders: []
    };
  },
  firestore() {
    // return {
    //   programs: db.collection("programs")
    // };
    const programs = db.collection("programs");

    programs.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.stocks.push(doc.data());
      });
    });
    const events = db.collection("events");

    events.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.events.push(doc.data());
      });
    });

    const sliders = db.collection("slider");
    sliders.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.sliders.push(doc.data());
      });
    });
  }
};
</script>

<style lang="css" scoped>
@media only screen and (max-width: 600px) {
  .getcon {
    background: linear-gradient(rgba(10, 10, 20, 0.2), rgba(10, 10, 20, 0.2)),
      url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2F04-1-%23-Investing-a-generation-back.jpg?alt=media&token=7aefce44-bd51-4083-8b44-e585749a43e4");
    background-repeat: no-repeat !important;
    height: auto !important;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    background-attachment: scroll !important;
    background-position: top !important;
  }
  .medium {
    width: 50% !important;
    max-width: 50% !important;

    flex-basis: 40% !important;
  }
  .vision {
    background-image: url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Fvision.JPG?alt=media&token=4f698e6b-1e8d-486b-a7e5-8f865fccd3d8");
    background-repeat: no-repeat;

    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    background-attachment: scroll !important;
    background-position: top !important;
  }
  .burn {
    margin-top: 20px !important;
    margin-bottom: 0px !important;
  }
  .cardmagrin {
    margin-top: 200px;
  }
  .director {
    width: 100% !important;
    background-position: left top !important;
    background-size: contain !important;
    background-attachment: scroll !important;
  }
  .back {
    background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
      url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2FDSC_0079.jpg?alt=media&token=db569799-12b4-4ecf-88ec-fb20eb1bcd11");
    background-repeat: no-repeat;

    -webkit-background-size: contain !important;
    -moz-background-size: contain !important;
    -o-background-size: contain !important;
    background-size: contain !important;
    background-attachment: scroll !important;
    background-position: top !important;
  }
  .program {
    margin: 50px 0 135px 0 !important;
    font-size: 40px !important;
  }
  #about p {
    font-size: 36px !important;
  }
  .boxshadow {
    font-size: 19px !important;
    margin-bottom: 25px !important;
    font-family: "Righteous", cursive !important;
    text-shadow: 1px 2px 3px black !important;
  }
  .text_invent {
    font-size: 14px !important;
    margin-top: 5px !important;
    text-shadow: 1px 2px 3px black !important;
  }
}
video {
  width: 100%;
  max-height: 100%;
  box-sizing: border-box;
}
.programOverlay::after {
  content: "";
  display: block;
  padding: 100px 0;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(black, 0.5);
}
.vueperslide:before {
  content: "";
  position: absolute;
  top: 2em;
  left: 2em;
  right: 2em;
  bottom: 1em;
  background-color: #42b983;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.back {
  background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
    url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2FDSC_0079.jpg?alt=media&token=db569799-12b4-4ecf-88ec-fb20eb1bcd11");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  background-position: center bottom;
}
.vision {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Fvision.JPG?alt=media&token=4f698e6b-1e8d-486b-a7e5-8f865fccd3d8");
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
.front {
  background-color: white;
}
router-link {
  text-decoration: none;
}

#myVideo {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  width: 100%;
  height: 100%;
}
.actstyle {
  width: 100%;
  padding: 5px 11px;
  position: absolute;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7);
  z-index: 0;
}

.getcon {
  background: linear-gradient(rgba(10, 10, 20, 0.2), rgba(10, 10, 20, 0.2)),
    url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2F04-1-%23-Investing-a-generation-back.jpg?alt=media&token=7aefce44-bd51-4083-8b44-e585749a43e4");
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 600px;
  background-size: cover;
  background-position: top;
}

.director {
  background: linear-gradient(rgba(10, 10, 20, 0.2), rgba(10, 10, 20, 0.2)),
    url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2FDirector-Message---Home-page.jpg?alt=media&token=0a1b1a8f-af71-4538-8b4f-9fbd9bd3fd8f");
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 600px;
  background-size: cover;
}
.invest {
  background: linear-gradient(rgba(10, 10, 20, 0.2), rgba(10, 10, 20, 0.2)),
    url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2F04-1-%23-Investing-a-generation-back.jpg?alt=media&token=7aefce44-bd51-4083-8b44-e585749a43e4");
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 600px;
  background-size: cover;
  background-position: center center;
}
.changing {
  padding: 50px 0;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Fchanging-edited.jpg?alt=media&token=f2ba9c79-2b0f-4448-a784-d3760bd069f4");
  background-size: cover;
  background-position: top;
}
</style>
