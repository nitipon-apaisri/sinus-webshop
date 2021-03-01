<template>
  <div class="wrapper">
    <Adminpanel />
  </div>
</template>

<script>
import Adminpanel from "../components/Adminpanel.vue";
export default {
  components: { Adminpanel },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>