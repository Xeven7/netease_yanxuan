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
        <div class="navContainer">
          <ul class="navList">
            <li class="tab active" v-for="(item, index) in goods.cateList" :key="index">
              <span class="tabTxt">{{item.name}}</span>
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
                  <img src="./images/new.png">
                </div>
                <div></div>
              </div>
            </a>
            <div class="contentRight">
              <div class="rightUp">
                <a href="#">
                  <div class="picOne">
                    <img src="./images/slide/new1.png" alt="">
                  </div>
                  <div class="picTwo">
                    <div class="discount1">￥44</div>
                    <div class="discount2">￥59</div>
                  </div>
                  <div class="info">
                    <div class="infoTitle">福利社</div>
                    <div class="infoSubTitle">今日特价</div>
                  </div>
                </a>
              </div>
              <div class="rightDown">
                <a href="#">
                  <div class="picOne">
                    <img src="./images/slide/new1.png" alt="">
                  </div>
                  <div class="picTwo">
                    <div class="discount1">￥44</div>
                    <div class="discount2">￥59</div>
                  </div>
                  <div class="info">
                    <div class="infoTitle">新人拼团</div>
                    <div class="infoSubTitle">一元起包邮</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="supply">
          <div class="title">
            <div class="titleLeft">
              <span>品牌制造商直供</span>
            </div>
            <a class="titleRight">
              <span>更多</span>
              <i class="iconfont icon-rightarrow"></i>
            </a>
          </div>
          <ul class="list">
            <a href="javascript:;" class="item">
              <div class="listInfo">
                <h4 class="listTitle ellipsis">海外制造商</h4>
                <div class="listSubTitle">
                  <span>9.9元起</span>
                  <i>上新</i>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="item">
              <div class="listInfo">
                <h4 class="listTitle ellipsis">海外制造商</h4>
                <div class="listSubTitle">
                  <span>9.9元起</span>
                  <i>上新</i>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="item">
              <div class="listInfo">
                <h4 class="listTitle ellipsis">海外制造商</h4>
                <div class="listSubTitle">
                  <span>9.9元起</span>
                  <i>上新</i>
                </div>
              </div>
            </a>
            <a href="javascript:;" class="item">
              <div class="listInfo">
                <h4 class="listTitle ellipsis">海外制造商</h4>
                <div class="listSubTitle">
                  <span>9.9元起</span>
                  <i>上新</i>
                </div>
              </div>
            </a>
          </ul>
        </section>
      </div>
      <a href="javascript:;" class="sideBtn">
        <img src="./images/gift.png" alt="">
      </a>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'

  export default {
    name: "home",
    mounted(){
      this.$store.dispatch('getHomeGoods')
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
    computed: {
      ...mapState(['goods'])
    }
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
      .giftForNew
        background-color: #fff;
        margin-bottom: .26667rem;
        margin-top: .26667rem;
        .title
          height: 1.2rem;
          width: 100%;
          line-height: 1.2rem;
          text-align: center;
          padding: 0 .4rem;
          background: #fff;
          span
            line-height: 1.2rem;
            text-align: center;
            font-size: .42667rem;
            position relative
            &::before, &::after
              content: '';
              position: absolute;
              top: .3rem;
              width: .32rem;
              height: .04rem;
              background: #333;
            &::before
              left: -.53333rem;
            &::after
              right: -.53333rem;


        .content
          padding-left: .4rem;
          .contentLeft
            display: block;
            width: 4.57333rem;
            height: 5.78667rem;
            background: #F9E9CF;
            border-radius: .05333rem;
            margin-right: .05333rem;
            float: left;
            color: #333
            .name
              font-size: .42667rem;
              padding: .4rem 0 0 .4rem;
            .nameWrap
              margin: .66667rem auto;
              width: 3.04rem;
              height: 3.05333rem;
              position: relative;
              .card
                width: 3.04rem;
                height: 3.05333rem;
                img
                  width 100%
                  height 100%
          .contentRight
            float: left;
            .rightUp, .rightDown
              background: #FBE2D3;
              border-radius: 4px;
              width: 4.57333rem;
              height: 2.86667rem;
              margin-bottom: .05333rem;
              a
                display: block;
                color: #333;
                width: 4.57333rem;
                height: 2.86667rem;
                float: left;
                border-radius: .05333rem;
                margin: 0 .05333rem .05333rem 0;
                font-size: .32rem;
                padding: .26667rem 0 0 .4rem;
                position relative
                .picOne
                  width: 2.66667rem;
                  height: 2.66667rem;
                  position: absolute;
                  right: .34rem;
                  top: .26667rem;
                  img
                    width 100%
                    height 100%

                .picTwo
                  position: absolute;
                  top: .3rem;
                  right: .8rem;
                  width: 1.06667rem;
                  height: .9rem;
                  opacity: .8;
                  background: #F59524;
                  border-radius: 50%;
                  padding-top: .13333rem;
                  color: #fff;
                  text-align: center;
                  z-index 10
                  .discount2
                    font-size: .26667rem;
                    vertical-align center
                    text-decoration: line-through;


                .info
                  .infoTitle
                    font-size: .42667rem;
                    margin-bottom: .1rem;

            .rightDown
              background: #FFECC2;
              border-radius: 4px;
              width: 4.57333rem;
              height: 2.86667rem;
              .infoSubTitle
                position: relative;
                display: inline-block;
                padding: 0 .13333rem;
                height: .42667rem;
                background: #CBB693;
                border-radius: .05333rem;
                color: #fff;
                font-size: .24rem;
                line-height: .42667rem;
                text-align: center;
      .supply
        /*padding-bottom: .10667rem;*/
        width 9.2rem
        .title
          width: 100%;
          height: 1.33333rem;
          line-height: 1.33333rem;
          padding: 0 .5rem;
          background: #fff;
          overflow: hidden;
          .titleLeft
            float: left;
            font-size: .42667rem;
          .titleRight
            display: block;
            font-size: .37333rem;
            float: right;
            color: #333;
            line-height: 1.33333rem;
        .list
          width 100%
          position: relative;
          overflow: hidden;
          background: #fff;
          margin-bottom: .26667rem;
          padding: 0 .34667rem .34667rem .4rem
          display flex
          /*justify-content space-between*/
          flex-wrap wrap
          .item
            background url("./images/goods3-1.png") no-repeat
            background-size: 100% 100%;
            display: inline-block;
            position: relative;
            margin: 0 .05333rem .05333rem 0;
            width: 4.5rem;
            height: 3.46667rem;
            overflow: hidden;
            background-color: #f4f4f4;
            border-radius: .05333rem;
            .listInfo
              position: absolute;
              left: 0;
              top: 0;
              padding-top: .30667rem;
              width: 100%;
              z-index: 4;
              text-align: center;
              .listTitle
                color: #333;
                font-family: PingFangSC-Medium;
                font-size: .37333rem;
                line-height: .45333rem;
                margin-bottom: .04rem;

              .listSubTitle
                i
                  display: inline-block;
                  width: .85333rem;
                  height: .42667rem;
                  color: #fff;
                  line-height: .42667rem;
                  text-align: center;
                  background: #CBB693;
                  border-radius: .05333rem;
                  margin-left: .13333rem;

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
