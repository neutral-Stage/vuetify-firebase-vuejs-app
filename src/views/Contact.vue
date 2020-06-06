<template>
  <v-app>
    <Navbar />
    <div
      class="back"
      id="contact"
    >
      <v-container>
        <router-link
          to="#contact"
          style="text-decoration: none;"
        >
          <p
            class="flex font-weight-bold white--text"
            style="text-align: center;font-size: 74px;line-height: 1em;margin: 200px  0 100px 0;letter-spacing: -2px; "
          >Contact</p>
        </router-link>

        <h2
          class="white--text text-center"
          style="font-size: 40px;margin-bottom:200px;line-height: 1em;"
        >Together We Are Making A Difference</h2>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            offset-sm="3"
            style="background-color:#fff;border-radius: 10px;"
          >
            <form style="padding: 10px;">
              <v-text-field
                v-model="firstname"
                :error-messages="firstnameErrors"
                label="First Name"
                :counter="50"
                required
                @input="$v.firstname.$touch()"
                @blur="$v.firstname.$touch()"
                color="#1B9DD8"
              ></v-text-field>
              <v-text-field
                v-model="lastname"
                :error-messages="lastnameErrors"
                label="Last Name"
                :counter="50"
                required
                @input="$v.lastname.$touch()"
                @blur="$v.lastname.$touch()"
                color="#1B9DD8"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                color="#1B9DD8"
              ></v-text-field>
              <v-text-field
                v-model="subject"
                :error-messages="subjectErrors"
                label="Subject"
                :counter="200"
                required
                @input="$v.subject.$touch()"
                @blur="$v.subject.$touch()"
                color="#1B9DD8"
              ></v-text-field>

              <v-textarea
                name="input-7-1"
                label="Message"
                hint="Write Soming Here..."
              ></v-textarea>

              <v-col
                cols="12"
                sm="6"
              >
                <v-btn
                  dark
                  class="mr-4"
                  color="#1B9DD8"
                  @click="submit"
                >submit</v-btn>
                <v-btn
                  dark
                  @click="clear"
                  color="#F79B31"
                >clear</v-btn>
              </v-col>
            </form>
          </v-col>
        </v-row>
        <v-row
          class="justify-center mt-12"
          style="background-color:white"
        >
          <v-col
            cols="12"
            class="mt-10 "
          >
            <p class="look text-center" style="font-size:60px;">Looking for a way to help us?</p>
            <v-row class="justify-center">
              <v-col
                cols="4"
                 xs="12"
                class="px-12 small"
              >
                <v-img
                  class="mx-auto"
                  width="90"
                  height="90"
                  src="https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/contact%2FAsset%201.png?alt=media&token=8955e68e-b5fd-4b52-851f-e06923cb8e32"
                ></v-img>
                <p class="title text-center">Pray</p>
                <p class="subtitle-1 text-center mx-12">Please subscribe for the e-news now, we will provide the update to pray for us.</p>

              </v-col>
              <v-col
                cols="4"
                 xs="12"
                class="px-12 small"
              >
                <v-img
                  class="mx-auto"
                  width="90"
                  height="90"
                  src="https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/contact%2FAsset%202.png?alt=media&token=2045715a-1c0d-4206-b6b1-9d21da848110"
                ></v-img>
                <p class="title text-center">Give</p>
                <p class="subtitle-1 text-center mx-12">We take each of your donations seriously. Thanks for being with us on this journey.</p>

              </v-col>
              <v-col
                cols="4"
                xs="12"
                class="px-12 small"
              >
                <v-img
                  class="mx-auto"
                  width="90"
                  height="90"
                  src="https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/contact%2FAsset%203.png?alt=media&token=75440064-d641-442e-8e12-68c7fbcbe828"
                ></v-img>
                <p class="title text-center">Get Involved</p>
                <p class="subtitle-1 text-center mx-12">If you have a gift in fundraising or putting events together, Bijoy would be honored to have you join with us and fulfill
                  the call of helping kids in Bangladesh. We need volunteers with strong ideas and vision who are ready to make their
                  ideas a reality.</p>

              </v-col>

            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "../components/front/Navbar";
import Footer from "../components/front/Footer";
import { VueEditor } from "vue2-editor";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    firstname: { required, maxLength: maxLength(50) },
    lastname: { required, maxLength: maxLength(50) },
    subject: { required, maxLength: maxLength(200) },
    email: { required, email }
  },
  components: {
    Navbar,
    Footer,
    VueEditor
  },
  data: () => ({
    firstname: "",
    lastname: "",
    subject: "",
    email: ""
  }),

  computed: {
    firstnameErrors() {
      const errors = [];
      if (!this.$v.firstname.$dirty) return errors;
      !this.$v.firstname.maxLength &&
        errors.push("Fist Name must be at most 50 characters long");
      !this.$v.firstname.required && errors.push("Fist Name is required.");
      return errors;
    },
    lastnameErrors() {
      const errors = [];
      if (!this.$v.lastname.$dirty) return errors;
      !this.$v.lastname.maxLength &&
        errors.push("Last Name must be at most 50 characters long");
      !this.$v.lastname.required && errors.push("Last Name is required.");
      return errors;
    },
    subjectErrors() {
      const errors = [];
      if (!this.$v.subject.$dirty) return errors;
      !this.$v.subject.maxLength &&
        errors.push("Subject must be at most 50 characters long");
      !this.$v.subject.required && errors.push("Subject is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.firstname = "";
      this.lastname = "";
      this.subject = "";
      this.email = "";
    }
  }
};
</script>

<style scoped>
.back:after {
  content: "";
  display: block;

  padding: 100px 0;
  width: 100%;

  top: 0;
  left: 0;
  background-color: rgba(black, 0.6);
}
.back {
  background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
    url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/home%2F06-%23-Get-connected-back.jpg?alt=media&token=f869f303-cca4-46f9-908b-0cb8f0cbfe7e");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  background-position: center top;
}
</style>
