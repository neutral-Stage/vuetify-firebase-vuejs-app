<template>
  <div>
    <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="1064"
    >
      <v-slide-group
        class="pa-5"
        show-arrows
        cycle
      >
        <v-slide-item
          v-for="profile in profiles"
          :key="profile.index"
          v-slot:default="{ active, toggle }"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-1 my-12"
              max-width="300"
              :elevation="hover ? 12 : 2"
            >
              <v-img
                height="250"
                :src="profile.image"
              ></v-img>

              <v-card-title>{{ profile.Name }}</v-card-title>
              <v-list two-line>
                <v-list-item @click="dialogfunc(profile)">
                  <v-list-item-icon>
                    <v-icon
                      color="primary"
                      class="profont"
                    >mdi-alpha-a-box</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ profile.Age }} Years</v-list-item-title>
                    <v-list-item-subtitle>Age</v-list-item-subtitle>
                  </v-list-item-content>

                </v-list-item>
                <v-divider inset></v-divider>
                <v-list-item @click="dialogfunc(profile)">
                  <v-list-item-icon>
                    <v-icon
                      color="green"
                      class="profont"
                    >mdi-alpha-h-box</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ profile.Hobby }}</v-list-item-title>
                    <v-list-item-subtitle>Hooby</v-list-item-subtitle>
                  </v-list-item-content>

                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item @click="dialogfunc(profile)">
                  <v-list-item-icon>
                    <v-icon color="warning">mdi-bullseye-arrow</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ profile.Ambition }}</v-list-item-title>
                    <v-list-item-subtitle>Ambition</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item @click="dialogfunc(profile)">
                  <v-list-item-icon>
                    <v-icon :color=" profile.Favourite_Colour | lowercase">mdi-looks</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ profile.Favourite_Colour }}</v-list-item-title>
                    <v-list-item-subtitle>Favourite Colour</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item @click="dialogfunc(profile)">
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-soccer</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ profile.Favourite_Game }}</v-list-item-title>
                    <v-list-item-subtitle>Favourite Game</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider class="mx-4"></v-divider>

              <v-card-text align="center">
                <v-btn
                  color="warning"
                  dark
                >
                  <v-icon left>favorite</v-icon> Choose Me
                </v-btn>

              </v-card-text>

            </v-card>

          </v-hover>

        </v-slide-item>
      </v-slide-group>
    </v-sheet>

    <!-- Dialog Box start -->
    <v-dialog
      v-model="dialog"
      max-width="750"
    >

      <v-flex>

        <v-card
          class="mx-auto pencil "
          max-width="750"
          tile
        >

          <v-img contain>

            <v-row
              align="end"
              class="fill-height pa-5"
            >

              <v-col
                align-self="start"
                class="pa-0"
                cols="12"
              >

                <v-card
                  max-width="500"
                  raised
                >
                  <v-btn
                    fab
                    dark
                    absolute
                    top
                    right
                    color="indigo"
                    @click="dialog = false"
                  >
                    <v-icon dark>close</v-icon>
                  </v-btn>
                  <v-img :src="dialogData.image"></v-img>
                </v-card>
              </v-col>
              <v-col class="pa-0">
                <v-card
                  max-width="500"
                  raised
                >
                  <v-list two-line>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon
                          color="primary"
                          class="profont"
                        >mdi-alpha-a-box</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ dialogData.Age }} Years</v-list-item-title>
                        <v-list-item-subtitle>Age</v-list-item-subtitle>
                      </v-list-item-content>

                    </v-list-item>
                    <v-divider inset></v-divider>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon
                          color="green"
                          class="profont"
                        >mdi-alpha-h-box</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ dialogData.Hobby }}</v-list-item-title>
                        <v-list-item-subtitle>Hooby</v-list-item-subtitle>
                      </v-list-item-content>

                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="warning">mdi-bullseye-arrow</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ dialogData.Ambition }}</v-list-item-title>
                        <v-list-item-subtitle>Ambition</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon :color="dialogData.Favourite_Colour | lowercase">mdi-looks</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ dialogData.Favourite_Colour }}</v-list-item-title>
                        <v-list-item-subtitle>Favourite Colour</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="indigo">mdi-soccer</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ dialogData.Favourite_Game }}</v-list-item-title>
                        <v-list-item-subtitle>Favourite Game</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="teal darken-3">mdi-details</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <div>{{ dialogData.Background }}</div>
                        <v-list-item-subtitle>Background</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="orange darken-3">mdi-hand-heart</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <div> Please Pray for {{ dialogData.Pray }}</div>
                        <v-list-item-subtitle>Prayer Request</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-text align="center">
                    <v-btn
                      color="warning"
                      dark
                      class="mx-4"
                    >
                      <v-icon left>favorite</v-icon> Choose Me
                    </v-btn>
                    <v-btn
                      color="error"
                      dark
                      @click="dialog = false"
                    >
                      <v-icon left>close</v-icon> Close
                    </v-btn>
                  </v-card-text>

                </v-card>
              </v-col>

            </v-row>
          </v-img>
        </v-card>
      </v-flex>
    </v-dialog>
    <!-- Dialog Box start -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialogData: {},
      profiles: [
        {
          Name: "Lalchannuam Bawm",
          Age: "11",
          Hobby: "Gardening",
          Favourite_Colour: "Blue",
          Favourite_Game: "Football",
          Ambition: "Lawyer",
          Background:
            "Lalchannuam we call Lal for short has no father. His father died three years ago after that time there was no one to care for him and his mother was unable to care for herself and her son. He was so helpless so we took him into our orphanage.",
          Pray: "Lal",
          image:
            "https://firebasestorage.googleapis.com/v0/b/ccb-bd.appspot.com/o/profile%2F05.-Lalneithang-Bawm.jpg?alt=media&token=0a25c5c2-b4a8-43c5-a90a-54a54065bce3"
        },
        {
          Name: "Bishojit Munda",
          Age: "18",
          Hobby: "Flower Garden",
          Favourite_Colour: "Green",
          Favourite_Game: "Football",
          Ambition: "Army",
          Background:
            "Bishojit Munda came from very poor family. And he is from the minority indigenous group. They don’t have any land to live so this family are living on the side of the road. They are mostly day labours and living under extreme poverty.",
          Pray: "Bishojit",
          image:
            "https://firebasestorage.googleapis.com/v0/b/ccb-bd.appspot.com/o/profile%2F11.-Bishojit-Munda.jpg?alt=media&token=f9e28595-086e-41f3-acf7-dd5ab8cc3ca4"
        },
        {
          Name: "Cheobil Bawm",
          Age: "12",
          Hobby: "Playing",
          Favourite_Colour: "Yellow",
          Favourite_Game: "Football",
          Ambition: "Engineer",
          Background:
            "Cheobil has lost both his parents. He was a helpless boy and he was roaming the village with no one to care for him and there was no way for him to alive. So we took him into the orphanage when he was 6 years old.",
          Pray: "Cheobil",
          image:
            "https://firebasestorage.googleapis.com/v0/b/ccb-bd.appspot.com/o/profile%2F02.CheuBil-Bawm.jpg?alt=media&token=0217dcc0-fda4-4ce7-8d38-bf4b09264ab0"
        },
        {
          Name: "Vanlal Thong",
          Age: "12",
          Hobby: "Drawing",
          Favourite_Colour: "Green",
          Favourite_Game: "Football",
          Ambition: "Police Officer",
          Background:
            "Vanlal came from a very poor family. He is from an indigenous community located in the remote Hill Tract area. These indigenous people have no land rights and are recognised as stateless people, so they have no legal right. They are a persecuted people.",
          Pray: "Vanlal",
          image:
            "https://firebasestorage.googleapis.com/v0/b/ccb-bd.appspot.com/o/profile%2F10.-Vanlalmawi-Bawm.jpg?alt=media&token=7621bb21-8d8e-4b3b-88c5-31893ffc916f"
        }
      ]
    };
  },
  methods: {
    dialogfunc(profile) {
      this.dialogData = profile;
      this.dialog = true;
    }
  }
};
</script>

<style scoped>
.profont {
  font-size: 25px;
}
.pencil {
  background: url("https://firebasestorage.googleapis.com/v0/b/ccb-bd.appspot.com/o/profile%2Fkelli-tungay-2LJ4rqK2qfU-unsplash.jpg?alt=media&token=6b71c498-5bb0-496f-8df9-5b4bd57962ab");
  background-size: contain;
  background-repeat: repeat;
}
</style>