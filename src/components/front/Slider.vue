<template>
  <div>
    <vueper-slides
      fade
      :pauseOnHover="false"
      :touchable="true"
      class="about"
      :slide-ratio="0.5"
      autoplay
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide">
        <div slot="slideContent"></div>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";

// Since v. 1.6.0, you need to include Vueper Slides CSS file for default styles.
import "vueperslides/dist/vueperslides.css";

export default {
  props: ["slides"],
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      breakpoints: {
        1200: {
          slideRatio: 1 / 5,
        },
        900: {
          slideRatio: 1 / 3,
        },
        600: {
          slideRatio: 1 / 2,
          arrows: false,
          bulletsOutside: true,
        },
        // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
        1100: {
          slideRatio: 1 / 4,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.vueperslide {
  background-position: top;
  background-size: cover !important;
}
.vueperslide__content-wrapper--outside-top {
  transition: 0.3s ease-in-out;
  opacity: 1;
  transform: scale(1);
}

.vueperslides--animated .vueperslide__content-wrapper--outside-top {
  transition: 0.15s ease-in-out;
  opacity: 0;
  transform: scale(0);
}
</style>