<template>
  <v-app>
    <Navbar />

    <div
      class="donate"
      id="donate"
    >
      <v-container>
        <router-link
          to="#contact"
          style="text-decoration: none;"
        >
          <p
            class="flex font-weight-bold white--text"
            style="text-align: center;font-size: 74px;line-height: 1em;margin: 200px  0 100px 0;letter-spacing: -2px; "
          >Donate</p>
        </router-link>
        <h2
          class="white--text text-center px-12"
          style="font-size: 40px;margin-bottom:100px;line-height: 1em;"
        >We are extremely grateful for your partnership and commitment to the children and families we serve.</h2>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            offset-sm="3"
            style="background-color:#fff;border-radius: 10px;"
          >
            <v-card
              flat
              class="py-2"
            >
              <v-card-text>
                <v-row>
                  <v-col>
                    <p class="title">Your support helps us fulfill our mission to in Bangladesh and neighboring countries. With your support, many children will know the love of the Lord and many families will be cared for!</p>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                  <v-col cols="12">
                    <p class="headline font-weight-bold">Make a one time or monthly donation NOW!</p>
                  </v-col>
                </v-row>
                <v-row
                  align="start"
                  justify="start"
                >
                  <v-col cols="12">
                    <p class="text-left headline">Donation Details</p>
                    <v-divider></v-divider>
                  </v-col>
                  <v-btn-toggle>
                    <v-btn
                      dark
                      color="primary"
                    >
                      <v-icon color="white">mdi-currency-usd</v-icon>100
                    </v-btn>
                    <v-btn
                      dark
                      color="primary"
                    >
                      <v-icon color="white">mdi-currency-usd</v-icon>200
                    </v-btn>
                    <v-btn
                      dark
                      color="primary"
                    >
                      <v-icon color="white">mdi-currency-usd</v-icon>500
                    </v-btn>
                    <v-btn
                      dark
                      color="primary"
                      v-model="v0"
                      rounded
                    >
                      <v-icon color="white">mdi-currency-usd</v-icon>Other
                    </v-btn>
                  </v-btn-toggle>
                  <v-banner
                    v-model="v0"
                    single-line
                    transition="slide-y-transition"
                  >
                    <v-text-field
                      v-model="other"
                      label="Type Any Amount"
                      color="#1B9DD8"
                    ></v-text-field>
                    <template v-slot:actions="{ dismiss }">
                      <v-btn
                        text
                        color="primary"
                        @click="dismiss"
                      >Dismiss</v-btn>
                    </template>
                  </v-banner>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <p class="text-left headline mt-10">Donation Designation</p>
                    <v-divider></v-divider>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                  >
                    <v-select
                      :items="items"
                      label="Designation"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-col cols="12">
              <p class="text-left headline grey--text">Billing Address</p>
              <v-divider></v-divider>
            </v-col>
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
                v-model="phone"
                :error-messages="phoneErrors"
                label="Phone"
                :counter="200"
                required
                @input="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
                color="#1B9DD8"
              ></v-text-field>

              <v-autocomplete
                label="Country"
                no-data-text="There is no Country Name like this"
                :items="countries"
                v-model="country"
              ></v-autocomplete>
              <v-textarea
                name="input-7-1"
                label="Address"
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

            <v-card class="py-12">
              <v-card-text>
                <v-row
                  align="start"
                  justify="start"
                >
                  <v-col cols="12">
                    <p class="text-left headline grey--text">Payment Details</p>
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="12">
                    <v-tabs
                      background-color="blue lighten-1"
                      class="elevation-2"
                      dark
                    >
                      <v-tab href="#tab-1">Credit card</v-tab>
                      <v-tab href="#tab-2">Direct debit</v-tab>
                      <v-tab href="#tab-3">Bkash Payment</v-tab>
                      <v-tab-item value="tab-1">
                        <v-card
                          flat
                          tile
                        >
                          <v-row>

                            <v-col
                              cols="12"
                              class="px-6"
                            >

                              <v-form>

                                <v-textarea
                                  name="input-7-1"
                                  label="Description"
                                  hint="Write Soming Here..."
                                  v-model="description"
                                ></v-textarea>
                                <v-text-field
                                  label="Amount"
                                  v-model="amount"
                                ></v-text-field>
                              </v-form>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="12"
                              class="px-6"
                            >

                              <div ref="paypal"></div>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item value="tab-2">
                        <v-card
                          flat
                          tile
                        >
                          <v-form>
                            <v-row>
                              <v-col
                                cols="10"
                                class="px-6"
                              >
                                <v-text-field label="Bank name"></v-text-field>
                                <v-text-field label="Routing number"></v-text-field>
                                <v-select
                                  :items="account_type"
                                  label="Account Type"
                                ></v-select>
                                <v-text-field label="Account number"></v-text-field>
                                <v-text-field label="Account holder"></v-text-field>
                                <v-textarea
                                  name="input-7-1"
                                  label="Special Instructions"
                                  hint="Write Soming Here..."
                                ></v-textarea>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="12"
                                class="px-6"
                              >
                                <v-btn
                                  dark
                                  class="mr-4"
                                  color="#1B9DD8"
                                  @click="submit"
                                >Donate</v-btn>
                              </v-col>
                            </v-row>
                          </v-form>
                        </v-card>
                      </v-tab-item>
                      <v-tab-item value="tab-3">
                        <v-card
                          flat
                          tile
                        >
                          <v-form>
                            <v-row>
                              <v-col
                                cols="12"
                                class="px-6"
                              >
                                <p class="text-left headline grey--text">Step by Step Process</p>
                                <v-divider></v-divider>
                              </v-col>
                              <v-list-item class="px-6">
                                <v-list-item-content>
                                  <v-list-item-title>• Go to bKash Menu by dialing *247#</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="px-6">
                                <v-list-item-content>
                                  <v-list-item-title>• Choose 'Payment' option by pressing '3'</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="px-6">
                                <v-list-item-content>
                                  <v-list-item-title>• Enter our Merchant wallet number : 01914871775</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="px-6">
                                <v-list-item-content>
                                  <v-list-item-title>• Enter BDT. amount you have to pay : xxxx</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="px-6">
                                <v-list-item-content>
                                  <v-list-item-title>• Enter a reference against your payment : xxxx</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="px-6">
                                <v-list-item-content>
                                  <v-list-item-title>• Enter the counter number : 1</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="px-6">
                                <v-list-item-content>
                                  <v-list-item-title>• Now enter your PIN to confirm: xxxx</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="px-6">
                                <v-list-item-content>
                                  <v-list-item-title>• Done! You will get a confirmation SMS</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item class="px-6">
                                <v-list-item-content>
                                  <v-list-item-title>• Please Type Your Transaction ID and Amount of money below</v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-col
                                cols="10"
                                class="px-6"
                              >
                                <v-text-field label="Transaction ID"></v-text-field>
                                <v-text-field label="Amount"></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="12"
                                class="px-6"
                              >
                                <v-btn
                                  dark
                                  class="mr-4"
                                  color="#1B9DD8"
                                  @click="submit"
                                >Submit</v-btn>
                              </v-col>
                            </v-row>
                          </v-form>
                        </v-card>
                      </v-tab-item>
                    </v-tabs>
                  </v-col>
                </v-row>
                <v-divider></v-divider>

              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-row class="mt-12 mb-12">
        <v-col
          cols="12"
          style="background-color:#2DA5DB;color:white;padding:0px;"
        >
          <div
            style="width:50%;"
            class="mx-auto my-12"
          >
            <p class="title">Donations of any amount are greatly appreciated. By joining our monthly giving program, you are making an investment in the lives of destitute children and their families.</p>
            <p class="title">Online donations are fast and secure. Make a donation online by using the link below or call our</p>
            <p class="title">USA Office +1*********</p>
            <p class="title">Dhaka office: +88 01714339831</p>
          </div>
        </v-col>
        <v-col
          cols="12"
          style="padding:0px;"
        >

          <v-card>

            <div
              style="width:50%"
              class="mx-auto"
            >
              <blockquote class="blockquote text-center">
                <v-icon>mdi-format-quote-open</v-icon>I have been involved with this ministry since it's inception. Not once have I had to question the integrity of the ministry or the heart of anyone who works there. Their mission is really burning and it shows.
                <v-icon>mdi-format-quote-close</v-icon>
              </blockquote>
              <p class="font-italic pl-6 pb-12 text-right">-Richard Phillip</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "../components/front/Navbar";
import Footer from "../components/front/Footer";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    firstname: { required, maxLength: maxLength(50) },
    lastname: { required, maxLength: maxLength(50) },
    phone: { required, maxLength: maxLength(200) },
    email: { required, email }
  },
  components: {
    Navbar,
    Footer
  },
  data: function() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      v0: true,
      other: "",
      items: ["Where Needed Most", "Child", "Program", "Other"],
      account_type: ["Checking", "Savings", "Other"],
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      country: "",
      amount: "",
      description: "",
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua & Deps",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia",
        "Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Central African Rep",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Congo (Democratic Rep)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland (Republic)",
        "Israel",
        "Italy",
        " Ivory Coast",
        " Jamaica",
        " Japan",
        " Jordan",
        " Kazakhstan",
        " Kenya",
        " Kiribati",
        " Korea North",
        " Korea South",
        " Kosovo",
        " Kuwait",
        " Kyrgyzstan",
        " Laos",
        " Latvia",
        " Lebanon",
        " Lesotho",
        " Liberia",
        " Libya",
        " Liechtenstein",
        " Lithuania",
        " Luxembourg",
        " Macedonia",
        " Madagascar",
        " Malawi",
        " Malaysia",
        " Maldives",
        " Mali",
        " Malta",
        " Marshall Islands",
        " Mauritania",
        " Mauritius",
        " Mexico",
        " Micronesia",
        " Moldova",
        " Monaco",
        " Mongolia",
        " Montenegro",
        " Morocco",
        " Mozambique",
        " Myanmar",
        " {Burma}",
        " Namibia",
        " Nauru",
        " Nepal",
        " Netherlands",
        " New Zealand",
        " Nicaragua",
        " Niger",
        " Nigeria",
        " Norway",
        "Oman",
        "Pakistan",
        " Palau",
        " Panama",
        " Papua New Guinea",
        " Paraguay",
        " Peru",
        " Philippines",
        " Poland",
        " Portugal",
        " Qatar",
        " Romania",
        " Russian Federation",
        " Rwanda",
        " St Kitts & Nevis",
        " St Lucia",
        " Saint Vincent & the Grenadines",
        " Samoa",
        " San Marino",
        " Sao Tome & Principe",
        "Saudi Arabia",
        " Senegal",
        " Serbia",
        " Seychelles",
        " Sierra Leone",
        " Singapore",
        " Slovakia",
        " Slovenia",
        " Solomon Islands",
        " Somalia",
        " South Africa",
        " South Sudan",
        " Spain",
        " Sri Lanka",
        " Sudan",
        " Suriname",
        " Swaziland",
        " Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tonga",
        "Trinidad & Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        " United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ]
    };
  },
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ARrVMivin12_-my_chA25Ix6pNLbzbIjD5ItBe-o-7uLBr37sfEERSVfKrwHC6NoF1JiuEEIx5kynNBy";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
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
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.maxLength &&
        errors.push("phone must be at most 50 characters long");
      !this.$v.phone.required && errors.push("phone is required.");
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
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.description,
                  amount: {
                    currency_code: "USD",
                    value: this.amount
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();

            this.data;

            console.log(order);
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    },
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.firstname = "";
      this.lastname = "";
      this.phone = "";
      this.email = "";
      this.country = "";
    }
  }
};
</script>

<style lang="scss">
.donate {
  background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5)),
    url("https://firebasestorage.googleapis.com/v0/b/bijoy-bd.appspot.com/o/contact%2FDonation--back.jpg?alt=media&token=2a36949b-dcce-433d-af78-b8eb1293d14c");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  background-position: center top;
}
</style>