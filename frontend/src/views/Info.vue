<template>
  <div class="content">
    <Single />
  </div>
</template>

<script>
import Single from "../components/Single.vue";
export default {
  components: { Single },
};
</script>

<style>
.content {
  max-width: 1440px;
  margin: 100px auto;
}
</style>