<template>
  <div class="account-infomo">
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
              <button @click="out" class="log-out">
                <h3>SIGN OUT</h3>
                <font-awesome-icon :icon="['fa', 'sign-out-alt']" size="2x" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <section class="user-order-container">
        <h1>Order History</h1>
        <hr />
        <div class="user-order-content">
          <ul>
            <li v-for="item in getUserOrder" :key="item._id">
              <h3>ORDER ID: #{{ item._id }}</h3>
              <div class="order-item">
                <ul>
                  <li v-for="item in item.items" :key="item._id">
                    <div class="the-product">
                      <div class="product">
                        <div class="product-img">
                          <img
                            :src="require(`../assets/${item.imgFile}`)"
                            :alt="item.shortDesc"
                          />
                        </div>
                      </div>
                      <div class="product-info">
                        <div class="product-title">
                          <h4>{{ item.title }}</h4>
                        </div>
                        <div class="product-footer">
                          <h5>Amount: {{ item.amount }}</h5>
                          <h5>{{ item.price }} SEK</h5>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr />
                <h4>TOTAL: {{ item.orderValue }} SEK</h4>
                <hr />
                <hr />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  beforeMount() {
    this.$store.dispatch("user/userData");
    this.$store.dispatch("order/getOrder");
  },
  methods: {
    out() {
      sessionStorage.removeItem("user");
      setTimeout(() => {
        this.$router.push("/");
        location.reload();
      }, 300);
    },
  },
  computed: {
    ...mapGetters("user", ["getUser"]),
    ...mapGetters("order", ["getUserOrder"]),
    ...mapState("user", ["loading"]),
  },
};
</script>

<style lang="scss" scoped>
</style>