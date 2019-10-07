<template>
    <div class="mine">
        <div class="header">
            <span>设置</span>
            <a href="/mine"><img src="../assets/箭头 左 小.svg"></a>
        </div>
        <div class="content">
            <div class="title">
                <span>账号与安全</span>
                <img src="../assets/mine/)@2x.png">
            </div>
            <div class="title">
                <span>显示高清图</span>
                <div>
                    <input type="checkbox" name="sex" id="male" class="chooseBtn" />
                    <label for="male" class="choose-label"></label>
                </div>
            </div>
            <div class="title">
                <span>客服热线</span>
                <div>400-6695-11</div>
            </div>
            <div class="title">
                <span>版本更新</span>
                <div>V2.2.25</div>
            </div>
            <div class="title">
                <span>清除缓存</span>
                <div>70.62MB</div>
            </div>
            <div class="title">
                <span>关于我们</span>
                <img src="../assets/mine/)@2x.png">
            </div>
        </div>
    </div>
</template>

<script>
    import Move from "../components/move";

    export default {
        name: "Mine",components: {
            Move
        },
        data(){
            return{

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
            margin-top: .11rem;
            .title{
                height: .6rem;
                font-size: .17rem;
                background-color: #fff;
                padding-left: .17rem;
                span{
                    float: left;
                    font-size: .17rem;
                    color: #666;
                    margin-top: .2rem;
                }
                img{
                    float: right;
                    margin-top: .26rem;
                    height: .09rem;
                    margin-right: .2rem;
                }
                div{
                    float: right;
                    margin-top: .22rem;
                    margin-right: .2rem;
                    font-size: .13rem;
                    color: #666;
                    .chooseBtn {
                        display: none;
                    }
                    .choose-label {
                        box-shadow: #ccc 0px 0px 0px 1px;
                        width: 40px;
                        height: 20px;
                        display: inline-block;
                        border-radius: 20px;
                        position: relative;
                        background-color: #bdbdbd;
                        overflow: hidden;
                    }

                    .choose-label:before {
                        content: '';
                        position: absolute;
                        left: 0;
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        border-radius: 20px;
                        background-color: #fff;
                        z-index: 20;
                        -webkit-transition: all 0.5s;
                        transition: all 0.5s;
                    }

                    .chooseBtn:checked + label.choose-label:before {
                        left: 20px;
                    }

                    .chooseBtn:checked + label.choose-label {
                        background-color: #00be95;
                    }
                }
            }
        }
    }
</style>