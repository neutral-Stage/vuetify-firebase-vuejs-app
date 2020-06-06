<template>
  <div
    id="aboutnav"
    class="display"
  >
    <v-app-bar
      app
      dense
      style="position: relative;background-color:rgb(246, 147, 32);"
    >

      <v-spacer></v-spacer>

      <v-toolbar-items
        xs12
        sm6
        class="hidden-xs-only"
      >
        <v-menu
          bottom
          origin="center center"
          transition="scale-transition"
          v-for="item in aboutnav"
          :key="item.title"
          offset-y
          style="z-index:1000;"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              dark
              :to="item.link"
              v-on="on"
            >{{ item.title }}</v-btn>
          </template>

        </v-menu>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Aboutnav",
  data() {
    return {
      drawer: false,
      aboutnav: [
        {
          icon: "info",
          title: "History",
          link: "/about#history"
        },
        {
          icon: "accessibility_new",
          title: "Vision",
          link: "/about#vision"
        },

        {
          icon: "collections",
          title: "Mission",
          link: "/about#mission"
        },
        {
          icon: "collections",
          title: "Director’s Message",
          link: "/about#director"
        },
        {
          icon: "perm_contact_calendar",
          title: "Financial Policy",
          link: "/about#financial"
        }
      ]
    };
  }
  // mounted: function() {
  //   window.onscroll = function() {

  //     aboutFunc();
  //   };

  //   var aboutnav = document.getElementById("aboutnav");
  //   if(aboutnav!== null){
  //     var aboutstick = aboutnav.offsetTop;
  //   }

  //   function aboutFunc() {
  //     if(aboutstick!== null){
  //     if (window.pageYOffset > aboutstick) {
  //       aboutnav.classList.add("aboutstick");
  //     } else {
  //       aboutnav.classList.remove("aboutstick");
  //     }
  //   }
  //   }
  // }
};
</script>

<style scoped>
.aboutstick {
  position: fixed;
  top: 80px;
  width: 100%;
  z-index: 1000;
}
.v-btn__content {
  margin-top: 20px !important;
}
</style>
