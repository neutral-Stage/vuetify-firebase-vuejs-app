<template>
  <v-card elevation="12" width="256">
    <v-navigation-drawer
      elevation="12"
      width="256"
      floating
      color="teal darken-2"
      dark
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-avatar color="grey lighten-4" size="65" class="mr-3">
              <img src="../../assets/logo/bijoybd.png" /> </v-avatar
            >Bijoy Ministries
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list dense rounded>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout()">
          <v-list-item-icon>
            <v-icon>logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { fb, db } from "../../firebase";
export default {
  data() {
    return {
      items: [
        {
          title: "Director's Message",
          icon: "mdi-message-bookmark-outline",
          link: "/admin/director",
        },
        {
          title: "Services",
          icon: "mdi-folder-star",
          link: "/admin/services",
        },
        {
          title: "Home Page Slider",
          icon: "mdi-play-box-outline",
          link: "/admin/dashboard",
        },
        {
          title: "Coming Events",
          icon: "mdi-calendar-check",
          link: "/admin/events",
        },
        {
          title: "Latest Activities ",
          icon: "mdi-book-open",
          link: "/admin/activity",
        },
        {
          title: "Gallery  ",
          icon: "mdi-camera",
          link: "/admin/gallery",
        },
        {
          title: "Stories ",
          icon: "mdi-account-heart",
          link: "/admin/products",
        },
        { title: "Programs", icon: "mdi-alpha-p-circle", link: "/admin/crud" },
      ],
    };
  },
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.v-application a {
  color: #fff;
}
</style>
