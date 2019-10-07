<template>
    <div class="daily">
        <div class="header">
            <span>每日特惠</span>
            <a href="/Home"><img src="../assets/箭头 左 小.svg"></a>
        </div>
        <div class="content">
            <div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Daily"
    }
</script>

<style lang="scss" scoped>
    body{
        background-color: #f6f7f8;
    }
.daily{

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
            width: .21rem;
        }
    }
    .content{
        >div{
            margin: .1rem .16rem 0 .16rem;
            height:1.27rem;
            background:linear-gradient(-61deg,rgba(255,218,196,1) 0%,rgba(254,232,219,1) 48%,rgba(255,218,196,1) 100%);
            border-radius: .1rem;
        }
    }
}
</style>