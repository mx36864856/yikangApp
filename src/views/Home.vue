<template>
  <div class="home">
    <nav-component></nav-component>
    <div class="banner">
      <a href="javascript:void (0)"></a>
    </div>
    <div class="image">
      <div>
        <div v-for="(item,index) in images">
        <img :src="item.site">
        <img :src="item.src">
        <span>{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="group">
      <div>
        <span>拼团购</span>
        <span>更多拼团
        <img src="../assets/home/图层11拷贝@2x.png"></span>
      </div>
      <div></div>
    </div>
    <div class="nav">
        <a v-for="item in texts" :href="item.href">
          <p>{{item.text}}</p>
          <span>{{item.bottom}}</span>
        </a>
    </div>

    <div class="content">
      <div id="one" class="content1">
        <div class="title">精选商品</div>
        <div class="text">
          <img src="../assets/home/感冒灵颗粒@2x.png">
          <p>加拿大原装进口 原始猎食渴望...</p>
          <p><span>￥</span><span>760</span><span>已售出13227</span></p>
        </div>
      </div>

    </div>
    <Move></Move>
  </div>

</template>

<script>
import NavComponent from "../components/header-Component";
import Move from "../components/move";
import img1 from '../assets/home/椭圆1@2x.png';
import img2 from '../assets/home/椭圆1拷贝@2x.png';
import img3 from '../assets/home/椭圆1拷贝2@2x.png';
import img4 from '../assets/home/椭圆1拷贝3@2x.png';
import img5 from '../assets/home/椭圆1拷贝4@2x.png';
import img6 from '../assets/home/椭圆1拷贝5@2x.png';
import img7 from '../assets/home/椭圆1拷贝6@2x.png';
import img8 from '../assets/home/椭圆1拷贝7@2x.png';
import inner1 from '../assets/home/满减@2x.png';
import inner2 from '../assets/home/特惠@2x.png';
import inner3 from '../assets/home/团拼@2x.png';
import inner4 from '../assets/home/专享@2x.png';
import inner5 from '../assets/home/季节@2x.png';
import inner6 from '../assets/home/营养@2x.png';
import inner7 from '../assets/home/成人@2x.png';
import inner8 from '../assets/home/特效@2x.png';


export default {
  name: 'home',
  components: {
      NavComponent,
      Move
  },
    data() {
      return {
          texts:[
              {
                  href:'#one', text:'家庭',bottom:'生活无忧'
              },{
                  href:'#two', text:'养生',bottom:'营养滋补'
              },{
                  href:'#three', text:'慢性',bottom:'品质保障'
              },{
                  href:'#four', text:'成人',bottom:'尽享激情'
              },{
                  href:'#five', text:'母婴',bottom:'尽享激情'
              },{
                  href:'#six', text:'帮助',bottom:'为您挑选'
              }],
          images:[
              {
              site: img1,text:'满减优惠',src:inner1
          },{
              site:img2,text:'每日特惠',src:inner2
          },{
              site:img3,text:'团拼折扣',src:inner3
          },{
              site:img4,text:'新人专享',src:inner4
          },{
              site:img5,text:'季节用药',src:inner5
              },{
              site:img6,text:'营养滋补',src:inner6
              },{
              site:img7,text:'成人用品',src:inner7
              },{
              site:img8,text:'新特效药',src:inner8
              }],

      }
    }
}
</script>
<style lang="scss" >
  body{
    background-color: #f6f7f8;
  }
  .nav::-webkit-scrollbar {
    display: none;
  }
.banner{
  height: 2rem;
  width: 100%;
  a{
    height: 100%;
    width: 100%;
    display: block;
    background: url("../assets/home/banner@2x.png") no-repeat center / cover;
  }
}
  .nav{
  height: .58rem;
    /*width: 100%;*/
  position: sticky;
  z-index: 5;
  top: 0;
    background: #f6f7f8;
    padding: 0 .16rem;
    a{
      font-size:0.16rem;
      display: block;
      color:black;
      float: left;
      text-decoration: none;
      margin: .15rem .09rem 0 0;
      font-weight:400;
    p{
      font-size: .17rem;
      text-align: center;
      line-height: .16rem;
      color: #333;
    }
      span{
        display: block;
        font-size: .1rem;
        margin-top: .05rem;
        line-height: .2rem;
        color: #666;
      }
    }
}

.image{
  box-shadow:.02rem .02rem .02rem .02rem rgba(116,176,90,0.16);
  background-color: white;
  width: 3.43rem;
  height: 1.66rem;
  z-index: 3;
  margin: 0 auto;
  margin-top: -.32rem;
  border-radius: .09rem;
  overflow: hidden;
  div{
    height: 100%;
    margin: .08rem  0  0 .14rem;
    div{
      height: .65rem;
      width: .48rem;
      float: left;
      position: relative;
      margin-right: .18rem;
      color: #333;
      img:nth-child(1){
        height: .45rem;

      }
      img:nth-child(2){
        width: .32rem;
        height: .14rem;
        position: absolute;
        top: .145rem;
        left: .065rem;
      }
      span{
        font-size: .11rem ;
      }
    }
  }
}
.group{
  width:3.43rem;
  height:1.9rem;
  background:rgba(255,255,255,1);
  box-shadow:.02rem .02rem .02rem .02rem rgba(116,176,90,0.16);
  border-radius:.09rem;
  margin: 0 auto;
  margin-top: .1rem;
  div:nth-child(1){
    height: .2rem;
    padding: .1rem .1rem 0 .1rem;
    span:nth-child(1){
      width:0.6rem;
      height:0.16rem;
      font-size: .17rem;
      line-height: .24rem;
      display: block;
      float: left;
    }
    span:nth-child(2){
      float: right;
      display: block;
      width:0.73rem;
      height:0.17rem;
      border:.01rem solid rgba(255,97,0,1);
      border-radius:.09rem;
      font-size: .11rem;
      padding-left: .02rem;
      text-align: center;
      color: rgba(255,97,0,1);
      line-height: .17rem;
      margin-top: .05rem;
      img{
        height: .1rem;
        width: .04rem;
      }
    }
  }
  div:nth-child(2){

  }
}
</style>