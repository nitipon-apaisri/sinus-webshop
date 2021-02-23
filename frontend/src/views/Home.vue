<template>
  <div class="container">
    <Hero />
    <Brands />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
export default {
  components: {
    Hero,
    Brands,
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  .hero {
    margin: 24px 0;
  }
}
</style>
