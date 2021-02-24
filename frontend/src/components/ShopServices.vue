<template>
  <div class="shop-services">
    <font-awesome-icon :icon="['fas', 'shopping-bag']" size="2x" />
    <router-link to="/auth">
      <font-awesome-icon :icon="['fas', 'user']" size="2x" />
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.shop-services {
  display: flex;
  justify-content: space-between;
  width: 90px;
  a {
    color: #000;
  }
  svg {
    cursor: pointer;
  }
}
</style>