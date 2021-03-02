<template>
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
article {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 20px;
  text-align: left;
  h1 {
    font-size: 2rem;
  }
  .account-info {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 16px;
    padding: 16px;
    margin: 16px 0;
    .role {
      color: #a5a5a5;
      font-size: 0.9rem;
    }
    .mock-profile-img {
      grid-column: span 4;
      width: 160px;
      height: 160px;
      margin: 0 auto;
      border-radius: 100%;
      background-color: #333;
    }
    .user-info {
      grid-column: span 8;
      hr {
        margin: 16px 0;
      }
      .address-info {
        margin: 24px 0 0 0;
        p {
          font-size: 0.7rem;
          letter-spacing: 0.0125rem;
          color: #a5a5a5;
        }
        .street-zip {
          margin: 8px 0;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-gap: 16px;
          .street {
            grid-column: span 6;
          }
          .zip {
            grid-column: span 6;
          }
        }
      }
    }
    .sign-in-info {
      margin: 32px 0;
    }
  }
}
</style>