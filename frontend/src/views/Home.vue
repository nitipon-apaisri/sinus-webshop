<template>
  <div class="container">
    <Navigation />
    <main>
      <Hero />
      <Brands />
      <Products />
      <div class="shop-extra-info">
        <About />
        <Guide />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Products from "@/components/Products";
import Navigation from "@/components/Navigation.vue";
import About from "@/components/About";
import Guide from "../components/Guide.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Hero,
    Brands,
    Products,
    Navigation,
    About,
    Guide,
    Footer,
  },

  Footermethods: {},
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
    .shop-extra-info {
      display: grid;
      grid-auto-flow: row;
      grid-gap: 24px;
      grid-template-columns: repeat(12, 1fr);
      .about {
        grid-column: span 5;
      }
      .guide {
        grid-column: span 7;
      }
    }
  }
}
</style>
