<template>
  <div>
    <header class="header">
      <div class="toHome">
        <router-link to="/home">
          <i class="iconfont icon-shouye"></i>
        </router-link>
      </div>
      <div class="title">
        <a href="javascript:;" class="found">发现</a>
        <a href="javascript:;" class="chosen">甄选家</a>
      </div>
      <div class="rightIcons">
        <router-link to="/search">
          <i class="iconfont icon-sousuo1"></i>
        </router-link>
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche1"></i>
        </router-link>
      </div>
    </header>
    <div class="nav">
      <nav class="navList" >
        <a href="javascript:;" class="item" v-for="(item, index) in navList" :key="index" :class="{active: activeIndex === index}" @click="changeTab(index)">{{item}}</a>
      </nav>
    </div>
    <div class="container">
      <div class="wrap">
        <!--<div class="adBanner" v-for="(item, index) in recognise" :key="index" v-if="item.ad !== null">
        <a href="javascript:;">
          <div>
            <img :src="item.picUrl">
          </div>
        </a>
      </div>-->
        <!--<div class="cardOne">
          <a href="javascript:;" class="cardOneInfo">
            <div class="info">
              <div class="userName ellipsis">
                <span class="avatar"><img src="./images/user.png" alt=""></span>
                <span>服装组：小服</span>
              </div>
              <div class="title">双11忘买羽绒服？没关系，还有双12！</div>
              <div class="desc">双12时髦保暖羽绒服低至6折</div>
              <div class="userCount">
                <i class="iconfont icon-chakan"></i>
                <span>17.1k人看过</span>
              </div>
            </div>
            <div class="pic"><img src="./images/pic.jpg" alt=""></div>
          </a>
        </div>-->
        <!--<div v-for="(item, index) in recognise" :key="index">
          <RecogniseTypeOne :typeOne="item.topics[index]" v-if="item.topics[index].type === 1"/>
          <RecogniseTypeTwo/>
        </div>-->
        <div v-for="(item, index) in recognise" v-if="index === activeIndex"  :key="index">
          <RecogniseAd v-if="item.ad !== null" :typeAd="item.ad"/>
          <div v-for="(topic, index) in item.topics" :key="index">
            <RecogniseTypeOne :topicOne="topic" v-if="topic.type === 1"/>
            <RecogniseTypeTwo :topicTwo="topic" v-if="topic.type === 0"/>
          </div>
        </div>
        <!--<div class="cardTwo">
        <a href="javascript:;">
          <div class="userName ellipsis">
            <span class="avatar"><img src="./images/user.png" alt=""></span>
            <span>服装组：小服</span>
          </div>
          <div class="title ellipsis">揭秘2018严选商品线隐藏进阶之路，为美好生活品质加分</div>
          <div class="pic">
            <img src="./images/pic2.jpg" alt="">
          </div>
          <div class="userCount">
            <i class="iconfont icon-chakan"></i>
            <span>17.1k人看过</span>
          </div>
        </a>
      </div>
        <div class="cardOne">
          <a href="javascript:;" class="cardOneInfo">
            <div class="info">
              <div class="userName ellipsis">
                <span class="avatar"><img src="./images/user.png" alt=""></span>
                <span>服装组：小服</span>
              </div>
              <div class="title">双11忘买羽绒服？没关系，还有双12！</div>
              <div class="desc">双12时髦保暖羽绒服低至6折</div>
              <div class="userCount">
                <i class="iconfont icon-chakan"></i>
                <span>17.1k人看过</span>
              </div>
            </div>
            <div class="pic"><img src="./images/pic.jpg" alt=""></div>
          </a>
        </div>-->
      </div>
    </div>
  </div>

</template>

<script>
  import RecogniseAd from '../../components/RecogniseAd/RecogniseAd.vue'
  import RecogniseTypeOne from '../../components/RecogniseTypeOne/RecogniseTypeOne.vue'
  import RecogniseTypeTwo from '../../components/RecogniseTypeTwo/RecogniseTypeTwo.vue'
  import {mapState, mapGetters} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "recognise",
    data(){
      return{
        navList: ['推荐', '达人', '上新', '晒单', 'HOME'],
        activeIndex: 0,
        topicOne: {},
        topicTwo: {},
        typeAd: {}
      }
    },
    mounted(){
      this.$store.dispatch('getRecognise')
      this.$nextTick(() => {
        new BScroll(".container",{
          scrollX: false,
          scrollY: true,
          startY: 50,
          click: true,
          momentum: false,
        })
      })
    },
    computed: {
      ...mapState(['recognise']),
      ...mapGetters(['calcTypes']),
    },
    methods: {
      changeTab(index){
        this.activeIndex = index
      },
    },
    components: {
      RecogniseAd,
      RecogniseTypeOne,
      RecogniseTypeTwo
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    width 100%
    display flex
    justify-content space-between
    position fixed
    top 0
    height 1.34rem
    background-color #FAFAFA
    border-bottom .01rem solid #d9d9d9
    z-index 10
    .toHome
      display flex
      align-items center
      margin-left .3rem
      a
        i
          font-size .6rem
    .title
      position relative
      left .5rem
      display flex
      align-items center
      justify-content center
      width 4.28rem
      height 100%
      text-align center
      font-size .28rem
      color #7F7F7F
      .found
        font-size .54rem
        color #b4282d
        font-weight bold
        padding 0.16rem
        vertical-align middle
      .chosen
        font-size .42rem
        padding 0.16rem
    .rightIcons
      display flex
      align-items center
      margin-right .2rem
      .iconfont
        font-size .56rem
        margin-left .4rem
  .nav
    width 100%
    position fixed
    top 1.36rem
    height .82rem
    background #fafafa
    border-bottom .01rem solid #d9d9d9
    z-index 10
    .navList
      display flex
      justify-content space-around
      padding-bottom .2rem
      .item
        display inline-block
        height .82rem
        line-height .82rem
        font-size .4rem
        padding 0 .08rem
        margin 0 .2rem
        &.active
          color #B4282D
          border-bottom .04rem solid #B4282D
  .container
    overflow hidden
    width 100%
    margin-top .9rem
    .wrap
      position fixed
      top 1rem
      width 100%
      background-color #F4F4F4
      display inline-block
 /*     .adBanner
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
            font-size .32rem*/
</style>
