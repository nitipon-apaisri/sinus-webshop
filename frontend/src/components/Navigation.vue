<template>
  <nav>
    <div class="menu-list">
      <img src="../assets/sinus-logo.svg" alt="sinus-logo" />
      <ul>
        <li>
          <router-link to="/">HOME</router-link>
        </li>
        <li>
          <router-link to="/">ABOUT</router-link>
        </li>
        <li>
          <router-link to="/">CATEGORY</router-link>
        </li>
        <li>
          <router-link to="/">CONTACH</router-link>
        </li>
      </ul>
      <Search />
      <ShopServices />
    </div>
  </nav>
</template>

<script>
import Search from "./Search.vue";
import ShopServices from "./ShopServices.vue";
export default {
  components: { Search, ShopServices },
};
</script>

<style lang="scss" scoped>
</style>