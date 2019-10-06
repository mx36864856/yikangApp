<template>
    <div class="classify">
        <div class="header">
            <div>
                <img src="../assets/home/图层2@2x.png" alt=""><input type="text" placeholder="新用户注册领100元现金券"></div>
            <img src="../assets/home/扫一扫@2x.png" alt="">
        </div>
        <div class="content">
            <div class="content-1">
                <p v-on:click="tab(index)" :class="{border: index === curId}" v-for="(item,index) in test" >{{item.text}}</p>
            </div>
            <div class="content-3"></div>
            <div class="content-2" >
                <div v-show="index===curId" v-for="(item, index) in test">
                    <p>{{item.text}}</p>
                    <div v-for="(item,index) in content">
                        <img :src="item.url">
                        <p>{{item.text}}</p>
                    </div>
                </div>
            </div>
            <div class="content-2" >
                <div v-show="index===curId" v-for="(item, index) in test">
                    <p>{{item.text}}</p>
                    <div v-for="(item,index) in content">
                        <img :src="item.url">
                        <p>{{item.text}}</p>
                    </div>
                </div>
            </div>
            <div class="content-2" >
                <div v-show="index===curId" v-for="(item, index) in test">
                    <p>{{item.text}}</p>
                    <div v-for="(item,index) in content">
                        <img :src="item.url">
                        <p>{{item.text}}</p>
                    </div>
                </div>
            </div>
            <div class="content-2" >
                <div v-show="index===curId" v-for="(item, index) in test">
                    <p>{{item.text}}</p>
                    <div v-for="(item,index) in content">
                        <img :src="item.url">
                        <p>{{item.text}}</p>
                    </div>
                </div>
            </div>
        </div>
        <Move></Move>
    </div>
</template>

<script>
    import Move from "../components/move";
    import NavComponent from "../components/header-Component";
    import img from "../assets/classify/u=2614015722,3752731499&fm=26&gp=0@2x.png";
    export default {
        name: "Classify",
        components: {
            NavComponent,
            Move
        },
        data(){
            return{
                curId: 0,
                test:[
                    {
                    text:'医药馆'
                },{
                    text:'器械馆'
                },{
                    text:'养生保健馆'
                },{
                    text:'成人用品馆'
                },{
                    text:'生活馆'
                },{
                    text:'中药馆'
                },{
                    text:'母婴商场'
                },{
                    text:'临床新特药'
                },{
                    text:'增值服务'
                },{
                    text:'生活便利品'
                },],
                content:[{
                    url:img,text:'感冒发烧'
                },{
                    url:img,text:'感冒发烧'
                },{
                    url:img,text:'感冒发烧'
                },{
                    url:img,text:'感冒发烧'
                },{
                    url:img,text:'感冒发烧'
                },{
                    url:img,text:'感冒发烧'
                },],

            }
        },
        methods: {
            tab (index) {
                this.curId = index;
            }
        }
    }
</script>

<style lang="scss" scoped>
    body{
        background-color: #f6f7f8;
    }
    .header{
        width: 100%;
        height: .3rem;
        padding: .1rem 0 .1rem 0;
        background-color: #41bd96;
        div{
            float: left;
            &:nth-child(1){
                position: relative;
                margin-left: .06rem;
                img{
                    height: .16rem;
                    width: .1rem;
                    position: absolute;
                    top: .08rem;
                    z-index: 2;
                    left: 3rem;
                }
                input{
                    width:3.12rem;
                    height:0.3rem;
                    background:rgba(230,255,238,1);
                    padding-left: .13rem;
                    position: absolute;
                    border: 0 solid;
                    border-radius: .15rem;
                    outline: none;
                    font-size: .14rem;
                    color: #999;
                }
            }
        }
        >img{
            float: right;
            height: .19rem;
            width: .19rem;
            margin-right: .13rem;
            margin-top: .05rem;
        }
    }
.content{
    margin-top: .06rem;
    position: relative;
    .content-3{
        float: right;
        width: 2.34rem;
        height: .85rem;
        background: url("../assets/微信图片_20190927104556.png") no-repeat center / cover;
        margin-right: .17rem;
    }
    div.content-2{
        margin-right: .17rem;
        padding-left: .05rem;
        width: 2.29rem;
        float: right;
        background-color: #fff;
        margin-bottom: .1rem;
        >div{
        p:nth-child(1){
            font-size: .13rem;
            line-height: .5rem;
            color: #333;
        }
        div{
            width: .60rem;
            float: left;
            text-align: center;
            margin-right: .16rem;
            img{
                height: .60rem;
                width: .60rem;
                margin-bottom: .05rem;
            }
            p{
                font-size: .13rem;
                line-height: .3rem;
                color: #333;
            }
        }
        }
    }
    div.content-1{
        width: 1.14rem;
        float: left;

        p{
            height: .5rem;
            background: #fff;
            color: #333;
            font-size: .15rem;
            text-align: left;
            line-height: .5rem;
            position: relative;
            padding-left: .16rem;
        }
        p.border{
            background: rgba(0,0,0,0);
            font-size: .17rem;
        }
        .border:after{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            display: block;
            border: 10px solid rgba(0,0,0,0);
            border-left-color: #41bd96;
            width: 0;
            height: 0;
            margin-top: -12px;
        }
    }

}
</style>