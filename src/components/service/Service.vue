<template>
  <v-card
    class="pricing-table-bg mx-auto d-flex justify-center align-center flex-column"
    color="#fff"
    dark
    :height="height"
    width="350px"
    :to="`services/${service.id}`"
  >
    <v-card-title :class="[hover ? 'white--text' : 'primary--text']">{{
      service.title
    }}</v-card-title>

    <v-card-text class="text-center">
      <!-- <div :class="[hover ? 'white--text' : 'primary--text', 'price']">
        <span>
          <sup>$</sup>
          {{ service.price }}
          <sup>99</sup>
        </span>
      </div> -->

      <div
        class="pricing-option subtitle-1"
        :class="[hover ? 'white--text' : 'primary--text']"
      >
        {{ service.firstCol_title }}
      </div>
      <div
        class="pricing-option caption"
        :class="[hover ? 'white--text' : 'primary--text']"
      >
        {{ service.firstCol_subtitle }}
      </div>
      <div
        class="pricing-option subtitle-1"
        :class="[hover ? 'white--text' : 'primary--text']"
      >
        {{ service.secondCol_title }}
      </div>
      <div
        class="pricing-option caption"
        :class="[hover ? 'white--text' : 'primary--text']"
      >
        {{ service.secondCol_subtitle }}
      </div>
      <div
        class="pricing-option subtitle-1"
        :class="[hover ? 'white--text' : 'primary--text']"
      >
        {{ service.thirdCol_title }}
      </div>
      <div
        class="pricing-option caption"
        :class="[hover ? 'white--text' : 'primary--text']"
      >
        {{ service.thirdCol_subtitle }}
      </div>
      <!-- <template v-for="(feature, i) in service.features">
        <div
          :key="i"
          class="pricing-option text-xl-h6 text-lg-subtitle-1"
          :class="[hover ? 'white--text' : 'primary--text']"
        >
          {{ feature }}
        </div>
      </template> -->
    </v-card-text>

    <v-card-actions>
      <v-btn
        large
        depressed
        :color="hover ? 'white' : 'primary'"
        class="px-5"
        height="46"
      >
        <div
          class="caption font-weight-bold"
          :class="[hover ? 'primary--text' : ' white--text']"
        >
          GET STARTED
        </div>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
    },
    service: {
      type: undefined,
    },
    hover: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
</style>