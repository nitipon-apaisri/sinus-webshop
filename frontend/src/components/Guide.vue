<template>
  <section class="guide primary-section-style">
    <h1>GUIDES</h1>
    <div class="contents">
      <div class="content">
        <div class="mock-img"></div>
        <h4>BUY A SKATE</h4>
      </div>
      <div class="content">
        <div class="mock-img"></div>
        <h4>SETUP</h4>
      </div>
      <div class="content">
        <div class="mock-img"></div>
        <h4>TRICKS</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.guide {
  .contents {
    margin: 24px 0 0 0;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-flow: row;
    grid-gap: 20px;
    .content {
      grid-column: span 4;
      .mock-img {
        background-color: #f2f2f2;
        width: 100%;
        height: 218px;
        border-radius: 10px;
      }
      h4 {
        margin: 12px 0 0 0;
      }
    }
  }
}
</style>