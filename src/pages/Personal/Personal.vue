<template>
  <div>
    <header class="header">
      <div class="toHome">
        <a href="javascript:;">
          <i class="iconfont icon-shouye"></i>
        </a>
      </div>
      <div class="title">
        <a href="javascript:;" class="titleImg"></a>
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
    <div class="wrap">
      <div class="defaultInfo">
        <div class="infoWrap">
          <div class="logoWrap">
            <img src="./images/logo.png" alt="">
          </div>
          <div class="btnWrap">
            <div class="mobileBtn">
              <i class="iconfont icon-shouji"></i>
              <span>手机号码登陆</span>
            </div>
            <div class="emailBtn">
              <i class="iconfont icon-e-mail_icon"></i>
              <span>邮箱账号登陆</span>
            </div>
            <div class="loginBtn">
              <span>手机号快速注册</span>
              <i class="iconfont icon-rightarrow"></i>
            </div>
          </div>
        </div>
        <div class="bottomIcons">
          <div class="bottomItem">
            <span class="item">
              <i class="iconfont icon-changyonglogo28"></i>
              <span>微信</span>
            </span>
          </div>
          <div class="bottomItem">
            <span class="item">
              <i class="iconfont icon-QQ"></i>
              <span>QQ</span>
            </span>
          </div>
          <div class="bottomItem">
            <span class="item">
              <i class="iconfont icon-weibo"></i>
              <span>微博</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personal"
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
      .titleImg
        /*font-size .6rem
        color #333
        font-weight bold
        padding 0.16rem
        vertical-align middle*/
        background url("./images/personalLogo.png") no-repeat
        width 2.29333rem
        height .72rem
        background-position 0 -1.70667rem
        background-size 2.29333rem 5.6rem
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        margin auto
    .rightIcons
      display flex
      align-items center
      margin-right .02rem
      .iconfont
        font-size .56rem
        margin-left .4rem
  .wrap
    height 17rem
    .defaultInfo
      position relative
      height 100%
      background #F2F5F4
      .logoWrap
        text-align center
        padding-top 2.13333rem
        padding-bottom 2.13333rem
        img
          width 3.57333rem
          height 1.2rem
      .btnWrap
        padding 0 .53333rem
        margin-bottom 2.73333rem
        .mobileBtn
          display flex
          align-items center
          justify-content center
          height 1.25333rem
          line-height 1.25333rem
          border-radius 2px
          margin-bottom .42667rem
          font-size .37333rem
          color #fff
          border 1px solid #b4282d
          background-color #b4282d
          i
            margin-right .21333rem
            font-size .7rem
        .emailBtn
          display flex
          align-items center
          justify-content center
          height 1.25333rem
          line-height 1.25333rem
          border-radius 2px
          margin-bottom .42667rem
          font-size .37333rem
          color #b4282d
          background-color transparent
          border 1px solid #b4282d
          i
            margin-right .21333rem
            font-size .7rem
        .loginBtn
          color #333
          font-size .37333rem
          text-align center
          width 100%
          i
            font-weight bold
      .bottomIcons
        position absolute
        width 100%
        left 0
        bottom 1.66667rem
        height .53333rem
        text-align center
        .bottomItem
          height .53333rem
          border-right 1px solid #979797
          display inline-block
          text-align center
          padding 0 .53333rem
          &:nth-child(3)
            border none
          &:nth-child(1)
            .iconfont
              font-size .5rem
          .item
            /*height .53333rem
            position relative
            top -0.13333rem*/
            i
              color #7F7F7F
              font-size .42rem
              /*width: .53333rem;
              height: .53333rem;
              position relative
              top .13333rem*/
            span
              font-size .37333rem
              line-height .53333rem
              height .53333rem
              color #7F7F7F
              margin-left .06667rem
</style>
