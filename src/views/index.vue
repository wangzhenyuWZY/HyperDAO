<template>
    <div class="container">
        <Header></Header>
        <div class="banner">
            <img src="../assets/img/banner.png" width="100%">
            <img src="../assets/img/mImg/mImg1.png" width="100%">
        </div>
        <div class="btnsbar">
            <a class="btn">购买HDAO</a>
            <a class="btn">申请IDO</a>
        </div>
        <div class="hdaoinfo">
            <h2>平台简介</h2>
            <p class="infotext1">HyperDAO是一个基于Polygon网络（原MATIC）的去中心化IDO平台，赋予加密货币项目分发代币和提高流动性的能力，以包容性和低进入门槛的方式激励和奖励所有代币持有者。</p>
            <p class="infotext2">用户可以质押HDAO到智能合约来换取HyperDAO会员资格，条件达标后，会员权益立即生效，同时质押也会产生相应挖矿收益，会员可随时赎回质押的HDAO。</p>
            <p class="infotext3">HyperDAO会员分为青铜、白银、黄金、铂金四个等级，不同等级的会员需要质押的HDAO数量不一样，享受的权益也不一样，权益包括优先认购权、更高的认购权重等。</p>
        </div>
        <div class="projectlist">
            <div class="projectItem">
                <h2>Bronze</h2>
                <p class="title">质押要求</p>
                <p class="val">10000HDAO</p>
                <p class="title">优先认购权</p>
                <p class="val">YES</p>
                <p class="title mt200">权重值</p>
                <p class="val">10</p>
            </div>
            <div class="projectItem">
                <h2>Bronze</h2>
                <p class="title">质押要求</p>
                <p class="val">10000HDAO</p>
                <p class="title">优先认购权</p>
                <p class="val">YES</p>
                <p class="title mt200">权重值</p>
                <p class="val">10</p>
            </div>
            <div class="projectItem">
                <h2>Bronze</h2>
                <p class="title">质押要求</p>
                <p class="val">10000HDAO</p>
                <p class="title">优先认购权</p>
                <p class="val">YES</p>
                <p class="title mt200">权重值</p>
                <p class="val">10</p>
            </div>
            <div class="projectItem">
                <h2>Bronze</h2>
                <p class="title">质押要求</p>
                <p class="val">10000HDAO</p>
                <p class="title">优先认购权</p>
                <p class="val">YES</p>
                <p class="title mt200">权重值</p>
                <p class="val">10</p>
            </div>
        </div>
        <div class="hdaoinfo flowPanel">
            <h2>IDO流程表</h2>
            <div class="flowItem">
                <h3>第一轮：会员分配轮</h3>
                <p class="flowtext1">会员等级决定可购买额度上限，只要是会员都有额度。</p>
                <p class="flowtext1">预审购阶段：IDO开始后，会员需在规定时间内往合约发送一定数量USDT进行预申购，预审购结束后根据参与人数计算总权重并分配额度；</p>
                <p class="flowtext1">领取额度阶段：预申购结束后，会员需在规定时间内领取额度，若预申购USDT金额超过自身额度上限，则超出部分自动返还，否则，100%用于分配额度。第一轮结束后，若还有额度剩余，则进入第二轮</p>
                <h3>第二轮：公开抢购轮</h3>
                <p class="flowtext2">价格在第一轮基础上有一定溢价，限时申购，
没有门槛限制，所有人都可以参与。</p>
                <p class="weight">非会员：每人申购数量不能超过剩余总量的1%；</p>
                <p class="weight">青铜：每人申购数量不能超过剩余总量的5%；</p>
                <p class="weight">白银：每人申购数量不能超过剩余总量的15%；</p>
                <p class="weight">黄金、铂金此轮不设上限，可任意申购；</p>
                <p class="flowtext2">申购截止后，若还有剩余，则剩余部分全部销毁。</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    components:{ 
        Header,
        Footer
    },
    watch: {
        
    },
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    beforeDestroy () {
    
    },
    methods: {
        
            
    }
}
</script>
<style lang="less" scoped>
.container{
    .banner{
        img:first-child{
            display:block;
        }
        img:last-child{
            display:none;
        }
    }
    .btnsbar{
        text-align:center;
        margin-top:-50px;
        position:relative;
        z-index:1;
        .btn{
            display:inline-block;
            vertical-align: middle;
            width:300px;
            height:100px;
            background:#874FEC;
            border-radius:50px;
            box-shadow: 0px 10px 10px -4px rgba(141, 92, 231, 0.5);
            margin:0 65px;
            font-size:30px;
            color:#fff;
            line-height:100px;
            cursor: pointer;
        }
    }
    .hdaoinfo{
        padding-top:110px;
        width:1200px;
        margin:0 auto;
        background:url(../assets/img/bg.png) no-repeat right bottom;
        background-size:650px 420px;
        margin-bottom:170px;
        h2{
            font-size:36px;
            color:#333333;
            line-height:50px;
            text-align:center;
            position:relative;
            margin-bottom:50px;
            &:after{
                content:'';
                position:absolute;
                bottom:-10px;
                left:50%;
                width:60px;
                height:1px;
                margin-left:-30px;
                background:#333;
            }
        }
        p{
            font-size:24px;
            color:#333;
            line-height:40px;
            padding-bottom:40px;
            &.infotext1{
                width:1164px;
            }
            &.infotext2{
                width:548px;
            }
            &.infotext3{
                width:548px;
                font-weight: 600;
            }
        }
    }
    .projectlist{
        font-size:0;
        text-align:center;
        .projectItem{
            display:inline-block;
            vertical-align:middle;
            width:400px;
            height:490px;
            padding:30px;
            border-radius:20px;
            background:#874FEC;
            box-sizing:border-box;
            margin:0 20px;
            h2{
                font-size:36px;
                color:#fff;
                line-height:50px;
                text-align:center;
                padding-bottom:10px;
                border-bottom:1px solid #EDD9FF;
            }
            .title{
                font-size:18px;
                color:#FFF;
                line-height:25px;
                text-align:center;
                padding-top:26px;
                &.mt200{
                    margin-top:100px;
                }
            }
            .val{
                font-size:28px;
                color:#EDD9FF;
                line-height:40px;
                text-align:center;
            }
        }
    }
    .flowPanel{
        background:url(../assets/img/bg2.png) no-repeat right 200px bottom;
        background-size:310px 610px;
    }
    .flowItem{
        text-align:left;
        h3{
            font-size:24px;
            color:#333;
            line-height:40px;
            font-weight:600;
            padding-bottom:10px;
        }
        p{
            font-size:24px;
            color:#333;
            line-height:40px;
            padding-bottom:10px;
            &.weight{
                font-weight:600;
                padding-top:20px;
                width:530px;
            }
            &.flowtext1{
                width:1120px;
            }
            &.flowtext2{
                width:530px;
            }
        }
    }
}
@media screen and (max-width:1200px) {
    .container{
        .banner{
            img:first-child{
                display:none;
            }
            img:last-child{
                display:block;
            }
        }
        .btnsbar{
            margin-top:16px;
            .btn{
                width:102px;
                height:34px;
                line-height:34px;
                font-size:12px;
                border-radius:4px;
                margin:0 22px;
            }
        }
        .hdaoinfo{
           padding:40px 15px 180px; 
           width:100%;
           background:url(../assets/img/mImg/bg.png) no-repeat bottom 25px center;
           background-size:227px 146px;
           margin-bottom:0;
           h2{
               font-size:16px;
               line-height:22px;
           }
           p{
               &.infotext1{
                    width:100%;
                    font-size:10px;
                    line-height:24px;
                    padding-bottom:16px;
                }
                &.infotext2{
                    width:100%;
                    font-size:10px;
                    line-height:24px;
                    padding-bottom:16px;
                }
                &.infotext3{
                    width:100%;
                    font-size:10px;
                    line-height:24px;
                    padding-bottom:16px;
                }
           }
           &.flowPanel{
               padding-bottom:0;
               margin-bottom:45px;
               background:url(../assets/img/mImg/bg2.png) no-repeat right 30px bottom;
               background-size:90px 177px;
               h2{
                   padding-bottom:0;
                   margin-bottom:25px;
               }
               .flowItem{
                   h3{
                       font-size:10px;
                       line-height:14px;
                       padding-bottom:7px;
                   }
                   p{
                       font-size:10px;
                       line-height:24px;
                       &.flowtext1{
                           width:100%;
                       }
                       &.flowtext2{
                           padding-bottom:0;
                           width:60%;
                       }
                       &.weight{
                           width:60%;
                           padding-top:0;
                           padding-bottom:0;
                       }
                   }
               }
           }
        }
        .projectlist{
            padding:20px;
            .projectItem{
                width:49%;
                height:214px;
                margin:0;
                padding:11px;
                border-radius:10px;
                margin-bottom:10px;
                &:nth-child(2n){
                    margin-left:2%;
                }
                h2{
                    font-size:14px;
                    line-height:20px;
                }
                .title{
                    font-size:10px;
                    line-height:14px;
                    padding-top:14px;
                    padding-bottom:4px;
                    &.mt200{
                        margin-top:20px;
                    }
                }
                .val{
                    font-size:10px;
                    line-height:14px;
                }
            }
        }
    }
}
</style>