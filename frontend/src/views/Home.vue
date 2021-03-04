<template>
  <div class="container">
    <Navigation />
    <main>
      <div class="home-container">
        <Hero />
        <Brands />
        <Products />
        <div class="shop-extra-info">
          <About />
          <Guide />
        </div>
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
import { mapGetters, mapState } from "vuex";
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
  mounted() {
    if (sessionStorage.getItem("user") !== null) {
      this.$store.dispatch("user/userData");
    }
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
    ...mapState("user", ["userStatus"]),
  },
};
</script>
<style lang="scss" scoped>
</style>
