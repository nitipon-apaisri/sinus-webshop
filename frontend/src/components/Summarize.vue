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
        <div class="shipping-content">
          <div class="shipping-header">
            <h2>SHIPPING INFO</h2>
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
    ...mapGetters("order", ["order", "cartStatus"]),
  },
};
</script>

<style lang="scss" scoped>
.summarize-container {
  max-width: 1440px;
  margin: 50px auto;
  box-sizing: border-box;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 20px;
  text-align: left;
  .summarize-content {
    .checkout-header {
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
    .summarize-items-content {
      margin: 50px 0 0 0;
      .summarize-items-header {
        h1 {
          font-size: 1.5rem;
        }
      }
      .items-content {
        margin: 24px 0 0 0;
        .content {
          margin: 16px 0 32px 0;
          ul {
            padding: 0;
            display: grid;
            grid-template-columns: repeat(12, 2fr);
            grid-auto-flow: row;
            grid-gap: 32px;
          }
          li {
            list-style: none;
            grid-column: span 6;
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
                  margin: 0 200px 0 0;
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
              }
            }
          }
        }
      }
      .shipping-content {
        margin: 16px 0;
      }
    }
  }
}
</style>