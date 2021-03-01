<template>
  <div class="wrapper">
    <button @click="loggin">Logga in</button>
    <button @click="getUser">User</button>
    <button @click="addProduct">Add product</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Short desc</th>
          <th>Price</th>
          <th>Img url</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product._id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.shortDesc }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.imgFile }}</td>
          <td>
            <button @click="deleteProduct(product._id)">Delete me</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("cat", ["products"]),
  },
  created() {
    this.$store.dispatch("cat/getProducts");
  },
  methods: {
    loggin() {
      this.$store.dispatch("auth/submitUser");
    },
    getUser() {
      this.$store.dispatch("userCheck/user");
    },
    addProduct() {
      this.$store.dispatch("addProduct/addProduct");
    },
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct/deleteProduct", id);
      this.products.splice(id, 1);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 20px;
}

ul {
  list-style: none;
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #333;
  color: white;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: rgb(165, 165, 165);
}

tr:hover {
  background-color: rgb(252, 249, 105);
}

thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
</style>