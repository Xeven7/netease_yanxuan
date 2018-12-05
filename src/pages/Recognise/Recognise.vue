<template>
  <div>
    <header class="header">
      <div class="toHome">
        <a href="javascript:;">
          <i class="iconfont icon-shouye"></i>
        </a>
      </div>
      <div class="title">
        <a href="javascript:;" class="found">发现</a>
        <a href="javascript:;" class="chosen">甄选家</a>
      </div>
      <div class="rightIcons">
        <a href="javascript:;">
          <i class="iconfont icon-sousuo1"></i>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-gouwuche1"></i>
        </a>
      </div>
    </header>
    <div class="nav">
      <nav class="navList">
        <a href="javascript:;" class="item">推荐</a>
        <a href="javascript:;" class="item">达人</a>
        <a href="javascript:;" class="item">上新</a>
        <a href="javascript:;" class="item">晒单</a>
        <a href="javascript:;" class="item">HOME</a>
      </nav>
    </div>
  </div>

</template>

<script>
  export default {
    name: "recognise"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    display flex
    justify-content space-between
    max-width 768px
    position relative
    height 1.34rem
    background-color #FAFAFA
    border-bottom .01rem solid #d9d9d9
    padding 0 .26rem 0 .24rem
    .toHome
      display flex
      align-items center
      a
        i
          font-size .6rem
    .title
      position relative
      left .5rem
      display flex
      align-items center
      justify-content center
      width 4.28rem
      height 100%
      text-align center
      font-size .28rem
      color #7F7F7F
      .found
        font-size .54rem
        color #b4282d
        font-weight bold
        padding 0.16rem
        vertical-align middle
      .chosen
        font-size .42rem
        padding 0.16rem
    .rightIcons
      display flex
      align-items center
      margin-right .02rem
      .iconfont
        font-size .56rem
        margin-left .4rem
  .nav
    width 100%
    position absolute
    top 1.34rem
    height .82rem
    background #fafafa
    border-bottom .01rem solid #d9d9d9
</style>
