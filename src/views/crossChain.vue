<template>
    <div class="container">
        <Header></Header>
        <div class="chainPanel">
            <img class="banner" src="../assets/img/banner2.png">
            <p class="chainInfo info1">
                Polygon（原Matic）主要解决以太坊目前拥堵和矿工费高的问题，具有极低近乎为0的交易费和高速交易吞吐量和极快（1-2s）的确认时间。便于现有以太坊开发者的零学习成本部署，是DeFi、NFT、游戏、DEX等项目克服以太坊性能瓶颈的理想方案。
            </p>
            <p class="chainInfo info2">
                Polygon的Layer2链已被广泛应用，拥有约700万的链上交易和约20万独立地址用户，可以将以太坊上数字资产跨链到Matic参与Matic生态中的Dapp。
            </p>
            <p class="chainInfo info3">
                HyperDAO支持用户在自由转换Polygon网络上与ETH网络上的HDAO代币
            </p>
            <a class="stakeBtn">Stake</a>
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
.chainPanel{
    .banner{
        width:100%;
    }
    .chainInfo{
        width:1110px;
        margin:0 auto;
        font-size:24px;
        color:#333;
        line-height:33px;
        &.info1{
            margin-top:90px;
            margin-bottom:30px;
        }
        &.info2{
            padding-bottom:215px;
        }
        &.info3{
            padding-bottom:30px;
            text-align:center;
        }
    }
    .stakeBtn{
        display:block;
        width:300px;
        height:100px;
        background:#7937F0;
        border-radius:10px;
        box-shadow: 0px 8px 10px 0px rgba(121, 55, 240, 0.43);
        text-align:center;
        line-height:100px;
        margin:0 auto 500px;
        font-size:30px;
        color:#fff;
        cursor: pointer;
    }
}
@media screen and (max-width:1200px) {
    .chainPanel{
        .chainInfo{
            width:100%;
            margin-top:18px;
            font-size:10px;
            line-height:24px;
            padding:0 16px;
            &.info1{
                margin-top:18px;

            }
            &.info2{
                padding-bottom:85px;
            }
        }
        .stakeBtn{
            width:120px;
            height:40px;
            line-height:40px;
            border-radius:6px;
            font-size:12px;   
            margin:0 auto 40px;
        }
    }
}
</style>