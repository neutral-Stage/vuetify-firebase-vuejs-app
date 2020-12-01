<template>
  <div id="header">
    <v-navigation-drawer v-model="drawer" app color="#1B9DD8" dark floating>
      <v-list flat rounded>
        <v-list-item
          v-for="item in mobileItem"
          :key="item.title"
          color="whitesmoke"
          :to="item.link"
          active-class="darkness"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>

            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="subItem.link"
            >
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      style="position: relative; background-color: #1B9DD8; height: 80px"
      fixed
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase" data-app>
        <router-link to="/">
          <v-img
            src="../../assets/logo/bijoybd.png"
            style="margin-top: 20px"
          ></v-img>
        </router-link>
      </v-toolbar-title>
      <div>
        <img
          src="../../assets/logo/Logosmall.png"
          style="margin-left: 10px; margin-top: 30px"
        />
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items xs12 sm6 class="hidden-xs-only" style="margin-top: 20px">
        <v-menu
          bottom
          origin="center center"
          transition="scale-transition"
          open-on-hover
          v-for="item in menuItems"
          :key="item.title"
          offset-y
          style="z-index: 999"
        >
          <template v-slot:activator="{ on }">
            <v-btn text dark :to="item.link" v-on="on">{{ item.title }}</v-btn>
          </template>

          <v-row>
            <v-col
              v-if="item.title == 'Programs'"
              cols="6"
              style="background-color: #1B9DD8"
            >
              <v-list dark color="#1B9DD8">
                <v-list-item
                  v-for="(item, i) in item.items"
                  :key="i"
                  :to="item.link"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col
              v-if="item.title == 'Programs'"
              cols="6"
              style="background-color: #1B9DD8"
            >
              <v-list dark color="#1B9DD8">
                <v-list-item
                  v-for="(item, i) in item.items2"
                  :key="i"
                  :to="item.link"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-col>
            <!-- <v-col v-if="item.title=='Programs'" cols="8" style="background-color:#1B9DD8">
              <div style="padding-right:15px;padding-left:15px;">
                <iframe
                  width="100%"
                  height="250"
                  :src="item.video"
                  frameborder="0"
                  style="margin: auto;display: block;"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </v-col> -->
            <v-col
              v-if="item.title == 'About'"
              cols="12"
              style="background-color: #1B9DD8"
            >
              <v-list dark color="#1B9DD8">
                <v-list-item
                  v-for="(item, i) in item.items"
                  :key="i"
                  :to="item.link"
                >
                  {{ item.title }}
                </v-list-item>
              </v-list>
            </v-col>

            <!-- <v-col
              v-if="item.title == 'About'"
              cols="7"
              style="background-color:#1B9DD8"
            >
              <div style="padding-right:15px;">
                <iframe
                  width="100%"
                  height="250"
                  :src="item.video"
                  frameborder="0"
                  style="margin: auto;display: block;"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </v-col> -->
          </v-row>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      mobileItem: [
        {
          icon: "info",
          title: "About",
          link: "/about",
          active: true,
        },
        {
          icon: "accessibility_new",
          title: "Programs",
          link: "/#program",
          active: true,
          items: [
            { title: "Happy Birds Assembly", link: "/hba" },
            { title: "Back to school", link: "/dip" },
            { title: "Empowering children", link: "/Empower_children" },
            { title: "Equipping Families", link: "/Equipping_Families" },
            { title: "Victory Party", link: "/Victory_Party" },
            { title: "Health Care", link: "/Health_Care" },
            { title: "Equipping Church", link: "/Equipping_Church" },
            { title: "Drop-In-Center", link: "/Drop-In-Center" },
            { title: "Emergency COVID Relief", link: "/Emergency_help" },
          ],
        },

        {
          icon: "collections",
          title: "Gallery",
          link: "/gallery",
        },
        {
          icon: "chrome_reader_mode",
          title: "Stories",
          link: "/Stories",
        },
        {
          icon: "perm_contact_calendar",
          title: "Contact",
          link: "/contact",
        },
        { icon: "people", title: "Signin", link: "/signin" },
      ],
      menuItems: [
        {
          icon: "info",
          title: "About",
          link: "/about",
          active: true,
          items: [
            { title: "History", link: "/about#history" },
            { title: "Vision", link: "/about#vision" },
            { title: "Mission", link: "/about#mission" },
            { title: "Director’s Message", link: "/about#director" },
            { title: "Financial Policy", link: "/about#financial" },
          ],
          video: "https://www.youtube.com/embed/T-g24RKTFyA",
        },
        {
          icon: "accessibility_new",
          title: "Programs",
          link: "/#program",
          active: true,
          items: [
            { title: "Happy Birds Assembly", link: "/hba" },
            { title: "Back to school", link: "/dip" },
            { title: "Empowering children", link: "/Empower_children" },
            { title: "Equipping Families", link: "/Equipping_Families" },
            { title: "Emergency COVID Relief", link: "/Emergency_help" },
          ],
          items2: [
            { title: "Christmas Outreach", link: "/Christmas_outreach" },
            { title: "Health Care", link: "/Health_Care" },
            {
              title: "Children's Ministries Training",
              link: "/Equipping_Church",
            },
            { title: "Drop-In-Center", link: "/Drop-In-Center" },
          ],
          video: "https://www.youtube.com/embed/dbKP0F414Zs",
        },

        {
          icon: "collections",
          title: "Gallery",
          link: "/gallery",
        },
        {
          icon: "chrome_reader_mode",
          title: "Stories",
          link: "/Stories",
        },
        {
          icon: "perm_contact_calendar",
          title: "Contact",
          link: "/contact",
        },
        // { icon: "people", title: "Signin", link: "/signin" }
      ],
    };
  },
  mounted: function () {
    window.onscroll = function () {
      myFunction();
      aboutFunc();
    };

    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    var aboutnav = document.getElementById("aboutnav");
    if (aboutnav !== null) {
      var aboutstick = aboutnav.offsetTop;
    } else {
      var aboutstick = null;
    }
    function aboutFunc() {
      if (aboutstick !== null) {
        if (window.pageYOffset > aboutstick) {
          aboutnav.classList.add("aboutstick");
        } else {
          aboutnav.classList.remove("aboutstick");
        }
      }
    }
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  },
};
</script>

<style scoped>
.v-list-item--active {
  color: whitesmoke;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.v-btn__content {
  margin-top: 20px !important;
}
</style>
