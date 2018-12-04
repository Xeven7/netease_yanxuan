<template>
  <div>
    <header class="header">
      <div class="upHeader">
        <a href="javascript:;" class="headerLogo"></a>
        <div class="search">
          <i class="iconfont icon-sousuo1"></i>
          <span class="searchInfo">搜索商品, 共19915款好物</span>
        </div>
        <div class="loginBtn">登陆</div>
      </div>
      <div class="downHeader"></div>
    </header>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
/*  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  import ShopList from '../../components/ShopList/ShopList.vue'*/

  export default {
    name: "home",
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    background-color #fff
    color #333
    .upHeader
      display flex
      padding .21333rem .4rem
      align-items center
      .headerLogo
        display inline-block
        width 1.84rem
        height .53333rem
        background url("./images/headerLogo.png") no-repeat
        margin-right .26667rem
        background-size cover
        background-position center
      .search
        display flex
        flex-grow 1
        align-items center
        justify-content center
        height .74667rem
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
        .iconfont
          color #333
          font-size .37333rem
          display inline-block
          vertical-align middle
          width .37333rem
          height .37333rem
          margin-right .13333rem
        .searchInfo
          color #666


      .loginBtn
        width .98rem
        height .53333rem
        line-height .53333rem
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius .10667rem
        margin-left .21333rem
</style>
