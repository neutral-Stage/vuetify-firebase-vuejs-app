<template>
  <v-app>
    <Navbar />
    <div
      class="story"
      v-for="(s,index) in story"
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
        style="text-align: center;font-size: 75px;line-height: 1em;margin: 250px  250px 30px 250px;letter-spacing: -2px;"
      >
        Sponsor a child today and change a life like
        <span style="font-style:italic;">{{s.name}}</span>
      </p>
      <v-row class="justify-center mb-12 mt-6">
        <v-btn
          class="display-2 button"
          dark
          color="rgb(246, 147, 32)"
          x-large
          height="65"
          to="/donate"
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
  name: "sumiya",
  props: ["storyId"],
  data() {
    return {
      story: []
      //   story: [
      //     {
      //       title: "Sumaiya’s story",
      //       subtitle:
      //         "Sumaiya, a 9-years-old girl, fighting with Thalassemia disease who has hope to be healed",
      //       breif:
      //         "Sumaiya, a 9-years-old girl, regular participant of our bi-weekly service called Happy Birds Assembly. In all, there are nine siblings. Living in a slum with two tiny rooms. Her parent a low payment daily labor.",
      //       para_1:
      //         "She has been involved with us on a regular basis since the year of 2015 while she was 5 with her other siblings. At the beginning of the year 2019, Sumaiya suddenly stopped coming to our service, we got to know that she is severely sick for two months. ",
      //       para_2:
      //         "Her mother informed us that, they discovered some of the dark spots on all her body which is very much painful. The treatment system in Bangladesh is very harassing, specially for poor community people. Sumaiya’s mother visited doctor to doctor, hospital to hospital for her daughter’s better treatment with low payment. Almost all the places doctors suggested to diagnosis first, but she couldn’t do it because of the lack of money. She did it for ones and got the result of blood Cancer. Doctor prescribed the wrong medicine according to the diagnosis report, and the report was completely wrong.",
      //       para_3:
      //         "Then Bijoy Ministries decided to take her to the hospital after consulting with the family. After many processing of different tests in a good hospital, the doctor discovered Thalassemia disease. She is needed a bag of blood now.  Sumaiya’s family is not capable to buy blood for her on a regular basis. Our ministry is collecting blood donors in regular basis. Sumaiya is much healthier now. She wants to come back to the service again. ",
      //       image:
      //         "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/programs%2Fstory%2FSumaiya-Family.jpg?alt=media&token=ea489ec9-faa1-4993-87ac-952b06c6a907",
      //       aoimage:
      //         "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/programs%2Fstory%2FDSC_0143.jpg?alt=media&token=50839c94-5f80-48f0-a2e5-099fef88f001",
      //       name: "SUMAIYA",
      //       backImage:
      //         "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/programs%2Fstory%2FSumaiya-back.jpg?alt=media&token=267e494e-f218-416e-9e96-874a3e7809b7"
      //     }
      //   ]
    };
  },
  firestore() {
    let storyId = this.storyId;
    let productRef = db.collection("story").doc(storyId);
    let getPro = productRef
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
          this.story.push(doc.data());
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
  }
};
</script>

<style lang="scss">
.story {
  background: linear-gradient(rgba(10, 10, 20, 0.2), rgba(10, 10, 20, 0.2));
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>