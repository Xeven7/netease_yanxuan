<template>
  <div class="adBanner">
    <a href="javascript:;">
      <div>
        <img :src="typeAd.picUrl">
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "recognise-ad",
    props: {
      typeAd: Object
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .adBanner
    width 100%
    margin .2rem 0
    padding .36rem .3rem
    background-color #fff
    a
      div
        width 9.4rem
        height 5rem
        border-radius .8rem
        img
          width 100%
          height 100%
</style>
