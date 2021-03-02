<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="image">
        <img src="../assets/sinus-logo.c1250acc 1.svg" alt="" />
      </div>
      <div>
        <ul class="service">
          <li>
            <p>SHIPPING</p>
            <img src="../assets/WhiteTruck.svg" alt="" />
          </li>
          <li>|</li>
          <li>
            <p>EXCHANGE</p>
            <img src="../assets/ArrowsLeftRight.svg" alt="" />
          </li>
          <li>|</li>
          <li>
            <p>RETURN</p>
            <img src="../assets/ArrowUUpLeft.svg" alt="" />
          </li>
          <li>|</li>
          <li>
            <p>FAQ</p>
            <img src="../assets/Question.svg" alt="" />
          </li>
          <li>|</li>
          <li>
            <p>SIZE CONVERSION</p>
            <img src="../assets/AlignCenterHorizontal.svg" alt="" />
          </li>
          <li>|</li>
          <li>
            <p>CUSTOMER SERVICE</p>
            <img src="../assets/ChatCircleText.svg" alt="" />
          </li>
        </ul>
      </div>
      <div>
        <ul class="options">
          <li class="payment-options">
            PAYMENT OPTIONS
            <ul class="cards">
              <li><img src="../assets/visa.svg" alt="" /></li>
              <li><img src="../assets/Mastercard.svg" alt="" /></li>
              <li><img src="../assets/amex.svg" alt="" /></li>
              <li><img src="../assets/paypal.svg" alt="" /></li>
              <li><img src="../assets/GooglePay.svg" alt="" /></li>
              <li><img src="../assets/ApplePay.svg" alt="" /></li>
            </ul>
          </li>
          <li class="follow-us">
            FOLLOW US
            <ul class="social-media">
              <li><img src="../assets/FacebookLogo.svg" alt="" /></li>
              <li><img src="../assets/InstagramLogo.svg" alt="" /></li>
              <li><img src="../assets/TwitterLogo.svg" alt="" /></li>
              <li><img src="../assets/YoutubeLogo.svg" alt="" /></li>
            </ul>
          </li>
          <li class="legal-notice">
            LEGAL NOTICE
            <ul class="terms-conditions">
              <li class="T-C-P">
                <p>TERMS & CONDITIONS</p>
                <p class="privacy">PRIVACY</p>
              </li>
            </ul>
          </li>
        </ul>
        <div class="copyright">
          <p>© SINUS SKATE SHOP 2020</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.T-C-P {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.privacy {
  align-self: flex-start;
}
.cards {
  list-style: none;
  display: flex;
  padding: 0;
  padding-top: 20px;
}
.terms-conditions {
  list-style: none;
  display: flex;
  padding: 0;
  padding-top: 20px;
}
.social-media {
  list-style: none;
  display: flex;
  padding: 0;
  padding-top: 20px;
}

.shipping {
  display: flex;
  align-items: center;
}
.footer-container {
  width: 100%;
  margin: 80px 0 0 0;
  background-color: rgba(0, 0, 0, 0.89);
}
.footer-content {
  box-sizing: border-box;
  padding: 16px;
  max-width: 1440px;
  margin: 0 auto;
}
.service {
  color: white;
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: space-around;
  margin-left: 5vw;
  margin-right: 5vw;
}
.service > li {
  display: flex;
}
.service > li > p {
  margin: 0 6px 0 0;
  align-self: center;
}

.options {
  color: white;
  list-style: none;
  display: flex;
  padding: 0;
  height: 10vh;
  padding-top: 3vh;
  justify-content: space-around;
}
.image {
  display: flex;
  padding: 30px;
}

.payment-options {
  padding-bottom: 0px;
}

.cards > li {
  padding-right: 10px;
  padding-left: 10;
}

.copyright {
  color: white;
  margin-top: 5vh;
}
</style>