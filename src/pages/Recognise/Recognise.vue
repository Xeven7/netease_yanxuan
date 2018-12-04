<template>
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
</template>

<script>
  export default {
    name: "recognise"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    /*display flex*/
    /*justify-content space-between*/
    max-width 768px
    position relative
    height 1.34rem
    border-bottom .01rem solid #d9d9d9
    padding 0 .26rem 0 .24rem
    .toHome
      float left
      clearFix()
      a
        display block
        height 1.34rem
        i
          width: .46rem;
          height 1.34rem
        /*display flex*/
        /*align-items center*/
        /*height 1.34rem*/
        /*width .46rem*/
        /*.iconfont*/
          /*font-size .56rem*/
    .title
      /*position absolute
      width 3.2rem
      height 100%
      line-height 1rem
      text-align center
      left 50%
      top 0
      margin-left -1.6rem
      font-size .28rem
      color #7F7F7F*/
      .found
        /*font-size .5rem*/
        /*color #b4282d*/
        /*font-weight bold*/
        /*padding 0 .16rem*/
        /*vertical-align middle*/
    .rightIcons
      float right
      clearFix()

</style>
