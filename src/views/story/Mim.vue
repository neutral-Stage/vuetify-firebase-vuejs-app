<template>
  <v-app>
    <Navbar />
    <div
      class="story"
      v-for="(s,index) in story"
      :key="s.title"
      :style="'background-image: url('+s.backImage+');'"
    >
      <p
        class="flex font-weight-bold white--text text"
        style="text-align: center;font-size: 74px;line-height: 1em;margin: 250px  0 30px 0;letter-spacing: -2px; "
      >{{s.title}}</p>
      <div
        class="px-12"
        outlined
        tile
        style="text-align: center"
      >
        <div
          class="white--text font-weight-bold mt-12 mx-auto text"
          style="font-size:40px;width:50%;"
        >{{s.subtitle}}</div>
      </div>
      <v-container style="max-width:1170px">
        <v-card>
          <v-card-title class="title">{{s.breif}}</v-card-title>
          <v-img :src="s.image"></v-img>
          <v-card-text class="title">{{s.para_1}}</v-card-text>
          <v-card-text class="title">{{s.para_2}}</v-card-text>
        </v-card>
      </v-container>
      <p
        class="flex font-weight-bold white--text text"
        style="text-align: center;font-size:  70px;line-height: 1em;margin: 250px  200px 30px 250px;letter-spacing: -2px;padding:"
      >
        Sponsor a child today and change a life like
        <span style="font-style:italic;">{{s.name}}</span>
      </p>
      <v-row class="justify-center mb-12">
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
import Navbar from "../../components/front/Navbar";

import Footer from "../../components/front/Footer";
export default {
  components: {
    Navbar,
    Footer
  },
  name: "mim",
  data() {
    return {
      story: [
        {
          title: "Mim’s story",
          subtitle: " Sadia Afrin Mim is the only sister of two brothers.",
          breif:
            "I'm Sadia Afrin Mim, 15 years old, studying in ninth grade. I have two other siblings. They are two brothers. I'm the only sister of two brothers. Dad is a security guard in a housing society company and mother is a house wife. The other two brothers also studying. Our family is governed by the single income of our father. Mother works Occasionally. We are almost hand to mouth family.",
          para_1:
            "About eight years ago today, I first heard about the Happy Birds Assembly Ministry in our area from my neighbor's friends, but I never went by. I heard that there is a big event every year, where there is a lot of joy and even a lot of food. I decided to go this year but who will give me the ticket? They will not let me get there without an entry ticket.",
          para_2:
            "And so I kept asking friends to give me a ticket. I got a ticket in a lot of trouble and attended the first Christian event in my life. Many children all around are very happy, Uncle and Aunts (Volunteer) are very warm welcoming. The party started, I had a lot of fun, listening and acting etc. I had more fun with it than I realized. I returned home with food and many other gifts. Everything I saw at that party, I kept thinking about it all the time.",
          image:
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/programs%2Fstory%2FStory-of-Mim.jpg?alt=media&token=ca84a1d2-2df5-4b39-bd9f-31221693509a",
          name: "SADIA MIM",
          backImage:
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/programs%2Fstory%2FMIM-dip-story-back.jpg?alt=media&token=f5bad491-e924-43c0-8380-e239dde7521a"
        }
      ]
    };
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