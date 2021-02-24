<template>
  <div class="container">
    <Navigation />
    <main>
      <Hero />
      <Brands />
      <Products />
    </main>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Products from "@/components/Products";
import Navigation from "../components/Navigation.vue";
export default {
  components: {
    Hero,
    Brands,
    Products,
    Navigation,
  },
  methods: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
.content-box {
  margin: 24px 0;
}
.container {
  width: 100%;
  main {
    max-width: 1440px;
    margin: 0 auto;
    .hero {
      @extend .content-box;
    }
    .products {
      @extend .content-box;
    }
  }
}
</style>
