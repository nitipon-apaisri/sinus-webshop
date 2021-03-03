<template>
  <div class="checkout-container">
    <div class="cartStatus" v-if="cartStatus">Cart is emty...</div>
    <div class="checkout-contents" v-else>
      <div class="checkout-header">
        <div class="current-step">
          <h4 class="checkout-step">shopping cart</h4>
        </div>
        <div class="next-step">
          <hr />
          <h4>shipping info</h4>
          <hr />
          <h4>payment</h4>
          <hr />
          <h4>confirmation</h4>
          <hr />
          <h4>done</h4>
        </div>
      </div>
      <section class="cart-contents">
        <div class="cart-header">
          <h1>
            YOUR SHOPPING CART
            <font-awesome-icon :icon="['fas', 'shopping-cart']" />
          </h1>
        </div>
        <hr />
        <div class="cart-content">
          <div class="item-content">
            <ul>
              <li v-for="(item, index) in order" :key="index">
                <div class="item">
                  <div class="item-info">
                    <div class="item-img">
                      <img
                        :src="require(`../assets/${item.imgFile}`)"
                        alt="item-img"
                        class="wheelss-img"
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
                    </div>
                    <div class="actions">
                      <h3>{{ item.amount }}X</h3>
                      <font-awesome-icon
                        :icon="['fas', 'times']"
                        size="lg"
                        @click="decreaseAmount(index)"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="checkout-list">
            <div class="checkout-list-header">
              <h3>checkout list</h3>
            </div>
            <div class="checkout-list-content">
              <ul>
                <li v-for="item in order" :key="item.id">
                  <h4>{{ item.title }}</h4>
                  <h4>{{ item.amount }}X</h4>
                </li>
              </ul>
              <div class="checkout-cost">
                <h3>Total: {{ totalCost }} SEK</h3>
              </div>
              <button @click="toSum" class="nextButt">
                <h3>CONTINUE</h3>
                <font-awesome-icon
                  :icon="['fas', 'caret-square-right']"
                  size="2x"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("order", ["order", "totalCost", "cartStatus"]),
  },
  methods: {
    decreaseAmount(index) {
      this.$store.dispatch("order/decreaseAmount", index);
    },
    toSum() {
      this.$router.push("/shipping");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>