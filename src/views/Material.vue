<template>
    <div class="material">
        <div class="header">
            <span>我的资料</span>
            <a href="/mine"><img src="../assets/箭头 左 小.svg"></a>
        </div>
        <div class="content">
            <div class="title">
                <span>头像</span>
                <span><img src="../assets/mine/chakan icon@2x.png"><img v-on:click="tab" src="../assets/mine/touxiang pic@2x.png"></span>
            </div>
            <div class="title">
                <span>昵称</span>
                <span>康娜酱 <img src="../assets/mine/chakan icon@2x.png"></span>
            </div>
            <div class="title">
                <span>性别</span>
                <span>女<img src="../assets/mine/chakan icon@2x.png"></span>
            </div>
            <div class="title">
                <span>出生日期</span>
                <span>1996-11-21<img src="../assets/mine/chakan icon@2x.png"></span>
            </div>
        </div>
        <div class="float">
            <div>拍照</div>
            <div>从相册选择</div>
            <div v-on:click="del">取消</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Material",
        methods: {
            tab (index) {
               let float = document.querySelector('.float')
                float.style.display = 'block'
            },
            del(){
                let float = document.querySelector('.float')
                float.style.display = 'none'
            }
        }
    }
</script>

<style lang="scss" scoped>
    body{
        background-color: #f6f7f8;
    }
.material{

    .header{
        width: 100%;
        height:.4rem;
        padding-top: .1rem;
        background-color: #00be95;
        text-align: center;
        position: relative;
        span:nth-child(1){
            font-size: .18rem;
            color: white;
            line-height: .4rem;
        }
        img{
            position: absolute;
            left: .16rem;
            bottom: .12rem;
            height: .18rem;
        }
    }
    .content{
        .title{
            height: .6rem;
            font-size: .17rem;
            background-color: #fff;
            padding-left: .17rem;
            color: #666;
            span:nth-child(1){
                float: left;
                font-size: .18rem;
                display: block;
                padding-left: .2rem;
                color: #666;
                line-height: .6rem;
            }
            span:nth-child(2){
                font-size: .13rem;
                display: block;
                float: right;
                padding-right: .14rem;
                line-height: .6rem;
                color: #666;
                img:nth-child(1){
                    height: .11rem;
                    width: .06rem;
                    margin-left: .1rem;
                }
            }
            &:nth-child(1){
                height: .82rem;
                margin-bottom: .11rem;
                span{
                    line-height: .82rem;
                }
                span:nth-child(2){
                    padding-top: 0;
                    position: relative;
                    img:nth-child(2){
                        height: .6rem;
                        position: absolute;
                        right: .33rem;
                        top: .11rem;
                    }
                }
            }
        }
    }
    .float{
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,.2);
        position: fixed;
        top: 0;
        display: none;
        div{
            height: .6rem;
            width: 100%;
            background-color: #fff;
            line-height: .6rem;
            text-align: center;
            font-size: .17rem;
            color: #666;
            position: absolute;
        }
        div:nth-child(1){
            bottom: 1.4rem;
            border-bottom: .01rem solid rgba(0,0,0,.2);
        }
        div:nth-child(2){
            bottom: .8rem;
        }
        div:nth-child(3){
            bottom: 0;
        }
    }
}
</style>