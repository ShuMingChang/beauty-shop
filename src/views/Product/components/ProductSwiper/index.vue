<template>
  <div ref="scroll" class="category-swiper">
    <div ref="scrollContent" class="scroll-content">
      <slot>
        <h1>Category not find</h1>
      </slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import gsap from 'gsap'

export default {
  name: 'ProductSwiper',
  data () {
    return {
      bs: {},
      tween1: {},
      tween2: {},
      tween3: {}
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.bs.destroy()
  },
  methods: {
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        probeType: 3,
        click: true,
        bounce: {
          left: true,
          right: true
        },
        disableMouse: false,
        disableTouch: false
      })
      this.tween2 = gsap.from('.fadeIn', {
        duration: 1,
        scale: 0.80,
        transformOrigin: '50% 100%',
        stagger: 1
      })
      this.tween3 = gsap.to('.fadeOut', {
        duration: 1,
        scale: 0.80,
        transformOrigin: '50% 100%',
        stagger: 1
      })
      this.tween2.pause()
      this.tween3.pause()
      this.bs.on('scroll', pos => {
        const wrapperWidth = this.$refs.scroll.offsetWidth
        const contentWidth = this.$refs.scrollContent.offsetWidth
        const scrollPercent = pos.x / (wrapperWidth - contentWidth)
        this.tween2.progress(gsap.utils.clamp(0, 1, scrollPercent))
        this.tween3.progress(gsap.utils.clamp(0, 1, scrollPercent))
      })
    }
  }
}
</script>

<style  lang="stylus">
.category-swiper
  display flex
  width 100vw
  margin 0px auto 40px auto
  overflow hidden
.scroll-content
  display flex
  flex-wrap nowrap
</style>
