<template>
  <div>
    <header class="header">
      <div class="toHome">
        <router-link to="/home">
          <i class="iconfont icon-shouye"></i>
        </router-link>
      </div>
      <div class="title">
        <a href="javascript:;" class="titleImg"></a>
      </div>
      <div class="rightIcons">
        <router-link to="/search">
          <i class="iconfont icon-sousuo1"></i>
        </router-link>
        <router-link to="cart">
          <i class="iconfont icon-gouwuche1"></i>
        </router-link>
      </div>
    </header>
    <div class="loginWrap">
      <div class="logo">
        <img src="./images/logo.png" alt="">
      </div>
      <div class="mainLogin">
        <div class="phoneLogin">
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="pwd">
          <input type="text" placeholder="请输入密码">
          <span class="getCode">获取验证码</span>
        </div>
        <div class="loginBtn">
          <span>登陆</span>
        </div>
        <div class="otherBtn">
          <span>其他登陆方式</span>
        </div>
        <div class="register">
          <span>注册账号</span>
          <i class="iconfont icon-rightarrow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "phone-login"
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
  .loginWrap
    margin-top .8rem
    .logo
      text-align center
      img
        width: 2.56rem;
        height: .85333rem;
    .mainLogin
      margin-top: 2.2rem;
      display flex
      flex-wrap wrap
      justify-content center
      .phoneLogin, .pwd
        width 80%
        border-bottom .03rem solid #EAEAEA
        padding-bottom .4rem
        input
          width 100%
          height 1rem
      .pwd
        display flex
        align-items center
        margin-top .4rem
        margin-bottom .4rem
        input
          width 70%
        .getCode
          padding .16rem
          font-size .36rem
          display inline-block
          float right
          border .014rem solid #333333
          border-radius .1rem
      .loginBtn
        width 90%
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
      .otherBtn
        width 90%
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

      .register
        color #333
        font-size .37333rem
        text-align center
        width 100%
        i
          font-weight bold
</style>
