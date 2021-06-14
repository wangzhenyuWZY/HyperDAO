<template>
    <div class="stakePanel">
        <Header></Header>
        <div class="stakeInfo">
            <div class="stakeItem">
                <p class="title">Number of stakers</p>
                <p class="val">5955</p>
            </div>
            <div class="stakeItem">
                <p class="title">Total Staked</p>
                <p class="val">1000.3333 HDAO</p>
            </div>
            <div class="stakeItem">
                <p class="title">APR</p>
                <p class="val">18%</p>
            </div>
        </div>
        <div class="address">
            <h2>智能合约地址</h2>
            <p>jkdajflkajsdjfaldsfj</p>
        </div>
        <div class="stakedCon">
            <p class="stakeTitle">staked</p>
            <p class="stakeNum">5555 HDAO</p>
            <p class="withdrawIn">Withdrawable in</p>
            <div class="myStake">
                <div class="myStakeVal">1d 3h 30m 28s</div>
                <div class="myStakeVal">500 HDAO</div>
            </div>
            <div class="stakeBtns">
                <a class="btn">Unstake</a>
                <a class="btn">Withdraw</a>
            </div>
            <p class="withdrawIn">Rewards</p>
            <div class="myStake">
                <span class="myStakeVal">3.33333</span>
            </div>
            <div class="stakeBtns">
                <a class="btn">Stake</a>
                <a class="btn">Withdraw</a>
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
.stakeInfo{
    font-size:0;
    text-align:center;
    padding-top:116px;
    .stakeItem{
        display:inline-block;
        vertical-align: middle;
        background:#874FEC;
        width:350px;
        height:120px;
        border-radius:10px;
        margin:0 20px;
        .title{
            font-size:24px;
            color:#EDD9FF;
            line-height:33px;
            text-align:center;
            padding-top:18px;
            padding-bottom:10px;
        }
        .val{
            font-size:30px;
            color:#fff;
            line-height:42px;
            text-align:center;
        }
    }
}
.address{
    padding:80px 0;
    h2{
        font-size:24px;
        color:#333333;
        line-height:33px;
        text-align:center;
        padding-bottom:12px;
    }
    p{
        font-size:24px;
        color:#333;
        line-height:33px;
        text-align:center;
    }
}
.stakedCon{
    margin:80px auto;
    width:760px;
    height:740px;
    border:2px solid #874FEC;
    border-radius:20px;
    padding:0 90px;
    .stakeTitle{
        font-size:24px;
        color:#999999;
        line-height:33px;
        text-align:center;
        padding-top:30px;
    }
    .stakeNum{
        font-size:36px;
        color:#333333;
        line-height:50px;
        text-align:center;
        padding-bottom:50px;
        font-weight:bold;
    }
    .withdrawIn{
        font-size:24px;
        color:#999999;
        line-height:33px;
        padding-bottom:7px;
    }
    .myStake{
        overflow:hidden;
        .myStakeVal{
            font-size:30px;
            color:#333333;
            line-height:42px;
            font-weight: bold;
            &:nth-child(1){
                float:left;
            }
            &:nth-child(2){
                float:right;
            }
        }
    }
    .stakeBtns{
        padding-top:50px;
        overflow:hidden;
        margin-bottom:80px;
        .btn{
            width:250px;
            height:78px;
            background:#874FEC;
            border-radius:10px;
            box-shadow: 0px 8px 10px 0px rgba(121, 55, 240, 0.43);
            font-size:24px;
            color:#fff;
            line-height:78px;
            text-align:center;
            cursor:pointer;
            &:first-child{
                float:left;
            }
            &:last-child{
                float:right;
            }
        }
    }
}
</style>