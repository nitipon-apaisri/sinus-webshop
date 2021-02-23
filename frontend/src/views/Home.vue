<<<<<<< HEAD
<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
=======
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
>>>>>>> 763ce06fd5acc8c74728eb96c02a25e082ef99e6
