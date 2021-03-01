<template>
  <div class="checkout-container primary-section-style">
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
                      <font-awesome-icon
                        :icon="['fas', 'minus-square']"
                        size="2x"
                        @click="decreaseAmount(index)"
                      />
                      <h3>{{ item.amount }}X</h3>
                      <font-awesome-icon
                        :icon="['fas', 'plus-square']"
                        size="2x"
                        @click="increaseAmount(index)"
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
    increaseAmount(index) {
      this.$store.dispatch("order/increaseAmount", index);
    },
    decreaseAmount(index) {
      this.$store.dispatch("order/decreaseAmount", index);
    },
    toSum() {
      this.$router.push("/payment");
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout-container {
  margin: 100px 0;
  .checkout-contents {
    .checkout-header {
      text-transform: uppercase;
      width: fit-content;
      margin: 0 auto;
      display: flex;
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
    .cart-contents {
      margin: 50px 0 0 0;
      .cart-content {
        padding: 8px 0;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        .item-content {
          grid-column: span 8;
          ul {
            margin: 0;
            padding: 0;
            li {
              list-style: none;
              margin: 0 0 16px 0;
              .item {
                .item-info {
                  display: flex;
                  justify-content: space-between;
                  .item-img {
                    width: 184px;
                    height: 184px;
                    padding: 32px;
                    box-sizing: border-box;
                    background-color: #f4f4f4;
                    display: flex;
                    justify-content: center;
                    border-radius: 10px;
                    img.board-img {
                      width: 36px;
                      height: 100%;
                    }
                    img.wheels-img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .item-desc {
                    width: 400px;
                    h2 {
                      text-transform: uppercase;
                      letter-spacing: 0.075rem;
                    }
                    p {
                      font-size: 0.85rem;
                      letter-spacing: 0.025rem;
                      margin: 4px 0;
                      color: #bdbdbd;
                    }
                  }
                  .actions {
                    display: flex;
                    height: fit-content;
                    h3 {
                      cursor: pointer;
                      margin: 0 32px;
                      align-self: center;
                    }
                  }
                }
              }
            }
          }
        }
        .checkout-list {
          grid-column: span 4;
          width: 100%;
          box-sizing: border-box;
          padding: 0 0 0 168px;
          .checkout-list-header {
            width: 100%;
            box-sizing: border-box;
            text-transform: uppercase;
            padding: 8px 16px;
            height: fit-content;
            background-color: #000;
            color: #fff;
            border-radius: 8px;
          }
          .checkout-list-content {
            ul {
              padding: 0 16px;
              li {
                display: flex;
                justify-content: space-between;
                text-transform: uppercase;
                h4 {
                  color: #bdbdbd;
                  letter-spacing: 0.05rem;
                }
              }
            }
            .checkout-cost {
              letter-spacing: 0.05rem;
              text-transform: uppercase;
            }
          }
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
    width: 100%;
    justify-content: center;
    margin: 16px 0 0 0;
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