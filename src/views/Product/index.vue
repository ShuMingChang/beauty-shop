<template>
  <div class="product">
    <div ref="logo" class="logo" @click="handelClick">
      <H1 class="logo-text">N8</H1>
    </div>
    <div class="search-input-black slide-in">
      <svg-icon icon-class="search" class="search-icon"/>
      <input class="search-input" type="text" placeholder="Search products">
    </div>
    <category-swiper class="slide-in">
      <div v-for="(category, index) in categoryList" :key="index" :class="{'small-icon': index > 2}" class="category-item">
        <svg-icon :icon-class="category.svgIcom"  class="category-icon"/>
      </div>
    </category-swiper>
    <category-swiper class="slide-in2">
      <ul ref="productTypes" class="productTypes">
        <li v-for="(productType, index) in productTypeList" :key="index" :class="{'selected': index === currentSelected }" class="productType-lable" @click="handelProductTypeClick(index)">
          {{ productType.lable }}
        </li>
      </ul>
    </category-swiper>
    <product-swiper class="product-list slide-in2">
      <div v-for="(product, index) in productList" :key="index" :class="{'fadeIn': index > 1, 'fadeOut': index < productList.length - 2}" class="product-item" @click="handelProductClick">
        <div class="product-description">
          <p>{{product.lable}}</p>
          <p>{{product.price}}<span>{{product.capacity}}</span></p>
        </div>
        <div class="product-image-black">
          <img :src="require(`@/assets/icons/png/${product.pic}.png`)" :class="`product-img ${product.pic}`">
        </div>
      </div>
    </product-swiper>
    <bottom-navigation>
    </bottom-navigation>
    <div class="product-cutscenes"/>
  </div>
</template>

<script>
import CategorySwiper from './components/CategorySwiper'
import ProductSwiper from './components/ProductSwiper'
import BottomNavigation from './components/BottomNavigation'
import gsap, { Back } from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { pxToVWToPx } from '@/utils'

export default {
  name: 'Product',
  components: {
    CategorySwiper,
    ProductSwiper,
    BottomNavigation
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      categoryList: [
        { svgIcom: 'category-icon1' },
        { svgIcom: 'category-icon2' },
        { svgIcom: 'category-icon3' },
        { svgIcom: 'category-icon4' },
        { svgIcom: 'category-icon5' },
        { svgIcom: 'category-icon6' }
      ],
      productTypeList: [
        { lable: 'Skin' },
        { lable: 'Hair' },
        { lable: 'Personal Care' },
        { lable: 'Other' }
      ],
      productList: [
        { lable: 'Gentle Skin Cleanser', pic: 'GentleSkinCleanser', capacity: '300 Ml', price: '$12.29' },
        { lable: 'Eye Cream', pic: 'EyeCream', capacity: '300 Ml', price: '$10.12' },
        { lable: 'Hand Cream', pic: 'HandCream', capacity: '300 Ml', price: '$12.29' },
        { lable: 'Bath Salts', pic: 'BathSalts', capacity: '150 Ml', price: '$11.29' }
      ],
      currentSelected: 0
    }
  },
  methods: {
    init () {
      gsap.timeline().from('.slide-in', {
        duration: 1,
        x: pxToVWToPx(100),
        y: pxToVWToPx(20),
        ease: Back.easeOut,
        opacity: 0,
        stagger: 0.2
      }).from('.slide-in2', {
        duration: 1,
        x: pxToVWToPx(100),
        y: pxToVWToPx(20),
        ease: Back.easeOut,
        opacity: 0,
        stagger: 0.2
      })
    },
    handelClick () {
      this.$router.push('/')
    },
    handelProductTypeClick (index) {
      const from = this.$refs.productTypes.children[this.currentSelected].offsetLeft
      const to = this.$refs.productTypes.children[index].offsetLeft
      const move = to - from
      const selectedAfter = CSSRulePlugin.getRule('.productTypes .selected:after')
      this.tween = gsap.to(selectedAfter, {
        duration: 0.5,
        transform: `translateX(${pxToVWToPx(move)}px)`,
        ease: Back.easeInOut,
        onComplete: () => {
          this.tween.pause()
          this.tween.progress(0)
          this.currentSelected = index
        }
      })
    },
    handelProductClick () {
      gsap.to('.product-cutscenes', {
        duration: 1.5,
        transform: 'scale(30)',
        onComplete: () => {
          this.$router.push('/productDetail')
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.product
  display flex
  flex-direction column
  align-items center
  box-sizing: border-box
  height 100vh
  min-height 920px
  background-color #FFF5F5
  padding 48.5px 0 70px 0
  overflow hidden
  .search-input-black
    position relative
    margin-bottom 30px
  .search-input::placeholder
      font-size 15px
      line-height 20px
  input[type=text], select
    width 375px
    height 60px
    padding 20px 74px
    margin 8px 0
    display inline-block
    border 0px solid
    border-radius 30px
    box-sizing border-box
  input[type=text]:focus
    outline none
  .search-icon
    position absolute
    width 25px
    height 25px
    top 26px
    left 30px
.logo
  border-radius 50%
  width 75px
  height 75px
  margin-bottom 20px
.logo-text
  color #FFFFFF
  position relative
  z-index 0
  &:after
    content: ''
    display inline-block
    background-color #FF7272
    border-radius 50%
    width 75px
    height 75px
    position absolute
    top -20px
    left 0px
    z-index -1
    scale 10
.category-item
  width 80px
  height 80px
  background-color white
  border-radius 20px
  margin 0px 10px
  text-align center
  display inline-block
  line-height 100px
  &:first-child
    margin-left 20px
.category-icon
  font-size 43px
.productTypes
  text-align left
  padding-inline-start 0px
  margin-block-start 0px
  margin-block-end 0px
  display inline-block
  .selected
    color #D63434
    z-index 0
    position relative
    &:after
      z-index -1
      content ''
      background-color #D63434
      display inline-block
      height 4px
      width 20px
      left 0px
      bottom 0px
      position absolute
.productType-lable
  display inline
  color #FFB5B5
  font-size 22px
  line-height 30px
  margin 0 20px
.product-list
  margin-bottom 0px
.product-item
  width 240px
  height 375px
  background-color white
  border-radius 30px
  margin 0px 20px
  line-height 365px
  padding 30px 0px
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  box-sizing border-box
  .product-description
    margin-bottom 5px
    > p
      line-height 24px
      font-size 18px
      margin 0
      > span
        line-height 24px
        font-size 12px
        margin-left 5px
  .product-image-black
    width 175px
    height 295px
    display flex
    justify-content center
    align-items center
    overflow hidden
    .product-img
      width 100%
    .GentleSkinCleanser
      width 60%
    .EyeCream
      width 75%
    .BathSalts
      width 85%
.product-cutscenes
  background-color #ffffff
  position fixed
  width 75px
  height 75px
  bottom -75px
  left -75px
  border-radius 50%
</style>
