<template>
  <div class="container">
    <Navigation />
    <main>
      <Confirm />
    </main>
    <Footer />
  </div>
</template>

<script>
import Confirm from "../components/Confirm.vue";
import Footer from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
export default {
  components: { Footer, Navigation, Confirm },
};
</script>

<style lang="scss" scoped>
</style>