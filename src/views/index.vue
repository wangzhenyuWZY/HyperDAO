<template>
    <div class="container">
        <Header></Header>
        <div class="banner">
            <img src="../assets/img/banner.png" width="100%">
        </div>
        <div class="btnsbar">
            <a class="btn">购买HDAO</a>
            <a class="btn">申请IDO</a>
        </div>
        <div class="hdaoinfo">
            <h2>平台简介</h2>
            <p class="infotext1">HyperDAO是一个基于Polygon网络（原MATIC）的去中心化IDO平台，HyperDAO将赋予加密货币项目分发代币和提高流动性的能力。HyperDAO找到了一种解决方案，以包容性和低进入门槛的方式激励和奖励所有代币持有者</p>
            <p class="infotext2">用户可任质押HDAO到智能合约来换取HyperDAO会员资格，会员条件达标后，IDO权益立即生效，同时质押也会产生收益，会员可随时赎回质押的HDAO。</p>
            <p class="infotext3">HyperDAO会员等级为青铜、白银、黄金、铂金四个等级，不同等级的会员需要质押的HDAO数量不一样，享受的权益也不一样，权益包括优先认购权、更高的认购权重等。</p>
        </div>
        <div class="projectlist">
            <div class="projectItem">
                <h2>Bronze</h2>
                <p class="title">质押要求</p>
                <p class="val">10000HDAO</p>
                <p class="title mt200">权重值</p>
                <p class="val">10</p>
            </div>
            <div class="projectItem">
                <h2>Bronze</h2>
                <p class="title">质押要求</p>
                <p class="val">10000HDAO</p>
                <p class="title mt200">权重值</p>
                <p class="val">10</p>
            </div>
            <div class="projectItem">
                <h2>Bronze</h2>
                <p class="title">质押要求</p>
                <p class="val">10000HDAO</p>
                <p class="title mt200">权重值</p>
                <p class="val">10</p>
            </div>
            <div class="projectItem">
                <h2>Bronze</h2>
                <p class="title">质押要求</p>
                <p class="val">10000HDAO</p>
                <p class="title mt200">权重值</p>
                <p class="val">10</p>
            </div>
            <div class="hdaoinfo flowPanel">
                <h2>IDO流程表</h2>
                <div class="flowItem">
                    <h3>第一轮：会员分配轮</h3>
                    <p class="flowtext1">会员等级决定其可购买额度上限，不用拼手速，只要是会员都有额度。
会员若选择参与IDO，则IDO开始后，往合约发送一定数量USDT，进行预申购额度下限可在后台自行设置，第一轮结束后根据参与预购人数计算总权重，若会员预申购USDT金额，超过自身额度上限，则超出部分自动返还，若未超出自身额度上限，则100%用于分配额度；所有预申购会员额度分配结束后，若还有剩余，则进入第二轮</p>
                    <h3>第二轮：公开抢购轮</h3>
                    <p class="flowtext2">限时申购，价格在第一轮基础上有一定溢价，
此轮申购没有门槛限制，所有人都可以参与。</p>
                    <p class="weight">非会员：每人申购数量不能超过剩余总量的1%；
青铜：每人申购数量不能超过剩余总量的5%；
白银：每人申购数量不能超过剩余总量的15%；
黄金、铂金此轮不设上限，可任意申购；
申购截止后，若还有剩余，则剩余部分全部销毁。</p>
                </div>
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
                    margin-top:200px;
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
            padding-bottom:80px;
            &.weight{
                font-weight:600;
                padding-top:40px;
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
</style>