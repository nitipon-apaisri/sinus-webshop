<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Oswald:wght@400;500;600;700&display=swap");
@import "./scss/main";
body {
  margin: 0 !important;
  background-color: #f5f6fc;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    margin: 0;
    font-family: "Oswald", sans-serif;
  }
  p {
    margin: 0;
    font-family: "Noto Sans", sans-serif;
  }
  button {
    cursor: pointer;
  }
  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
