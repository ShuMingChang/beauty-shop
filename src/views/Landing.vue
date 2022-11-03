<template>
  <div class="landing">
    <div ref="logo" class="logo" @click="handelClick">
      <H1 class="logo-text">N8</H1>
    </div>
  </div>
</template>

<script>
import gsap, { Power4 } from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { pxToVWToPx } from '@/utils'

export default {
  name: 'Landing',
  components: {},
  methods: {
    handelClick () {
      const { logo } = this.$refs
      const logoTextAfter = CSSRulePlugin.getRule('.logo-text:after')
      gsap.to(logoTextAfter, {
        duration: 1,
        transform: 'scale(15)',
        onComplete: () => {
          gsap.to(logoTextAfter, {
            duration: 1,
            transform: 'scale(1)',
            ease: Power4.easeOut
          })
          gsap.to('.logo', {
            duration: 1,
            y: -logo.offsetTop + pxToVWToPx(48.5),
            onComplete: () => this.$router.push('/product')
          })
        }
      })
    }
  }
}
</script>
<style lang="stylus">
.landing
  display flex
  justify-content center
  align-items center
  box-sizing: border-box
  height 100vh
  background-color #FFF5F5
  padding 48.5px 0px
  overflow hidden
.logo
  border-radius 50%
  width 75px
  height 75px
.logo-text
  color #FFFFFF
  position relative
  z-index 0
  font-size 30px
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
    scale 1
</style>
