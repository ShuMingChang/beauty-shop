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
  name: 'CategorySwiper',
  data () {
    return {
      bs: {},
      tween: {}
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
        }
      })
      this.tween = gsap.from('.small-icon', {
        scale: 0.90,
        transformOrigin: '50% 100%',
        stagger: 1
      })
      this.tween.pause()
      this.bs.on('scroll', pos => {
        const wrapperWidth = this.$refs.scroll.offsetWidth
        const contentWidth = this.$refs.scrollContent.offsetWidth
        const scrollPercent = pos.x / (wrapperWidth - contentWidth)
        this.tween.progress(gsap.utils.clamp(0, 1, scrollPercent))
      })
    }
  }
}
</script>

<style  lang="stylus">
.category-swiper
  width 100%
  margin 0px auto 40px auto
  overflow hidden
  white-space nowrap
.scroll-content
  display inline-block
</style>
