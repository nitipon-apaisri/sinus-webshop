<template>
  <div class="container">
    <Navigation />
    <main>
      <Payment />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import Payment from "../components/Payment.vue";
export default {
  components: { Navigation, Footer, Payment },
};
</script>

<style lang="scss" scoped>
.container {
  main {
    max-width: 1440px;
    margin: 50px auto;
  }
}
</style>