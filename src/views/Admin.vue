<template>
  <v-app>
    <v-app-bar app color="teal darken-2">
      <Sidebar class="sidebar" />
      <v-toolbar id="core-toolbar" color="teal darken-2" dark flat>
        <div class="v-toolbar-title">
          <v-toolbar-title class="tertiary--text font-weight-light">Bijoy Ministries Admin Dashboard</v-toolbar-title>
        </div>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-flex align-center layout py-2>
            <v-btn dark color="teal darken-2" @click="logout()">
              <v-icon left>logout</v-icon>Logout
            </v-btn>
          </v-flex>
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>

    <v-footer inset app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { fb, db } from "./../firebase";
import Sidebar from "@/components/back/Sidebar.vue";
import Tables from "@/components/back/Tables.vue";
export default {
  components: {
    Sidebar,
    Tables
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
#core-toolbar a {
  text-decoration: none;
}
.sidebar {
  margin-top: 600px;
  margin-left: 50px;
}
</style>
