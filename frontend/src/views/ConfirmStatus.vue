<template>
  <div class="container">
    <Navigation />
    <main></main>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
export default {
  components: { Footer, Navigation },
};
</script>

<style lang="scss" scoped>
</style>