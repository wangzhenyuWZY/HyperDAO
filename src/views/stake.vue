<template>
    <div class="stakePanel">
        <Header></Header>
        <div class="stakeInfo">
            <div class="stakeItem">
                <p class="title">{{$t('lang.lang56')}}</p>
                <p class="val">{{tiersNum}}</p>
            </div>
            <div class="stakeItem">
                <p class="title">{{$t('lang.lang57')}}</p>
                <p class="val">{{totalStakeNum}} HDAO</p>
            </div>
            <div class="stakeItem">
                <p class="title">APR</p>
                <p class="val">{{APR}}%</p>
            </div>
        </div>
        <div class="stakedCon">
            <p class="withdrawIn mtop origin">{{$t('lang.lang59')}}</p>
            <div class="myStake">
                <span class="myStakeVal origin">{{stake_amount?stake_amount:0}} HDAO</span>
            </div>
            <div class="stakeBtns">
                <el-button class="btn" @click="popShow=true" :loading="isStaking" :disabled='isStaking'>{{$t('lang.lang60')}}</el-button>
            </div>
            <p class="withdrawIn left">{{$t('lang.lang112')}}</p>
            <div class="myStake dobbuleVal">
                <div class="myStakeVal">{{day}}d {{hour}}：{{min}}：{{second}}</div>
                <div class="myStakeVal">{{frozen_amount}} HDAO</div>
            </div>
            <div class="stakeBtns border dobbuleBtn">
                <el-button class="btn" @click="unstakePop=true" :loading="isUnstake" :disabled="isUnstake">{{$t('lang.lang61')}}</el-button>
                <el-button class="btn" :class="(frozen_amount==0 || !hasWithdraw)?'desibled':''" :disabled="(frozen_amount==0 || !hasWithdraw)?true:false" @click="withdraw">{{$t('lang.lang62')}}</el-button>
            </div>
            <p class="withdrawIn">{{$t('lang.lang113')}}</p>
            <div class="myStake">
                <span class="myStakeVal">{{staticReward.toFixed(4)}}</span>
            </div>
            <div class="stakeBtns border">
                <el-button class="btn width" @click="getStaticRewards" :loading='isClaimStatic' :disabled="isClaimStatic">{{$t('lang.lang63')}}</el-button>
            </div>
            <div class="dobble">
                <p class="withdrawIn">{{$t('lang.lang64')}}</p>
                <p class="withdrawIn">{{$t('lang.lang65')}}</p>
            </div>
            <div class="myStake dobbuleVal">
                <span class="myStakeVal center">{{dynamicRewards.toFixed(4)}}</span>
                <span class="myStakeVal center">{{userInfo.num_invitor}}</span>
            </div>
            <div class="stakeBtns border">
                <el-button class="btn width" @click="getDynamicRewards" :loading="isClaimDynamic" :disabled="isClaimDynamic">{{$t('lang.lang66')}}</el-button>
            </div>
            <div class="address">
                <h2>{{$t('lang.lang58')}}</h2>
                <p>{{idoAddress}}</p>
            </div>
        </div>
        <div class="popWrap" v-show="popShow">
            <div class="popPanel">
                <i class="close" @click="popShow=false"></i>
                <div class="idoput">
                    <input :placeholder="$t('lang.lang70')" v-model="stakeNum">
                    <p>{{hdaoBalance}}<span>/ HDAO</span></p>
                </div>
                <div class="idoput" v-show="userInfo.deposit_times==0">
                    <input :placeholder="$t('lang.lang114')" v-model="inviter">
                </div>
                <div class="btnbox">
                    <el-button class="btn" @click="popShow=false">{{$t('lang.lang67')}}</el-button>
                    <el-button :loading="isDoing" :disabled="isDoing" class="btn" @click="checkApproved">{{isApprove?$t('lang.lang68'):$t('lang.lang91')}}</el-button>
                </div>
            </div>
        </div>
        <div class="popWrap" v-show="unstakePop">
            <div class="popPanel">
                <i class="close" @click="unstakePop=false"></i>
                <div class="idoput">
                    <input :placeholder="$t('lang.lang69')" v-model="unstakeNum">
                    <p>{{stake_amount}}<span>/ HDAO</span></p>
                </div>
                <div class="btnbox">
                    <el-button class="btn" @click="unstakePop=false">{{$t('lang.lang67')}}</el-button>
                    <el-button class="btn" @click="checkUnstake">{{$t('lang.lang68')}}</el-button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HDAO_MATIC, TIERSYSTEM } from '../utils/contract'
import BigNumber from 'bignumber.js'
export default {
    components:{ 
        Header,
        Footer
    },
    watch: {
        
    },
    data() {
        return {
            web3:null,
            defaultAccount:null,
            STAKEContract:null,
            HDAOContract:null,
            userInfo:{},
            tiersNum:0,
            hdaDecimals:18,
            stakeNum:'',
            unstakeNum:'',
            inviter:null,
            totalStakeNum:0,
            idoAddress:null,
            APR:18,
            popShow:false,
            unstakePop:false,
            isApprove:false,
            hdaoBalance:0,
            staticReward:0,
            stake_amount:0,
            frozen_amount:0,
            dynamicRewards:0,
            lastTime:0,
            day: '0',
            hour: '00',
            min: '00',
            second: '00',
            isStaking:false,
            isUnstake:false,
            isWithdraw:false,
            isClaimStatic:false,
            isClaimDynamic:false,
            hasWithdraw:false,
            isDoing:false
        }
    },
    created(){
        this.$initWeb3().then((web3)=>{
            if(web3.eth.defaultAccount){
                this.web3 = web3
                this.defaultAccount = web3.eth.defaultAccount
                this.STAKEContract = new this.web3.eth.Contract(TIERSYSTEM.abi, TIERSYSTEM.address)
                this.HDAOContract = new this.web3.eth.Contract(HDAO_MATIC.abi, HDAO_MATIC.address)
                this.idoAddress = TIERSYSTEM.address
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
            // this.getHdoDecimails()
            this.getHdaoBalance()
            this.getAllowance()
            this.getUserinfo()
            this.getTierInfo()
            this.getTotalStaked()
            this.getApr()
            this.getReward()
            this.getPeriod()
        },
        checkUnstake(){
            if(this.stake_amount==0){
                this.$message({
                    message: this.$t('lang.lang115'),
                    type: 'warning'
                })
                return
            }
            if(!this.unstakeNum || this.unstakeNum==0){
                this.$message({
                    message: this.$t('lang.lang69'),
                    type: 'warning'
                })
                return
            }
            this.toUnstake()
        },
        async toUnstake(){
            this.unstakePop = false
            this.isUnstake = true
            let unstakeNum = new BigNumber(this.unstakeNum)
            unstakeNum = unstakeNum.times(Math.pow(10,this.hdaDecimals))
            let res = await this.STAKEContract.methods.unstake(unstakeNum.toFixed()).send({ from: this.defaultAccount })
            if(res){
                this.isUnstake = false
                this.$message({
                    message: this.$t('lang.lang116'),
                    type: 'success'
                })
            }
        },
        async withdraw(){
            let date = new Date()
            let now = date.getTime()
            let end = this.lastTime
            let leftTime = end - now
            if(leftTime>=0){
                this.$message({
                    message: this.$t('lang.lang117'),
                    type: 'warning'
                })
                return
            }
            if(this.frozen_amount==0){
                this.$message({
                    message: this.$t('lang.lang118'),
                    type: 'warning'
                })
                return
            }
            let res = await this.STAKEContract.methods.withdraw().send({ from: this.defaultAccount })
            if(res){
                this.$message({
                    message: this.$t('lang.lang119'),
                    type: 'success'
                })
                this.getUserinfo()
            }
        },
        async checkApproved(){
            if(!this.stakeNum || this.stakeNum==0){
                this.$message({
                    message: this.$t('lang.lang120'),
                    type: 'warning'
                })
                return
            }
            if(!this.inviter){
                this.$message({
                    message: this.$t('lang.lang121'),
                    type: 'warning'
                })
                return
            }
            this.isDoing = true
            if(this.isApprove){
                this.toStake()
            }else{
                const MAX = this.web3.utils.toTwosComplement(-1)
                let apr1 = await this.HDAOContract.methods.approve(TIERSYSTEM.address, MAX).send({ from: this.defaultAccount })
                this.isApprove = true
                this.isDoing = false
            }
        },
        async toStake(){
            this.popShow = false
            this.isStaking = true
            let amount = new BigNumber(this.stakeNum)
            amount = amount.times(Math.pow(10,this.hdaDecimals))
            let inviter = this.inviter?this.inviter:TIERSYSTEM.address
            let apr1 = await this.STAKEContract.methods.stake(amount.toFixed(), inviter).send({ from: this.defaultAccount })
            this.$message({
                message: this.$t('lang.lang122'),
                type: 'success'
            })
            this.isStaking = false
            this.isDoing = false
        },
        async getStaticRewards(){
            this.isClaimStatic = true
            let res = await this.STAKEContract.methods.getStaticRewards().send({ from: this.defaultAccount })
            if(res){
                this.$message({
                    message: this.$t('lang.lang123'),
                    type: 'success'
                }) 
                this.isClaimStatic = false
                this.getUserinfo()
            }
        },
        async getDynamicRewards(){
            this.isClaimDynamic = true
            let res = await this.STAKEContract.methods.getDynamicRewards().send({ from: this.defaultAccount })
            if(res){
                this.$message({
                    message: this.$t('lang.lang123'),
                    type: 'success'
                })
                this.isClaimDynamic = false
                this.getUserinfo() 
            }
        },
        async getUserinfo (Spender) {
            let res = await this.STAKEContract.methods.userInfo(this.defaultAccount).call()
            if(res){
                this.userInfo = res
                if(res.deposit_times==0){
                    // this.inviter = TIERSYSTEM.address
                }else{
                    this.inviter = res.invite
                }
                let stake_amount = new BigNumber(res.stake_amount)
                this.stake_amount = stake_amount.div(Math.pow(10,this.hdaDecimals))
                let frozen_amount = new BigNumber(res.frozen_amount)
                this.frozen_amount = parseFloat(frozen_amount.div(Math.pow(10,this.hdaDecimals)))
                let dynamicRewards = new BigNumber(res.dynamicRewards)
                this.dynamicRewards = dynamicRewards.div(Math.pow(10,this.hdaDecimals))
            }
        },
        async getPeriod(){
            let res = await this.STAKEContract.methods.period().call()
            if(res){
                this.lastTime = parseInt(res)*1000+parseInt(this.userInfo.countdown)*1000
                this.countTime()
            }
        },
        async getTierInfo(){
            let that = this
            for(var i=1;i<=4;i++){
                let res = await that.STAKEContract.methods.tierInfo(i).call()
                if(res){
                    that.tiersNum += parseInt(res)
                }
            }
        },
        // async getHdoDecimails(){
        //     let res = await this.HDAOContract.methods.decimals().call()
        //     if(res){
        //         this.hdaDecimals = res
        //     }
        // },
        async getTotalStaked(){
            let res = await this.STAKEContract.methods.totalStake().call()
            if(res){
                let stakeNum = new BigNumber(res)
                this.totalStakeNum = stakeNum.div(Math.pow(10,this.hdaDecimals))
            }
        },
        async getApr(){
            let res = await this.STAKEContract.methods.rate().call()
            if(res){
                this.APR = res
            }
        },  
        async getAllowance () {
            let res = await this.HDAOContract.methods.allowance(this.defaultAccount, TIERSYSTEM.address).call()
            if(res){
                this.isApprove = res > 0 ? true : false
            }
        },
        async getHdaoBalance () {
            let res = await this.HDAOContract.methods.balanceOf(this.defaultAccount).call()
            if(res){
                let balance = new BigNumber(res)
                this.hdaoBalance = balance.div(Math.pow(10,this.hdaDecimals))
            }
        },
        async getReward(){
            let res = await this.STAKEContract.methods.queryRewards(this.defaultAccount).call()
            if(res){
                let staticReward = new BigNumber(res)
                this.staticReward = staticReward.div(Math.pow(10,this.hdaDecimals))
            }
        },
        countTime () {
            // 获取当前时间
            let date = new Date()
            let now = date.getTime()
            // 设置截止时间
            let end = this.lastTime
            // 时间差
            let leftTime = end - now
            // 定义变量 d,h,m,s保存倒计时的时间
            if (leftTime >= 0) {
                // 天
                this.day = Math.floor(leftTime / 1000 / 60 / 60 / 24)
                // 时
                let h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
                this.hour = h < 10 ? '0' + h : h
                // 分
                let m = Math.floor(leftTime / 1000 / 60 % 60)
                this.min = m < 10 ? '0' + m : m
                // 秒
                let s = Math.floor(leftTime / 1000 % 60)
                this.second = s < 10 ? '0' + s : s
            } else {
                this.day = 0
                this.hour = '00'
                this.min = '00'
                this.second = '00'
            }
            // 等于0的时候不调用
            if (Number(this.hour) === 0 && Number(this.day) === 0 && Number(this.min) === 0 && Number(this.second) === 0) {
                this.hasWithdraw = true
                return
            } else {
            // 递归每秒调用countTime方法，显示动态时间效果,
                this.hasWithdraw = false
                setTimeout(this.countTime, 1000)
            }
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
                padding-right:40px;
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
            padding:0 15px;
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
.stakePanel{
    background:#F6F7FA;
}
.stakeInfo{
    font-size:0;
    text-align:center;
    padding-top:116px;
    .stakeItem{
        display:inline-block;
        vertical-align: middle;
        background: linear-gradient(360deg, #874FEC 0%, #A467FE 100%);
        box-shadow: 0px 4px 0px 0px #7249BA;
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
    padding:0 0 60px;
    &.mobiles{
        display:none;
    }
    h2{
        font-size:24px;
        color:#874FEC;
        line-height:33px;
        text-align:center;
        padding-bottom:12px;
    }
    p{
        font-size:24px;
        color:#874FEC;
        line-height:33px;
        text-align:center;
    }
}
.stakedCon{
    margin:80px auto;
    width:1130px;
    border:2px solid #874FEC;
    border-radius:20px;
    padding:0 200px;
    position:relative;
    box-sizing: border-box;
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
        font-size:18px;
        color:#999999;
        line-height:33px;
        padding-bottom:7px;
        text-align:center;
        &.origin{
            color:#874FEC;
        }
        &.left{
            text-align:left;
        }
        &.mtop{
            padding-top:55px;
        }
    }
    .dobble{
        overflow:hidden;
        padding-top:30px;
        .withdrawIn{
            float:left;
            width:250px;
            &:nth-child(2){
                float:right;
            }
        }
    }
    .myStake{
        overflow:hidden;
        text-align:center;
        &.dobbuleVal{
            .myStakeVal{
                float:left;
                text-align:left;
                &:last-child{
                    float:right;
                    text-align:right;
                }
                &.center{
                    text-align:center;
                }
            }
        }
        .myStakeVal{
            font-size:28px;
            color:#333333;
            line-height:42px;
            font-weight: bold;
            width:240px;
            &.origin{
                color:#874FEC;
            }
        }
    }
    .stakeBtns{
        padding-top:40px;
        overflow:hidden;
        margin-bottom:118px;
        text-align:center;
        &.dobbuleBtn{
            .btn{
                float:left;
                &:last-child{
                    float:right;
                }
            }
        }
        &.border{
            border-bottom:1px dashed #E5E5E5;
            padding-bottom:60px;
        }
    }
    .btn{
        min-width:260px;
        height:60px;
        background:#874FEC;
        border-radius:10px;
        box-shadow: 0px 8px 10px 0px rgba(121, 55, 240, 0.43);
        font-size:24px;
        color:#fff;
        text-align:center;
        cursor:pointer;
        border:none;
        &.desibled{
            background:#979797;  
            box-shadow:none; 
        }
        &.stakebtn{
            position:absolute;
            right:80px;
            top:60px;
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
                    width:50%;
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
    .stakeInfo{
        padding-top:36px;
        .stakeItem{
            width:108px;
            height:70px;
            border-radius:6px;
            margin:0;
            margin-right:8px;
            &:last-child{
                margin-right:0;
            }
            .title{
                font-size:11px;
                line-height:14px;
                padding-top:18px;
                padding-bottom:6px;
            }
            .val{
                font-size:12px;
                color:#fff;
                line-height:17px;
            }
        }
    }
    .address{
        padding-bottom:24px;
        &.mobiles{
            display:block;
            padding:80px 0 20px;
        }
        h2,p{
            font-size:14px;
            line-height:17px;
            padding:0;
            padding-bottom:10px;
            word-break: break-all;
        }
        p{
            font-size:8px;
        }
    }
    .stakedCon{
        margin:53px 16px;
        border:1px solid  #874FEC;
        width:auto;
        padding:16px 32px 0;
        height:auto;
        .stakeTitle{
            padding-top:0;
            font-size:14px;
            line-height:14px;
        }
        .stakeNum{
            font-size:14px;
            line-height:17px;
            padding-bottom:25px;
        }
        .dobble{
            .withdrawIn{
                width:120px;
            }
        }
        .withdrawIn{
           font-size:14px;
           line-height:14px; 
           padding-bottom:6px;
           &.mtop{
               padding-top:20px;
           }
        }
        .myStake{
           .myStakeVal{
               font-size:12px;
               line-height:17px;
               width:120px;
           } 
        }
        .stakeBtns{
            padding-top:20px;
            margin-bottom:40px;
            &.border{
                padding-bottom:30px;
                margin-bottom:30px;
            }
            .btn{
                width:134px;
                min-width:auto;
                &:first-child{
                    margin-bottom:15px;
                }
                &:last-child{
                    margin:0;
                }
                &.width{
                    width:165px;
                }
            }
        }
        .btn{
            width:120px;
            height:40px;
            border-radius:6px;
            font-size:12px;
            &.stakebtn{
                width:120px;
                height:40px;
                border-radius:6px;
                font-size:12px;
                right:30px;
                top:30px;
            }
        }
    }
}
</style>