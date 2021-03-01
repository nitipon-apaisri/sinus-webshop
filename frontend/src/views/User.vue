<template>
  <div class="wrapper">
    <Navigation />
    <main>
      <User />
    </main>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import User from "../components/User.vue";

export default {
  components: { User, Navigation },
};
</script>

<style lang="scss" scoped>
</style>