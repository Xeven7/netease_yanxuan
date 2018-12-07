<template>
  <nav class="footer_guide" :class="{changeBackground: '/recognise' === $route.path}">
    <a href="javascript:;" class="guide_item" :class="{homeClicked: '/home' === $route.path}" @click="goTo('/home')">
      <i v-if="$route.path  === '/recognise'" class="iconfont icon-shouye"></i>
      <i class="item_icon" v-else></i>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{categoryClicked: '/category' === $route.path}" @click="goTo('/category')">
      <i v-if="$route.path  === '/recognise'" class="iconfont icon-chouti"></i>
      <i class="item_icon" v-else></i>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{recogniseClicked: '/recognise' === $route.path}" @click="goTo('/recognise')">
      <i v-if="$route.path  === '/recognise'" class="iconfont icon-xiangkuang"></i>
      <i class="item_icon" v-else></i>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{cartClicked: '/cart' === $route.path}" @click="goTo('/cart')">
      <i v-if="$route.path  === '/recognise'" class="iconfont icon-gouwuche1"></i>
      <i class="item_icon" v-else></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/personal')">
      <i v-if="$route.path  === '/recognise'" class="iconfont icon-geren"></i>
      <i class="item_icon" v-else></i>
      <span>个人</span>
    </a>
  </nav>
</template>

<script>
  export default {
    name: "footer-guide",
    methods: {
      goTo(path){
        /*replace 会替换掉当前的history记录 在vue内部可使用#router来访问路由实例*/
        this.$router.push(path)
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    bottom 0
    background-color #fff
    width 100%
    height 1.3rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin-top .08rem
      .iconfont
        font-size .5rem
        margin-top .16rem
        color #7F7F7F
      .icon-xiangkuang
        font-size .7rem
        margin-top .035rem
        color #E43929
      .item_icon
        background url("./images/footer.png") no-repeat
        /*background-position-y -3.52rem*/
        background-position-y: -4.4rem
        background-size .74667rem 8.66667rem
        width .74667rem
        height .74667rem
      &:hover
        cursor pointer
      /*&:nth-child(1) i {
        background-position-y: -4.4rem
      }*/
      &:nth-child(2) i {
        background-position-y: -2.64rem
      }
      &:nth-child(3) i {
        background-position-y: -6.16rem
      }
      &:nth-child(4) i {
        background-position-y: -.88rem
      }
      &:nth-child(5) i {
        background-position-y: -7.92rem
      }
      span
        font-size .32rem
        margin-top: .03rem
        color #555
    .homeClicked
      span
        color #E43929
      .item_icon
        background-position-y -3.52rem
    .categoryClicked
      span
        color #E43929
      .item_icon
        background-position-y -1.76rem !important
    .recogniseClicked
      span
        color #E43929
    .cartClicked
      span
        color #E43929
      .item_icon
        background-position-y 0rem !important
  .changeBackground
    background-color #FAFAFA
</style>

