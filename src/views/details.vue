<template>
    <div class="conteainer">
        <Header></Header>
        <div class="detailPanel">
            <div class="projectDetail">
                <div class="nameInfo">
                    <div class="projectName">
                        <img>
                        <div class="nameContect">
                            <h2>ABCD</h2>
                            <div class="types">
                                <a><img src="../assets/img/icon10.png"></a>
                                <a><img src="../assets/img/icon11.png"></a>
                                <a><img src="../assets/img/icon6.png"></a>
                                <a><img src="../assets/img/Twitter.png"></a>
                                <a><img src="../assets/img/telegram.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="allcationn" v-show="isOpen">
                        <p class="title">Allocation Round closes in<p>
                        <p class="val">0d 1h 36m 50s</p>
                    </div>
                </div>
                <div class="mydetail">
                    <div class="content">
                        <div class="fl">
                            <div class="textbox">
                                <div class="texts">
                                    <h3>我的资产</h3>
                                    <p>{{usdtBalance}} USDT</p>
                                    <p>{{maticBalance}}MATIC</p>
                                </div>
                                <div class="texts">
                                    <h3>我的等级</h3>
                                    <p>{{tierName}}</p>
                                </div>    
                            </div>
                            <div class="textbox">
                                <div class="texts">
                                    <h3>Swapped</h3>
                                    <p>0.0000 USDT</p>
                                    <p>0.0000 ABCD</p>
                                </div>
                                <div class="texts">
                                    <h3>剩余额度</h3>
                                    <p>{{tokensLeft}} USDT</p>
                                </div>
                                <div class="texts">
                                    <h3>参与人数</h3>
                                    <p>{{tiersNum}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="fr">
                            <a class="btn" @click="stakePop = true">参与预申购</a>
                            <a class="btn disabled" @click="claimQuota">领取额度</a>
                            <a class="btn disabled" @click="R2purchase">FCFS</a>
                        </div>
                    </div>
                </div>
                <div class="infoPanel">
                    <div class="tabs">
                        <span :class="infoTabs==0?'active':''" @click="infoTabs=0">项目详情</span>
                        <span :class="infoTabs==1?'active':''" @click="infoTabs=1">项目日程</span>
                    </div>
                    <div class="infoCon" v-show="infoTabs==0">
                        <div class="infoHead">
                            <span>Pool详情</span>
                            <span>Token详情</span>
                            <p>项目详情</p>
                        </div>
                        <div class="infoBody">
                            <div class="infoDetail">
                                <h4>Pool详情</h4>
                                <div class="infoItem">
                                    <h3>开始时间</h3>
                                    <span>{{startTime}} UTC</span>
                                </div>
                                <div class="infoItem">
                                    <h3>结束时间</h3>
                                    <span>{{endTime}} UTC</span>
                                </div>
                                <div class="infoItem">
                                    <h3>兑换比例</h3>
                                    <span>1USDT={{(1/price).toFixed(4)}}{{symbol}}</span>
                                </div>
                                <div class="infoItem">
                                    <h3>IDO总额</h3>
                                    <span>{{totalVol}} USDB</span>
                                </div>
                                <div class="infoItem">
                                    <h3>参与人数</h3>
                                    <span>{{tiersNum}}</span>
                                </div>
                            </div>
                            <div class="infoDetail">
                                <h4>Token详情</h4>
                                <div class="infoItem">
                                    <h3>项目名称</h3>
                                    <span>{{name}}</span>
                                </div>
                                <div class="infoItem">
                                    <h3>币种名称</h3>
                                    <span>{{symbol}}</span>
                                </div>
                                <div class="infoItem">
                                    <h3>发行总量</h3>
                                    <span>{{totalSupply}}</span>
                                </div>
                                <div class="infoItem">
                                    <h3>简介</h3>
                                    <span>internetComputer是一个第一层协议，旨在开发一个去中心化的公共网络，使只能合约得以大规模运行。该项目旨在成为互联网计算机，提供公共互联网的功能，并允许将后端软件托管在网络上。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="infoCon" v-show="infoTabs==1">
                        <div class="roundTable">
                            <div class="roundHead">
                                <span>Round</span>
                                <span>Opens</span>
                                <span>Closes</span>
                            </div>
                            <div class="roundBody">
                                <div class="roundItem">
                                    <span>Allocation</span>
                                    <span>2021-06-10 08:00:00</span>
                                    <span>2021-06-10 08:00:00</span>
                                </div>
                                <div class="roundItem">
                                    <span>FCFS - Prepare</span>
                                    <span>2021-06-10 08:00:00</span>
                                    <span>2021-06-10 08:00:00</span>
                                </div>
                                <div class="roundItem">
                                    <span>FCFS - Start</span>
                                    <span>2021-06-10 08:00:00</span>
                                    <span>2021-06-10 08:00:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="popWrap" v-show="stakePop">
            <div class="popPanel">
                <i class="close" @click="stakePop=false"></i>
                <div class="idoput">
                    <input placeholder="请输入申购数量" v-model="preNum">
                </div>
                <div class="btnbox">
                    <a class="btn" @click="stakePop=false">取消</a>
                    <a class="btn" @click="checkPurchase">确认</a>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { HDAO_TOKEN,IDO_TOKEN,TIERSYSTEM ,USDT_TOKEN} from '../utils/contract'
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
            stakePop:false,
            IDOContract:null,
            USDTContract:null,
            STAKEContract:null,
            SALETOKENContract:null,
            tier:0,
            tierName:'--',
            isOpen:false,
            tokensLeft:0,
            preNum:'',
            saleToken:null,
            tokenDecimals:18,
            usdtDecimals:6,
            usdtBalance:0,
            maticBalance:0,
            tiersNum:0,
            round:0,
            startTime:'',
            endTime:'',
            symbol:'',
            name:'',
            totalSupply:0,
            price:0,
            isApprove:false,
            claimedNum:0,//第一轮已认领数量
            r2boughtNum:0,//第二轮已售出数量
            totalVol:0,
            infoTabs:1
        }
    },
    created(){
        this.$initWeb3().then((web3)=>{
            if(web3.eth.defaultAccount){
                this.web3 = web3
                this.defaultAccount = web3.eth.defaultAccount
                this.IDOContract = new this.web3.eth.Contract(IDO_TOKEN.abi, IDO_TOKEN.address)
                this.USDTContract = new this.web3.eth.Contract(USDT_TOKEN.abi, USDT_TOKEN.address)
                this.STAKEContract = new this.web3.eth.Contract(TIERSYSTEM.abi, TIERSYSTEM.address)
                
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
            this.getUserTier()
            this.getIsOpen()
            this.getUsdtDecimails()
            this.getAllowance()
            this.getToken()
            this.getRound2start()
            this.getTokensClaimed()
            this.getR2bought()
            this.web3.eth.getBalance(this.defaultAccount).then(res=>{
                let balance = new BigNumber(res)
                this.maticBalance = balance.div(Math.pow(10,18)).toFixed(4)
            })
        },
        async R2purchase(){
            let isR2started = await this.IDOContract.methods.isR2started().call()
            let isR2begin = await this.IDOContract.methods.isR2begin().call()
            let R2ForSale = await this.IDOContract.methods.R2ForSale().call()
            let quota = 0
            if(this.tier = 1){
                quota = R2ForSale*0.01
            }else if(this.tier = 2){
                quota = R2ForSale*0.05
            }else if(this.tier = 3){
                quota = R2ForSale*0.15
            }else if(this.tier = 4){
                quota = R2ForSale*0.25
            }
            if(!isR2started){
                this.$message({
                    message: '第二轮尚未开启',
                    type: 'warning'
                }) 
                return
            }
            if(!isR2begin){
                this.$message({
                    message: '第二轮尚未开启',
                    type: 'warning'
                }) 
                return
            }
            if(this.tier<1){
                this.$message({
                    message: '会员才可抢购',
                    type: 'warning'
                }) 
                return
            }
            quota = new BigNumber(quota)
            quota = quota.times(Math.pow(10,this.tokenDecimals))
            let res = await this.IDOContract.methods.R2purchase(quota).send({ from: this.defaultAccount })
            if(res){
                this.$message({
                    message: '抢购成功',
                    type: 'success'
                }) 
            }
        },
        //认领额度
        async claimQuota(){
            let hasFinalized = await this.IDOContract.methods.hasFinalized().call()
            let beforeClear = await this.IDOContract.methods.beforeClear().call()
            if(!hasFinalized){
                this.$message({
                    message: '第一轮尚未结束',
                    type: 'warning'
                }) 
            }
            if(!beforeClear){
                this.$message({
                    message: '认领时间已结束',
                    type: 'warning'
                }) 
            }
            let res = await this.IDOContract.methods.claim().send({ from: this.defaultAccount })
            if(res){
                this.$message({
                    message: '额度认领成功',
                    type: 'success'
                })
            }
        },
        //已经完成结算认领的数量
        async getTokensClaimed(){
            let res = await this.IDOContract.methods.tokensClaimed().call()
            if(res){
                let claimedNum = new BigNumber(res)
                this.claimedNum = claimedNum.div(Math.pow(10,this.tokenDecimals))
            }
        },
        //第二轮已售出的数量
        async getR2bought(){
            let res = await this.IDOContract.methods.R2bought().call()
            if(res){
                let claimedNum = new BigNumber(res)
                this.r2boughtNum = claimedNum.div(Math.pow(10,this.tokenDecimals))
            }
        },
        checkPurchase(){
            if(this.tier<1 || !this.tier){
                this.$message({
                    message: '成为会员才可申购',
                    type: 'warning'
                })
                return
            }
            if(!this.isOpen){
                this.$message({
                    message: '当前不可预申购',
                    type: 'warning'
                })
                return
            }
            if(parseFloat(this.preNum)>parseFloat(this.tokensLeft)){
                this.$message({
                    message: '申购数量不能大于剩余额度',
                    type: 'warning'
                })
                return
            }
            if(parseFloat(this.preNum)>parseFloat(this.preNum)*parseFloat(this.price)){
                this.$message({
                    message: '钱包USDT余额不足',
                    type: 'warning'
                })
                return
            }
            this.toPreAlloc()
        },
        async doPurchase(){
            this.stakePop = false
            let preNum = new BigNumber(this.preNum)
            preNum = preNum.times(Math.pow(10,this.usdtDecimals))
            let res = await this.IDOContract.methods.preAlloc(preNum.toFixed()).send({ from: this.defaultAccount })
            if(res){
                this.$message({
                    message: '申购成功',
                    type: 'success'
                })
            }
        },
        async toPreAlloc(){
            if(this.isApprove){
                this.doPurchase()
            }else{
                const MAX = this.web3.utils.toTwosComplement(-1)
                let apr1 = await this.USDTContract.methods.approve(IDO_TOKEN.address, MAX).send({ from: this.defaultAccount })
                this.doPurchase()
            }
        },
        async getAllowance () {
            let res = await this.USDTContract.methods.allowance(this.defaultAccount, IDO_TOKEN.address).call()
            if(res){
                this.isApprove = res > 0 ? true : false
            }
        },
        async getUserTier(){
            let res = await this.STAKEContract.methods.getUserTier(this.defaultAccount).call()
            if(res){
                this.tier = res
                if(res==1){
                    this.tierName = '青铜'
                }else if(res==2){
                    this.tierName = '白银'
                }else if(res==3){
                    this.tierName = '黄金'
                }else if(res==4){
                    this.tierName = '铂金'
                }
            }
        },  
        async getIsOpen(){
            let res = await this.IDOContract.methods.isOpen().call()
            if(res){
                this.isOpen = res
                this.getTiers()
            }
        },  
        async getTiers(){
            for(var i=1;i<=4;i++){
                let res = await this.IDOContract.methods.tier_n(i).call()
                if(res){
                    this.tiersNum += parseInt(res)
                }
            }
        },
        async getRound2start(){
            let res = await this.IDOContract.methods.round2start().call()
            if(res){
                let date = new Date()
                let now = date.getTime()
                let leftTime = res*1000 - now
                if (leftTime >= 0) {
                    this.round = 1
                    this.getStartTime()
                    this.getPrice()
                }else{
                    this.round = 2
                    this.startTime = this.format(parseInt(res)*1000)
                    this.getPrice2()
                }
            }
        },
        async getPrice(){
            let res = await this.IDOContract.methods.price().call()
            if(res){
                this.price = parseInt(res)/10000
                this.totalVol = this.claimedNum.times(this.price)
            }
        },
        async getPrice2(){
            let res = await this.IDOContract.methods.price2().call()
            if(res){
                this.price = parseInt(res)/10000
                let numPrice1 = this.claimedNum.times(this.price)
                let numPrice2 = this.r2boughtNum.times(this.price)
                this.totalVol = numPrice1.plus(numPrice2)
            }
        },
        async getTokensLeft(){
            let res = await this.IDOContract.methods.tokensLeft().call()
            if(res){
                let balance = new BigNumber(res)
                this.tokensLeft = balance.div(Math.pow(10,this.tokenDecimals))
            }
        },
        async getToken(){
            let res = await this.IDOContract.methods.token().call()
            if(res){
                this.saleToken = res
                this.SALETOKENContract = new this.web3.eth.Contract(USDT_TOKEN.abi, res)
                this.getTokenDecimails()
            }
        }, 
        async getTokenDecimails(){
            let res = await this.SALETOKENContract.methods.decimals().call()
            if(res){
                this.tokenDecimals = res
                this.getTokensLeft()
                this.getName()
            }
        },
        async getUsdtDecimails(){
            let res = await this.USDTContract.methods.decimals().call()
            if(res){
                this.usdtDecimals = res
                this.getUsdtBalance()
            }
        },
        async getUsdtBalance () {
            let res = await this.USDTContract.methods.balanceOf(this.defaultAccount).call()
            if(res){
                let balance = new BigNumber(res)
                this.usdtBalance = balance.div(Math.pow(10,this.usdtDecimals))
            }
        },
        async getStartTime(){
            let res = await this.IDOContract.methods.startTime().call()
            if(res){
                this.startTime = this.format(parseInt(res)*1000)
            }
            let duration = await this.IDOContract.methods.duration().call()
            let endTime = parseInt(res)+parseInt(duration)
            this.endTime = this.format(endTime*1000)
        },
        async getName(){
            this.name = await this.SALETOKENContract.methods.name().call()
            this.symbol = await this.SALETOKENContract.methods.symbol().call()
            let totalSupply = await this.SALETOKENContract.methods.totalSupply().call()
            if(totalSupply){
                let total = new BigNumber(totalSupply)
                this.totalSupply = total.div(Math.pow(10,this.tokenDecimals))
            }
        },
        add0(m){return m<10?'0'+m:m },
        format(shijianchuo)
        {
            //shijianchuo是整数，否则要parseInt转换
            var time = new Date(shijianchuo);
            var y = time.getFullYear();
            var m = time.getMonth()+1;
            var d = time.getDate();
            var h = time.getHours();
            var mm = time.getMinutes();
            var s = time.getSeconds();
            return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
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
                width:90%;
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
            width:250px;
            height:80px;
            line-height:80px;
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
.detailPanel{
    .projectDetail{
        .nameInfo{
            padding:130px 0 56px;
            width:1080px;
            margin:0 auto;
            overflow:hidden;
            .projectName{
                float:left;
                &>img{
                    width:115px;
                    height:115px;
                    vertical-align: middle;
                }
                .nameContect{
                    display:inline-block;
                    vertical-align:middle;
                    padding-left:35px;
                    h2{
                        font-size:36px;
                        color:#333;
                        line-height:50px;
                        font-weight:600;
                        padding-bottom:20px;
                    }
                    .types{
                        font-size:0;
                        cursor: pointer;
                        img{
                            width:38px;
                            margin-right:30px;
                        }
                    }
                }
            }
            .allcationn{
                float:right;
                padding-top:40px;
                .title{
                    font-size:24px;
                    color:#999999;
                    line-height:33px;
                    padding-bottom:8px;
                }
                .val{
                    font-size:24px;
                    color:#333333;
                    line-height:33px;
                    font-weight:bold;
                }
            }
        }
        .mydetail{
            background:#874FEC;
            padding:30px 0 0;
            .content{
                width:1080px;
                margin:0 auto;
                overflow:hidden;
                .fl{
                    float:left;
                    .textbox{
                        padding-bottom:40px;
                        .texts{
                            width:160px;
                            margin-right:70px;
                            display: inline-block;
                            vertical-align: top;
                            h3{
                                font-size:24px;
                                color:#EDD9FF;
                                line-height:33px;
                            }
                            p{
                                font-size:24px;
                                color:#fff;
                                line-height:33px;
                            }
                        }
                    }
                }
                .fr{
                    float:right;
                    .btn{
                        width:282px;
                        height:66px;
                        display:block;
                        border-radius:10px;
                        background:#fff;
                        text-align:center;
                        line-height:66px;
                        font-size:24px;
                        color:#874FEC;
                        margin-bottom:40px;
                        cursor: pointer;
                        &.disabled{
                            background:#EDD9FF;
                            cursor:initial;
                        }
                    }
                }
            }
        }
        .infoPanel{
            width:1080px;
            margin:80px auto;
            .tabs{
                border-bottom:1px solid #DADADA;
                font-size:0;
                span{
                    display:inline-block;
                    vertical-align: middle;
                    margin-right:88px;
                    font-size:30px;
                    color:#DADADA;
                    line-height:42px;
                    cursor: pointer;
                    &.active{
                        color:#874FEC;
                        font-weight:bold;
                        border-bottom:8px solid #874FEC;
                    }
                }
            }
            .infoCon{
                border:1px solid #874FEC;
                border-radius:16px;
                margin-top:40px;
                .roundTable{
                    border: 1px solid #874FEC;
                    border-radius:16px;
                    overflow:hidden;
                    .roundHead{
                        background:#874FEC;
                        padding:0 40px;
                        overflow:hidden;
                        span{
                            float:left;
                            width:33.3%;
                            text-align:left;
                            font-size:24px;
                            color:#fff;
                            line-height:50px;
                        }
                    }
                    .roundBody{
                        padding:30px 40px;
                        .roundItem{
                            overflow:hidden;
                            span{
                                float:left;
                                width:33.3%;
                                text-align:left;
                                font-size:24px;
                                color:#333333;
                                line-height:60px;
                            }
                        }
                    }
                }
                .infoHead{
                    height:50px;
                    border-radius: 16px 16px 0px 0px;
                    overflow:hidden;
                    background:#874FEC;
                    padding:0 40px;
                    span{
                        float:left;
                        width:50%;
                        font-size:24px;
                        color:#fff;
                        line-height:50px;
                        font-weight:bold;
                    }
                    p{
                        display:none;
                    }
                }
                .infoBody{
                    padding:30px 40px;
                    overflow:hidden;
                    .infoDetail{
                        float:left;
                        width:50%;
                        h4{
                            display:none;
                        }
                        .infoItem{
                            padding-bottom:30px;
                            h3{
                                display:inline-block;
                                vertical-align: top;
                                font-size:24px;
                                color:#999999;
                                line-height:33px;
                                padding-right:20px;
                            }
                            span{
                                vertical-align: top;
                                font-size:24px;
                                color:#333333;
                                line-height:33px;
                            }
                        }
                    }
                }
            }
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
                    line-height:40px;
                    font-size:16px;

                }
            }
        }

    }
    .detailPanel{
        padding:0 15px;
        .projectDetail{
            .nameInfo{
                padding:60px 0 50px;
                .projectName{
                    &>img{
                        width:48px;
                        height:48px;
                    }
                    .nameContect{
                        padding-left:14px;
                        h2{
                            font-size:10px;
                            line-height:14px;
                            padding-bottom:11px;
                        }
                        .types{
                            img{
                                width:18px;
                                margin-right:12px;
                            }
                        }
                    }
                }
                .allcationn{
                    padding-top:16px;
                    .title{
                        font-size:10px;
                        line-height:14px;
                    }
                    .val{
                        font-size:10px;
                        line-height:14px;
                    }
                }
            }
            .mydetail{
                background:none;
                padding:0;
                .content{
                    width:auto;
                    .fl{
                        float:initial;
                        .textbox{
                            padding-bottom:26px;
                            .texts{
                                width:96px;
                                margin-right:0;
                                h3{
                                    font-size:10px;
                                    color:#333333;
                                    line-height:14px;
                                    padding-bottom:8px;
                                }
                                p{
                                    font-size:10px;
                                    line-height:14px;
                                    color:#333333;
                                }
                            }
                        }
                    }
                    .fr{
                        float:initial;
                        padding-top:24px;
                        .btn{
                            width:184px;
                            height:42px;
                            line-height:42px;
                            background:#874FEC;
                            border-radius:6px;
                            font-size:12px;
                            color:#fff;
                            margin:0 auto 26px;
                        }
                    }
                }
            }
            .infoPanel{
                width:100%;
                margin:0;
                padding-bottom:60px;
                .tabs{
                    display:none;
                }
                .infoCon{
                    border-radius:10px 10px 0 0;
                    .infoHead{
                        border-radius:10px 10px 0 0;
                        height:26px;
                        span{
                            display:none;
                        }
                        p{
                            display:block;
                            font-size:12px;
                            color:#fff;
                            line-height:26px;
                            text-align:center;
                            font-weight:bold;
                        }
                    }
                    .infoBody{
                        padding:12px 18px;
                        .infoDetail{
                            float:initial;
                            width:100%;
                            border-top:1px dashed #DADADA;
                            padding:10px 0;
                            &:first-child{
                                border-top:none;
                            }
                            h4{
                                font-size:10px;
                                color:#333;
                                line-height:14px;
                                padding-bottom:5px;
                                display:block;
                            }
                            .infoItem{
                                padding-bottom:5px;
                                h3{
                                    font-size:10px;
                                    line-height:20px;
                                }
                                span{
                                    font-size:10px;
                                    line-height:20px;
                                    float:right;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>