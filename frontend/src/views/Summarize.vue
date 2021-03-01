<template>
  <div class="container">
    <Navigation />
    <main>
      <Summarize />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import Summarize from "../components/Summarize.vue";
export default {
  components: { Summarize, Navigation, Footer },
};
</script>

<style lang="scss" scoped>
</style>