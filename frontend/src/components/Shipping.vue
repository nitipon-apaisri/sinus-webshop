<template>
  <div class="payment-container">
    <div class="payment-contents">
      <div class="payment-header">
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
      <div class="payment-info">
        <div class="address-content">
          <div class="address-header">
            <h2>DELIVERY ADDRESS</h2>
          </div>
          <div class="address-info">
            <div class="name">
              <label for="name">Name</label>
              <input type="text" />
            </div>
            <div class="address-post">
              <div class="address">
                <label for="address">Address</label>
                <input type="text" />
              </div>
              <div class="post">
                <label for="post">Post</label>
                <input type="text" />
              </div>
            </div>
            <div class="city-phone">
              <div class="city">
                <label for="city">City</label>
                <input type="text" />
              </div>
              <div class="phone">
                <label for="phone">Phone</label>
                <input type="text" />
              </div>
            </div>
            <div class="country">
              <label for="phone">Country</label>
              <input type="text" />
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
                <input type="checkbox" name="credit" />
                <h3>CREDIT CARD</h3>
                <div class="icons">
                  <img src="../assets/brands/master.svg" alt="brand-icon" />
                  <img src="../assets/brands/visa.svg" alt="brand-icon" />
                  <img src="../assets/brands/amex.svg" alt="brand-icon" />
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
    </div>
    <button @click="toPayment" class="nextButt">
      <h3>CONTINUE</h3>
      <font-awesome-icon :icon="['fas', 'caret-square-right']" size="2x" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toPayment() {
      this.$router.push("/payment");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>