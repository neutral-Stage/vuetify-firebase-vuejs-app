<template>
  <div>
    <v-main style="padding: 0px">
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
