<template>
  <div class="shipping-menu">
      <div class="menu">
          <ul>
              <li><p>SHOPPING CART</p></li>
              <li><img src="../assets/Rectangle.svg" alt=""></li>
              <li><p>SHIPPING INFO</p></li>
              <li><img src="../assets/Rectangle.svg" alt=""></li>
              <li><p>PAYMENT</p></li>
              <li><img src="../assets/Rectangle.svg" alt=""></li>
              <li><p>CONFIRMATION</p></li>
              <li><img src="../assets/Rectangle.svg" alt=""></li>
              <li><p>DONE</p></li>
          </ul>
      </div>
      <br>
      <br>
      <div class="info-h1">
      <h1 class="D-I">DELIVERY INFORMATION</h1>
      <img class="truck-img" src="../assets/BlackTruck.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.shipping-menu{
   width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    padding: 30px 40px;
    border-radius: 20px;
    text-align: left;
}

.menu > ul{
    display: flex;
    padding: 0;
    justify-content: center;
  
}

.menu > ul > li{
    list-style: none;
   padding-left:5px ;
   padding-right:5px ;
    
}
.menu > ul > li > p{
    margin: 0 6px 0 0;
    align-self: center;
    font-weight: 700;
    font-size: 16px;

     
}
.info-h1{
    display: flex;
}
.D-I{
    margin-right: 2vw;
}

</style>