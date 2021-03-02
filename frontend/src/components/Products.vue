<template>
  <section class="products primary-section-style">
    <h1>PRODUCTS</h1>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <div class="the-product">
          <div class="product" @click="viewInfo(index)">
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
              <button @click="viewInfo(index)">
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
import { mapGetters, mapState } from "vuex";
export default {
  methods: {
    viewInfo(index) {
      this.$store.dispatch("products/getOneProduct", this.products[index]._id);
      setTimeout(() => {
        this.$router.push("info/" + this.products[index]._id);
      }, 300);
    },
  },
  computed: {
    ...mapGetters("products", ["products"]),
    ...mapState("products", ["allProducts"]),
  },
  beforeMount() {
    if (this.allProducts <= 0) {
      this.$store.dispatch("products/getAllProducts");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>