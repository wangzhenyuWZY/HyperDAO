<template>
    <div class="container">
        <Header></Header>
        <div class="chainPanel">
            <template v-if="itemShow">
                <img class="banner" v-show="isCn && isPc" src="../assets/img/banner2.png">
                <img class="banner" v-show="!isCn && isPc" src="../assets/img/banner22.png">
                <img class="banner" v-show="isCn && !isPc" src="../assets/img/mImg/mImg-theme1-cross.png">
                <img class="banner" v-show="!isCn && !isPc" src="../assets/img/mImg/mImg-en-theme1-cross.png">
            </template>
            <template v-else>
                <img class="banner" v-show="isCn && isPc" src="../assets/img/banner-chain-zh-theme2.png">
                <img class="banner" v-show="!isCn && isPc" src="../assets/img/banner-chain-en-theme2.png">
                <img class="banner" v-show="isCn && !isPc" src="../assets/img/mImg/mImg-theme2-cross.png">
                <img class="banner" v-show="!isCn && !isPc" src="../assets/img/mImg/mImg-en-theme2-cross.png">
            </template>
            <template v-if="crossChain">
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
            </template>    
            <template v-else>
                <div class="block1">
                    <div class="btns">
                        <div @click="changeType('toMETIC')" :class="['btn', type === 'toMETIC' ? 'active' : '' ]">BSC TO METIC</div>
                        <div @click="changeType('toBSC')" :class="['btn', type === 'toBSC' ? 'active' : '' ]">METIC TO BSC</div>
                    </div>
                    <div class="corNums">
                        {{$t('lang.lang142')}}
                    </div>
                    <input :placeholder="$t('lang.lang143')" v-model="corCount" class="corInput">
                    <div class="corCount">
                        {{$t('lang.lang144')}}
                        <span>{{account}}</span>
                    </div>
                    <div class="line">
                        <div>{{$t('lang.lang145')}}</div>
                        <div class="num">{{gas}}{{token}}</div>
                    </div>
                    <div class="launch" @click="authorize" v-show="!isAllowance">
                        <!-- <van-loading type="spinner" size="24px" /> -->
                        {{$t('lang.lang146')}}
                    </div>
                    <div class="launch" @click="launchCross" v-show="isAllowance">
                        {{$t('lang.lang152')}}
                    </div>
                </div>
                <div class="block2">
                    <div class="title">
                        {{$t('lang.lang147')}}
                    </div>
                    <div class="line">
                        <div class="item">{{$t('lang.lang148')}}</div>
                        <div class="item">{{$t('lang.lang149')}}</div>
                        <div class="item">{{$t('lang.lang150')}}</div>
                        <div class="item">{{$t('lang.lang151')}}</div>
                    </div>
                    <div class="lineInfo" v-for="item in list" :key="item.out_time">
                        <div class="item">{{item.out_time | formatTime}}</div>
                        <div class="item">
                            {{item.in_chain.toUpperCase()}} TO {{item.out_chain.toUpperCase()}}
                        </div>
                        <div class="item">已完成</div>
                        <div class="item" @click="getCrossDetail(item.in_tx, item.out_tx)">
                            <img class="item" src="../assets/img/share.png">
                        </div>
                    </div>
                    <div class="mInfoLine" @click="getCrossDetail(item.in_tx, item.out_tx)" v-for="item in list" :key="item.in_time">
                        <div class="item">时间: {{item.out_time | formatTime}}</div>
                        <div class="item">
                            <span>详情</span>
                            <img class="item" src="../assets/img/share.png">
                        </div>
                    </div>
                    <div v-if="!list.length" class="noData">暂无记录</div>
                </div>
            </template>
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
import format from '../utils/timeFormat'
import { HDAO_TOKEN, OLD_HDAO, CONVERT, CROSS_CHAIN, HDAO_MATIC } from '../utils/contract'
import { BSC_HDAO_TOKEN, BSC_CONVERT, BSC_CROSS_CHAIN, BSC_HDAO_MATIC } from '../utils/bsc_contract'
import BigNumber from 'bignumber.js'
import { mapState } from 'vuex'
import axios from "axios"
export default {
    components:{ 
        Header,
        Footer
    },
    computed: {
        itemShow() {
            return this.$store.state.theme === 'theme1'
        },
        crossChain() {
            return this.$store.state.crossChain === 'polygon'
        },
        isPc() {
            const ret = (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))
            return !ret
        }
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
    filters: {
        formatTime(time) {
            console.log(time)
            return format.call(new Date(time * 1000), 'yy-MM-dd hh:mm:ss')
        }
    }, 
    data() {
        return {
            web3:null,
            defaultAccount:null,
            CONVERTContract:null,
            HDAOContract:null,
            OLDHDAOContract:null,
            CROSSContract: null,
            HDAOMATICContract: null,
            mintPop:false,
            mintNum:'',
            oldDecimals:18,
            oldBalance:0,
            isApprove:false,
            isCn:localStorage.getItem('lang')=='zh',
            type: 'toMETIC',
            corCount: '',
            // 以太坊网络余额
            account: 0,
            // 转账手续
            gas: 0,
            // 当前以太坊网络
            token: '',
            // 是否授权转账
            isAllowance: false,
            // 跨链记录数据
            list: []
        }
    },
    created(){
        this.$initWeb3().then((web3)=>{
            if(web3.eth.defaultAccount){
                this.web3 = web3
                this.defaultAccount = web3.eth.defaultAccount
                this.getCrossList(this.defaultAccount)
                // 获取当前链id
                web3.eth.getChainId().then(chainId => {
                    // console.log(chainId)
                    this.chainId = chainId
                    if (chainId === 137) { // matic 主网ID
                        this.type = 'toBSC'
                        this.CONVERTContract = new this.web3.eth.Contract(CONVERT.abi, CONVERT.address)
                        this.HDAOContract = new this.web3.eth.Contract(HDAO_TOKEN.abi, HDAO_TOKEN.address)
                        this.CROSSContract = new this.web3.eth.Contract(CROSS_CHAIN.abi, CROSS_CHAIN.address)
                        this.HDAOMATICContract = new this.web3.eth.Contract(HDAO_MATIC.abi, HDAO_MATIC.address)
                        this.token = 'MATIC'
                    } else if (chainId === 56) { // bsc 主网ID
                        this.type = 'toMETIC'
                        this.CONVERTContract = new this.web3.eth.Contract(BSC_CONVERT.abi, BSC_CONVERT.address)
                        this.HDAOContract = new this.web3.eth.Contract(BSC_HDAO_TOKEN.abi, BSC_HDAO_TOKEN.address)
                        this.CROSSContract = new this.web3.eth.Contract(BSC_CROSS_CHAIN.abi, BSC_CROSS_CHAIN.address)
                        this.HDAOMATICContract = new this.web3.eth.Contract(BSC_HDAO_MATIC.abi, BSC_HDAO_MATIC.address)
                        this.token = 'BNB'
                    } else if (chainId === 1) { // 以太坊 主网
                        this.OLDHDAOContract = new this.web3.eth.Contract(OLD_HDAO.abi, OLD_HDAO.address)
                        this.token = 'ETH'
                    }
                    this.init()
                })
            }
        })
    },
    mounted() {
        
    },
    beforeDestroy () {
    
    },
    methods: {
        init(){
            if (this.chainId === 1) {
                this.getOldHdaoDecimails()
                this.getAllowance()
            } else {
                this.getBalance()
                this.getPounge()
                this.getISAllowance()
                // console.log(this.CROSSContract)
            }
        },
        // 查看跨链记录详情
        getCrossDetail(url1, url2) {
            console.log(this.chainId)
            if (this.chainId === 137) { // polygon
                if (url1.includes('polygon')) {
                    window.open(url1)
                } else {
                    window.open(url2)
                }
            } else { // bsc
                if (url1.includes('bsc')) {
                    window.open(url1)
                } else {
                    window.open(url2)
                }
            }
        },
        // 获取跨链记录
        getCrossList(address) {
            axios.get('http://47.242.187.3:9091/user/bridge/' + address).then((res)=>{
                if(res.data.code==0){
                    this.list = res.data.data
                } else {

                }
            })    
        },
        // 授权转账
        async authorize() {
            const id = await this.web3.eth.getChainId()
            if (this.chainId !== id) {
                return this.$message({ message: '请切换到对应网络!', type: 'error' })
            }
            // 未同意 申请授权
            // const MAX = this.web3.utils.toTwosComplement(-1)
            let res = await this.HDAOMATICContract.methods.approve(this.CROSSContract.options.address, this.rowAccount).send({ from: this.defaultAccount })
            // console.log(res)
            if (res) {
                this.isAllowance = true
                this.$message({ message: '授权成功！', type: 'success' })
            } else {
                this.$message({ message: '授权失败！', type: 'error' })
            }
        },
        // 启动跨链
        async launchCross() {
            const id = await this.web3.eth.getChainId()
            if (this.chainId !== id) {
                return this.$message({ message: '请切换到对应网络!', type: 'error' })
            }
            if (this.isAllowance) {
                // 同意授权 开启转账
                let corCount = new BigNumber(this.corCount)
                corCount = corCount.times(Math.pow(10,18))
                let gas = this.gas * Math.pow(10,18)
                let res = await this.CROSSContract.methods.cross(corCount.toFixed()).send({ from: this.defaultAccount, value: gas })
                if (res) {
                    this.$message({ message: '跨链成功！', type: 'success' })
                }else {
                    this.$message({ message: '跨链失败！', type: 'error' })
                }
            } else {
                
            }
        },
        // 查询当前网络是否授权跨链合约
        async getISAllowance() {
            // console.log(this.defaultAccount, this.CROSSContract.options.address)
            // 我的钱包地址 授权地址
            let res = await this.HDAOMATICContract.methods.allowance(this.defaultAccount, this.CROSSContract.options.address).call()
            this.isAllowance = !!Number(res)
        },
        // 查询手续费
        async getPounge() {
            let res = await this.CROSSContract.methods.pounge().call()
            if(res){
                this.gas = res / Math.pow(10,18)
            }
        },
        // 查询HDAO余额
        async getBalance() {
            let res = await this.HDAOMATICContract.methods.balanceOf(this.defaultAccount).call()
            if(res){
                this.rowAccount = res
                this.account = res / Math.pow(10,18)
            }
        },
        // 查询以太坊是否授权
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
            // console.log(mintNum.toFixed())
            // console.log(oldBalance.toFixed())
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
        changeType(type) {
            if (this.type !== type) {
                this.$message({
                    message: '请切换网络后刷新',
                    type: 'error'
                })
            }
        }
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
        font-size:24px;
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
        max-width:1400px;
        margin:110px auto 300px;
        overflow:hidden;
        .proItem{
            width:48%;
            // border:2px solid #874FEC;
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
        // background:#7937F0;
        border-radius:10px;
        // box-shadow: 0px 8px 10px 0px rgba(121, 55, 240, 0.43);
        text-align:center;
        line-height:100px;
        margin:0 auto 54px;
        font-size:30px;
        color:#fff;
        cursor: pointer;
    }


    .block1 {
        max-width: 1046px;
        box-sizing: border-box;
        padding: 0 140px;
        // border: 1px solid #874FEC;
        border-radius: 20px;
        margin: 0 auto;
        margin-top: 100px;
        overflow: hidden;
        margin-bottom: 50px;
        .btns {
            display: flex;
            justify-content: center;
            margin-top: 30px;
            .btn {
                width: 247px;
                height: 48px;
                line-height: 48px;
                text-align: center;
                // background: white;
                // border: 1px solid #874FEC;
                // color: #874FEC;
                border-radius: 20px 0px 0px 20px;
                cursor: pointer;
                &:last-child {
                    border-radius: 0px 20px 20px 0px;
                }
                &.active {
                    color: white;
                    // background: #874FEC;
                }
            }
        }
        .corNums {
            margin-top: 30px;
            font-size: 18px;
            font-weight: 400;
            color: #333333;
            line-height: 25px;
        }
        .corInput {
            width: 100%;
            outline: none;
            height: 40px;
            font-size: 16px;
            padding-left: 10px;
            margin-top: 15px;
            box-sizing: border-box;
            border-radius: 6px;
            border: 1px solid #979797;
        }
        .corCount {
            text-align: right;
            font-size: 18px; 
            margin-top: 14px;
            span {
                // color: #874FEC;
            }
        }
        .line {
            display: flex;
            justify-content: space-between;
            margin-top: 22px;
            font-size: 18px;
            .num {
                // color: #874FEC;
            }
        }
        .launch {
            width: 260px;
            height: 60px;
            font-size: 24px;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 60px;
            border-radius: 10px;
            text-align: center;
            margin: auto;
            margin-top: 80px;
            margin-bottom: 30px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            // box-shadow: 0px 2px 0px 0px #7249BA;
            // background: linear-gradient(360deg, #874FEC 0%, #A467FE 100%);
        }
    }
    .block2 {
        max-width: 1046px;
        box-sizing: border-box;
        padding: 0 140px;
        // border: 1px solid #874FEC;
        border-radius: 20px;
        margin: 0 auto;
        overflow: hidden;
        margin-bottom: 50px;
        .title {
            font-size: 28px;
            font-weight: 600;
            color: #333333;
            line-height: 40px;
            text-align: center;
            margin-top: 30px;
        }
        .line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            .item {
                width: 110px;
                height: 25px;
                font-size: 18px;
                font-weight: 400;
                color: #979797;
                line-height: 25px;
                text-align: center;
                margin-top: 50px;
            }
        }
        .lineInfo {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #e5e5e5;
            margin: 16px 0;
            padding-bottom: 16px;
            .item {
                width: 110px;
                font-size: 18px;
                font-weight: 400;
                color: #333333;
                line-height: 25px;
                text-align: center;
                &:last-child {
                    img {
                        width: 24px;
                        height: 24px;
                        cursor: pointer;
                    }
                }
            }
        }
        .mInfoLine {
            display: none;
        }
        .noData {
            font-size: 34px;
            color: #ccc;
            text-align: center;
            margin: 60px 0 40px 0;
        }
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
                // border:1px solid #874FEC;
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
        .block1 {
            margin: 40px 16px;
            width: auto;
            padding: 0 24px;
            .btns {
                margin-top: 20px;
                .btn {
                    width: 120px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 12px;
                }
            }
            .corNums {
                margin-top: 20px;
                font-size: 14px;
            }
            .corInput {
                font-size: 14px;
                height: 30px;
            }
            .corCount {
                font-size: 14px; 
            }
            .line {
                margin-top: 15px;
                font-size: 14px;
            }   
            .launch {
                margin-top: 40px;
                width: 240px;
            }
        }
        
        .block2 {
            margin: 40px 16px;
            width: auto;
            padding: 0 24px;
            .title {
                font-size: 20px;
                margin-top: 20px;
                margin-bottom: 10px;
            }
            .line {
                display: none;
                margin-bottom: 12px;
                .item {
                    margin-top: 14px;
                    font-size: 14px;
                }
            }
            .lineInfo {
                display: none;
            }
            .mInfoLine {
                display: flex;
                justify-content: space-between;
                cursor: pointer;
                padding-bottom: 12px;
                margin-top: 5px;
                border-bottom: 1px solid #E5E5E5;
                .item {
                    height: 28px;
                    line-height: 28px;
                    vertical-align: middle;
                    font-size: 12px;
                    span {
                        display: inline-block;
                        line-height: 28px;
                        margin-right: 4px;
                    }
                    img {
                        height: 16px;
                        line-height: 20px;
                        margin-bottom: 2px;
                    }
                }
            }
        }
    }
}
</style>