<template>
  <div class="delivery-container">
    <div class="delivery-contents">
      <div class="header">
        <div class="current-step">
          <h4 class="checkout-step">shopping cart</h4>
          <hr />
          <h4>shipping info</h4>
          <hr />
        </div>
        <div class="next-step">
          <h4>payment</h4>
          <hr />
          <h4>confirmation</h4>
          <hr />
          <h4>done</h4>
        </div>
      </div>
      <form @submit.prevent="delivery">
        <div class="info">
          <div class="address-content">
            <div class="address-header">
              <h2>DELIVERY ADDRESS</h2>
            </div>
            <div class="address-info">
              <div class="name">
                <label for="name">Name</label>
                <input type="text" v-model="deliveryInfo.name" />
              </div>
              <div class="address-post">
                <div class="address">
                  <label for="address">Address</label>
                  <input type="text" v-model="deliveryInfo.address" />
                </div>
                <div class="post">
                  <label for="zip">Post</label>
                  <input type="text" name="zip" v-model="deliveryInfo.post" />
                </div>
              </div>
              <div class="city-phone">
                <div class="city">
                  <label for="city">City</label>
                  <input type="text" v-model="deliveryInfo.city" />
                </div>
                <div class="phone">
                  <label for="phone">Phone</label>
                  <input type="text" v-model="deliveryInfo.phone" />
                </div>
              </div>
              <div class="country">
                <label for="phone">Country</label>
                <input type="text" v-model="deliveryInfo.country" />
              </div>
            </div>
          </div>
          <div class="method-info">
            <div class="method-content">
              <div class="method-header">
                <h2>DELIVERY METHOD</h2>
              </div>
              <div class="choice-method">
                <div class="postnord">
                  <input type="checkbox" name="postnord" />
                  <div class="cost">
                    <h3>POSTNORD</h3>
                    <div class="icons">
                      <img
                        src="../assets/brands/postnord.svg"
                        alt="brand-icon"
                      />
                    </div>
                    <h3>+79 SEK</h3>
                  </div>
                </div>
                <div class="ups-standard">
                  <input type="checkbox" name="ups" />
                  <div class="cost">
                    <h3>UPS STANDARD</h3>
                    <div class="icons">
                      <img src="../assets/brands/ups.svg" alt="brand-icon" />
                    </div>
                    <h3>+119 SEK</h3>
                  </div>
                </div>
                <div class="dhl">
                  <input type="checkbox" name="dhl" />
                  <div class="cost">
                    <h3>DHL - EXPRESS</h3>
                    <div class="icons">
                      <img
                        src="../assets/brands/dhl-exp.svg"
                        alt="brand-icon"
                      />
                    </div>
                    <h3>+199 SEK</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="nextButt">
          <h3>CONTINUE</h3>
          <font-awesome-icon :icon="['fas', 'caret-square-right']" size="2x" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      deliveryInfo: {
        name: "",
        address: "",
        post: "",
        city: "",
        country: "",
        phone: "",
      },
    };
  },
  beforeMount() {
    if (this.userStatus !== false) {
      this.deliveryInfo.name = this.getUser.name;
      this.deliveryInfo.address = this.getUser.address.street;
      this.deliveryInfo.post = this.getUser.address.post;
      this.deliveryInfo.city = this.getUser.address.city;
    }
  },
  methods: {
    delivery() {
      this.$store.dispatch("postAddress", this.deliveryInfo);
      this.$router.push("/payment");
    },
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
    ...mapState("user", ["userStatus"]),
  },
};
</script>

<style lang="scss" scoped>
</style>