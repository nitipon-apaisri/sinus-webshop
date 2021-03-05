<template>
  <div class="edit-acc">
    <div class="edit-form">
      <div class="form-header">
        <button @click="$emit('closeEditAcc')">X</button>
      </div>
      <form @submit.prevent="$emit('editAcc')">
        <section class="personal-data">
          <h2>PERSONAL INFORMAION</h2>
          <hr />
          <div class="name">
            <label for="name">Name</label>
            <input type="text" name="name" v-model="user.name" />
          </div>
          <div class="address-info-1">
            <div class="street">
              <label for="street">Street</label>
              <input type="text" name="street" v-model="user.address.street" />
            </div>
            <div class="zip">
              <label for="zip">Zip</label>
              <input type="text" name="zip" v-model="user.address.zip" />
            </div>
          </div>
          <div class="address-info-2">
            <div class="city">
              <label for="street">City</label>
              <input type="text" name="city" v-model="user.address.city" />
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
          <div class="password-info">
            <div class="password">
              <label for="password">Password</label>
              <input type="password" name="password" />
            </div>
            <div class="confirm-password">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                v-model="user.password"
              />
            </div>
          </div>
        </section>
        <div class="form-footer">
          <button class="register-button form-button">UPDATE</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>