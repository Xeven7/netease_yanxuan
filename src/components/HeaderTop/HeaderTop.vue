<template>
  <header class="header">
    <slot name="headerLeft"></slot>
    <router-link to="/search">
      <i class="iconfont icon-sousuo"></i>
      <span class="headerMiddle">搜索商品, 共19914款好物</span>
    </router-link>
    <slot name="headerRight"></slot>
  </header>
</template>

<script>
  export default {
    name: "header-top",
    props: {
      title: String
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-search
        font-size 25px
        color #fff
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 20px
        color #fff
        display block
    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>
