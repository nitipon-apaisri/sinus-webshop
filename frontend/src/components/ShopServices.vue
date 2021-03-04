<template>
  <div class="shop-services">
    <div class="bag">
      <font-awesome-icon
        :icon="['fas', 'shopping-bag']"
        size="2x"
        @click="toCheckout"
      />
      <div class="bag-status" v-if="bagStatus"></div>
    </div>
    <div class="profile">
      <font-awesome-icon :icon="['fas', 'user']" size="2x" @click="toProfile" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
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
        if (this.getUser.role === "admin") {
          this.$router.push("/account/admin").catch((err) => err);
        } else {
          this.$router.push("/account").catch((err) => err);
        }
      } else {
        this.$router.push("/auth");
      }
    },
    toCheckout() {
      this.$router.push("/checkout").catch((err) => err);
    },
  },
  computed: {
    ...mapState("order", ["bagStatus"]),
    ...mapGetters("user", ["getUser"]),
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
  .bag {
    position: relative;
    .bag-status {
      top: 0px;
      right: -8px;
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      background-color: red;
    }
  }
}
</style>