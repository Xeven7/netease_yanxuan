<template>
  <div class="leftContainer">
    <div class="leftSide">
      <nav class="leftNav">
        <ul class="categoryList">
          <li class="item" v-for="(item, index) in category" :key="index" @click="showItem(index)" :class="{active: changeIndex === index}">
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "category-left-nav",
    props: {
      changeIndex: Number
    },
    mounted(){
      this.$store.dispatch('getCategory')

      this.$nextTick(() => {
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
        this.changeIndex = index
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
</style>
