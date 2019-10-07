<template>
    <div class="community">
        <div class="header">
            <span>购物车  (0件)</span>
            <span>管理</span>
        </div>
        <div class="content">
            <div>
                <img src="../assets/community1/shopping_design@2x.png">
                <p>购物车竟然是空的</p>
                <p>主人快给我挑点宝贝吧~</p>
                <div>去逛逛</div>

            </div>
        </div>
        <div class="product">
            <p>可能帮到你</p>
            <div>
                <div><img src="../assets/community1/shopping_img1@2x.png"></div>
                <div><img src="../assets/community1/shopping_img2@2x.png"></div>
            </div>
        </div>
        <div class="bottom">
            <div></div>
            <div>结算</div>
            <div>
            <p>合计: <span>￥0</span></p>
            <p>不含运费</p>
        </div>
        </div>
        <div class="move">
            <a :href=item.href v-for="item in move">
                <span :style="{backgroundImage: 'url(' +item.src + ')'}"></span>
                <span>{{item.test}}</span>
            </a>
        </div>
    </div>
</template>

<script>
    import NavComponent from "../components/header-Component";
    import src1 from "../assets/home/首页logo@2x.png"
    import src2 from "../assets/home/分类logo@2x.png"
    import src3 from "../assets/home/shopping_icon@2x.png"
    import src4 from "../assets/home/我的logo@2x.png"

    export default {
        name: "Community",
        components: {
            NavComponent,
        },
        data(){
            return{
                move:[{
                    src:src1,test:'首页',href:'/home'
                },{
                    src:src2,test:'分类',href:'/classify'
                },{
                    src:src3,test:'购物车',href:'/community'
                },{
                    src:src4,test:'我的',href:'/mine'
                }],
            }
        },
        methods: {
              }
    }
</script>

<style lang="scss" scoped>
    html{
        background-color: #f7f5ef;
    }
    .community{

    .header{
        width: 100%;
        height:.4rem;
        padding-top: .1rem;
        background-color: #00be95;
        text-align: center;
        position: relative;
        >span:nth-child(1){
            font-size: .18rem;
            color: white;
            line-height: .4rem;
            padding-left: .4rem;
        }
        span:nth-child(2){
            position: absolute;
            right: .16rem;
            bottom: .12rem;
            color: white;
            font-size: .15rem;
        }
    }
        .content{
            text-align: center;
        img{
            display: block;
            margin: 0 auto;
            height: .83rem;
            width: .53rem;
            margin-top: .53rem;
        }
        p:nth-child(2){
            margin-top: .23rem;
            font-size: .14rem;
            color: #333;
        }
            p:nth-child(3){
                margin-top: .08rem;
                font-size: .13rem;
                color: #666;
            }
            >div{
                div{
                    width:1rem;
                    height:0.4rem;
                    border:.01rem solid rgba(67,233,123,1);
                    border-radius:0.2rem;
                    line-height: .4rem;
                    margin: 0 auto;
                    margin-top: .2rem;
                }
            }

        }
        .product{
            text-align: center;
            p:nth-child(1){
                margin-top: .74rem;
                font-size: .13rem;
                color: #666;
                position: relative;
            }
            p:nth-child(1):after{
                content: '';
                position: absolute;
                display: block;
                left: .9rem;
                bottom: .1rem;
                width:0.5rem;
                height:0.01rem;
                background:rgba(153,153,153,1);
            }
            p:nth-child(1):before{
                content: '';
                position: absolute;
                display: block;
                right: .9rem;
                bottom: .1rem;
                width:0.5rem;
                height:0.01rem;
                background:rgba(153,153,153,1);
            }
            >div{
                margin: .2rem .16rem 0 .16rem;
                >div{
                    float: left;
                    margin-right: .1rem;
                    width:1.65rem;
                    height:1.7rem;
                    background:rgba(255,255,255,1);
                    box-shadow:0rem 0rem 0rem 0rem rgba(224,222,220,0.4);
                    border-radius:0.1rem;
                    img{
                        height: 1.35rem;
                        display: block;
                        margin: .22rem auto;

                    }
                    &:nth-child(2){
                        margin-right: 0;
                    }
                }

            }
        }
        .bottom{
            position: fixed;
            bottom: .5rem;
            height: .44rem;
            width: 100%;
            background-color: #fff;
            border:.01rem solid rgba(191,191,191,1);
            div:nth-child(1){
                width:0.15rem;
                height:0.15rem;
                border:.01rem solid rgba(51,51,51,1);
                border-radius:50%;
                float: left;
                margin-left: .16rem;
                margin-top: .175rem;
            }
            div:nth-child(2){
                float: right;
                margin-right: .16rem;
                width:0.7rem;
                height:0.3rem;
                background:rgba(65,189,150,1);
                border-radius:.15rem;
                margin-top: .07rem;
                line-height: .3rem;
                text-align: center;
                color: white;
                font-size: .15rem;
            }
            div:nth-child(3){
                float: right;
                margin-right: .1rem;
                font-size: .1rem;
                line-height: .2rem;
                padding-top: .05rem;
                p:nth-child(1){
                    color: #333;
                    span{
                        color: #ff0000;
                        font-size: .15rem;
                    }
                }
                p:nth-child(2){
                    color: #999;
                    text-align: right;
                }
            }
        }
        .move{
            position: fixed;
            bottom: 0;
            width: 100%;
            height: .5rem;
            background-color: #fff;
            z-index: 10;
            /*padding-left: .35rem;*/
            a{
                float: left;
                height: .5rem;
                width: .9rem;
                text-decoration: none;
                color: #333;
                font-size: .1rem;
                text-align: center;
                padding-top: .1rem;
                &:nth-child(3){
                    span{
                        color: #41bd96;
                    }
                }
                span:nth-child(1){
                    display: block;
                    width: .21rem;
                    height: .21rem;
                    background: no-repeat center / cover;
                    margin: 0 auto;
                }
            }
        }
    }
</style>