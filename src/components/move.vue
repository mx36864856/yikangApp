<template>
    <div class="move">
        <router-link class="bottom" :to=item.href v-for="item in text">
            <span ></span>
            <span>{{item.test}}</span>
        </router-link>
    </div>
</template>

<script>
    import src1 from "../assets/home/首页logo@2x.png"
    import src2 from "../assets/home/分类logo@2x.png"
    import src3 from "../assets/home/购物车logo@2x.png"
    import src4 from "../assets/home/我的logo@2x.png"
    export default {
        name: "move",
        data(){
            return{
                text:[{
                    src:src1,test:'首页',href:'/home'
                },{
                    src:src2,test:'分类',href:'/classify'
                },{
                    src:src3,test:'购物车',href:'/community'
                },{
                    src:src4,test:'我的',href:'/mine'
                }],
            }
        },methods: {
            tab (index) {
                console.log(window.location)
            }
        }
    }
</script>

<style lang="scss" scoped>
.move{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: .5rem;
    background-color: #fff;
    z-index: 10;
    /*padding-left: .35rem;*/
    .bottom{
        float: left;
        height: .5rem;
        width: .9rem;
        text-decoration: none;
        color: #333;
        font-size: .1rem;
        text-align: center;
        padding-top: .1rem;
        span:nth-child(1){
            display: block;
            width: .21rem;
            height: .21rem;
            margin: 0 auto;
        }
        &:nth-child(1){
            span:nth-child(1){
                background: url("../assets/home/shouye icon@2x.png") no-repeat center / cover;
            }
        }
        &:nth-child(2){
            span:nth-child(1){
                background: url("../assets/home/分类logo@2x.png") no-repeat center / cover;
            }
        }
        &:nth-child(3){
            span:nth-child(1){
                background: url("../assets/home/购物车logo@2x.png") no-repeat center / cover;
            }
        }
        &:nth-child(4){
            span:nth-child(1){
                background: url("../assets/home/我的logo@2x.png") no-repeat center / cover;
            }
        }
    }
    .bottom:nth-child(1).router-link-active{
        span:nth-child(1){
            display: block;
            width: .21rem;
            height: .21rem;
            margin: 0 auto;
            background: url("../assets/home/shouye icon@2x.png") no-repeat center / cover;
        }
        span:nth-child(2){
            color: #41bd96;
        }
    }
    .bottom:nth-child(2).router-link-active{
        span:nth-child(1){
            display: block;
            width: .21rem;
            height: .21rem;
            margin: 0 auto;
            background: url("../assets/home/2分类logo@2x.png") no-repeat center / cover;
        }
        span:nth-child(2){
            color: #41bd96;
        }
    }
    .bottom:nth-child(3).router-link-active{
        span:nth-child(1){
            display: block;
            width: .21rem;
            height: .21rem;
            margin: 0 auto;
            background: url("../assets/home/shopping_icon@2x.png") no-repeat center / cover;
        }
        span:nth-child(2){
            color: #41bd96;
        }
    }
    .bottom:nth-child(4).router-link-active{
        span:nth-child(1){
            display: block;
            width: .21rem;
            height: .21rem;
            margin: 0 auto;
            background: url("../assets/home/my icon@2x.png") no-repeat center / cover;
        }
        span:nth-child(2){
            color: #41bd96;
        }
    }

}
</style>