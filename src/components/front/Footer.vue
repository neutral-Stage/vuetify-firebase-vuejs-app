<template>
  <v-footer padless dark>
    <v-row justify="center" no-gutters class="backimage">
      <v-col cols="2" class="display">
        <div class="headline text-uppercase mt-5 ml-5">
          <router-link to="/">
            <v-img
              src="../../assets/logo/bijoylogo.png"
              width="150"
              height="auto"
            ></v-img>
          </router-link>
        </div>
      </v-col>

      <v-col cols="12" md="10">
        <v-row justify="center" no-gutters>
          <v-col cols="4" md="2" v-for="item in menuItems" :key="item.title">
            <div v-if="item.items">
              <div v-for="(item, i) in item.items" :key="i" class="mt-6">
                <router-link
                  class="body-2"
                  style="
                    line-height: 15px;
                    font-family: 'Josefin Sans', sans-serif;
                    cursor: pointer;
                    text-align: center;
                  "
                  :to="item.link"
                  tag="p"
                  >{{ item.title }}</router-link
                >
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mt-5 text-center">
            <!-- <p class="body-2">Sign Up for E-news</p> -->

            <!-- <v-row>
                <v-col cols="12">
                  <v-row>
                    <v-col cols="4" class="half">
                      <v-text-field
                        v-model="name"
                        label="Name"
                        color="white"
                        filled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4" class="half">
                      <v-text-field
                        v-model="email"
                        label="Your E-mail"
                        color="white"
                        filled
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4" class="small">
                      <v-btn color="#F69320" dark>E-mail Subscribe</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row> -->

            <v-row justify="center">
              <v-col cols="6" md="8" class="text-center">
                <div class="text-right mt-1">Stay Connected :</div>
              </v-col>
              <v-col cols="6" md="4">
                <div class="group text-left">
                  <v-btn color="black" fab x-small dark>
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn color="black" fab x-small dark class="ml-2">
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn color="black" fab x-small dark class="ml-2">
                    <v-icon>mdi-youtube</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        class="py-4 text-center white--text overline display"
        cols="12"
        dark
      >
        © {{ new Date().getFullYear() }}
        <strong>BIJOY INTER-CHURCH MINISTRIES</strong>
        . ALL RIGHTS RESERVED.
        <div class="overline">
          BICMT IS A FAITH-BASED INDIGENOUS MINISTRY OF CHRISTIANS DEDICATED TO
          CHILDREN & TEENS.
        </div>
        <div class="overline">
          REGISTERED UNDER TRUST ACT 1882 S.L. NO. 3937, DEED NO. IV-22,
          05,05,2019
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    name: "",
    email: "",
    menuItems: [
      {
        icon: "info",
        title: "About",
        link: "/#about",
        items: [
          { title: "History", link: "/about#history" },
          { title: "Vision", link: "/about#vision" },
          { title: "Mission", link: "/about#mission" },
          { title: "Director’s Message", link: "/about#director" },
          { title: "Financial Policy", link: "/about#financial" },
        ],
      },
      {
        icon: "accessibility_new",
        title: "Programs",
        link: "/#program",
        items: [
          { title: "Happy Birds Assembly", link: "/hba" },
          { title: "Back to school", link: "/dip" },
          { title: "Empowering children", link: "/Empower_children" },
          { title: "Equipping Families", link: "/Equipping_Families" },
          { title: "Christmas Outreach", link: "/Christmas_outreach" },
        ],
      },

      {
        icon: "perm_contact_calendar",
        title: "Contact",
        link: "/contact",
        items: [
          { title: "Health Care", link: "/Health_Care" },
          {
            title: "Children's Ministries Training",
            link: "/Equipping_Church",
          },
          { title: "Drop-In-Center", link: "/Drop-In-Center" },
          { title: "Emergency COVID Relief", link: "/Emergency_help" },
          { title: "Contact", link: "/Contact" },
          { title: "Donate", link: "/Donate" },
        ],
      },
    ],
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>
.backimage {
  background-color: #1b9dd8;
  // background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
  //   url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2Ffooter.jpg?alt=media&token=2c20541e-aae4-4369-895f-20ddc882107e");
  background-repeat: no-repeat;

  background-size: cover;
  background-position: center center;
}
</style>
