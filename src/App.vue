<template>
    <div id="app">
      <!--一个占位组件 只可显示引入注册的组件-->
      <router-view/>
      <!--route代表当前路由 随着点击的不同会变化 不是固定为某一个路由-->
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #F4F4F4
</style>
