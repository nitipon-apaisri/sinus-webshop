<template>
  <div class="summarize-container">
    <div class="sum-status" v-if="cartStatus">No sum</div>
    <div class="summarize-content" v-else>
      <div class="checkout-header">
        <div class="current-step">
          <h4 class="checkout-step">shopping cart</h4>
          <hr />
          <h4 class="checkout-step">shipping info</h4>
          <hr />
          <h4 class="checkout-step">payment</h4>
          <hr />
          <h4 class="checkout-step">confirmation</h4>
          <hr />
        </div>
        <div class="next-step">
          <h4>done</h4>
        </div>
      </div>
      <div class="summarize-items-content">
        <div class="summarize-items-header">
          <h1>
            CONFIRMATION
            <font-awesome-icon :icon="['fas', 'shopping-cart']" />
          </h1>
        </div>
        <hr />
        <div class="items-content">
          <div class="items-content-header">
            <h2>PRODUCTS</h2>
          </div>
          <div class="content">
            <ul>
              <li v-for="(item, index) in order" :key="index">
                <div class="item">
                  <div class="item-info">
                    <div class="item-img">
                      <img
                        :src="require(`../assets/${item.imgFile}`)"
                        alt="item-img"
                        class="wheels-img"
                        v-if="
                          item.category == 'wheels' ||
                          item.category == 'clothes'
                        "
                      />
                      <img
                        :src="require(`../assets/${item.imgFile}`)"
                        alt="item-img"
                        class="board-img"
                        v-if="item.category == 'board'"
                      />
                    </div>
                    <div class="item-desc">
                      <h2>{{ item.title }}</h2>
                      <div class="item-sub-desc">
                        <p>Product id: {{ item._id }}</p>
                        <p>Size: {{ item.size }}</p>
                        <p>Price: {{ item.price }} SEK</p>
                        <p>Category: {{ item.category }}</p>
                      </div>
                      <div class="item-desc-footer">
                        <h3>Amount: {{ item.amount }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <form></form>
        <div class="shipping-contents">
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
          <div class="delivery-method">
            <div class="delivery-content">
              <div class="delivery-header">
                <h2>DELIVERY METHOD</h2>
              </div>
            </div>
            <div class="method-info">
              <h3>DHL - EXPRESS</h3>
              <img src="../assets/brands/dhl-exp.svg" alt="brand" />
            </div>
          </div>
          <div class="payment-method">
            <div class="payment-content">
              <div class="payment-header">
                <h2>PAYMENT METHOD</h2>
              </div>
              <div class="method-info">
                <h3>CREDIT CARD</h3>
                <img src="../assets/brands/master-card.svg" alt="brand" />
              </div>
              <div class="card-info">
                <div class="card-name">
                  <label for="cardname">Cardholder name</label>
                  <input
                    type="text"
                    disabled
                    v-model="getMockUserContact.name"
                  />
                </div>
                <div class="card-sec">
                  <div class="card-no">
                    <label for="cardno">Card Number</label>
                    <input
                      type="text"
                      disabled
                      v-model="getMockCreditCard.cardNumber"
                    />
                  </div>
                  <div class="card-exp">
                    <label for="cardno">Expire</label>
                    <input
                      type="text"
                      disabled
                      v-model="getMockCreditCard.cardValit"
                    />
                  </div>
                  <div class="card-cvc">
                    <label for="cardcvc">CVC</label>
                    <input
                      type="text"
                      disabled
                      v-model="getMockCreditCard.cvc"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div class="summarize-footer">
          <div class="footer-content">
            <div class="details">
              <div class="subtotal">
                <h3>SUBTOTAL:</h3>
                <h3>{{ totalCost }} SEK</h3>
              </div>
              <div class="delivery-cost">
                <h3>DHL - EXPRESS: 199 SEK</h3>
                <h3>199 SEK</h3>
              </div>
              <div class="total">
                <h3>TOTAL:</h3>
                <h3>{{ totalCost + 199 }} SEK</h3>
              </div>
            </div>
            <button @click="confirm">
              <h4>CONFIRM</h4>
              <font-awesome-icon
                :icon="['fas', 'caret-square-right']"
                size="lg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("order", ["order", "cartStatus", "totalCost"]),
    ...mapGetters(["getMockUserContact", "getMockCreditCard"]),
  },
  methods: {
    confirm() {
      this.$store.dispatch("order/confirm");
      this.$router.push("/confirm");
    },
  },
};
</script>
<style lang="scss" scoped>
</style>