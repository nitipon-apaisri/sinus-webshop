<template>
  <div class="payment-container">
    <div class="payment-contents">
      <div class="header">
        <div class="current-step">
          <h4 class="checkout-step">shopping cart</h4>
          <hr />
          <h4>shipping info</h4>
          <hr />
          <h4>payment</h4>
          <hr />
        </div>
        <div class="next-step">
          <h4>confirmation</h4>
          <hr />
          <h4>done</h4>
        </div>
      </div>
      <form>
        <div class="info">
          <div class="address-content">
            <div class="address-header">
              <h2>DELIVERY ADDRESS</h2>
            </div>
            <div class="address-info">
              <div class="name">
                <label for="name">Name</label>
                <input type="text" disabled v-model="getMockUserContact.name" />
              </div>
              <div class="address-post">
                <div class="address">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    disabled
                    v-model="getMockUserContact.address"
                  />
                </div>
                <div class="post">
                  <label for="post">Post</label>
                  <input
                    type="text"
                    disabled
                    v-model="getMockUserContact.post"
                  />
                </div>
              </div>
              <div class="city-phone">
                <div class="city">
                  <label for="city">City</label>
                  <input
                    type="text"
                    disabled
                    v-model="getMockUserContact.city"
                  />
                </div>
                <div class="phone">
                  <label for="phone">Phone</label>
                  <input
                    type="text"
                    disabled
                    v-model="getMockUserContact.phone"
                  />
                </div>
              </div>
              <div class="country">
                <label for="phone">Country</label>
                <input
                  type="text"
                  disabled
                  v-model="getMockUserContact.country"
                />
              </div>
            </div>
          </div>
          <div class="method-info">
            <div class="method-content">
              <div class="method-header">
                <h2>PAYMENT METHOD</h2>
              </div>
              <div class="choice-method">
                <div class="credit-card">
                  <input type="checkbox" name="credit" v-model="creditInfo" />
                  <h3>CREDIT CARD</h3>
                  <div class="icons">
                    <img src="../assets/brands/master.svg" alt="brand-icon" />
                    <img src="../assets/brands/visa.svg" alt="brand-icon" />
                    <img src="../assets/brands/amex.svg" alt="brand-icon" />
                  </div>
                </div>
                <div class="card-info" v-if="creditInfo">
                  <div class="card-name">
                    <label for="cardname">Cardholder name</label>
                    <input type="text" v-model="cardInfo.name" />
                  </div>
                  <div class="card-sec">
                    <div class="card-no">
                      <label for="cardno">Card Number</label>
                      <input type="text" v-model="cardInfo.number" />
                    </div>
                    <div class="card-exp">
                      <label for="cardno">Expire</label>
                      <input type="text" v-model="cardInfo.valid" />
                    </div>
                    <div class="card-cvc">
                      <label for="cardcvc">CVC</label>
                      <input type="text" v-model="cardInfo.cvc" />
                    </div>
                  </div>
                </div>
                <div class="digital-wallet">
                  <input type="checkbox" name="credit" />
                  <h3>DIGITAL WALLET</h3>
                  <div class="icons">
                    <img src="../assets/brands/google.svg" alt="brand-icon" />
                    <img src="../assets/brands/apple.svg" alt="brand-icon" />
                  </div>
                </div>
                <div class="internet">
                  <input type="checkbox" name="credit" />
                  <h3>3RD PARTY</h3>
                  <div class="icons">
                    <img src="../assets/brands/paypal.svg" alt="brand-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button @click="toSum" class="nextButt">
          <h3>CONTINUE</h3>
          <font-awesome-icon :icon="['fas', 'caret-square-right']" size="2x" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      creditInfo: false,
      cardInfo: {
        name: "",
        number: "",
        valid: "",
        cvc: "",
      },
    };
  },
  beforeMount() {
    if (sessionStorage.getItem("user") !== null) {
      this.cardInfo.name = this.getMockUserContact.name;
      this.cardInfo.number = this.getMockCreditCard.cardNumber;
      this.cardInfo.valid = this.getMockCreditCard.cardValit;
    } else {
      console.log("No user");
    }
  },
  methods: {
    toSum() {
      console.log(this.creditInfo);
      console.log(this.cardInfo.name);
      this.$router.push("/summarize");
    },
  },
  computed: {
    ...mapGetters(["getMockUserContact", "getMockCreditCard"]),
  },
};
</script>

<style lang="scss" scoped>
</style>