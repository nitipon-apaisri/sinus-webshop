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

        <div class="shipping-contents">
          <div class="address-content">
            <div class="address-header">
              <h2>DELIVERY ADDRESS</h2>
            </div>
            <div class="address-info">
              <div class="name">
                <label for="name">Name</label>
                <input type="text" disabled v-model="mokcUser.name" />
              </div>
              <div class="address-post">
                <div class="address">
                  <label for="address">Address</label>
                  <input type="text" disabled v-model="mokcUser.address" />
                </div>
                <div class="post">
                  <label for="post">Post</label>
                  <input type="text" disabled v-model="mokcUser.post" />
                </div>
              </div>
              <div class="city-phone">
                <div class="city">
                  <label for="city">City</label>
                  <input type="text" disabled v-model="mokcUser.city" />
                </div>
                <div class="phone">
                  <label for="phone">Phone</label>
                  <input type="text" disabled v-model="mokcUser.phone" />
                </div>
              </div>
              <div class="country">
                <label for="phone">Country</label>
                <input type="text" disabled v-model="mokcUser.country" />
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
                  <input type="text" disabled v-model="mokcUser.name" />
                </div>
                <div class="card-sec">
                  <div class="card-no">
                    <label for="cardno">Card Number</label>
                    <input type="text" disabled v-model="mokcUser.cardNo" />
                  </div>
                  <div class="card-exp">
                    <label for="cardno">Expire</label>
                    <input type="text" disabled v-model="mokcUser.exp" />
                  </div>
                  <div class="card-cvc">
                    <label for="cardcvc">CVC</label>
                    <input type="text" disabled v-model="mokcUser.CVC" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("order", ["order", "cartStatus"]),
    ...mapState(["mokcUser"]),
  },
};
</script>

<style lang="scss" scoped>
.default-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 32px;
}
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
            @extend .default-grid;
            grid-template-columns: repeat(12, 2fr);
            grid-auto-flow: row;
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
      .address-contents-default {
        margin: 6px 0 0 0;
      }
      .input-info {
        display: flex;
        flex-direction: column;
      }
      .shipping-contents {
        margin: 16px 0;
        @extend .default-grid;
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
          grid-column: span 4;
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
        .default-method {
          grid-column: span 4;
          .method-info {
            margin: 32px 0 0 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
        }
        .delivery-method {
          @extend .default-method;
        }
        .payment-method {
          @extend .default-method;
          .method-info {
            width: 50%;
          }
          .card-info {
            margin: 16px 0 0 0;
            .card-name {
              @extend .input-info;
            }
            .card-sec {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-gap: 32px;
              margin: 6px 0 0 0;
              .card-no {
                grid-column: span 6;
                @extend .input-info;
              }
              .card-exp,
              .card-cvc {
                grid-column: span 3;
                @extend .input-info;
              }
            }
          }
        }
      }
    }
  }
}
</style>