<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  // font-family Avenir, Helvetica, Arial, sans-serif
  // -webkit-font-smoothing antialiased
  // -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
@font-face
  font-family CustomFont
  src local(PingFang SC), local(Microsoft YaHei), local(Noto Sans S Chinese)
@font-face
  font-family CustomFont;
  unicode-range U+0030-0039
  src local(Helvetica)
body
  font-family CustomFont, sans-serif

</style>
