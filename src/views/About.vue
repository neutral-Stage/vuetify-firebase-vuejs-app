<template>
  <v-app>
    <Navbar />
    <Cycle></Cycle>
    <Aboutnav></Aboutnav>
    <div class="history" id="history">
      <v-container style="padding-bottom:0px;">
        <router-link to="#history" style="text-decoration: none;">
          <p class="flex font-weight-bold white--text" style="display:none;">History</p>
        </router-link>
        <p
          class="flex font-weight-bold white--text text_invent"
          style="text-align: center;font-size: 74px;line-height: 1em;margin: 250px  0 30px 0;letter-spacing: -2px; "
        >Scavenging for food</p>

        <p
          class="flex font-weight-bold white--text sub_text"
          style="text-align: center;font-size: 30px;line-height: 1em;margin: 30px  0 200px 0;letter-spacing: -2px; "
        >The Beginning</p>

        <v-card>
          <v-card-text v-for="h in history" :key="h.year" style="padding:10px 16px 10px 16px;">
            <p class="cardtext" style="margin-bottom:0px;">{{h.content}}</p>
          </v-card-text>
          <v-row class="py-4 pl-4 pr-4 align-center justify-center">
            <v-col cols="10">
              <v-row class="align-center">
                <v-col cols="4" class="small">
                  <v-img
                    :aspect-ratio="16/9"
                    style="border-radius:10px;"
                    src="https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2FAji-sen-sin-2003_3.jpg?alt=media&token=7d975173-543a-4b43-bdc1-e559a2b8d112"
                  ></v-img>
                  <p class="headline text-center">Since 2003</p>
                </v-col>
                <v-col cols="4" class="justify-center text-center small">
                  <v-icon color="black" style="font-size:150px" class="display">mdi-arrow-right-bold</v-icon>
                  <v-icon
                    color="black"
                    class="hidden-sm-and-up"
                    style="font-size:150px"
                  >mdi-arrow-down-bold</v-icon>
                </v-col>
                <v-col cols="4" class="small">
                  <v-img
                    :aspect-ratio="16/9"
                    style="border-radius:10px;"
                    src="https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2FAji-Se-din-huge.jpg?alt=media&token=fd970507-a0ec-4683-bc97-924c7e63d343"
                  ></v-img>
                  <p class="headline text-center">Now</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </div>

    <div class="vision" id="vision">
      <v-container style="max-width:1170px">
        <router-link to="#vision" style="text-decoration: none;">
          <p
            class="flex font-weight-bold white--text text_invent"
            style="text-shadow:1px 2px 3px black;text-align: center;font-size: 74px;line-height: 1em;letter-spacing: -2px; margin-top: 250px ;"
          >A Burning Vision</p>
        </router-link>
        <v-row justify-center>
          <v-col md="12">
            <div class="pa-2" outlined tile style="text-align: center">
              <div
                class="white--text font-weight-bold sub_text"
                style="text-shadow:1px 2px 3px black;font-size: 40px;line-height: 1em;letter-spacing: -2px;margin-bottom:200px;"
              >
                We see every child's life will be...
                <p class="boxshadow">FREE, EXEMPLARY and FRUITFUL</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="mission" id="mission">
      <v-container style="max-width:1170px">
        <router-link to="#mission" style="text-decoration: none;">
          <p
            class="flex font-weight-bold white--text text_invent mob"
            style="text-shadow:1px 2px 3px black;text-align: center;font-size: 74px;line-height: 1em;letter-spacing: -2px;margin: 250px  0 30px 0;"
          >Mission</p>
        </router-link>
        <v-row justify-center style="margin-top:100px;margin-bottom:120px;" class="mob">
          <v-col md="12">
            <div class="pa-2" outlined tile style="text-align: center">
              <div
                class="white--text font-weight-bold cardtext"
                style="font-size:40px;text-shadow:2px 3px 3px black;line-height: 1.2em;"
              >Empowering children of every marginalized community to find their PURPOSE enjoy their RIGHTS and live with DIGNITY & equipping people to do so</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="director" id="director">
      <v-row>
        <v-col md="12">
          <v-card max-width="600" class="ml-auto">
            <v-img
              class="hidden-sm-and-up"
              src="https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/Director-Message-1.jpg?alt=media&token=19716446-b0f3-4856-9aae-0d2775c37711"
            ></v-img>
            <v-card-title>Director’s Message</v-card-title>
            <v-card-text>
              <p
                class="subtitle-1 black--text"
                style="font-family:'Times New Roman', serif;font-style:italic;"
              >Fifteen years back, We found children at the dumpster area scavenging for food. It breaks our hearts and we just took a step by faith. Today we are serving thousands of children in different location of our country. We never thought that we will form any organization. We left our job and started to serve neighboring marginalized children.</p>
              <p
                class="subtitle-1 black--text"
                style="font-family:'Times New Roman', serif;font-style:italic;"
              >Nowadays, around 500 children are appearing in our bi-weekly service called Happy Birds Assembly (The COU). Around 2000 children are being touched through our different activities annually. We are also helping their families, especially for single/divorced mothers are getting counseling and groceries. We are supporting 100s of kids to go to school. We are paying their school fees, supplies, health and hygiene materials, etc. Also, children getting study help through our education program. From the first year of Bijoy Ministries, one of our main outreach events has been our annual Christmas party (The Victory Party). We work all year to develop relationships with parents, and invite children to attend the joyful occasion. We have been able to deliver the message of the love of our Lord to over 5,000 children at one time during these events. Many of these children hear about our Lord for the first time at one of these Christmas gatherings.</p>
              <p
                class="subtitle-1 black--text"
                style="font-family:'Times New Roman', serif;font-style:italic;"
              >We are not doing all those things, but God! We are just a channel being the blessing for people. You and I are making a difference together.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="mobspec">
      <v-row>
        <v-col cols="12" class="small">
          <p
            class="text-center special"
            style="font-size: 74px;line-height: 1em;letter-spacing: -2px;"
          >We are specialist for</p>
          <v-row>
            <v-col cols="3" lg="3" class="px-12 small">
              <v-img
                src="https://www.asl-control.co.uk/wp-content/uploads/2015/06/Training-icon_teal-grad-circle300px_.png"
              ></v-img>
              <p class="title text-center">Ministry motivation from the Biblical perspective</p>
            </v-col>
            <v-col cols="3" lg="3" class="px-12 small">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fcamp-explorepage-logo.png?alt=media&token=5a4e4c37-9578-4549-be16-21dee91e903d"
              ></v-img>
              <p class="title text-center">Kids & Teens camp</p>
            </v-col>
            <v-col cols="3" lg="3" class="px-12 small">
              <v-img
                src="https://www.qualitymatters.org/sites/default/files/illustrations-infographics/K12-enhancing-learner-exp.png"
              ></v-img>
              <p class="title text-center">Children ministries training</p>
            </v-col>
            <v-col cols="3" lg="3" class="px-12 small">
              <v-img src="https://icon-library.net/images/workshop-icon/workshop-icon-13.jpg"></v-img>
              <p class="title text-center">Family seminars</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div class="financial" id="financial">
      <v-container style="max-width:1170px">
        <router-link to="#financial" style="text-decoration: none;">
          <p
            class="flex font-weight-bold white--text text_fin"
            style="text-shadow:1px 2px 3px black;text-align: center;font-size: 74px;line-height: 1em;margin: 30px 0;letter-spacing: -2px; margin-top:300px"
          >Our Financial Policy</p>
        </router-link>
        <v-row>
          <v-col md="12" class="small">
            <v-card>
              <v-card-title
                class="text-center cardtext"
              >Bijoy Ministries is a non-profitable indigenous humanitarian organization of Christians who have dedicated their lives to empowering children to find their purpose to enjoy their rights and live with dignity. Bijoy is not officially supported by any particular organization or denomination on a regular basis, but by individuals and churches who share the same interest. Bijoy looks to God in faith to supply its needs through gifts from His faithful people.</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "../components/front/Navbar";
import Aboutnav from "../components/front/Aboutnav";
import Footer from "../components/front/Footer";
import Cycle from "../components/front/Cycle";
export default {
  components: {
    Navbar,
    Footer,
    Cycle,
    Aboutnav
  },
  data() {
    return {
      history: [
        {
          year: "2003",
          content:
            "It started when Francis and Nayomi Kisor found children scavenging and fighting for food found in a dumpster outside their home. They felt burdened to do something for them. During the Christmas season, they shared their burden with some of their friends and asked them to give the cost of a meal to those children. Finally, they were able to organize a party for those destitute children & provided them with good solid food as well as a remarkable fellowship with fun and gifts."
        },
        {
          year: "2006",
          content:
            "Over the time since its inception their vision has grown……and now around 500 destitute children attend their bi-weekly service called ‘Happy Birds Assembly (or COU).’ Happy Birds Assembly is a non-formal education center on rights and moral values with fun activities, puppet shows, drama, choreography, art, and crafting, etc."
        },
        {
          year: "2009",
          content:
            "Bijoy Ministries tries endeavoring awareness good parenting and also about the activity for marginalized children among the community and also providing health care and educational awareness activities providing school supplies and health and hygiene materials through different programs."
        },
        {
          year: "2012",
          content:
            "Bijoy also encouraging and equipping people of the church to see the potential and urgency to take the necessary action for their neighboring marginalized children to prevent the future human crisis through their 'Equipping the Church' program. They want to see children of every marginalized community have found their purpose enjoy their rights and live with dignity, so they may have the positive influence in their own family, community, and their world in Bangladesh."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@media only screen and (max-width: 600px) {
  .display {
    display: none !important;
  }
  .about {
    height: 200px !important;
  }
  .vueperslide {
    background-size: contain !important;
  }
  .financial {
    background-position: top !important;
    background-size: contain !important;
    background-attachment: scroll !important;
    height: auto !important;
  }
  .director {
    background-image: url("https://wallpaperplay.com/walls/full/e/0/1/102440.jpg") !important;
    background-repeat: no-repeat;

    -webkit-background-size: contain !important;
    -moz-background-size: contain !important;
    -o-background-size: contain !important;
    background-size: contain !important;
    background-attachment: scroll !important;
    background-position: top !important;
  }
  .cardmagrin {
    margin-top: 200px !important;
  }
  .history {
    background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
      url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/gallery%2FGalary-Slider-(4).jpg?alt=media&token=7ef4ae37-3ace-4bcc-8d6b-ccff045004e3");
    background-repeat: no-repeat;

    -webkit-background-size: contain !important;
    -moz-background-size: contain !important;
    -o-background-size: contain !important;
    background-size: contain !important;
    background-attachment: scroll !important;
    background-position: top !important;
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
  .text_invent {
    font-size: 25px !important;
    margin-top: 5px !important;
    text-shadow: 1px 2px 3px black !important;
  }
  .text_fin {
    font-size: 25px !important;
    margin-top: 100px !important;
    text-shadow: 1px 2px 3px black !important;
  }
  .sub_text {
    font-size: 20px !important;
    margin-top: 5px !important;
    text-shadow: 1px 2px 3px black !important;
  }
  .special {
    font-size: 30px !important;
    margin-top: 5px !important;
  }
  .mob {
    margin: 0px !important;
  }
  .mobspec {
    margin-top: 500px;
  }
  .cardtext {
    font-size: 1rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: "Roboto", sans-serif !important;
  }
  .mission {
    background-image: url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2FMission.jpg?alt=media&token=77c11abe-04eb-4b3d-a46e-86c738d77039");
    background-repeat: no-repeat;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
    background-attachment: scroll !important;
    background-position: top !important;
  }
}
.cardtext {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em;
  font-family: "Roboto", sans-serif;
}
.history {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/gallery%2FGalary-Slider-(4).jpg?alt=media&token=7ef4ae37-3ace-4bcc-8d6b-ccff045004e3");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  background-position: top;
}
.vision {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Fvision.JPG?alt=media&token=4f698e6b-1e8d-486b-a7e5-8f865fccd3d8");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
.mission {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2FMission.jpg?alt=media&token=77c11abe-04eb-4b3d-a46e-86c738d77039");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center top;
}
.director {
  background: linear-gradient(rgba(10, 10, 20, 0.2), rgba(10, 10, 20, 0.2)),
    url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2FDirector-Message---about-us-page.jpg?alt=media&token=17292aa7-0455-42fe-bcb9-5672ec7c9ec2");
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 800px;
  background-size: cover;
  background-position: center;
}
.boxshadow {
  font-family: "Righteous", cursive;
  text-shadow: 1px 2px 3px black;
}
.financial {
  background: linear-gradient(rgba(10, 10, 20, 0.2), rgba(10, 10, 20, 0.2)),
    url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2FFinance.jpg?alt=media&token=3caacf25-f030-4921-b28f-04901d5a8782");
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 800px;
  background-size: cover;
  background-position: top;
}
</style>