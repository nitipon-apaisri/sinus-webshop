<template>
  <div class="add-modal" v-if="addModal">
    <div class="modal-content">
      <div class="modal-header">
        <h3 @click="$emit('closeModal')">X</h3>
      </div>
      <div class="modal-product-content">
        <div class="product-img">
          <!-- <img
            :src="require(`../assets/${this.theProduct.imgFile}`)"
            :alt="this.theProduct.shortDesc"
          /> -->
        </div>
        <form @submit.prevent="$emit('newProduct')">
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
              <button><h3>ADD</h3></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theProduct: Object,
    addModal: Boolean,
  },
};
</script>

<style lang="scss" scoped>
</style>