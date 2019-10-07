<template>
    <div class="move">
        <a v-on:click="tab" :href=item.href v-for="item in text">
            <span :style="{backgroundImage: 'url(' +item.src + ')'}"></span>
            <span>{{item.test}}</span>
        </a>
    </div>
</template>

<script>
    import src1 from "../assets/home/首页logo@2x.png"
    import src2 from "../assets/home/分类logo@2x.png"
    import src3 from "../assets/home/购物车logo@2x.png"
    import src4 from "../assets/home/我的logo@2x.png"
    export default {
        name: "sousuo",
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
    a{
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
            background: no-repeat center / cover;
            margin: 0 auto;
        }
    }
}
</style>