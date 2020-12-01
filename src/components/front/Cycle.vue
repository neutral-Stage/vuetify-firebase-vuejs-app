<template>
  <div>
    <vueper-slides
      fade
      :pauseOnHover="false"
      :touchable="true"
      fixed-height="700px"
      class="about"
      autoplay
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";

// Since v. 1.6.0, you need to include Vueper Slides CSS file for default styles.
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          image:
            "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fabout-us-slider-(1).jpg?alt=media&token=b59283f4-5662-412f-afea-0b1b7f21b356",
        },
        // {
        //   image:
        //     "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fabout-us-slider-(2).jpg?alt=media&token=3a2767e0-3d43-4af4-b1b5-d008a2faf7fd"
        // },
        // {
        //   image:
        //     "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fabout-us-slider-(3).jpg?alt=media&token=c29cd961-eee8-4e5d-a7a3-74bb0df00e18"
        // },
        // {
        //   image:
        //     "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fabout-us-slider-(4).jpg?alt=media&token=ac84aab9-d2bc-4e87-8909-e018c4fb1e1c"
        // },
        // {
        //   image:
        //     "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fabout-us-slider-(5).jpg?alt=media&token=15357340-461b-4399-b57c-2ad7760f1863"
        // },
        // {
        //   image:
        //     "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fabout-us-slider-(6).jpg?alt=media&token=8b47a793-d5ab-42cb-97cc-f3de83ae01df"
        // },
        // {
        //   image:
        //     "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fabout-us-slider-(7).jpg?alt=media&token=8eff0f41-3153-4e1d-8ed2-5dc7e898f26c"
        // },
        // {
        //   image:
        //     "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fabout-us-slider-(8).jpg?alt=media&token=8a5f539e-e353-415c-ab1d-d740b73cf5a2"
        // },
        // {
        //   image:
        //     "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fabout-us-slider-(9).jpg?alt=media&token=0b434a5c-c47f-4dc0-a98a-a2c721e45f04"
        // },
        // {
        //   image:
        //     "https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/about%2Fabout-us-slider-(10).jpg?alt=media&token=c808f77f-1354-4258-a951-c50e0fb7f363"
        // }
      ],
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