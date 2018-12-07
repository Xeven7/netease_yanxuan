<template>
  <div class="cardTwo">
    <a href="javascript:;">
      <div class="userName ellipsis">
        <span class="avatar"><img :src="topicTwo.avatar" alt=""></span>
        <span>{{topicTwo.subTitle}}</span>
      </div>
      <div class="title ellipsis">{{topicTwo.title}}</div>
      <div class="pic">
        <img :src="topicTwo.picUrl" alt="">
      </div>
      <div class="userCount">
        <i class="iconfont icon-chakan"></i>
        <span>{{topicTwo.readCount}}人看过</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "recognise-type-two",
    props: {
      topicTwo: Object
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cardTwo
    width: 100%;
    background: #fff;
    margin: .2rem 0;
    padding: .36rem 0;
    display flex
    justify-content center
    position relative
    .userName
      font-size: .28rem;
      color: #333;
      line-height: .36rem;
      span
        font-size: .36rem;
      .avatar
        width: .56rem;
        height: .56rem;
        overflow: hidden;
        border-radius: 50%;
        border: .01rem solid #d9d9d9;
        margin-right: .12rem;
        display: inline-block;
        vertical-align: middle;
        img
          width: 100%;
          height: 100%;
    .title
      width: 100%;
      font-size: .36rem;
      color: #333;
      line-height: .52rem;
      margin: .2rem 0
    .pic
      width: 9rem;
      height: 5rem;
      position: relative;
      margin-bottom: .2rem;
      overflow: hidden;
      border-radius: .08rem;
      img
        width: 100%;
        height: 100%;
    .userCount
      position: absolute;
      bottom: .06rem
      font-size: .22rem;
      color: #999;
      line-height: .32rem;
      margin-top: .18rem;
      i
        margin-right: .08rem;
        font-size .32rem
</style>
