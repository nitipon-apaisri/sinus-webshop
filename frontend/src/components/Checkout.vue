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
                        <p>Price: {{ item.price }} SEK</p>
                        <p>Category: {{ item.category }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="checkout-list">
            <div class="checkout-list-header">
              <h2>checkout list</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("order", ["order"]),
    ...mapState("order", ["cartStatus"]),
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
      hr {
        align-self: center;
        width: 50px;
        margin: 0 16px;
      }
      display: flex;
      .next-step {
        display: flex;
        color: #bdbdbd;
      }
    }
    .cart-contents {
      margin: 50px 0 0 0;
      .cart-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        .item-content {
          grid-column: span 8;
          ul {
            padding: 0;
            li {
              list-style: none;
              margin: 24px 0 0 0;
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
                }
              }
            }
          }
        }
        .checkout-list {
          grid-column: span 4;
          display: flex;
          justify-content: flex-end;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>