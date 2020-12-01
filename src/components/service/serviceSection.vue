<template>
  <div class="full-height-center">
    <v-container fluid pa-0 class="mb-6">
      <v-row class="justify-center align-center" no-gutters data-aos="fade-in">
        <template v-for="(service, index) in services">
          <v-hover v-slot:default="{ hover }" :key="index">
            <v-col
              cols="auto"
              sm="7"
              lg="auto"
              data-aos="flip-right"
              data-aos-duration="1500"
            >
              <Service
                :height="index == 1 ? '500px' : '450px'"
                :service="service"
                class="price-table"
                :class="[{ 'on-hover': hover }, { 'front-table': index == 1 }]"
                :hover="hover"
              />
            </v-col>
          </v-hover>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Service from "@/components/service/Service";

export default {
  name: "service-section",
  components: { Service },
  props: ["services"],
};
</script>

<style lang="scss" scoped>
.price-table:not(.on-hover) {
  opacity: 0.9;
}
.on-hover {
  z-index: 10;
  background-image: linear-gradient(90deg, #03a9f4 0%, #1999d4 100%);
  border-color: #6557e8;
}
.on-hover:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-image: url("https://livewp.site/wp/md/ewebot/wp-content/themes/ewebot/dist/img/pricebox_bg.c3c0bcec.png");
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}
.price-table {
  transition: all 0.4s ease-in-out;
}
.pricing-table-bg {
  background-size: cover;
  box-shadow: 0px 0px 100px 5px rgba(0, 0, 0, 0.1) !important;
  border-radius: 5px;
  padding: 46px 50px 52px;
}
.front-table {
  z-index: 9;
}
.price {
  font-size: 1.5rem;

  font-weight: 800;
  margin: 30px 0;
}
.pricing-option {
  font-size: 1rem;
  margin-bottom: 10px;
}
</style>