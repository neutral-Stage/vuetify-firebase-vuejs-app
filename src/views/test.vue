<template>
  <v-app>
    <paypal></paypal>
  </v-app>
</template>

<script>
import paypal from "../components/front/paypal";
import Carousel from "../components/front/Carousel";
import Sildeprofile from "../components/front/Sildeprofile";

export default {
  components: {
    Carousel,
    Sildeprofile,
    paypal
  },
  data: () => ({
    justify: ["start", "center", "end"]
  })
};
</script>
<style scoped>
.back {
  background-image: url("https://visionrescue.co.in/wp-content/themes/visionrescue/img/background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  background-position: center bottom;
}
.oneback {
  background-image: url("https://exposure.imgix.net/production/posts/167580/cover-photo/cover-1458797436.jpg?w=1700&h=800&q=50&sharp=10&fit=crop&fm=pjpg&auto=format&sharp=4&crop=&fit=crop");
  background-repeat: no-repeat;

  background-attachment: fixed;
  background-size: cover;

  background-position: center bottom;
}
.front {
  background-color: white;
}
router-link {
  text-decoration: none;
}
</style>
