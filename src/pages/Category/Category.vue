<template>
    <div>
      <header class="header">
        <div class="search">
          <i class="iconfont icon-sousuo1"></i>
          <span class="searchInfo">搜索商品, 共19915款好物</span>
        </div>
      </header>
      <div class="leftContainer">
        <div class="leftSide">
          <nav class="leftNav">
            <ul class="categoryList">
              <li class="item" v-for="(item, index) in category" :key="index" @click="showItem(index)" :class="{active: activeIndex === index}">
                <a href="javascript:;">{{item.name}}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="rightContainer">
        <div class="rightSide" v-for="(item, index) in category" :key="index" v-if="index === activeIndex">
          <div class="banner">
            <img :src="item.bannerUrl" class="bannerImg">
          </div>
          <div class="list">
            <ul class="listItem">
              <li class="listIcon" v-for="(subItem, index) in item.subCateList" :key="index">
                <a href="javascript:;">
                  <div class="listImg">
                    <img :src="subItem.bannerUrl" alt="">
                  </div>
                  <span>{{subItem.name}}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--<CategoryLeftNav :changeIndex="activeIndex"/>
      <CategoryRightNav :changeIndex="activeIndex"/>-->
    </div>
</template>

<script>
  import CategoryLeftNav from '../../components/CategoryLeftNav/CategoryLeftNav.vue'
  import CategoryRightNav from '../../components/CategoryRightNav/CategoryRightNav.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "category",
    data(){
     return{
       activeIndex: 0
     }
    },
    mounted(){
      this.$store.dispatch('getCategory')

      this.$nextTick(() => {
        new BScroll(".rightContainer", {
          scrollX: false,
          scrollY: true,
          click: true
        })

        new BScroll(".leftContainer", {
          scrollX: false,
          scrollY: true,
          click: true
        })
      })
    },
    computed: {
      ...mapState(['category']),
    },
    methods: {
      showItem(index){
        this.activeIndex = index
      }
    },
    components: {
      CategoryLeftNav,
      CategoryRightNav
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    width 100%
    display flex
    align-items center
    justify-content center
    height 1.17333rem
    background-color #fff
    position fixed !important
    top 0
    z-index 10
    bottom-border-1px(#d9d9d9)
    .search
      display flex
      width 9rem
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
  .leftContainer
    width 100%
    overflow hidden
    .leftSide
      display inline-block
      width 2.16rem
      background-color #fff
      position fixed
      left 0
      bottom 0
      top 1.17333rem
      overflow hidden
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
  .rightContainer
    width 100%
    overflow hidden
    .rightSide
      display inline-block
      position absolute
      top 1.17333rem
      margin-left 2.16rem
      padding .4rem .4rem .28rem
      .banner
        .bannerImg
          display block
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

