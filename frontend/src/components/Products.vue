<template>
  <section class="products primary-section-style">
    <h1>PRODUCTS</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div class="the-product">
          <div class="product">
            <div class="product-img">
              <img
                :src="require(`../assets/${product.imgFile}`)"
                :alt="product.shortDesc"
              />
            </div>
          </div>
          <div class="product-info">
            <div class="product-title">
              <h4>{{ product.title }}</h4>
              <p>{{ product.category }}</p>
            </div>
            <div class="product-footer">
              <button>
                <font-awesome-icon :icon="['fas', 'shopping-bag']" />
              </button>
              <h5>{{ product.price }} SEK</h5>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("products", ["products"]),
  },
  beforeMount() {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>

<style lang="scss" scoped>
.products {
  ul {
    padding: 0;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 32px;
    grid-template-columns: repeat(6, 1fr);
    li {
      list-style: none;
      .the-product {
        .product {
          box-sizing: border-box;
          width: 200px;
          height: 200px;
          padding: 12px;
          border-radius: 10px;
          background-color: #f4f4f4;
          display: flex;
          justify-content: center;
          .product-img {
            align-self: center;
            img {
              max-width: 230px;
              max-height: 115px;
            }
          }
        }
        .product-info {
          margin: 15px 0;
          .product-title {
            h4 {
              letter-spacing: 0.025rem;
              text-transform: uppercase;
            }
            p {
              text-transform: capitalize;
              color: #a5a5a5;
              font-size: 0.8rem;
            }
          }
          .product-footer {
            margin: 16px 0 0 0;
            color: #333333;
            display: flex;
            justify-content: space-between;
            button {
              border: 1px solid transparent;
              font-size: 1rem;
              border-radius: 8px;
              padding: 8px 10px;
              background-color: #ececec;
            }
            h5 {
              letter-spacing: 0.025rem;
              align-self: center;
            }
          }
        }
      }
    }
  }
}
</style>