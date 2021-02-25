<template>
  <div class="container">
    <div class="image">
      <img src="" alt="" />
    </div>
    <div>
      <ul class="service">
        <li>SHIPPING</li>
        <li>|</li>
        <li>EXCHANGE</li>
        <li>|</li>
        <li>RETURN</li>
        <li>|</li>
        <li>FAQ</li>
        <li>|</li>
        <li>SIZE CONVERSION</li>
        <li>|</li>
        <li>CUSTOMER SERVICE</li>
      </ul>
    </div>
    <div>
      <ul class="options">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  width: 100%;
  height: 35vh;
  background-color: rgba(0, 0, 0, 0.89);
}
.service {
  color: white;
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: space-around;
  margin-left: 5vw;
  margin-right: 5vw;
   flex-wrap: wrap;
   grid-column: 3;
}
.options{
    color: white;
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 10vh;


}
</style>