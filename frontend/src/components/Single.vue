  <template>
  <div class="product-wrapper">
    <div v-if="loading" class="loader">Content is loading</div>
    <div v-else class="product">
      <div class="product-header">
        <button class="price" @click="backToHome">
          <font-awesome-icon :icon="['fas', 'angle-left']" size="2x" />
          <p>BACK</p>
        </button>
        <p>Home / {{ product.title }}</p>
      </div>
      <div class="product-info">
        <div class="product-img" v-if="product.category == 'board'">
          <img
            :src="require(`../assets/${product.imgFile}`)"
            alt="text"
            class="board"
          />
        </div>
        <div
          class="product-img"
          v-if="product.category == 'clothes' || product.category == 'wheels'"
        >
          <img
            :src="require(`../assets/${product.imgFile}`)"
            alt="text"
            class="wheels"
          />
        </div>
        <div class="product-details">
          <div class="details-header">
            <h1>{{ product.title }}</h1>
            <p>Product id: {{ product._id }}</p>
          </div>
          <div class="rate">
            <font-awesome-icon
              :icon="['fas', 'star']"
              v-for="star in 5"
              :key="star.id"
            />
          </div>
          <div class="details-desc">
            <p>{{ product.longDesc }}</p>
            <div class="size">
              <h3>Size</h3>
              <ul v-if="product.category == 'clothes'">
                <li v-for="(size, index) in clothesSize" :key="index">
                  <h5>{{ size }}</h5>
                </li>
              </ul>
              <ul v-if="product.category == 'board'">
                <li v-for="(size, index) in boardsSize" :key="index">
                  <h5>{{ size }}</h5>
                </li>
              </ul>
              <ul v-if="product.category == 'wheels'">
                <li v-for="(size, index) in wheelsSize" :key="index">
                  <h5>{{ size }}</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="product-footer">
        <button class="price">
          <font-awesome-icon :icon="['fas', 'shopping-bag']" />
          <h4>{{ product.price }} SEK</h4>
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      clothesSize: ["XS", "S", "M", "L", "XL", "XXL"],
      boardsSize: ["8.0", "8.125", "8.25", "8.375", "8.5", "8.9"],
      wheelsSize: ["50", "51", "52", "53", "54", "55"],
    };
  },
  beforeMount() {
    if (this.products.length === 0) {
      this.$router.push("/");
    }
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters("products", ["product", "products"]),
    ...mapState("products", ["loading"]),
  },
};
</script>
  
  <style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.default-button {
  padding: 6px 18px;
  background-color: #000;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
}
.product-wrapper {
  max-width: 1440px;
  margin: 100px auto;
  background-color: #fff;
  border-radius: 20px;
  padding: 50px;
  .product {
    .product-header {
      display: flex;
      button {
        @extend .default-button;
        p {
          margin-left: 12px;
          align-self: center;
        }
      }
      p {
        margin-left: 32px;
        align-self: center;
        color: #ddd;
        font-size: 0.8rem;
        text-transform: uppercase;
      }
    }
    .product-info {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 32px;
      margin: 50px 0;
      .product-img {
        width: 100%;
        box-sizing: border-box;
        padding: 60px;
        grid-column: span 5;
        background-color: #f5f5f5;
        border-radius: 20px;
        .wheels {
          width: 250px;
          height: 250px;
        }
        .board {
          width: 83px;
          height: 250px;
        }
      }
      .product-details {
        padding: 0 124px;
        text-align: left;
        grid-column: span 7;
        .details-header {
          h1 {
            line-height: 2.4rem;
            text-transform: uppercase;
          }
          p {
            color: #ddd;
            font-size: 0.8rem;
          }
        }
        .rate {
          margin: 8px 0;
          svg {
            margin: 0 2px 0 0;
            color: #eb5757;
          }
        }
        .details-desc {
          margin: 16px 0;
          p {
            color: #bdbdbd;
            letter-spacing: 0.025rem;
            font-size: 0.85rem;
          }
          .size {
            text-transform: uppercase;
            margin: 16px 0;
            ul {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-gap: 20px;
              margin: 16px 0;
              li {
                background-color: #f5f5f5;
                box-sizing: border-box;
                list-style: none;
                grid-column: span 2;
                border-radius: 10px;
                padding: 25.5px 16px;
                h5 {
                  text-align: center;
                  color: #333;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }
    .product-footer {
      display: flex;
      justify-content: flex-end;
      button {
        padding: 16px 20px;
        border: 1px solid transparent;
        background-color: #000;
        color: #fff;
        border-radius: 8px;
        display: flex;
        svg {
          font-size: 1.5rem;
        }
        h4 {
          margin: 0 0 0 20px;
          align-self: center;
        }
      }
    }
  }
}
</style>