<template>
    <header class="header">
      <span class="logo">购物车</span>
      <div class="card">
        <a href="javascript:;">
          <span class="cardInfo">领券</span>
        </a>
      </div>
    </header>
</template>

<script>
  export default {
    name: "cart"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    bottom-border-1px(#d9d9d9)
    height 1.17333rem
    padding 0 .4rem
    line-height 1.17333rem
    text-align center
    background-color #fff
    position relative
    .logo
      display inline-block
      font-size .48rem
    .card
      position absolute
      top 0
      right .4rem
      font-size .4rem
      .cardInfo
        position relative
        color #B4282D
</style>
