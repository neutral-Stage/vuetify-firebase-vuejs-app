<template>
  <div>
    <vueper-slides
      autoplay
      fade
      :visible-slides="3"
      slide-multiple
      :slide-ratio="1 / 4"
      :arrows-outside="false"
      :bullets="false"
      :duration="5000"
    >
      <vueper-slide
        v-for="s in events"
        :key="s"
        :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
        :title="s.title"
        :image="s.image"
        :content="s.date"
      >
        <template v-slot:content>
          <div class="vueperslide__content-wrapper" style="flex-direction: row">
            <div>{{s.date}}</div>
            <span>{{s.title}}</span>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { fb, db } from "../../firebase";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    events: []
  }),
  firestore() {
    // return {
    //   programs: db.collection("programs")
    // };
    const gamesCollection = db.collection("events");

    gamesCollection.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.events.push(doc.data());
      });
    });
  }
};
</script>
<style lang="scss" scoped>
// .vueperslide {
//   background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

//   &__title {
//     font-size: 7em;
//     opacity: 0.6;
//   }
// }

// documentation link.
p {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10;
}

html {
  font: 12px Tahoma, Geneva, sans-serif;
}
* {
  margin: 0;
  padding: 0;
  color: #fff;
}
.actstyle {
  width: 100%;
  padding: 5px 11px;
  position: absolute;
  bottom: -32px;
  background: rgba(255, 255, 255, 0.7);
  z-index: 0;
}
</style>