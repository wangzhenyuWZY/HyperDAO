<template>
    <div class="container">
        <Header></Header>
        <div class="chainPanel">
            <img class="banner" v-show="isCn" src="../assets/img/banner2.png">
            <img class="banner" v-show="!isCn" src="../assets/img/banner22.png">
            <p class="chainInfo info1">
                {{$t('lang.lang76')}}
            </p>
            <p class="chainInfo info2">
                {{$t('lang.lang77')}}
            </p>
            <div class="proBox">
                <div class="proItem">
                    <p class="chainInfo info3">
                        {{$t('lang.lang78')}}
                    </p>
                    <a class="stakeBtn" @click="checkChain">{{$t('lang.lang80')}}</a>
                </div>
                <div class="proItem">
                    <p class="chainInfo info3">
                        {{$t('lang.lang79')}}
                    </p>
                    <a class="stakeBtn" href="https://wallet.matic.network/" target="_blank">{{$t('lang.lang81')}}</a>
                </div>
            </div>
            
        </div>
        <div class="popWrap" v-show="mintPop">
            <div class="popPanel">
                <i class="close" @click="mintPop=false"></i>
                <div class="idoput">
                    <input :placeholder="$t('lang.lang82')" v-model="mintNum">
                    <p>{{oldBalance}}<span>/ HDAO</span></p>
                </div>
                <div class="btnbox">
                    <el-button class="btn" @click="mintPop=false">{{$t('lang.lang67')}}</el-button>
                    <el-button class="btn" @click="toMint">{{isApprove?$t('lang.lang68'):$t('lang.lang91')}}</el-button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HDAO_TOKEN,OLD_HDAO,CONVERT} from '../utils/contract'
import BigNumber from 'bignumber.js'
export default {
    components:{ 
        Header,
        Footer
    },
    watch: {
        
    },
    watch: {
            '$i18n.locale' (newValue) {
                if (this.$i18n.locale === 'en') {
                    this.isCn = false
                } else if (this.$i18n.locale === 'zh') {
                    this.isCn = true
                }
            }
        },
    data() {
        return {
            web3:null,
            defaultAccount:null,
            CONVERTContract:null,
            HDAOContract:null,
            OLDHDAOContract:null,
            mintPop:false,
            mintNum:'',
            oldDecimals:18,
            oldBalance:0,
            isApprove:false,
            isCn:false
        }
    },
    created(){
        this.$initWeb3().then((web3)=>{
            if(web3.eth.defaultAccount){
                this.web3 = web3
                this.defaultAccount = web3.eth.defaultAccount
                this.CONVERTContract = new this.web3.eth.Contract(CONVERT.abi, CONVERT.address)
                this.HDAOContract = new this.web3.eth.Contract(HDAO_TOKEN.abi, HDAO_TOKEN.address)
                this.OLDHDAOContract = new this.web3.eth.Contract(OLD_HDAO.abi, OLD_HDAO.address)
                this.init()
            }
        })
    },
    mounted() {
        
    },
    beforeDestroy () {
    
    },
    methods: {
        init(){
            this.getOldHdaoDecimails()
            this.getAllowance()
        },
        async getAllowance () {
            let res = await this.OLDHDAOContract.methods.allowance(this.defaultAccount, CONVERT.address).call()
            if(res){
                this.isApprove = res > 0 ? true : false
            }
        },
        async checkChain(){
            const chainId = await this.web3.eth.getChainId()
            if (chainId === 1) {
                this.mintPop = true
            }else{
                this.$message({
                    message: '请切换到Ethereum主网络',
                    type: 'warning'
                })
            }
        },
        async toMint(){
            if(!this.mintNum || this.mintNum==0){
                this.$message({
                    message: '请填写数量',
                    type: 'warning'
                })
                return
            }
            if(this.isApprove){
                this.doStake()
            }else{
                const MAX = this.web3.utils.toTwosComplement(-1)
                let apr1 = await this.OLDHDAOContract.methods.approve(CONVERT.address, MAX).send({ from: this.defaultAccount })
                this.isApprove = true
                this.doStake()
            } 
        },
        async doStake(){
            let mintNum = new BigNumber(this.mintNum)
            mintNum = mintNum.times(Math.pow(10,this.oldDecimals))
            let oldBalance = new BigNumber(this.oldBalance)
            oldBalance = oldBalance.times(Math.pow(10,this.oldDecimals))
            console.log(mintNum.toFixed())
            console.log(oldBalance.toFixed())
            // if(parseInt(mintNum)>parseInt(oldBalance)){
            //     this.$message({
            //         message: '余额不足',
            //         type: 'warning'
            //     })
            //     return
            // }
            this.mintPop = false
            let res = await this.CONVERTContract.methods.swap(mintNum.toFixed()).send({ from: this.defaultAccount })
            if(res){
                this.$message({
                    message: '兑换成功',
                    type: 'success'
                })
            }
        },
        async getOldHdaoDecimails(){
            this.oldDecimals = await this.OLDHDAOContract.methods.decimals().call()
            let oldBalance = await this.OLDHDAOContract.methods.balanceOf(this.defaultAccount).call()
            oldBalance = new BigNumber(oldBalance)
            this.oldBalance = oldBalance.div(Math.pow(10,this.oldDecimals)).toFixed(4)
        },    
    }
}
</script>
<style lang="less" scoped>
.popWrap{
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:rgba(0,0,0,0.6);
    z-index:999;
    .popPanel{
        position:absolute;
        top:20%;
        left:50%;
        width:750px;
        margin-left:-375px;
        background:#fff;
        border-radius:20px;
        padding-bottom:80px;
        .close{
            position:absolute;
            width:24px;
            height:24px;
            background:url(../assets/img/closeIco.png) no-repeat center;
            background-size:100% 100%;
            right:74px;
            top:52px;
            cursor: pointer;
        }
        .idoput{
            width:600px;
            height:80px;
            border:1px solid #999;
            overflow:hidden;
            margin:140px auto 0;
            border-radius:10px;
            &:nth-child(3){
                margin-top:20px;
                input{
                    width:100%;
                }
            }
            input{
                width:50%;
                line-height:80px;
                text-indent:25px;
                font-size:24px;
                color:#333333;
                float:left;
                border:none;
                background:none;
                outline:none;
            }
            p{
                float:right;
                font-size:24px;
                color:#333;
                line-height:80px;
                font-weight:bold;
                span{
                    font-size:20px;
                }
            }
        }
        .btnbox{
            overflow:hidden;
            margin-top:80px;
            width:600px;
            margin:40px auto 0;
        }
        .btn{
            display:block;
            width:250px;
            height:80px;
            box-shadow: 0px 8px 10px 0px rgba(121, 55, 240, 0.43);
            background:#874FEC;
            border-radius:10px;
            font-size:28px;
            color:#fff;
            text-align:center;
            cursor: pointer;
            float:right;
            &:first-child{
                float:left;
            }
        }
        
    }
}    
.chainPanel{
    .banner{
        width:100%;
    }
    .chainInfo{
        width:1110px;
        margin:0 auto;
        font-size:12px;
        color:#333;
        line-height:33px;
        &.info1{
            margin-top:90px;
            margin-bottom:30px;
        }
        &.info3{
            padding-bottom:30px;
            text-align:center;
        }
    }
    .proBox{
        width:1400px;
        margin:110px auto 300px;
        overflow:hidden;
        .proItem{
            width:48%;
            border:2px solid #874FEC;
            border-radius:20px;
            float:left;
            margin:0 1%;
            p{
                font-size:24px;
                color:#333;
                line-height:33px;
                text-align:center;
                width:390px;
                margin:57px auto;
                height:130px;
            }
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
        margin:0 auto 54px;
        font-size:30px;
        color:#fff;
        cursor: pointer;
    }
}
@media screen and (max-width:1200px) {
    .popWrap{
        .popPanel{
            width:90%;
            margin:0 auto;
            left:5%;
            padding-bottom:30px;
            .close{
                width:20px;
                height:20px;
                right:20px;
                top:20px;
            }
            .idoput{
                width:90%;
                height:40px;
                margin:80px auto 0;
                &:nth-child(3){
                    margin-top:20px;
                }
                input{
                    width:90%;
                    line-height:40px;
                    font-size:16px;
                    text-indent:10px;
                }
                p{
                   font-size:16px;
                   line-height:40px;
                   padding-right:10px; 
                   span{
                       font-size:14px;
                   }
                }
            }
            .btnbox{
                width:90%;
                margin:30px auto;
                .btn{
                    width:140px;
                    height:40px;
                    font-size:16px;

                }
            }
        }

    }
    .chainPanel{
        .chainInfo{
            width:100%;
            margin-top:18px;
            font-size:0.5em;
            line-height:24px;
            padding:0 30px;
            &.info1{
                margin-top:18px;

            }
        }
        .proBox{
            padding:0 15px;
            width:auto;
            margin-top:40px;
            margin-bottom:60px;
            .proItem{
                width:100%;
                border:1px solid #874FEC;
                margin-bottom:20px;
                p{
                    margin:20px auto 0;
                    width:90%;
                    font-size:14px;
                    line-height:24px;
                }
            }
        }
        .stakeBtn{
            width:120px;
            height:40px;
            line-height:40px;
            border-radius:6px;
            font-size:14px;   
            margin:0 auto 40px;
        }
    }
}
</style>