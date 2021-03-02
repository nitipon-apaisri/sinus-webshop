<template>
  <div class="container">
    <Navigation />
    <main>
      <Single />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
import Single from "../components/Single.vue";
export default {
  components: { Single, Navigation, Footer },
};
</script>

<style>
</style>