<template>
  <div class="shop-services">
    <font-awesome-icon
      :icon="['fas', 'shopping-bag']"
      size="2x"
      @click="toCheckout"
    />
    <font-awesome-icon :icon="['fas', 'user']" size="2x" @click="toProfile" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
    };
  },
  beforeMount() {
    this.token = sessionStorage.getItem("user");
  },
  methods: {
    toProfile() {
      if (this.token !== null) {
        this.$router.push("/account").catch((err) => err);
      } else {
        this.$router.push("/auth");
      }
    },
    toCheckout() {
      this.$router.push("/checkout").catch((err) => err);
    },
  },
};
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