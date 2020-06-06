<template>
  <v-row no-gutters style="position:relative;" class="justify-center align-center">
    <v-col cols="12" sm="12" class="small">
      <v-carousel
        cycle
        interval="4000"
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
        height="auto"
        reverse-transition="slide-transition"
        transition="slide-transition"
      >
        <v-carousel-item
          v-for="(slide, i) in activity"
          :key="i"
          style="background-color:rgb(27, 157, 216);"
        >
          <v-row class="justify-center align-center small">
            <v-col cols="6" sm="6" class="small">
              <v-img :src="slide.image" cover></v-img>
            </v-col>

            <v-col cols="6" sm="6" style="padding-right:48px;" class="small padd">
              <h1
                class="mob-right font-weight-bold slidetext padd titlefont"
                style="padding-left:200px;padding-right:150px;text-align:right;text-decoration:underline;color:#FFFF00;font-size:30px"
              >{{slide.title}}</h1>
              <h2
                class="white--text mob-right slidetext padd textfont"
                style="padding-left:200px;padding-right:150px;text-align:right;padding-top:12px:font-size:30px"
              >{{slide.content}}</h2>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-img src="../../assets/logo/active.png" style="position:absolute;" width="150" class="logo"></v-img>
  </v-row>
</template>

<script>
import { fb, db } from "../../firebase";
export default {
  data() {
    return {
      activity: []
      // slides: [
      //   {
      //     id: "slide-1",
      //     title: "SPORTS DAY",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Factivities%2FSports-1.jpg?alt=media&token=122bafc0-6d29-4920-9906-89ea7722834b",
      //     content:
      //       "Children live in cluttered environments in slums, Garbage is their entertainment. Sport is a powerful way to grow well. We often give it.",
      //     color: "rgb(27, 157, 216)"
      //   },
      //   {
      //     id: "slide-2",
      //     title: "COLOR CAMP",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Factivities%2Fcolor-camp-1.jpg?alt=media&token=7ae11306-b0ae-4629-af3d-818f826eea29",
      //     content:
      //       "An intensive kids camp for three days with lot of fun and life-changing experience.",
      //     color: "rgb(27, 157, 216)"
      //   },
      //   {
      //     id: "slide-3",
      //     title: "FAMILY SEMINAR",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Factivities%2FFamily.jpg?alt=media&token=f4171d39-9050-4766-9c2a-1464384d7356",
      //     content:
      //       "Helping parents by teaching the biblical principles to impart the Godly values to the children and teenagers",
      //     color: "rgb(27, 157, 216)"
      //   },
      //   {
      //     id: "slide-4",
      //     title: "CMTS",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Factivities%2FCMTS.jpg?alt=media&token=ea116b7b-2c48-4592-bf0b-63deed8b87ca",
      //     content:
      //       "We just completed our 11th batch of Children’s Ministries Training School with Shylhet Presbyterian Synod at Moulovi Bazar. ",
      //     color: "rgb(27, 157, 216)"
      //   },
      //   {
      //     id: "slide-5",
      //     title: "G-TEAM",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Factivities%2FG-team.jpg?alt=media&token=4e2964e8-68e7-46cd-b4de-ea4cf3d89e50",
      //     content:
      //       "Raising a generation with appropriate training to develop their capacity and self-confidence.",
      //     color: "rgb(27, 157, 216)"
      //   },
      //   {
      //     id: "slide-6",
      //     title: "HBA",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Factivities%2Fhba-(7).jpg?alt=media&token=8bceee79-7931-48cb-8718-531f810d198d",
      //     content:
      //       "Happy Birds Assembly is the non-formal education Center for children on rights and moral values with fun activities, games, puppet shows, drama, choreography, art and crafting.",
      //     color: "rgb(27, 157, 216)"
      //   },
      //   {
      //     id: "slide-7",
      //     title: "MIRPUR CHURCH CAMP",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Factivities%2FBaptist-church-camp.jpg?alt=media&token=f6231e24-a32f-4f73-8248-fcbff31647f5",
      //     content:
      //       "Thanks Mirpur Baptist church to allow our team to help your Kids Camp on May 24, 2019",
      //     color: "rgb(27, 157, 216)"
      //   },
      //   {
      //     id: "slide-8",
      //     title: "GOLGOTHA CHURCH CAMP",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Factivities%2FGolgatha.jpg?alt=media&token=73d9493b-8db2-40b7-bb8f-5d9a9d3f032c",
      //     content:
      //       "Thanks Golgotha Baptist church to allow our team to help your Kids Camp on May 31, 2019 Scripture Union Bangladesh",
      //     color: "rgb(27, 157, 216)"
      //   },
      //   {
      //     id: "slide-9",
      //     title: "REGIONAL ACTIVITY",
      //     image:
      //       "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Factivities%2FThakurgaon-(1).jpg?alt=media&token=041b64df-c2ae-4b69-9e6e-dcd6fdcf5d19",
      //     content:
      //       "Reaching children with different activities in norther part of Bangladesh.",
      //     color: "rgb(27, 157, 216)"
      //   }
      // ]
    };
  },
  firestore() {
    // return {
    //   programs: db.collection("programs")
    // };
    const gamesCollection = db.collection("activity");

    gamesCollection.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.activity.push(doc.data());
      });
    });
  }
};
</script>

<style lang="scss">
@media only screen and (max-width: 600px) {
  .logo {
    display: none;
  }
  .mob-right {
    text-align: center !important;
  }
  .slidetext {
    padding: 0px !important;
  }
  .padd {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .small {
    width: 100% !important;
    max-width: 100% !important;
    flex-basis: 100% !important;
  }
  .foot {
    width: 33.33% !important;
    max-width: 33.33% !important;
    flex-basis: 33.33% !important;
  }
  .half {
    width: 50% !important;
    max-width: 50% !important;
    flex-basis: 50% !important;
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
  .look {
    font-size: 28px !important;
  }
  .titlefont {
    font-size: 25px !important;
  }
  .textfont {
    font-size: 18px !important;
  }
}
</style>