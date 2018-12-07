<template>
  <div class="rightContainer">
    <div class="rightSide" v-for="(item, index) in category" :key="index" v-if="index === changeIndex">
      <div class="banner">
        <img :src="item.bannerUrl" class="bannerImg">
      </div>
      <div class="list">
        <ul class="listItem">
          <li class="listIcon" v-for="(subItem, index) in item.subCateList" :key="index">
            <a href="javascript:;">
              <div class="listImg">
                <img :src="subItem.bannerUrl">
              </div>
              <span>{{subItem.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "category-right-nav",
    props: {
      changeIndex: Number
    },
    mounted(){
      this.$store.dispatch('getCategory')

      this.$nextTick(() => {
        new BScroll(".rightContainer", {
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
        this.changeIndex = index
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
