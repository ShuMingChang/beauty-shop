<template>
  <div class="bottom-navigation">
    <div class="home-button">
      <svg-icon icon-class="home"  class="navigation-icon"/>
      <span>Home</span>
    </div>
    <svg-icon icon-class="cart"  class="navigation-icon"/>
    <svg-icon icon-class="compass"  class="navigation-icon"/>
    <svg-icon icon-class="user"  class="navigation-icon"/>
  </div>
</template>

<script>
export default {
  name: 'BottomNavigation'
}
</script>

<style lang="stylus">
.bottom-navigation
  display flex
  justify-content space-around
  align-items center
  position fixed
  width 100vw
  height 70px
  background-color #FFFFFF
  bottom 0px
  border-radius 30px 30px 0px 0px
.navigation-icon
  font-size 24px
.home-button
  background-color #FF7272
  border-radius 20px
  color #FFFFFF
  width 105px
  height 40px
  line-height 43px
  > span
    font-size 15px
    margin-left 7px
</style>
