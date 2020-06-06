<template>
  <div>
    <v-content style="padding: 0px ">
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    //
  })
};
</script>
