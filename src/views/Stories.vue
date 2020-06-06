<template>
  <v-app>
    <Navbar />
    <v-container class="pa-4 text-center">
      <v-img src="../assets/logo/1x/Asset 1.png" style="margin:auto; " width="200px"></v-img>
      <img
        src="../assets/logo/bijoymini.png"
        style="margin-left:10px;margin-top:30px;"
        width="200px"
      />
      <v-row class="fill-height pt-12" align="center" justify="center">
        <template v-for="(story, i) in stories">
          <v-col :key="i" cols="12" md="3" class="ma-4">
            <v-hover v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                :to="'/story/'+story.id"
              >
                <v-img :src="story.backImage" height="300px">
                  <v-card-title
                    class="display-1 white--text"
                    style="margin-top:80px;text-shadow:2px 2px 3px black"
                  >
                    <v-row class="flex-column">
                      <v-col cols="12" class="mt-12">
                        <p class="text-uppercase text-center">{{ story.name }}</p>
                      </v-col>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
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
    Footer
  },
  data: () => ({
    transparent: "rgba(255, 255, 255, 0)",
    stories: []
  }),
  firestore() {
    const stories = db.collection("story");
    stories.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.stories.push(doc.data());
      });
    });
  }
};
</script>





<style scoped>
.v-card:not(.on-hover) {
  opacity: 1;
}
.v-card:hover {
  opacity: 0.8;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>