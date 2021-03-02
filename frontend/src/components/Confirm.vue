<template>
  <div class="confirm-container">
    <div class="checkout-header">
      <div class="current-step">
        <h4 class="checkout-step">shopping cart</h4>
        <hr />
        <h4 class="checkout-step">shipping info</h4>
        <hr />
        <h4 class="checkout-step">payment</h4>
        <hr />
        <h4 class="checkout-step">confirmation</h4>
        <hr />
        <h4>done</h4>
      </div>
    </div>
    <div class="confirm-content">
      <font-awesome-icon :icon="['fas', 'check-circle']" size="5x" />
      <h1>thank you for supporting us</h1>
      <button @click="toHome">
        <h3>BACK TO HOME</h3>
        <font-awesome-icon :icon="['fas', 'home']" size="lg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      setTimeout(() => {
        this.$router.push("/");
        location.reload();
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>