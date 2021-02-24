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
nav {
  padding: 20px 40px;

  background-color: #fff;
  img {
    max-width: 120px;
  }
  .menu-list {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-between;
    ul {
      margin: 0;
      width: 400px;
      justify-content: space-between;
      display: flex;
      li {
        align-self: center;
        list-style: none;
        a {
          color: #000;
          font-weight: bolder;
          letter-spacing: 0.06rem;
          text-decoration: none;
        }
      }
    }
    .search {
      align-self: center;
    }
    .shop-services {
      align-self: center;
    }
  }
}
</style>