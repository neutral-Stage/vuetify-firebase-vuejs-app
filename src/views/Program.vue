<template>
  <v-app>
    <Navbar />

    <div
      class="vision"
      id="vision"
      v-for="p in program"
      :key="p.title"
      :style="'background-image:url('+p.backImage+');'"
    >
      <v-container style="max-width:1170px">
        <v-img
          :src="p.logo"
          width="200px"
          style="margin-left:500px;margin-top:100px"
        ></v-img>
        <router-link
          to="#vision"
          style="text-decoration: none;"
        >
          <p
            class="flex font-weight-bold white--text"
            style="text-shadow:1px 2px 3px black;text-align: center;font-size: 74px;line-height: 1em;letter-spacing: -2px; margin-top:100px"
          >{{p.title}}</p>
        </router-link>
        <v-row justify-center>
          <v-col md="12">
            <div
              class="pa-2"
              outlined
              tile
              style="text-align: center"
            >
              <div
                class="white--text font-weight-bold"
                style="text-shadow:1px 2px 3px black;font-size:30px;"
              >{{p.slogan}}</div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-img
                :src="p.firstCol.image"
                width="100%"
                height="250"
              ></v-img>

              <v-card-title
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{p.firstCol.title}} </v-card-title>
              <v-card-text
                class="subtitle-1 font-weight-bold"
                v-for="point in p.firstCol.points"
                :key="point"
              >
                <v-icon
                  left
                  small
                >fiber_manual_record</v-icon>
                {{point}}
              </v-card-text>

            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img
                :src="p.firstCol.image"
                width="100%"
                height="250"
              ></v-img>

              <v-card-title
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{p.secondCol.title}}</v-card-title>
              <v-card-text
                class="subtitle-1 font-weight-bold"
                v-for="point in p.secondCol.points"
                :key="point"
              >
                <v-icon
                  left
                  small
                >fiber_manual_record</v-icon>{{point}}
              </v-card-text>

            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card>
              <v-img
                :src="p.thirdCol.image"
                width="100%"
                height="250"
              ></v-img>

              <v-card-title
                class="headline text--primary"
                style="padding-top:10px;font-family: 'Josefin Sans', sans-serif;font-size: 30px;font-style: normal;font-weight: 700;"
              >{{p.thirdCol.title}}</v-card-title>
              <v-card-text
                class="subtitle-1 font-weight-bold"
                v-for="point in p.thirdCol.points"
                :key="point"
              >
                <v-icon
                  left
                  small
                >fiber_manual_record</v-icon>{{point}}
              </v-card-text>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div
      style="background-color:rgb(27, 157, 216);padding:70px 5px;"
      v-for="(p,index) in program"
      :key="index"
    >
      <h1
        class="text-center white--text mx-auto"
        style="width:50%"
      >{{p.help}}</h1>
      <v-row class="justify-center">
        <v-btn class="title mt-6">{{p.button}}</v-btn>
      </v-row>
    </div>
    <div
      class="story"
      v-for="(s,index) in story"
      :key="s.title"
      :style="'background-image: url('+s.backImage+');'"
    >
      <p
        class="flex  font-weight-bold white--text"
        style="text-align: center;font-size: 74px;line-height: 1em;margin: 250px  0 30px 0;letter-spacing: -2px; "
      >
        {{s.title}}
      </p>
      <div
        class="px-12"
        outlined
        tile
        style="text-align: center"
      >
        <div
          class="white--text font-weight-bold mt-12 mx-auto"
          style="font-size:40px;width:50%;"
        >
          {{s.subtitle}}

        </div>

      </div>
      <v-container style="max-width:1170px">

        <v-card>
          <v-card-title class="title">{{s.breif}}</v-card-title>
          <v-img :src="s.image">
          </v-img>
          <v-card-text class="title">{{s.para_1}} </v-card-text>
          <v-card-text class="title">{{s.para_2}}</v-card-text>

        </v-card>
      </v-container>
      <p
        class="flex  font-weight-bold white--text"
        style="text-align: center;font-size: 75px;line-height: 1em;margin: 250px  250px 30px 250px;letter-spacing: -2px;padding:"
      >
        Sponsor a child today and change a life like <span style="font-style:italic;">{{s.name}}</span>
      </p>
      <v-row class="justify-center mb-12">
        <v-btn
          class="display-2"
          dark
          color="rgb(246, 147, 32)"
          x-large
        >Donate for {{s.name}}</v-btn>
      </v-row>

    </div>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "../components/front/Navbar";
import Footer from "../components/front/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      program: [
        {
          logo:
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Fprograms%2Flogo%2FHBA%20LOGO%20for%20web.png?alt=media&token=53d586f6-d964-4ffe-b2c4-89dbd9fe2927",
          title: "Happy Birds Assembly",
          slogan:
            "It’s a non-formal education on rights, moral values and different issues of life with lot of fun activities, puppet shows, drama, choreography, art, and crafting etc.",
          backImage:
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Fvision.JPG?alt=media&token=4f698e6b-1e8d-486b-a7e5-8f865fccd3d8",
          firstCol: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Fprograms%2FHBA.jpg?alt=media&token=b1b60fae-d337-40e1-8ded-9636d8d24568",
            title: "The Need",
            points: [
              "A majority of inhabitants in slum communities are migrants relocating for better employment prospects from across the country. Once they settle in a dirty slum, they have little access to public education, health and livelihood services. Some parent sell ready maid foods, vegetables etc. on the street and their children are grow-up on the street and learn the street culture.",

              "Residents in slum communities are often from very varied cultural backgrounds and they bring with them certain backward practices that may have been traditions in their native communities. Once in the new environment of urban poverty, residents are also prey to social evils that they are often unaware about.",

              "Therefore, issues like child labor, human trafficking, child marriage, gender bias, drug abuse, domestic violence, alcoholism and unhealthy lifestyles are very common and negatively impact the entire slum community."
            ]
          },

          secondCol: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Fprograms%2FHBA.jpg?alt=media&token=b1b60fae-d337-40e1-8ded-9636d8d24568",
            title: "Our work",
            points: [
              "We are holding a bi-weekly service called ‘HAPPY BIRDS ASSEMBLY’ in a rented school near slum communities for children and teenagers to raise awareness on their rights and moral values with fun activities, puppet shows, drama, choreography, art, and crafting, etc.",

              "Our teams conduct frequent awareness campaigns addressing different issues such as human trafficking, physical and sexual abuse. This helps reduce the sourcing of human trafficking.",

              "Our awareness campaigns are followed up by weekly house visits throughout the community and focused one-on-one counseling and aid for families in need."
            ]
          },

          thirdCol: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Fprograms%2FHBA.jpg?alt=media&token=b1b60fae-d337-40e1-8ded-9636d8d24568",
            title: "Outcomes",
            points: [
              "About five hundred children and teenagers are present in our regular services. From there, we sponsor the children who are selected for the study according the certain criteria.",

              "Differences in values and discipline are being made in children's daily lives, now with some parents bringing their children to our services.",

              "Through regular home visits and counseling, many families set aside child marriage for their daughters, avoided their child labor, enrolled their children in studies, and received legal and psychological support for such things as family violence. According to our teaching, parents and people in the community are positively playing a role in protecting teenage girls from being trafficked."
            ]
          },

          help:
            "Help us to reach and protect the marginalized children by supporting Bijoy Ministries",
          button: "Donate for HBA"
        }
      ],
      story: [
        {
          title: "Asibul’s story",
          subtitle:
            " Asibul Hasan is a quiet, unassuming 14-year-old boy with a giant smile",
          breif:
            "Siddhesh Pappu is a quiet, unassuming 14-year-old boy with a giant smile that lights up his face every now and then. He lives in a slum community in Parel with his father Pappu Umap, a garbage collector, mother Nanda, a maid, and sister Harshita who studies in fourth grade. Siddhesh once had an older brother, but he passed away in a train accident several years ago.",
          para_1:
            "Back in late 2016, Siddhesh would spend his mornings at school and evenings at a public ground in Parel watching Vision Rescue’s football team play practice matches. A few of his friends were even part of the sports program and one day, Siddhesh mustered the courage to join as well. Within a year, he blossomed into a gifted and confident football player, even though he had very little encouragement from his family. His father struggles with alcoholism and often prevents him from playing football.",
          para_2:
            "One day, during routine practices on the field, the Head Coach of FC Mumbaikar, spotted Siddhesh play and called him for trials with the club. Siddhesh cleared the trials, passed the medical tests and was deemed fit to play with the 30-member squad. He was even chosen to attend a five-day soccer camp with the club, entirely free of cost. Siddhesh will continue with the club for all of 2018, and he couldn’t be more overjoyed at the amazing turns his life has taken in the last year! Because of your support, children from slum communities like Siddhesh have a fighting chance in the competitive world of sports!",
          image:
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/programs%2Fstory%2FHBA-Story.jpg?alt=media&token=349b6f71-c11e-46ae-b6dd-b82fad649b11",
          name: "Asibul",
          backImage:
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/programs%2Fstory%2FHBA-Story.jpg?alt=media&token=349b6f71-c11e-46ae-b6dd-b82fad649b11"
        }
      ]
    };
  }
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