<template>
  <div class="wrapper">
    <Navigation />
    <main>
      <Admin />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Admin from "../components/Admin.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Admin, Navigation, Footer },
};
</script>

<style lang="scss" scoped>
</style>