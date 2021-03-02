<template>
  <div class="shipping-menu">
    <div class="menu">
      <ul>
        <li><p>SHOPPING CART</p></li>
        <li><img src="../assets/Rectangle.svg" alt="" /></li>
        <li><p>SHIPPING INFO</p></li>
        <li><img src="../assets/Rectangle.svg" alt="" /></li>
        <li><p class="grey">PAYMENT</p></li>
        <li><img src="../assets/Rectangle.svg" alt="" /></li>
        <li><p class="grey">CONFIRMATION</p></li>
        <li><img src="../assets/Rectangle.svg" alt="" /></li>
        <li><p class="grey">DONE</p></li>
      </ul>
    </div>
    <br />
    <br />
    <div class="info-h1">
      <h1 class="D-I">DELIVERY INFORMATION</h1>
      <img class="truck-img" src="../assets/BlackTruck.svg" alt="" />
    </div>
    <div class="Bil-Del">
      <div class="adress-container">
        <h2>BILLING ADRESS</h2>
        <form action="">
          <label for=""
            >Full name
            <input class="input-name" type="text" />
          </label>
          <div>
              <div class="label-adress-post">
          <label for="">Adress </label>
            <label for="">Post </label>
            </div>
          <input class="input-adress" type="text" />
          <input class="input-post" type="text" />
            </div>      
          <label for=""
            >City
            <input class="input-city" type="text" />
            <label for=""
              >Phone No.
              <input type="text" />
            </label>
          </label>
          <label for="">
            <select name="" id="">
              <option value="">Sweden</option>
              <option value="">America</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <h2>DELIVERY METOD</h2>
        <div class="delivery-container">
          <div class="korv">
            <input type="checkbox" />
            <label for="vehicle1">POSTNORD </label>
            <img src="../assets/Postnord.svg" />
            <h3>-79SEK</h3>
          </div>
          <div>
            <input type="checkbox" />
            <label for="vehicle2"
              >UPS - STANDARD <img src="../assets/Ups.svg"
            /></label>
          </div>
          <div>
            <input type="checkbox" />
            <label for="vehicle3"
              >USP - STANDARD PRIORITY <img src="../assets/Ups.svg"
            /></label>
          </div>
          <div>
            <input type="checkbox" />
            <label for="vehicle3"
              >DHL - EXPRESS <img src="../assets/DHL.svg"
            /></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shipping-menu {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 20px;
  text-align: left;
}

.menu > ul {
  display: flex;
  padding: 0;
  justify-content: center;
}

.menu > ul > li {
  list-style: none;
  padding-left: 5px;
  padding-right: 5px;
}
.menu > ul > li > p {
  margin: 0 6px 0 0;
  align-self: center;
  font-weight: 700;
  font-size: 16px;
}
.info-h1 {
  display: flex;
}
.D-I {
  margin-right: 2vw;
}
.grey {
  color: #bdbdbd;
}

form {
  display: flex;
  flex-direction: column;
}
.Bil-Del {
  display: flex;
  justify-content: space-between;
}
.delivery-container {
  display: flex;
  flex-direction: column;
}
.korv {
  display: flex;
  justify-content: space-between;
}

.input-name {
  width: 100%;
}
.input-adress {
width: 70%;
}
.input-post {
    width: 30%;
}
.label-adress-post{
    display: flex;
    justify-content: space-between;
}
</style>