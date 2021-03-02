<template>
  <section class="brands primary-section-style">
    <h1>BRANDS</h1>
    <div class="brands-logo">
      <div class="logo">
        <img src="../assets/brands/DCShoes_logo.svg" alt="brand-logo" />
      </div>
      <div class="logo">
        <img src="../assets/brands/primitiveLogo.png" alt="brand-logo" />
      </div>
      <!-- prettier-ignore -->
      <div class="logo">
        <img src="../assets/brands/stussy-1-logo-png-transparent.png" alt="brand-logo"/>
      </div>
      <div class="logo">
        <img src="../assets/brands/adidas-logo-tran.png" alt="brand-logo" />
      </div>
      <div class="logo">
        <img src="../assets/brands/nikiLogo.png" alt="brand-logo" />
      </div>
      <div class="logo">
        <img src="../assets/brands/dgk-logo-tran.png" alt="brand-logo" />
      </div>
      <div class="logo">
        <img src="../assets/brands/pngegg.png" alt="brand-logo" />
      </div>
      <div class="logo">
        <img src="../assets/brands/elementLogo.png" alt="brand-logo" />
      </div>
      <div class="logo">
        <img src="../assets/brands/evisenLogo.png" alt="brand-logo" />
      </div>
      <div class="logo">
        <img src="../assets/brands/zeroLogo.png" alt="brand-logo" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.brands {
  .brands-logo {
    margin: 16px 0 0 0;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 20px;
    grid-template-columns: repeat(10, 1fr);
    .logo {
      box-sizing: border-box;
      width: 108px;
      height: 108px;
      padding: 12px 0;
      grid-column: span 1;
      background-color: #fcfcfc;
      display: flex;
      border-radius: 8px;
      justify-content: center;
      img {
        align-self: center;
        max-width: 80px;
        max-height: 60px;
      }
    }
  }
}
</style>