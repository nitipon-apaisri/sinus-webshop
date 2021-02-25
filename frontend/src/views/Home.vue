<template>
  <div class="container">
    <Hero />
    <Brands />
    <Products />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
export default {
  components: {
    Hero,
    Brands,
    Products,
    Footer,
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
  .hero {
    @extend .content-box;
  }
  .products {
    @extend .content-box;
  }
}
</style>
