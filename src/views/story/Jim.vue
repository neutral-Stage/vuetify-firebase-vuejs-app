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
        class="flex font-weight-bold white--text"
        style="text-align: center;font-size: 74px;line-height: 1em;margin: 250px  0 30px 0;letter-spacing: -2px; "
      >{{s.title}}</p>
      <div
        class="px-12"
        outlined
        tile
        style="text-align: center"
      >
        <div
          class="white--text font-weight-bold mt-12 mx-auto"
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
  name: "jim",
  data() {
    return {
      story: [
        {
          title: "Jim's story",
          subtitle:
            " 15-years old Jim grew up in a family of agony but smiles ",
          breif:
            "Jannatul Naim Jim is a 15 year old. Studying in tenth grade. Born in a Muslim family. I live in a dirty slum with my mother and two other sisters. My father left home after the birth of my third sister. He got married to another woman,  he will never come back. After my dad left, my mom brought us to Dhaka for a better job opportunity. She is working in a low-paid garment factory because she is not well-educated and not skilled enough. My older sister is also working in a shop in the market to help our family.",
          para_1:
            "Our slum has many single rooms. The size of the room we live in is 8'X9' made of brick and tin. House rent is US$50 per month, we have lack of water supplies and cooking gas. We shared the toilet and kitchen with another nine neighboring families, four of us are in a room. ",
          para_2:
            "2 Years back I heard about this ministry and my friend took me there. What an awesome experience for the first time in my life I ever experienced. Full of fun and joy in each one of us are experienced. That Christmas party was my entrance gate. Today I am getting help from them to study, they often provides food for my family and also I am fully involved with the G-Team (Ministry for Teenagers) group and helping other children to get involved like me. Now I know, God is my heavenly father who takes care of me daily. ",
          image:
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/programs%2Fstory%2FJIM-story.jpg?alt=media&token=e85d647d-4660-4181-84de-b6ea08722f1e",
          name: "JIM",
          backImage:
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/programs%2Fstory%2FJim-story%20back.jpg?alt=media&token=353cb424-2335-4edb-adda-d5bc5daf7422"
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