<template>
  <div class="search">
    <input type="text" placeholder="ex. category, brands, .etc" />
    <button>
      <font-awesome-icon :icon="['fas', 'search']" />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search {
  margin: 0 120px;
  input {
    background-color: #f2f2f2;
    border-radius: 2px;
    padding: 6px 12px;
    border: 1px solid transparent;
  }
  ::-webkit-input-placeholder {
    font-size: 0.7rem;
  }
  button {
    @extend input;
  }
}
</style>