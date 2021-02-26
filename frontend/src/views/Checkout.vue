<template>
  <div class="container">
    <Navigation />
    <main>
      <Checkout />
    </main>
    <Footer />
  </div>
</template>

<script>
import Checkout from "../components/Checkout.vue";
import Footer from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
export default {
  components: { Checkout, Navigation, Footer },
};
</script>

<style lang="scss" scoped>
.container {
  main {
    max-width: 1440px;
    margin: 0 auto;
  }
}
</style>