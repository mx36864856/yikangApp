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
      <div>
        <div v-for="(item,index) in group">
          <img :src="item.src">
          <p>{{item.text1}}</p>
          <span>{{item.text2}} <s>{{item.text3}}</s></span>
        </div>
      </div>
    </div>
    <div class="nav">
        <a v-for="item in texts" :href=item.href>
          <p>{{item.text}}</p>
          <span>{{item.bottom}}</span>
        </a>
    </div>
    <div id="one" class="content">
      <div  class="content1">
      <div v-for="(item,index) in content" class="text">
        <img :src=item.src>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
        <p><span>￥</span><span>10.50</span><span></span></p>
      </div>
    </div>
    </div>
    <div id="two" class="content">
      <div  class="content1">
      <div v-for="(item,index) in content" class="text">
        <img :src=item.src>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
        <p><span>￥</span><span>10.50</span><span></span></p>
      </div>
    </div>
    </div>
    <div id="three" class="content">
      <div  class="content1">
      <div v-for="(item,index) in content" class="text">
        <img :src=item.src>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
        <p><span>￥</span><span>10.50</span><span></span></p>
      </div>
    </div>
    </div>
    <div id="four" class="content">
      <div  class="content1">
      <div v-for="(item,index) in content" class="text">
        <img :src=item.src>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
        <p><span>￥</span><span>10.50</span><span></span></p>
      </div>
    </div>
    </div>
    <div id="five" class="content">
      <div  class="content1">
      <div v-for="(item,index) in content" class="text">
        <img :src=item.src>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
        <p><span>￥</span><span>10.50</span><span></span></p>
      </div>
    </div>
    </div>
    <div id="six" class="content">
      <div  class="content1">
      <div v-for="(item,index) in content" class="text">
        <img :src=item.src>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
        <p><span>￥</span><span>10.50</span><span></span></p>
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
import grout1 from '../assets/home/藿香正气@2x.png';
import content1 from '../assets/home/感冒灵颗粒@2x.png';


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
          group:[
              {src:grout1,text1:'太极藿香正气口服液',text2:'¥18.80',text3:'24.00'
              },{src:grout1,text1:'太极藿香正气口服液',text2:'¥18.80',text3:'24.00'
              },{src:grout1,text1:'太极藿香正气口服液',text2:'¥18.80',text3:'24.00'
              },{src:grout1,text1:'太极藿香正气口服液',text2:'¥18.80',text3:'24.00'
              },{src:grout1,text1:'太极藿香正气口服液',text2:'¥18.80',text3:'24.00'
              },{src:grout1,text1:'太极藿香正气口服液',text2:'¥18.80',text3:'24.00'
              },{src:grout1,text1:'太极藿香正气口服液',text2:'¥18.80',text3:'24.00'
              },{src:grout1,text1:'太极藿香正气口服液',text2:'¥18.80',text3:'24.00'
              },{src:grout1,text1:'太极藿香正气口服液',text2:'¥18.80',text3:'24.00'
              },],
          content:[{src:content1,p1:'三九感冒灵颗粒',p2:'感冒引起的头痛、发热、鼻...',p3:''},
              {src:content1,p1:'三九感冒灵颗粒',p2:'感冒引起的头痛、发热、鼻...',p3:''},
              {src:content1,p1:'三九感冒灵颗粒',p2:'感冒引起的头痛、发热、鼻...',p3:''},
              {src:content1,p1:'三九感冒灵颗粒',p2:'感冒引起的头痛、发热、鼻...',p3:''},]
      }
    }
}
</script>
<style lang="scss" scoped>
  body,html{
    background-color: #f6f7f8;
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
  .home .nav{
    height: .58rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #f6f7f8;
    padding: 0 .15rem 0 .15rem;
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
  margin: -.32rem .15rem 0 .15rem;
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
  height:1.9rem;
  background:rgba(255,255,255,1);
  box-shadow:.02rem .02rem .02rem .02rem rgba(116,176,90,0.16);
  border-radius:.09rem;
  margin: .1rem .15rem 0 .15rem;

  >div:nth-child(1){
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
      margin-top: .02rem;
      img{
        height: .1rem;
        width: .04rem;
      }
    }
  }
  >div:nth-child(2){
      height: 1.7rem;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    -webkit-overflow-scrolling:touch;
    >div{
      width: 1rem;
      height: 1.2rem;
      padding-top: .3rem;
      float: left;
      margin-left: .11rem;
      img{
        width: .6rem;
        height: .45rem;
        margin: 0 auto;
        display: block;
        padding: 0 .13rem 0 .07rem;
        margin-bottom: .15rem;
      }
      p{
        font-size: .12rem;
        line-height: .16rem;
        margin-bottom: .05rem;
        color: #333;
      }
      span{
        color: #ff0000;
        font-size: .13rem;
        line-height: .16rem;
        s{
          text-align: right;
          font-size: .1rem;
          color: #666;
        }
      }

    }
  }
}

.content{
  width: 94%;
  height: 5.06rem;
  margin: 0 .15rem 0 .15rem;
  .content1 {
    .text {
      height: 2.46rem;
      width: 1.68rem;
      background-color: #fff;
      border-radius: .1rem;
      margin-right: .07rem;
      float: left;
      margin-bottom: .07rem;
      img {
        height: 1rem;
        display: block;
        margin: 0 auto;
        padding-top: .38rem;
        margin-bottom: .3rem;
      }
      p {
        margin-left: .1rem;
        line-height: .22rem;
        &:nth-child(2) {
          font-size: .13rem;
          color: #333;
        }
        &:nth-child(3) {
          font-size: .11rem;
          color: #666;
        }
        &:nth-child(4) {
          margin-top: .1rem;
          span:nth-child(1) {
            font-size: .17rem;
            color: #ff0000;
          }
          span:nth-child(2) {
            font-size: .17rem;
            color: #ff0000;
          }
          span:nth-child(3) {
            display: block;
            float: right;
            height: .16rem;
            width: .16rem;
            margin-right: .14rem;
            background: url("../assets/home/购物车.svg") no-repeat center / cover;
          }
        }
      }
    }
  }
}
</style>