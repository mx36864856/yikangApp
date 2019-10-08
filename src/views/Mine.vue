<template>
    <div class="mine">
        <div class="header">
            <img src="../assets/mine/xiaoxi icon@2x.png">
            <a href="/Set"><img src="../assets/mine/shezhi icon@2x.png"></a>
            <div class="header-picture">
                <a href="/material"><img src="../assets/mine/touxiang pic@2x.png"></a>
                <div>
                    <p>康娜酱</p>
                    <p>151****4362</p>
                </div>
            </div>
        </div>
        <div class="content">
            <div>
                <span>我的订单</span>
                <span>查看所有订单 <img src="../assets/mine/chakan icon@2x.png"></span>
            </div>
            <div>
                <div v-for="(item,index) in content">
                    <img :src="item.href">
                    <span>{{item.text}}</span>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div v-for="(item,index) in bottom" >
                <img :src="item.href">
                <span>{{item.text}}</span>
            </div>
        </div>
        <move></move>
    </div>
</template>

<script>
    import Move from "../components/move";
    import img1 from '../assets/mine/daifukuan icon@2x.png'
    import img2 from '../assets/mine/daifahuo icon@2x.png'
    import img3 from '../assets/mine/daishouhuo icon@2x.png'
    import img4 from '../assets/mine/daipingjia icon@2x.png'

    export default {
        name: "Mine",components: {
            Move
        },
        data(){
            return{
                content:[{
                    href:img1,text:'待付款'
                },{
                    href:img2,text:'待发货'
                },{
                    href:img3,text:'待收货'
                },{
                    href:img4,text:'待评价'
                }],
                bottom:[{
                    href:img1,text:'我的萌宠'
                },{
                    href:img2,text:'我的订单'
                },{
                    href:img3,text:'我的钱包'
                },{
                    href:img4,text:'我的收藏'
                },{
                    href:img1,text:'我的萌宠'
                },{
                    href:img2,text:'我的订单'
                },{
                    href:img3,text:'我的钱包'
                },{
                    href:img4,text:'我的收藏'
                },{
                    href:img1,text:'我的萌宠'
                },{
                    href:img2,text:'我的订单'
                },],

            }
        }
    }
</script>

<style lang="scss" scoped>
    body{
        background-color: #f6f7f8;
    }
    .mine{
        .header{
            width: 100%;
            height: 1.5rem;
            padding-top: .1rem;
            background-color: #41BD96;
            >img{
                height: .22rem;
                width: .22rem;
                float: right;
                margin-right: .25rem;
            }
            >a {
                float: right;
                margin-right: .25rem;
                img:nth-child(1) {
                    height: .21rem;
                }
            }
            .header-picture{
                margin-left: .15rem;
                margin-top: .1rem;
                a:nth-child(1){
                    float: left;
                    width: .68rem;
                    height: .68rem;
                    margin-top: .22rem;
                        img {
                            height: .68rem;
                        }
                }
                div:nth-child(2){
                    float: left;
                    font-size: .18rem;
                    margin-top: .38rem;
                    font-weight: 400;
                    padding-left: .25rem;
                    color: #fff;
                    p:nth-child(2){
                        font-size: .13rem;
                        margin-top: .1rem;
                    }
                }
            }
        }
        .content {
            height: 1.38rem;
            margin: -.33rem .16rem 0 .16rem;
            background-color: #fff;
            border-radius: .1rem;
            >div:nth-child(1){
                height: .5rem;
                width: 100%;
                span:nth-child(1){
                    float: left;
                    font-size: .18rem;
                    display: block;
                    padding-left: .2rem;
                    color: #666;
                    line-height: .5rem;
                }
                span:nth-child(2){
                    font-size: .13rem;
                    display: block;
                    float: right;
                    padding-right: .14rem;
                    padding-top: .15rem;
                    color: #666;
                    img{
                        height: .11rem;
                        width: .06rem;

                    }
                }
            }
            >div:nth-child(2){
                padding: .15rem .1rem 0 .1rem;
                display: flex;
                justify-content:space-between;
                align-content: flex-start;
                >div{
                    display: block;
                    text-align: center;
                    width: .6rem;
                    height: .6rem;
                    img{
                        height: .26rem;
                        display: block;
                        margin: 0 auto;
                    }
                    span{
                        display: block;
                        line-height: .3rem;
                        font-size: .13rem;
                        color: #666;
                    }
                }
            }
        }
        .bottom{
            margin: .1rem .16rem 0 .16rem;
            height: 2.67rem;
            background-color: #fff;
            border-radius: .1rem;
            padding: .3rem .15rem 0 .15rem;
            >div{
                display: block;
                text-align: center;
                width: .6rem;
                height: .6rem;
                margin-right: .24rem;
                float: left;
                padding-bottom: .3rem;
                &:nth-child(4){
                    margin-right: 0;
                }
                &:nth-child(8){
                    margin-right: 0;
                }
                img{
                    height: .26rem;
                    display: block;
                    margin: 0 auto;
                }
                span{
                    display: block;
                    line-height: .4rem;
                    font-size: .13rem;
                    color: #666;
                }
            }
        }
    }
</style>