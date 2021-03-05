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
        <div class="maintenance-product">
          <div class="maintenance-products-header">
            <h1>Products</h1>
            <button @click="add">
              <h2>NEW PRODUCT</h2>
              <font-awesome-icon :icon="['fas', 'plus']" size="lg" />
            </button>
          </div>
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
                      <font-awesome-icon
                        :icon="['fa', 'trash']"
                        size="lg"
                        @click="deleteProduct(item._id)"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr />
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
    <EditModal
      :theProduct="this.theProduct"
      :editModal="this.editModal"
      @closeModal="closeModal"
      @changeInfo="changeInfo"
    />
    <AddModal
      :theProduct="this.theProduct"
      :addModal="this.addModal"
      @closeModal="closeModal"
      @newProduct="newProduct"
    />
  </div>
</template>

<script>
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    EditModal,
    AddModal,
  },
  data() {
    return {
      editModal: false,
      addModal: false,
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
      this.addModal = false;
    },
    newProduct() {
      this.$store.dispatch("products/newProduct", this.theProduct);
    },
    changeInfo() {
      this.$store.dispatch("products/changeProductInfo", this.theProduct);
    },
    add() {
      this.addModal = true;
      console.log("Hi");
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
    deleteProduct(id) {
      this.$store.dispatch("products/deleteProduct", id);
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