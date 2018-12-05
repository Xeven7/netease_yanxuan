<template>
    <div>
      <header class="header">
        <div class="search">
          <i class="iconfont icon-sousuo1"></i>
          <span class="searchInfo">搜索商品, 共19915款好物</span>
        </div>
      </header>
      <div class="leftSide">
        <nav class="leftNav">
          <ul class="categoryList">
            <li class="item active">
              <a href="javascript:;">双12专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">冬季专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">爆品专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">新品专区</a>
            </li>
            <li class="item">
              <a href="javascript:;">居家</a>
            </li>
            <li class="item">
              <a href="javascript:;">电器</a>
            </li>
            <li class="item">
              <a href="javascript:;">洗护</a>
            </li>
            <li class="item">
              <a href="javascript:;">饮食</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="rightSide">
        <div class="banner">
          <div class="bannerImg"></div>
        </div>
        <div class="list">
          <ul class="listItem">
            <li class="listIcon">
              <a href="javascript:;">
                <div class="listImg">
                  <img src="./images/icon2.png" alt="">
                </div>
                <span>三石福利价</span>
              </a>
            </li>
            <li class="listIcon">
              <a href="javascript:;">
                <div class="listImg">
                  <img src="./images/icon1.png" alt="">
                </div>
                <span>开天辟地价</span>
              </a>
            </li>
            <li class="listIcon">
              <a href="javascript:;">
                <div class="listImg">
                  <img src="./images/icon3.png" alt="">
                </div>
                <span>严选明星价</span>
              </a>
            </li>
            <li class="listIcon">
              <a href="javascript:;">
                <div class="listImg">
                  <img src="./images/icon1.png" alt="">
                </div>
                <span>爆款美食直降</span>
              </a>
            </li>
            <li class="listIcon">
              <a href="javascript:;">
                <div class="listImg">
                  <img src="./images/icon2.png" alt="">
                </div>
                <span>国货特惠</span>
              </a>
          </li>
          </ul>
        </div>
      </div>
    </div>
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
  .leftSide
    width 2.16rem
    background-color #fff
    position fixed
    left 0
    bottom 0
    top 1.17333rem
    .leftNav
      height 100%
      width 100%
      overflow hidden
      .categoryList
        padding .53333rem 0
        .item
          display relative
          width 100%
          height .66667rem
          text-align center
          border none
          margin-bottom .5rem
          a
            display: block;
            color: #333;
            font-size: .37333rem;
            line-height: .66667rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        .active
          position relative
          &::before
            content ' '
            position absolute
            top 0
            left 0
            bottom 0
            width .08rem
            background-color #ab2b2b
          a
            display block
            color #ab2b2b
  .rightSide
    margin-left 2.16rem
    padding .4rem .4rem .28rem
    .banner
      .bannerImg
        background url("./images/banner.jpg") center no-repeat #f4f4f4
        position: relative;
        width: 100%
        height: 2.56rem;
        margin-bottom: .42667rem;
        background-size: cover;
        border-radius: 4px;
    .list
      .listItem
        .listIcon
          display inline-block
          margin-right .3rem
          margin-bottom .3rem
          font-size 0
          width 1.92rem
          vertical-align top
          a
            display block
            text-align center
          .listImg
            width 1.92rem
            height 1.92rem
            img
              display block
              width 100%
              background #fff
              height 100%
          span
            height .96rem
            font-size .36rem
            text-align center
            line-height .48rem
            color #333
</style>

