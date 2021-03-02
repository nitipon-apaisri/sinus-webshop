  <template>
  <main>
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
                  <li
                    v-for="(size, index) in clothesSize"
                    :key="index"
                    @click="addSize(size)"
                  >
                    <h5>{{ size }}</h5>
                  </li>
                </ul>
                <ul v-if="product.category == 'board'">
                  <li
                    v-for="(size, index) in boardsSize"
                    :key="index"
                    @click="addSize(size)"
                  >
                    <h5>{{ size }}</h5>
                  </li>
                </ul>
                <ul v-if="product.category == 'wheels'">
                  <li
                    v-for="(size, index) in wheelsSize"
                    :key="index"
                    @click="addSize(size)"
                  >
                    <h5>{{ size }}</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="product-footer">
          <button class="price" @click="addToCart">
            <font-awesome-icon :icon="['fas', 'shopping-bag']" />
            <h4>{{ product.price }} SEK</h4>
          </button>
        </div>
      </div>
    </div>
  </main>
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
      size: "",
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
    addToCart() {
      if (this.size === "") {
        alert("Please select size for the product3");
      } else {
        this.$store.dispatch("order/addToCart", [this.product, this.size]);
      }
    },
    addSize(size) {
      this.size = size;
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
</style>