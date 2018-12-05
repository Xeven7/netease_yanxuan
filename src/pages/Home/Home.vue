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
      <div class="downHeader">
        <!--<div class="scrollNav">
          <div class="navContainer">
            <nav class="navList">
              <div class="tab active">
                <span class="tabTxt">推荐</span>
              </div>
              <div class="tab">
                <span class="tabTxt">居家</span>
              </div>
              <div class="tab">
                <span class="tabTxt">鞋包配饰</span>
              </div>
              <div class="tab">
                <span class="tabTxt">服装</span>
              </div>
              <div class="tab">
                <span class="tabTxt">电器</span>
              </div>
              <div class="tab">
                <span class="tabTxt">洗护</span>
              </div>
              <div class="tab">
                <span class="tabTxt">饮食</span>
              </div>
              <div class="tab">
                <span class="tabTxt">餐厨</span>
              </div>
              <div class="tab">
                <span class="tabTxt">文体</span>
              </div>
              <div class="tab">
                <span class="tabTxt">特色区</span>
              </div>
            </nav>
          </div>
        </div>-->
        <div class="navContainer">
          <ul class="navList">
            <li class="tab active">
              <span class="tabTxt">推荐</span>
            </li>
            <li class="tab">
              <span class="tabTxt">居家</span>
            </li>
            <li class="tab">
              <span class="tabTxt">鞋包配饰</span>
            </li>
            <li class="tab">
              <span class="tabTxt">服装</span>
            </li>
            <li class="tab">
              <span class="tabTxt">电器</span>
            </li>
            <li class="tab">
              <span class="tabTxt">洗护</span>
            </li>
            <li class="tab">
              <span class="tabTxt">饮食</span>
            </li>
            <li class="tab">
              <span class="tabTxt">餐厨</span>
            </li>
            <li class="tab">
              <span class="tabTxt">文体</span>
            </li>
            <li class="tab">
              <span class="tabTxt">特色区</span>
            </li>
          </ul>
        </div>
        <div class="showMask">
          <div>
            <i class="iconfont icon-xiangxia"></i>
          </div>
        </div>
      </div>
    </header>
    <!--<div class="swiper-container" v-if="slideList.length > 0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(slide, index) in slideList" :key="index">
            <a href="javascript:" class="slide_link">
              <img :src="slide.image_src">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>-->
    <div class="mainContainer">
      <div class="main">
        <div class="slide">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript:;" class="slide_link">
                  <img src="./images/slide/swiper1.jpg">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;" class="slide_link">
                  <img src="./images/slide/swiper2.jpg">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;" class="slide_link">
                  <img src="./images/slide/swiper3.jpg">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;" class="slide_link">
                  <img src="./images/slide/swiper4.jpg">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <section class="ensureInfo">
          <ul>
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-duigouzhong"></i>
                <span>网易自营品牌</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-duigouzhong"></i>
                <span>30天无忧退货</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-duigouzhong"></i>
                <span>48小时快速退款</span>
              </a>
            </li>
          </ul>
        </section>
        <section class="goodsType">
          <div class="goodsList">
            <div class="listItem">
              <a href="javascript:;">
                <img src="./images/goodsType/goodsType1.png" alt="">
                <span>居家</span>
              </a>
            </div>
            <div class="listItem">
              <a href="javascript:;">
                <img src="./images/goodsType/goodsType2.png" alt="">
                <span>服装</span>
              </a>
            </div>
            <div class="listItem">
              <a href="javascript:;">
                <img src="./images/goodsType/goodsType4.png" alt="">
                <span>会员</span>
              </a>
            </div>
            <div class="listItem">
              <a href="javascript:;">
                <img src="./images/goodsType/goodsType4.png" alt="">
                <span>会员</span>
              </a>
            </div>
            <div class="listItem">
              <a href="javascript:;">
                <img src="./images/goodsType/goodsType2.png" alt="">
                <span>服装</span>
              </a>
            </div>
            <div class="listItem">
              <a href="javascript:;">
                <img src="./images/goodsType/goodsType3.png" alt="">
                <span>电器</span>
              </a>
            </div>
            <div class="listItem">
              <a href="javascript:;">
                <img src="./images/goodsType/goodsType4.png" alt="">
                <span>会员</span>
              </a>
            </div>
            <div class="listItem">
              <a href="javascript:;">
                <img src="./images/goodsType/goodsType4.png" alt="">
                <span>会员</span>
              </a>
            </div>
            <div class="listItem">
              <a href="javascript:;">
                <img src="./images/goodsType/goodsType4.png" alt="">
                <span>会员</span>
              </a>
            </div>
            <div class="listItem">
              <a href="javascript:;">
                <img src="./images/goodsType/goodsType4.png" alt="">
                <span>会员</span>
              </a>
            </div>
          </div>
        </section>
        <section class="discount">
          <a href="javascript:;">
            <img src="./images/discountInfo.gif" alt="">
          </a>
        </section>
        <section class="discount_one">
          <div class="oneInfo">
            <div class="one_infoLeft">
              <a href="javascript:;">
                <img src="./images/discount_one/goods1-1.png" alt="">
              </a>
            </div>
            <div class="one_infoRight">
              <a href="javascript:;">
                <img src="./images/discount_one/goods1-2.png" alt="">
              </a>
              <a href="javascript:;">
                <img src="./images/discount_one/goods1-2.png" alt="">
              </a>
            </div>
          </div>
        </section>
        <section class="discount_two">
          <div class="twoInfo">
            <a href="javascript:;">
              <img src="./images/discount_one/goods1-4.png" alt="">
            </a>
          </div>
          <div class="twoInfo">
            <a href="javascript:;">
              <img src="./images/discount_one/goods1-5.png" alt="">
            </a>
          </div>
        </section>
        <section class="discount_three"></section>
        <section class="giftForNew">
          <div class="title">
            <span>新人专享礼</span>
          </div>
          <div class="content">
            <a class="contentLeft">
              <div class="name">新人专享礼包</div>
              <div class="nameWrap">
                <div class="card">
                  <img src="" alt="">
                </div>
                <div></div>
              </div>
            </a>
            <div class="contentRight">
              <div class=""></div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
      <a href="javascript:;" class="sideBtn">
        <img src="./images/gift.png" alt="">
      </a>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'

  export default {
    name: "home",
    created (){

    },
    mounted(){
      this.$nextTick(() => {
        new BScroll(".navContainer",{
          scrollX: true,
          scrollY: false,
          click: true
        })

        let mainScroll = new BScroll(".mainContainer",{
          scrollY: true,
          click: true,
          momentum: false,
        })

        new Swiper('.swiper-container', {
          loop: true,
          autoplay : 4000,
          grabCursor : true,
          pagination:{
            el: '.swiper-pagination'
          }
        })
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    position fixed
    top 0
    width 100%
    background-color #fff
    color #333
    z-index 100
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
    .downHeader
      display  flex
      width 100%
      height .86rem
      .navContainer
        width 100%
        overflow hidden
        .navList
          display inline-block
          white-space nowrap
          .tab
            display inline-block
            margin-left .24rem
            .tabTxt
              display: inline-block;
              padding: 0 .21333rem;
              line-height: .8rem;
              font-size: .37333rem;
              color: #333;
      .showMask
        width 2.46rem
        height .8rem
        text-align right
        div
          margin-top .2rem
          margin-right .3rem
          i
            font-size .6rem
  .mainContainer
    width 100%
    overflow hidden
    margin-top 2rem
    .main
      display inline-block
      position absolute
      top 2rem
      .swiper-container
        width 10rem
        height: 4.93333rem;
        img
          width 10rem
          height 100%
      .ensureInfo
        background #FFEDDB
        ul
          display flex
          height .96rem
          align-items: center
          justify-content space-around
          li
            display flex
            align-items center
            a
              height .42667rem
              color #B4282D
              span
                font-size .32rem
              .iconfont
                vertical-align middle
                font-size .54rem
      .goodsType
        background url("./images/listBac.png")
        width 100%
        height 4.56rem
        /*padding-top .1rem*/
        padding-bottom .69rem
        .goodsList
          width 100%
          display flex
          flex-wrap wrap
          .listItem
            width 2rem
            height 2.08rem
            margin-top .04rem
            a
              width 100%
              height 100%
              display flex
              flex-direction column
              justify-content center
              align-items center
              img
                width 1.46667rem
                height 1.46667rem
                margin-bottom .14rem
              span
                color #333
                font-size .34rem
      .discount
        width 100%
        img
          width 100%
          height 4.4rem
      .discount_one
        background url("./images/discount1.png") no-repeat
        width 10rem
        height 5.22rem
        .oneInfo
          display flex
          width 100%
          .one_infoLeft
            width 50%
            height 100%
            img
              width 100%
              height 100%
          .one_infoRight
            width 50%
            height 100%
            a
              height 50%
              img
                width 100%
                height auto

      .discount_two
        background url("./images/discount2.png") no-repeat
        width 10rem
        height 2.71rem
        display flex
        .twoInfo
          width 50%
          height 100%
          img
            width 100%
            height auto
      .discount_three
        background url("./images/discount3.png") no-repeat
        width 10rem
        height: 0.24rem;
    .sideBtn
      display block
      width 1.49333rem
      height 1.06667rem
      position fixed
      right 0
      bottom 3.2rem
      img
        width 100%
        height 100%
</style>
