<template>
    <div>
      <header class="header">
        <span class="logo">购物车</span>
        <div class="card">
          <a href="javascript:;">
            <span class="cardInfo">领券</span>
          </a>
        </div>
      </header>
      <div class="ensureInfo">
        <ul class="ensureList">
          <li class="ensureItem">
            <i class="iconfont icon-yuandian"></i>
            <span>30天无忧退货</span>
          </li>
          <li class="ensureItem">
            <i class="iconfont icon-yuandian"></i>
            <span>48小时快速退款</span>
          </li>
          <li class="ensureItem">
            <i class="iconfont icon-yuandian"></i>
            <span>满88元免邮费</span>
          </li>
        </ul>
      </div>
      <div class="main">
        <div class="container">
          <div class="defaultImg"></div>
          <div class="defaultInfo">
            <div class="txt">去添加点什么吧</div>
            <div class="loginBtn">登陆</div>
          </div>
        </div>
      </div>
    </div>
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
  .ensureInfo
    .ensureList
      z-index 1
      display flex
      align-items center
      justify-content space-between
      position relative
      height .93333rem
      padding 0 .4rem
      background #f4f4f4
      .ensureItem
        display flex
        align-items center
        font-size .32rem
        color #666
        span
          font-size .32rem
        i
          vertical-align middle
          margin-right .08rem
          font-size .2rem
  .main
    position fixed
    top 1.17333rem
    left 0
    bottom 0
    z-index 0
    width 100%
    background-color #f4f4f4
    text-align center
    .container
      position absolute
      top -.66667rem
      right 0
      bottom 0
      left 0
      height 4rem
      margin auto
      z-index 0
      .defaultImg
        background url("./images/cart.png") no-repeat
        display inline-block
        vertical-align middle
        width 3.30667rem
        height 3.30667rem
        margin-bottom .10667rem
        background-size 3.30667rem 3.30667rem
        background-position center center

      .defaultInfo
        font-size .37333rem
        color #7f7f7f
        .txt
          margin-bottom .66667rem
          font-size .37333rem
          color #999
        .loginBtn
          margin auto
          width 6.4rem
          height 1.22667rem
          font-size .4rem
          line-height 1.22667rem
          color #fff
          background-color #b4282d
          border-radius .04rem
</style>
