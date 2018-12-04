<template>
    <header class="header">
      <div class="search">
        <i class="iconfont icon-sousuo1"></i>
        <span class="searchInfo">搜索商品, 共19915款好物</span>
      </div>
    </header>
</template>

<script>
  export default {
    name: "category"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    bottom-border-1px(#d9d9d9)
    position relative
    display flex
    align-items center
    height 1.17333rem
    padding 0 .4rem
    background-color #fff
    .search
      display flex
      flex 1
      align-items center
      justify-content center
      height .74667rem
      font-size .37333rem
      background-color #EDEDED
      border-radius .10667rem
      color #666
      .iconfont
        vertical-align middle
        display inline-block
        font-size .37333rem
        width .37333rem
        height .37333rem
        margin-right .13333rem
</style>
