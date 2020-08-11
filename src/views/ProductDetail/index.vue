<template>
  <div class="product-detail">
    <div class="pink-container-wall"/>
    <div class="white-container-wall"/>
    <div class="detail-container">
      <div class="img-container">
        <img :src="require(`@/assets/icons/png/GentleSkinCleanser2.png`)" :width="pxToVWToPx(140)" :height="pxToVWToPx(280)" :style="`top: ${pxToVWToPx(160)}px; left:${pxToVWToPx(185)}px`" class="detail-img">
        <img :src="require(`@/assets/icons/png/GentleSkinCleanser.png`)" :width="pxToVWToPx(172)" :height="pxToVWToPx(408)" :style="`top: ${pxToVWToPx(82)}px; left:${pxToVWToPx(105)}px`" class="main-detail-img1">
        <img :src="require(`@/assets/icons/png/GentleSkinCleanser.png`)" :width="pxToVWToPx(172)" :height="pxToVWToPx(408)" :style="`top: ${pxToVWToPx(80)}px; left:${pxToVWToPx(90)}px`" class="main-detail-img">
      </div>
      <div class="description">
        <p class="lable">Gentle Skin Cleanser</p>
        <p class="sublable">$12.29<span>300 Ml</span></p>
        <p class="description-detail">
          Formulated with pure fermented green tea extract in
          lieu of distilled water, TonyMoly Chok Chok Green
          Tea Watery Cream provides intense hydration
          without being sticky or too heavy on skin.
        </p>
        <p class="more">View more</p>
      </div>
    </div>
    <div class="switch-ml">
      <div class="switch-button"/>
      <span class="switch-lable-left" @click="isSwitch = true" >150 ML</span>
      <span class="switch-lable-right" @click="isSwitch = false">300 ML</span>
    </div>
    <div class="continue-black">
      <p>Continue</p>
    </div>
    <div class="add-cart">
      <div class="add-number">
        <span class="add-number-button" @click="quantity > 1 && (quantity -= 1)">-</span><span>{{quantity}}</span><span class="add-number-button" @click="quantity += 1">+</span>
      </div>
      <span class="add-cart-button" @click="handelAddProduct">Add To Bag</span>
    </div>
    <div class="detail-cutscenes"/>
    <div class="cutscenes-container">
      <div class="pink-cutscenes"/>
    </div>
  </div>
</template>

<script>
import gsap, { Back } from 'gsap'
import { pxToVWToPx } from '@/utils'

export default {
  name: 'ProductDetail',
  data () {
    return {
      isSwitch: true,
      switchTween: {},
      mainTween: {},
      backTween: {},
      mainTweenBack1: {},
      quantity: 1
    }
  },
  mounted () {
    this.init()
    this.switchTween = gsap.to('.switch-button', {
      duration: 0.5,
      x: pxToVWToPx(52),
      paused: true
    })
    this.mainTween = gsap.to('.main-detail-img', {
      duration: 1,
      rotation: -30,
      opacity: 0,
      transformOrigin: '50% 100%',
      paused: true,
      onComplete: () => {
        gsap.set('.detail-img', {
          opacity: 0
        })
      }
    })
    this.backTween = gsap.to('.detail-img', {
      duration: 1,
      rotation: -5,
      scale: 1.6,
      y: pxToVWToPx(60),
      transformOrigin: '100% 100%',
      paused: true,
      onComplete: () => {
        gsap.set('.main-detail-img1', {
          opacity: 1
        })
      }
    })
    this.mainTweenBack1 = gsap.to('.main-detail-img1', {
      duration: 1,
      rotation: 5,
      scale: 0.6,
      opacity: 1,
      x: pxToVWToPx(52),
      y: pxToVWToPx(-73),
      transformOrigin: '50% 100%',
      paused: true,
      onComplete: () => {
        gsap.set('.detail-img', {
          opacity: 1
        })
        this.mainTweenBack1.pause()
        this.mainTweenBack1.progress(0)
        gsap.set('.main-detail-img1', {
          opacity: 0
        })
      }
    })
  },
  watch: {
    isSwitch: function (isSwitch) {
      if (isSwitch) {
        this.switchTween.reverse()
        this.mainTween.reverse()
        this.backTween.reverse()
        this.mainTweenBack1.play()
      } else {
        this.switchTween.play()
        this.mainTween.play()
        this.backTween.play()
      }
    }
  },
  methods: {
    init () {
      gsap.timeline().from('.detail-cutscenes', {
        duration: 1.5,
        transform: 'scale(30)'
      }).from(['.pink-container-wall', '.white-container-wall'], {
        duration: 1.5,
        y: pxToVWToPx(-300),
        ease: Back.easeOut
      }, '-=1.3').from(['.main-detail-img', '.detail-img'], {
        duration: 1.5,
        y: pxToVWToPx(-300),
        opacity: 0.5
      }, '-=2.3')
    },
    handelAddProduct () {
      gsap.to('.pink-cutscenes', {
        duration: 1,
        top: 0
      })
      gsap.to('.continue-black', {
        duration: 1,
        opacity: 1
      })
      gsap.to('.add-cart', {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          this.$router.push('shoppingCartList')
        }
      })
    },
    pxToVWToPx: pxToVWToPx
  }
}
</script>

<style lang="stylus">
.product-detail
  display flex
  flex-direction column
  align-items center
  box-sizing: border-box
  height 100vh
  min-height 896px
  background-color #FFF5F5
  overflow hidden
  position relative
.detail-cutscenes
  background-color #ffffff
  position fixed
  width 75px
  height 75px
  bottom  -75px
  right -75px
  border-radius 50%
.cutscenes-container
  position absolute
  top 0
  left 0
  width 100vw
  height 758px
  overflow hidden
  pointer-events none
.pink-cutscenes
  position absolute
  top 798px
  left 0
  width 100vw
  height 798px
  background-color #FF7272
  border-radius 0px 0px 40px 40px
.pink-container-wall
  position absolute
  top 0
  left 0
  width 100vw
  height 798px
  background-color #FF7272
  border-radius 0px 0px 40px 40px
.white-container-wall
  position absolute
  top -30px
  left 0
  width 100vw
  height 445px
  background-color #FFFFFF
  border-radius 0px 0px 40px 40px
.detail-container
  position absolute
  top 0
  left 0
  width 100vw
  height 798px
  overflow hidden
  .img-container
    position relative
    width 100vw
    height 515px
    .main-detail-img, .main-detail-img1, .detail-img
      position absolute
    .main-detail-img1
      opacity 0
.description
  width 100vw
  text-align center
  color #FFFFFF
  .lable
    font-size 24px
    line-height 32px
    margin-block-start 0px
    margin-block-end 0px
  .sublable
    font-size 26px
    line-height 35px
    margin-block-start 0px
    margin-bottom 27px
    > span
      font-size 15px
      line-height 20px
      margin-left 12px
  .description-detail
    font-size 15px
    line-height 21px
    margin 0 8px 25px 8px
  .more
    font-size 16px
    line-height 21px
    position relative
    display inline-block
    z-index 0
    margin-block-start 0px
    margin-block-end 0px
    &:after
      z-index -1
      content ''
      background-color #FFFFFF
      display inline-block
      height 1px
      width 100%
      left 0px
      bottom -15px
      position absolute
.switch-ml
  position absolute
  background-color #CCDCE4
  color #FFFFFF
  width 110px
  height 30px
  border-radius 15px
  top 65px
  right 30px
  .switch-lable-left
    position absolute
    font-size 12px
    line-height 30px
    margin 0 2px
    top 0
    left 7px
  .switch-lable-right
    position absolute
    font-size 12px
    line-height 30px
    margin 0 2px
    top 0
    right 7px
  .switch-button
    position absolute
    background-color #FF7272
    pointer-events none
    width 58px
    height 30px
    border-radius 15px
.add-cart
  position absolute
  bottom 0
  width 100vw
  height 95px
  color #000000
  // margin 35px
  display flex
  justify-content space-between
  align-items center
  .add-number
    margin-left 40px
    font-size 22px
    .add-number-button
      font-size 20px
      margin 0 20px
  .add-cart-button
    margin-right 40px
    font-size 22px
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
  opacity 0
</style>
