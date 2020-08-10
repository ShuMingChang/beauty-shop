<template>
  <div class="shopping-cart-list">
    <div class="pink-container-wall"/>
    <div class="cart-list-container">
      <div class="price-black">
        <span class="price-lable">Total</span><span class="total-price">$56.18</span>
      </div>
      <div v-for="(product, index) in productList" :key="index" class="cart-product-black">
        <div class="product-img-black">
          <img alt="icon" :src="require(`@/assets/icons/png/${product.pic}.png`)" class="product-img">
        </div>
        <div class="cart-product-detail">
          <p class="product-label">{{`${product.quantity}x ${product.lable}`}}</p>
          <span class="product-price">{{ product.price }}</span><span class="product-capacity">{{ product.capacity }}</span>
        </div>
      </div>
      <input class="coupon-input" type="text" placeholder="Apply Coupon">
      <div class="price-black">
        <span class="price-lable">Total</span><span class="total-price">$56.18</span>
      </div>
      <div class="price-black">
        <span class="price-lable">Tax</span><span class="total-price">$00</span>
      </div>
    </div>
    <div class="continue-black">
      <p>Continue</p>
    </div>
  </div>
</template>

<script>
import gsap, { Back } from 'gsap'

export default {
  name: 'ShoppingCartList',
  data () {
    return {
      productList: [
        { lable: 'Gentle Skin Cleanser', pic: 'GentleSkinCleanser', capacity: '300 Ml', price: '$12.29', quantity: 1 },
        { lable: 'Hand Cream', pic: 'HandCream', capacity: '300 Ml', price: '$12.29', quantity: 1 },
        { lable: 'Eye Cream', pic: 'EyeCream', capacity: '300 Ml', price: '$10.12', quantity: 2 }
      ]
    }
  },
  mounted () {
    gsap.from('.cart-product-black', {
      duration: 1,
      x: 150,
      ease: Back.easeOut,
      stagger: 0.2,
      opacity: 0
    })
  }
}
</script>

<style lang="stylus">
.shopping-cart-list
  display flex
  flex-direction column
  align-items center
  box-sizing: border-box
  height 100vh
  min-height 896px
  background-color #FFF5F5
  overflow hidden
  position relative
  .pink-container-wall
    position absolute
    top 0
    left 0
    width 100vw
    height 798px
    background-color #FF7272
    border-radius 0px 0px 40px 40px
  .continue-black
    position absolute
    bottom 0
    width 100vw
    height 95px
    color #000000
    display flex
    justify-content center
    align-items center
    font-size 25px
    opacity 1
.cart-list-container
  position absolute
  top 0
  left 0
  width 100vw
  height 758px
  overflow hidden
  padding 60px 30px 0 30px
  box-sizing: border-box
  display flex
  flex-direction column
  .price-black
    display flex
    align-self flex-end
    justify-content space-between
    align-items baseline
    flex-direction row
    width 150px
    height 40px
    color #ffffff
    margin-bottom 12px
    .total-price
      font-size 30px
      line-height 40px
      .price-lable
        font-size 20px
        line-height 27px
  input[type=text], select
    width 350px
    height 60px
    padding 20px 74px
    margin 8px 0
    display inline-block
    border 0px solid
    box-sizing border-box
    text-align center
    background-color #FF7272
    border-color #FFFFFF
    border-width 1px
    border-style dashed
    color #FFFFFF
  input[type=text]:focus
    outline none
  .coupon-input::placeholder
    color #FFFFFF
  .cart-product-black
    width 100vw
    height 125px
    display flex
    margin-bottom 35px
    .product-img-black
      width 110px
      height 125px
      background-color #FFFFFF
      box-sizing border-box
      padding 20px
      border-radius 20px
      display flex
      justify-content center
      align-items center
      .product-img
        max-width 80px
        max-height 95px
    .cart-product-detail
      box-sizing border-box
      color #FFFFFF
      padding-top 30px
      padding-left 25px
      text-align left
      .product-label
        font-size 20px
        line-height 27px
        margin 0
      .product-price
        font-size 22px
        line-height 30px
        margin-right 12px
      .product-capacity
        font-size 15px
        line-height 20px
</style>
