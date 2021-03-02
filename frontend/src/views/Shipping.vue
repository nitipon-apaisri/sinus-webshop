<template>
  <div class="container">
    <Navigation />
    <main>
      <Shipping />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import Shipping from "../components/Shipping.vue";
export default {
  components: { Shipping, Navigation, Footer },
};
</script>

<style lang="scss" scoped>
</style>