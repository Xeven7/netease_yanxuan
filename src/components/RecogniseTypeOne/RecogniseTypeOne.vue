<template>
  <div class="cardOne">
    <a href="javascript:;" class="cardOneInfo">
      <div class="info">
        <div class="userName ellipsis">
          <span class="avatar"><img :src="topicOne.avatar" alt=""></span>
          <span>{{topicOne.nickname}}</span>
        </div>
        <div class="title ellipsis">{{topicOne.title}}</div>
        <div class="desc ellipsis">{{topicOne.subTitle}}</div>
        <div class="userCount">
          <i class="iconfont icon-chakan"></i>
          <span>{{topicOne.readCount}}人看过</span>
        </div>
      </div>
      <div class="pic"><img :src="topicOne.picUrl" alt=""></div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "recognise-type-one",
    props: {
      topicOne: Object
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cardOne
    position: relative;
    padding: .32rem 0;
    width: 100%;
    background: #fff;
    margin: .2rem 0;
    .cardOneInfo
      display flex
      justify-content space-around
      flex-wrap: wrap;
      .info
        width: 5rem
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
          line-height: .44rem;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-top: .32rem;
        .desc
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: .28rem;
          line-height: .4rem;
          padding-top: .08rem;
          color: #7f7f7f;
        .userCount
          position: absolute;
          bottom: .28rem;
          font-size: .22rem;
          color: #999;
          line-height: .32rem;
          margin-top: .18rem;
          i
            margin-right: .08rem;
            font-size .32rem
      .pic
        width: 3.2rem;
        height:  3.2rem;
        position: relative;
        overflow: hidden;
        border-radius: .08rem;
        background: #f0f0f0;
        img
          width: 100%;
          height: 100%;
</style>
