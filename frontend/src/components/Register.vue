<template>
  <div class="register">
    <form @submit.prevent="register">
      <section class="personal-data">
        <h2>PERSONAL INFORMAION</h2>
        <hr />
        <label for="name">Name</label>
        <input type="text" name="name" v-model="name" />
        <div class="address-info-1">
          <div class="street">
            <label for="street">Street</label>
            <input type="text" name="street" v-model="address.street" />
          </div>
          <div class="zip">
            <label for="zip">Zip</label>
            <input type="text" name="zip" v-model="address.zip" />
          </div>
        </div>
        <div class="address-info-2">
          <div class="city">
            <label for="street">City</label>
            <input type="text" name="city" v-model="address.city" />
          </div>
          <div class="country">
            <label for="zip">Country</label>
            <input type="text" name="country" />
          </div>
        </div>
      </section>
      <section class="account-data">
        <h2>ACCOUNT INFORMAION</h2>
        <hr />
        <div class="email">
          <label for="email">E-mail</label>
          <input type="text" name="email" v-model="email" />
        </div>
        <div class="password-info">
          <div class="password">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password" />
          </div>
          <div class="confirm-password">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" />
          </div>
        </div>
      </section>
      <div class="form-footer">
        <button class="register-button form-button">Register</button>
        <router-link to="/auth" class="sign-in-button form-button"
          >SIGN IN</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      address: {
        street: "",
        zip: "",
        city: "",
      },
    };
  },
  methods: {
    register() {
      console.log(this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  font-size: 0.8rem;
}
input {
  background-color: #fafafa;
  border-radius: 4px;
  padding: 12px;
  margin: 2px 0;
  border: 1px solid transparent;
}
::-webkit-input-placeholder {
  font-size: 0.7rem;
}
.register {
  max-width: 800px;
  margin: 150px auto;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 24px;
  padding: 32px;
  text-align: left;
  .default-input {
    display: flex;
    flex-direction: column;
  }
  .default-input-theme {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(12, 1fr);
  }
  form {
    hr {
      width: 100%;
      margin: 12px 0;
    }
    .personal-data {
      display: flex;
      flex-direction: column;
      .address-info-1 {
        @extend .default-input-theme;
        margin: 12px 0;
        .street {
          grid-column: span 8;
          @extend .default-input;
        }
        .zip {
          grid-column: span 4;
          @extend .default-input;
        }
      }
      .address-info-2 {
        @extend .default-input-theme;
        .city {
          @extend .default-input;
          grid-column: span 6;
        }
        .country {
          @extend .default-input;
          grid-column: span 6;
        }
      }
    }
    .account-data {
      margin: 48px 0 24px 0;
      display: flex;
      flex-direction: column;
      .email {
        @extend .default-input;
      }
      .password-info {
        @extend .default-input-theme;
        .password {
          grid-column: span 6;
          @extend .default-input;
        }
        .confirm-password {
          grid-column: span 6;
          @extend .default-input;
        }
      }
    }
    .form-footer {
      display: flex;
      justify-content: flex-end;
      .form-button {
        margin: 0 0 0 12px;
        text-decoration: none;
        padding: 12px 16px;
        border-radius: 4px;
        border: 1px solid transparent;
        letter-spacing: 0.05rem;
        font-weight: bold;
        text-transform: uppercase;
        font-family: "Oswald", sans-serif;
      }
      .register-button {
        color: #fff;
        background-color: #333;
        order: 1;
      }
      .sign-in-button {
        color: #333;
        background-color: #f2f2f2;
        order: 0;
      }
    }
  }
}
</style>