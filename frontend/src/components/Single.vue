  <template>
  <div class="wrapper">
    <div v-if="loading" class="loader">Content is loading</div>
    <div v-else class="product">
      <div class="header"><button class="price">BACK</button></div>
      <div class="img-wrapper">
        <img :src="require(`../assets/${products[6].imgFile}`)" alt="text" />
      </div>
      <div class="details-wrapper">
        <h1>{{ products[6].title }}</h1>
        <p>{{ products[6].longDesc }}</p>
        <h3>Size</h3>
        <ul v-if="products[6].category == 'clothes'">
          <li v-for="(size, index) in clothesSize" :key="index">
            <div class="sizebtn">{{ size }}</div>
          </li>
        </ul>
      </div>
      <div class="footer">
        <button class="price">
          <font-awesome-icon :icon="['fas', 'shopping-bag']" />
          {{ products[6].price }} SEK
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      clothesSize: ["XS", "S", "M", "L", "XL"],
    };
  },
  beforeMount() {
    this.$store.dispatch("products/getAllProducts");
  },
  computed: {
    ...mapGetters("products", ["products"]),
    ...mapState("products", ["loading"]),
  },
};
</script>
  
  <style scoped>
* {
  padding: 0;
  margin: 0;
}

h1 {
  font-family: Oswald;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

h3 {
  margin: 20px 0;
}

p {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  letter-spacing: 0.02em;
  color: #bdbdbd;
}

ul {
  list-style: none;
}

.wrapper {
  width: 1340px;
  height: 672px;
  background: #fff;
  border-radius: 20px;
  padding: 20px 50px;
}

.product {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "header . ."
    "img . info"
    ". . footer";
}

.header {
  grid-area: header;
  display: flex;
  align-items: center;
}

.img-wrapper {
  grid-area: img;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background: #f5f5f5;
  border-radius: 20px;
}

.product-img {
  max-width: 250px;
  max-height: 250px;
}

img {
  max-width: 80%;
  max-height: 80%;
}

.details-wrapper {
  grid-area: info;
  text-align: left;
  padding: 0 15%;
}

ul {
  display: flex;
}

.sizebtn {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sizebtn:hover {
  cursor: pointer;
  border: 1px solid #000;
}

ul li {
  margin-left: 20px;
}

ul li:first-child {
  margin-left: 0px;
}

.sizebtn {
  width: 85.27px;
  height: 85px;
  background: #f5f5f5;
  border-radius: 10px;
}

.footer {
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.price {
  font-family: Oswald;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  width: 130.42px;
  height: 36px;
  background: #000000;
  color: #fff;
  border-radius: 4px;
  border-style: none;
}
</style>