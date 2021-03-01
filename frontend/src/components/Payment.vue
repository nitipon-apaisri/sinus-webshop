<template>
  <div class="payment-container primary-section-style">
    <div class="payment-contents">
      <div class="payment-header">
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
      <div class="payment-info">
        <div class="address-content">
          <div class="address-header">
            <h2>DELIVERY ADDRESS</h2>
          </div>
          <div class="address-info">
            <div class="name">
              <label for="name">Name</label>
              <input type="text" disabled v-model="getMockUser.name" />
            </div>
            <div class="address-post">
              <div class="address">
                <label for="address">Address</label>
                <input type="text" disabled v-model="getMockUser.address" />
              </div>
              <div class="post">
                <label for="post">Post</label>
                <input type="text" disabled v-model="getMockUser.post" />
              </div>
            </div>
            <div class="city-phone">
              <div class="city">
                <label for="city">City</label>
                <input type="text" disabled v-model="getMockUser.city" />
              </div>
              <div class="phone">
                <label for="phone">Phone</label>
                <input type="text" disabled v-model="getMockUser.phone" />
              </div>
            </div>
            <div class="country">
              <label for="phone">Country</label>
              <input type="text" disabled v-model="getMockUser.country" />
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
    <button @click="toSum" class="nextButt">
      <h3>CONTINUE</h3>
      <font-awesome-icon :icon="['fas', 'caret-square-right']" size="2x" />
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    toSum() {
      this.$router.push("/summarize");
    },
  },
  computed: {
    ...mapGetters(["getMockUser"]),
  },
};
</script>

<style lang="scss" scoped>
.default-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 32px;
}
.input-info {
  display: flex;
  flex-direction: column;
}
.address-contents-default {
  margin: 6px 0 0 0;
}
.payment-container {
  .payment-header {
    text-transform: uppercase;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: fit-content;
    .current-step {
      width: fit-content;
      display: flex;
    }
    hr {
      align-self: center;
      width: 50px;
      margin: 0 16px;
    }
    .next-step {
      display: flex;
      color: #bdbdbd;
    }
  }
  .payment-info {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 16px 0 0 0;
    input {
      margin: 6px 0;
      padding: 8px 16px;
      border-radius: 4px;
      border: 1px solid #f2f2f2;
    }
    label {
      font-size: 0.7rem;
    }
    .address-content {
      grid-column-start: 1;
      grid-column-end: 6;
      .address-info {
        margin: 16px 0 0 0;
        .name {
          @extend .input-info;
        }
        .address-post {
          @extend .address-contents-default;
          @extend .default-grid;
          .address {
            @extend .input-info;
            grid-column: span 8;
          }
          .post {
            @extend .input-info;
            grid-column: span 4;
          }
        }
        .city-phone {
          @extend .address-contents-default;
          @extend .default-grid;
          .city {
            @extend .input-info;
            grid-column: span 6;
          }
          .phone {
            @extend .input-info;
            grid-column: span 6;
          }
        }
        .country {
          @extend .address-contents-default;
          @extend .input-info;
        }
      }
    }
    .choice-default {
      display: flex;
      justify-content: space-between;
      input {
        align-self: center;
      }
      .icons {
        display: flex;
        img {
          align-self: center;
          margin: 0 6px 0 0;
        }
      }
    }
    .method-info {
      grid-column-start: 8;
      grid-column-end: 13;
      .choice-method {
        margin: 16px 0 0 0;
        .credit-card {
          width: 50%;
          @extend .choice-default;
        }
        .digital-wallet {
          width: 46%;
          margin: 16px 0 0 0;
          @extend .choice-default;
        }
        .internet {
          width: 33%;
          margin: 16px 0 0 0;
          @extend .choice-default;
        }
      }
    }
  }
  .nextButt {
    display: flex;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #00a79d;
    color: #fff;
    margin: 0 0 0 auto;
    cursor: pointer;
    h3 {
      letter-spacing: 0.03rem;
      align-self: center;
    }
    svg {
      align-self: center;
      margin: 0 0 0 12px;
    }
  }
}
</style>