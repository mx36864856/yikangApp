<template>
    <div class="header">
    <div>
        <img src="../assets/home/Pointer@2x.png">
        <span>西安</span>
        <img src="../assets/home/图层1@2x.png">
    </div>
    <div>
        <img src="../assets/home/图层2@2x.png" alt=""><input type="text" placeholder="新用户注册领100元现金券"></div>
    <img src="../assets/home/扫一扫@2x.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "header-Component"
    }
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: .3rem;
    padding: .1rem 0 .1rem;
    background-color: #41bd96;
    div{
        float: left;
        &:nth-child(1){
            padding-left: .17rem;
            height: .3rem;
            font-size: .15rem;
            color:rgba(255,255,255,1);
            line-height:0.3rem;
            img{
                float: left;
                margin-top: .07rem;
                &:nth-child(1){
                    height: .14rem;
                    width: .11rem;
                    margin-right: .06rem;
                }
                &:nth-child(3){
                    height: .06rem;
                    width: .12rem;
                    margin-left: .05rem;
                    margin-top: .11rem;
                }
            }
            span{
                float: left;
            }
        }
        &:nth-child(2){
         position: relative;
            margin-left: .06rem;
            img{
                height: .16rem;
                width: .1rem;
                position: absolute;
                top: .08rem;
                z-index: 2;
                left: 2.3rem;
            }
            input{
                width:2.37rem;
                height:0.3rem;
                background:rgba(230,255,238,1);
                padding-left: .13rem;
                position: absolute;
                border: 0 solid;
                border-radius: .15rem;
                outline: none;
                font-size: .12rem;
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
</style>