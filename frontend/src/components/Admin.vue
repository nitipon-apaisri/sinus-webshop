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
      <section class="admin-container">
        <h1>Products</h1>
        <hr />
        <div class="all-products">
          <ul>
            <li v-for="item in products" :key="item._id">
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
                    <font-awesome-icon
                      :icon="['fa', 'edit']"
                      size="lg"
                      @click="edit(item._id)"
                    />
                    <font-awesome-icon :icon="['fa', 'trash']" size="lg" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="user-order-container">
        <h1>Order</h1>
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
    <div class="edit-modal" v-if="editModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3 @click="closeModal">X</h3>
        </div>
        <div class="modal-product-content">
          <div class="product-img">
            <img
              :src="require(`../assets/${this.theProduct.imgFile}`)"
              :alt="this.theProduct.shortDesc"
            />
          </div>
          <form @submit.prevent="changeInfo">
            <h1>PRODUCT INFOMATION</h1>
            <div class="product-input">
              <div class="product-name">
                <label for="productName">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  v-model="theProduct.title"
                />
              </div>
              <div class="product-imgFile-short-desc">
                <div class="imgFile">
                  <label for="productLongDesc">Image File</label>
                  <input
                    type="text"
                    name="productLongDesc"
                    v-model="theProduct.imgFile"
                  />
                </div>
                <div class="short">
                  <label for="productShortDesc">short Description</label>
                  <input
                    type="text"
                    name="productShortDesc"
                    v-model="theProduct.shortDesc"
                  />
                </div>
              </div>
              <div class="product-price-category">
                <div class="price">
                  <label for="price">Price</label>
                  <input
                    type="text"
                    name="productLongDesc"
                    v-model="theProduct.price"
                  />
                </div>
                <div class="category">
                  <label for="category">Category</label>
                  <input
                    type="text"
                    name="category"
                    v-model="theProduct.category"
                  />
                </div>
              </div>
              <div class="long-desc">
                <label for="longDesc">Long Description</label>
                <textarea
                  type="text"
                  name="longDesc"
                  v-model="theProduct.longDesc"
                />
                <button><h3>Update</h3></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      editModal: false,
      theProduct: {
        category: "",
        imgFile: "",
        longDesc: "",
        shortDesc: "",
        price: 0,
        title: "",
        _id: "",
      },
    };
  },
  beforeMount() {
    if (this.products.length <= 0) {
      this.$store.dispatch("products/getAllProducts");
    }
    this.$store.dispatch("user/userData");
    this.$store.dispatch("order/getOrder");
  },
  methods: {
    closeModal() {
      this.editModal = false;
    },
    changeInfo() {
      this.$store.dispatch("products/changeProductInfo", this.theProduct);
    },
    edit(id) {
      this.$store.dispatch("products/getOneProduct", id);
      setTimeout(() => {
        this.editModal = true;
        window.scrollTo(0, 0);
        this.theProduct.category = this.product.category;
        this.theProduct.imgFile = this.product.imgFile;
        this.theProduct.longDesc = this.product.longDesc;
        this.theProduct.shortDesc = this.product.shortDesc;
        this.theProduct.price = this.product.price;
        this.theProduct.title = this.product.title;
        this.theProduct._id = this.product._id;
      }, 300);
    },
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
    ...mapGetters("products", ["products"]),
    ...mapGetters("products", ["product"]),
    ...mapState("user", ["loading"]),
  },
};
</script>

<style lang="scss" scoped>
</style>