<template>
  <div class="account-info">
    <article>
      <h1>Account</h1>
      <div class="loader" v-if="loading">Loding</div>
      <div class="wrapper" v-else>
        <div class="account-info">
          <div class="mock-profile-img"></div>
          <div class="user-info">
            <h1>Personal Infomation</h1>
            <hr />
            <h2>{{ getUser.name }}</h2>
            <p class="role">{{ getUser.role }}</p>
            <div class="address-info">
              <div class="street-zip">
                <div class="street">
                  <p>Street</p>
                  <h3>{{ getUser.address.street }}</h3>
                </div>
                <div class="zip">
                  <p>Zip</p>
                  <h3>{{ getUser.address.zip }}</h3>
                </div>
              </div>
              <div class="city">
                <p>City</p>
                <h3>{{ getUser.address.city }}</h3>
              </div>
            </div>
            <div class="sign-in-info">
              <h1>Log in Information</h1>
              <hr />
              <div class="email">
                <h2>E-mail: {{ getUser.email }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  beforeMount() {
    this.$store.dispatch("user/userData");
  },
  computed: {
    ...mapGetters("user", ["getUser", "getUserAddress"]),
    ...mapState("user", ["loading"]),
  },
};
</script>

<style lang="scss" scoped>
</style>