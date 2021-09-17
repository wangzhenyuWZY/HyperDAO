<template>
    <div class="conteainer">
        <Header></Header>
        <div class="detailPanel">
            <div class="projectDetail">
                <div class="nameInfo">
                    <div class="projectName">
                        <img :src="detailInfo.logo_url">
                        <div class="nameContect">
                            <h2>{{isCn?detailInfo.name_zh:detailInfo.name_en}}</h2>
                            <div class="types">
                                <a :href="detailInfo.url"><img src="../assets/img/icon10.png"></a>
                                <a :href="detailInfo.medium_account"><img src="../assets/img/icon11.png"></a>
                                <a :href="detailInfo.twitter_account"><img src="../assets/img/Twitter.png"></a>
                                <a :href="detailInfo.telegram_account"><img src="../assets/img/telegram.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="allcationn" v-show="isDowning">
                        <p class="title" v-show="beginPro">{{$t('lang.lang106')}}</p>          
                        <p class="title" v-show="beginClaim">{{$t('lang.lang107')}}</p>    
                        <p class="title" v-show="beginFcfs">{{$t('lang.lang108')}}</p>                      
                        <p class="val">{{day}}d {{hour}}h {{min}}m {{second}}s</p>
                    </div>
                </div>
                <div class="mydetail">
                    <div class="content">
                        <div class="fl">
                            <div class="textbox">
                                <div class="texts">
                                    <h3>{{$t('lang.lang35')}}</h3>
                                    <p>{{usdtBalance}} USDT</p>
                                    <p>{{maticBalance}}{{chainId === 137?'MATIC':'BNB'}}</p>
                                </div>
                                <div class="texts">
                                    <h3>{{$t('lang.lang36')}}</h3>
                                    <p v-show="tier==1">{{$t('lang.lang7')}}</p>
                                    <p v-show="tier==2">{{$t('lang.lang8')}}</p>
                                    <p v-show="tier==3">{{$t('lang.lang9')}}</p>
                                    <p v-show="tier==4">{{$t('lang.lang10')}}</p>
                                </div>  
                                <div class="texts none">
                                    <h3>{{$t('lang.lang33')}}</h3>
                                    <p>{{tiersNum}}</p>
                                </div>  
                            </div>
                            <div class="textbox">
                                <div class="texts">
                                    <!-- <h3>{{$t('lang.lang37')}}</h3> -->
                                    <h3 v-show="round==1&&!userInfo.checked">{{$t('lang.lang129')}}</h3>
                                    <h3 v-show="round==1&&userInfo.checked">{{userInfo.checked?$t('lang.lang130'):$t('lang.lang129')}}</h3>
                                    <h3 v-show="beginFcfs">{{$t('lang.lang131')}}</h3>
                                    <div v-if="round==1&&!userInfo.checked">
                                        <p>{{userInfo.uAmount}} USDT</p>
                                        <p>{{userInfo.amount}} {{symbol}}</p>
                                    </div>
                                    <div v-else-if="round==1&&userInfo.checked">
                                        <p>{{userInfo.claimedUsdt}} USDT</p>
                                        <p>{{userInfo.claimed}} {{symbol}}</p>
                                    </div>
                                    <div v-else>
                                        <p>{{userInfo2.uAmount}} USDT</p>
                                        <p>{{userInfo2.amount}} {{symbol}}</p>
                                    </div>
                                </div>
                                <div class="texts">
                                    <!-- <h3>{{$t('lang.lang38')}}</h3> -->
                                    <h3 v-if="beginPro && !beginClaim">{{$t('lang.lang132')}}</h3>
                                    <h3 v-else>{{$t('lang.lang133')}}</h3>
                                    <p>{{beginPro && !beginClaim?totalSupply:(beginFcfs?(totalSupply-claimedNum-r2boughtNum).toFixed(2):(totalSupply-claimedNum).toFixed(2))}} {{symbol}}</p>
                                </div>
                                <div class="texts none">
                                    <h3>{{beginClaim?$t('lang.lang39'):(fcfsBtn?$t('lang.lang40'):'')}}</h3>
                                    <p>{{beginClaim?claimQ:(fcfsBtn?fcfsQuotaNum+'  '+symbol:'')}}</p>
                                </div>
                            </div>
                            <div class="textbox" v-show="fcfsBtn">
                                <div class="texts">
                                    <h3>{{$t('lang.lang130')}}</h3>
                                    <p>{{userInfo.claimedUsdt}} USDT</p>
                                    <p>{{userInfo.claimed}} {{symbol}}</p>
                                </div>
                            </div>
                            <div class="textbox pcnone">
                                <div class="texts">
                                    <h3>{{$t('lang.lang33')}}</h3>
                                    <p>{{tiersNum}}</p>
                                </div>  
                                <div class="texts">
                                    <h3>{{beginClaim?$t('lang.lang39'):(fcfsBtn?$t('lang.lang40'):'')}}</h3>
                                    <p>{{beginClaim?claimQ:(fcfsBtn?fcfsQuotaNum+'  '+symbol:'')}}</p>
                                </div>
                            </div>
                            <p class="tips">{{$t('lang.lang138')}}</p>
                        </div>
                        <div class="fr">
                            <el-button class="btn" :class="!beginPro?'disabled':''" :disabled="!isOpen" @click="stakePop = true">{{$t('lang.lang41')}}</el-button>
                            <el-button class="btn" :class="!beginClaim?'disabled':''" :disabled="!beginClaim" @click="claimQuota">{{$t('lang.lang42')}}</el-button>
                            <el-button class="btn" :class="!fcfsBtn?'disabled':''" :disabled="!fcfsBtn" @click="fcfsPop = true">{{$t('lang.lang43')}}</el-button>
                        </div>
                    </div>
                </div>
                <div class="infoPanel">
                    <div class="tabs">
                        <span :class="infoTabs==0?'active':''" @click="infoTabs=0">{{$t('lang.lang44')}}</span>
                        <span :class="infoTabs==1?'active':''" @click="infoTabs=1">{{$t('lang.lang45')}}</span>
                    </div>
                    <div class="infoCon" v-show="infoTabs==0">
                        <div class="infoHead">
                            <span>{{$t('lang.lang46')}}</span>
                            <span class="none">{{$t('lang.lang47')}}</span>
                        </div>
                        <div class="infoBody">
                            <div class="infoDetail">
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang48')}}</h3>
                                    <span v-show="beginPro">{{schedule.startTime1}} (UTC+8)</span>
                                    <span v-show="beginClaim">{{schedule.endTime1}} (UTC+8)</span>
                                    <span v-show="beginFcfs">{{schedule.startTime3}} (UTC+8)</span>
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang49')}}</h3>
                                    <span v-show="beginPro">{{schedule.endTime1}} (UTC+8)</span>
                                    <span v-show="beginClaim">{{schedule.endTime2}} (UTC+8)</span>
                                    <span v-show="beginFcfs">{{schedule.endTime3}} (UTC+8)</span>
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang50')}}</h3>
                                    <span>{{round==1?r1Price:price}}USDT</span>
                                    <!-- <span>{{detailInfo.asset_retention_ratio}}</span> -->
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang51')}}</h3>
                                    <span>{{totalVol}} USDT</span>
                                </div>
                                <div class="infoItem">
                                    <h3 v-show="beginPro">{{$t('lang.lang33')}}</h3>
                                    <h3 v-show="beginClaim">{{$t('lang.lang134')}}</h3>
                                    <h3 v-show="beginFcfs">{{$t('lang.lang135')}}</h3>
                                    <span>{{tiersNum}}</span>
                                </div>
                            </div>
                            <div class="infoDetail none">
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang52')}}</h3>
                                    <span>{{isCn?detailInfo.name_zh:detailInfo.name_en}}</span>
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang53')}}</h3>
                                    <span>{{symbol}}</span>
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang54')}}</h3>
                                    <span>{{totalSupply1}}</span>
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang128')}}</h3>
                                    <span>{{detailInfo.asset_retention_ratio}}%</span>
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang55')}}</h3>
                                    <span>{{isCn?detailInfo.description_zh:detailInfo.description_en}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="infoCon martop" v-show="infoTabs==0">
                        <div class="infoHead">
                            <span>{{$t('lang.lang47')}}</span>
                        </div>
                        <div class="infoBody">
                            <div class="infoDetail">
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang52')}}</h3>
                                    <span>{{isCn?detailInfo.name_zh:detailInfo.name_en}}</span>
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang53')}}</h3>
                                    <span>{{symbol}}</span>
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang54')}}</h3>
                                    <span>{{totalSupply1}}</span>
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang128')}}</h3>
                                    <span style="padding-top: 0.08rem;">{{detailInfo.asset_retention_ratio}}%</span>
                                </div>
                                <div class="infoItem">
                                    <h3>{{$t('lang.lang55')}}</h3>
                                    <span style="padding: 0.08rem 0;">{{isCn?detailInfo.description_zh:detailInfo.description_en}}</span>
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
                                    <span>{{$t('lang.lang41')}}</span>
                                    <span>{{schedule.startTime1}}(UTC+8)</span>
                                    <span>{{schedule.endTime1}}(UTC+8)</span>
                                </div>
                                <div class="roundItem">
                                    <span>{{$t('lang.lang42')}}</span>
                                    <span>{{schedule.endTime1}}(UTC+8)</span>
                                    <span>{{schedule.endTime2}}(UTC+8)</span>
                                </div>
                                <div class="roundItem">
                                    <span>{{$t('lang.lang43')}}</span>
                                    <span>{{schedule.startTime3}}(UTC+8)</span>
                                    <span>{{schedule.endTime3}}(UTC+8)</span>
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
                    <input :placeholder="$t('lang.lang90')" v-model="preNum">
                    <span>USDT</span>
                </div>
                <div class="btnbox">
                    <el-button class="btn" @click="stakePop=false">{{$t('lang.lang67')}}</el-button>
                    <el-button :disabled="isBuying" :loading="isBuying" class="btn" @click="checkPurchase">{{isApprove?$t('lang.lang68'):$t('lang.lang91')}}</el-button>
                </div>
            </div>
        </div>
        <div class="popWrap" v-show="fcfsPop">
            <div class="popPanel">
                <i class="close" @click="fcfsPop=false"></i>
                <div class="idoput">
                    <input :placeholder="$t('lang.lang90')" @input="changeu=fcfsNum*price" v-model="fcfsNum">
                    <span>{{symbol}}</span>
                </div>
                <p class="toUsdt">≈{{changeu}} USDT</p>
                <div class="btnbox">
                    <el-button class="btn" @click="fcfsPop=false">{{$t('lang.lang67')}}</el-button>
                    <el-button :disabled="isBuying" :loading="isBuying" class="btn" @click="checkApprove">{{isApprove?$t('lang.lang68'):$t('lang.lang91')}}</el-button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import axios from "axios"
import { IDO_TOKEN,TIERSYSTEM ,USDT_TOKEN} from '../utils/contract'
import { BSC_IDO_TOKEN,BSC_TIERSYSTEM ,BSC_USDT_TOKEN} from '../utils/bsc_contract'
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
            infoTabs:0,
            detailInfo:{},
            times:[],
            fcfsEndTime:null,
            clearTime:null,
            day: '0',
            hour: '00',
            min: '00',
            second: '00',
            isDowning:false,
            beginFcfs:false,
            beginClaim:false,
            beginPro:false,
            startDate:null,
            downTime:null,
            fcfsPop:false,
            fcfsNum:'',
            round2Start:'',
            schedule:{},
            userInfo:{},
            userInfo2:{},
            isR2started:false,
            r1Price:0,
            isBuying:false,
            fcfsBtn:false,
            claimQ:0,
            fcfsQuota:0,
            fcfsQuotaUsdt:0,
            fcfsQuotaNum:0,
            totalSupply1:0,
            isCn:false,
            changeu:0,
            chainId:56
        }
    },
    created(){
        this.$initWeb3().then((web3)=>{
            if(web3.eth.defaultAccount){
                this.web3 = web3
                this.defaultAccount = web3.eth.defaultAccount
                web3.eth.getChainId().then(chainId => {
                    this.chainId = chainId
                    if(chainId === 137) {
                        // this.IDOContract = new this.web3.eth.Contract(IDO_TOKEN.abi, IDO_TOKEN.address)
                        this.USDTContract = new this.web3.eth.Contract(USDT_TOKEN.abi, USDT_TOKEN.address)
                        this.STAKEContract = new this.web3.eth.Contract(TIERSYSTEM.abi, TIERSYSTEM.address)
                        this.getDetails()
                    } else {
                        this.USDTContract = new this.web3.eth.Contract(BSC_USDT_TOKEN.abi, BSC_USDT_TOKEN.address)
                        this.STAKEContract = new this.web3.eth.Contract(BSC_TIERSYSTEM.abi, BSC_TIERSYSTEM.address)
                        this.getDetails()
                    }
                })
                
            }
        })
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
    mounted() {
        
    },
    beforeDestroy () {
    
    },
    methods: {
        async init(){
            this.getIsOpen()
            this.getUsdtBalance()
            this.getTiers()
            this.getUserTier()
            await this.getToken()
            await this.getPrice()
            await this.getPrice2()
            await this.getRound2start()
            this.web3.eth.getBalance(this.defaultAccount).then(res=>{
                let balance = new BigNumber(res)
                this.maticBalance = balance.div(Math.pow(10,18)).toFixed(4)
            })
        },
        refresh(){
            this.getUsdtBalance()
            this.getRound2start()
            this.getUserTier()
        },
        getDetails(){
            axios.get("/api/hdao/"+this.$route.query.id).then((res)=>{
                if(res.data.code==0){
                    this.detailInfo = res.data.data
                    this.detailInfo.asset_retention_ratio = 100-parseFloat(res.data.data.asset_retention_ratio)
                    this.IDOContract = new this.web3.eth.Contract(IDO_TOKEN.abi, res.data.data.ido_address)
                    this.getAllowance(res.data.data.ido_address)
                    this.init()
                }
            })
        },
        async getUserInfo(){
            let userInfo = await this.IDOContract.methods.userInfo(this.defaultAccount).call() 
            let amount = new BigNumber(userInfo.amount)
            amount = amount.div(Math.pow(10,this.tokenDecimals))
            let uAmount = new BigNumber(userInfo.uAmount)
            uAmount = uAmount.div(Math.pow(10,this.usdtDecimals))
            let claimed = new BigNumber(userInfo.claimed)
            claimed = claimed.div(Math.pow(10,this.tokenDecimals))
            let price = await this.IDOContract.methods.price().call()
            price = parseInt(price)/10000
            let claimedUsdt = claimed.times(price)
            this.userInfo = {
                amount:amount.toFixed(2),
                uAmount:uAmount.toFixed(2),
                claimed:claimed.toFixed(2),
                claimedUsdt:claimedUsdt.toFixed(2),
                checked:userInfo.checked
            }
            let isR2started = await this.IDOContract.methods.isR2started().call()
            this.isR2started = isR2started
            let userInfo2 = await this.IDOContract.methods.userInfo2(this.defaultAccount).call() 
            let amount2 = new BigNumber(userInfo2.amount_purchased);
            amount2 = amount2.div(Math.pow(10,this.tokenDecimals))
            let uAmount2 = new BigNumber(userInfo2.u_paid)
            uAmount2 = uAmount2.div(Math.pow(10,this.usdtDecimals))
            this.userInfo2 = {
                amount:amount2.toFixed(2),
                uAmount:uAmount2.toFixed(2),
                times:userInfo2.times
            }
        },
        async checkApprove(){
            this.isBuying = true
            if(this.isApprove){
                this.R2purchase()
            }else{
                const MAX = this.web3.utils.toTwosComplement(-1)
                let apr1 = await this.USDTContract.methods.approve(this.detailInfo.ido_address, MAX).send({ from: this.defaultAccount })
                this.isApprove = true
                this.isBuying = false
            }
        },
        async getQuota(){
            let R2ForSale = await this.IDOContract.methods.getR2ForSale().call()
            R2ForSale = new BigNumber(R2ForSale)
            R2ForSale = R2ForSale.div(Math.pow(10,this.tokenDecimals))
            let quota = 0
            if(this.tier == 0){
                quota = R2ForSale*0.01
            }else if(this.tier == 1){
                quota = R2ForSale*0.05
            }else if(this.tier == 2){
                quota = R2ForSale*0.15
            }else{
                quota = R2ForSale
            }
            return quota
        },
        async R2purchase(){
            this.fcfsPop = false
            let preNum = new BigNumber(this.fcfsNum)
            // preNum = preNum.div(this.price)
            
            let isR2started = await this.IDOContract.methods.isR2started().call()
            let isR2begin = await this.IDOContract.methods.isR2begin().call()
            let quota = await this.getQuota()
            if(parseFloat(preNum.toFixed(2))>parseFloat(quota.toFixed(2))){
                this.$message({
                    message: this.$t('lang.lang92')+quota.toFixed(2),
                    type: 'warning'
                })
                this.isBuying = false
                return
            }
            if(!isR2started){
                this.$message({
                    message: this.$t('lang.lang93'),
                    type: 'warning'
                }) 
                this.isBuying = false
                return
            }
            
            if(parseFloat(this.fcfsNum)*parseFloat(this.price)>this.usdtBalance){
                this.$message({
                    message: this.$t('lang.lang95'),
                    type: 'warning'
                })
                this.isBuying = false
                return
            }
            let that = this
            preNum = preNum.times(Math.pow(10,this.tokenDecimals))
            this.IDOContract.methods.R2purchase(preNum.toFixed()).send({ from: this.defaultAccount })
                    .once('transactionHash', function(hash){
                        
                    })
                    .once('confirmation', function(confirmationNumber, receipt){
                        that.isBuying = false
                        that.$message({
                            message: that.$t('lang.lang96'),
                            type: 'success'
                        }) 
                        that.refresh()
                    })
                    .once('error', function(){
                        that.isBuying = false
                    });
        },
        //认领额度
        async claimQuota(){
            let hasFinalized = await this.IDOContract.methods.hasFinalized().call()
            let beforeClear = await this.IDOContract.methods.beforeClear().call()
            if(!hasFinalized){
                this.$message({
                    message: this.$t('lang.lang97'),
                    type: 'warning'
                }) 
                return
            }
            if(!beforeClear){
                this.$message({
                    message: this.$t('lang.lang98'),
                    type: 'warning'
                }) 
                return
            }
            let res = await this.IDOContract.methods.claim().send({ from: this.defaultAccount })
            if(res){
                this.$message({
                    message: this.$t('lang.lang99'),
                    type: 'success'
                })
                this.refresh()
            }
        },
        //已经完成结算认领的数量
        async getTokensClaimed(){
            let res = await this.IDOContract.methods.tokensClaimed().call()
            if(res){
                let claimedNum = new BigNumber(res)
                this.claimedNum = claimedNum.div(Math.pow(10,this.tokenDecimals))
                if(this.round==1){
                    this.totalVol = this.claimedNum.times(this.r1Price).toFixed(2)
                }else{
                    let numPrice1 = this.claimedNum.times(this.r1Price)
                    let numPrice2 = this.r2boughtNum.times(this.price)
                    this.totalVol = numPrice1.plus(numPrice2).toFixed(2)
                }
                
            }
        },
        //第二轮已售出的数量
        async getR2bought(){
            let res = await this.IDOContract.methods.R2bought().call()
            if(res){
                let claimedNum = new BigNumber(res)
                this.r2boughtNum = claimedNum.div(Math.pow(10,this.tokenDecimals))
                this.getTokensClaimed()
            }
        },
        async checkPurchase(){
            if(this.tier<1 || !this.tier){
                this.$message({
                    message: this.$t('lang.lang94'),
                    type: 'warning'
                })
                return
            }
            if(!this.isOpen){
                this.$message({
                    message: this.$t('lang.lang100'),
                    type: 'warning'
                })
                return
            }
            if(parseFloat(this.preNum)>parseFloat(this.totalSupply)){
                this.$message({
                    message: this.$t('lang.lang101'),
                    type: 'warning'
                })
                return
            }
            // if(parseFloat(this.preNum)*parseFloat(this.price)>this.usdtBalance){
            if(parseFloat(this.preNum)*parseFloat(this.price)>this.totalVol){
                this.$message({
                    message: this.$t('lang.lang95'),
                    type: 'warning'
                })
                return
            }
            this.toPreAlloc()
        },
        doPurchase(){
            this.stakePop = false
            let preNum = new BigNumber(this.preNum)
            preNum = preNum.div(this.r1Price)
            preNum = preNum.times(Math.pow(10,this.tokenDecimals))
            this.IDOContract.methods.preAlloc(preNum.toFixed(0)).send({ from: this.defaultAccount })
                    .once('transactionHash', function(hash){
                        
                    })
                    .once('confirmation', function(confirmationNumber, receipt){
                        that.isBuying = false
                        that.$message({
                            message: that.$t('lang.lang96'),
                            type: 'success'
                        }) 
                        that.refresh()
                    })
                    .once('error', function(){
                        that.isBuying = false
                    });
        },
        async toPreAlloc(){
            this.isBuying = true
            if(this.isApprove){
                this.doPurchase()
            }else{
                const MAX = this.web3.utils.toTwosComplement(-1)
                let apr1 = await this.USDTContract.methods.approve(this.detailInfo.ido_address, MAX).send({ from: this.defaultAccount })
                this.isApprove = true
                this.isBuying = false
            }
        },
        async getAllowance (address) {
            let res = await this.USDTContract.methods.allowance(this.defaultAccount, address).call()
            if(res){
                this.isApprove = res > 0 ? true : false
            }
        },
        async getUserTier(){
            let res = await this.STAKEContract.methods.getUserTier(this.defaultAccount).call()
            if(res){
                this.tier = res
                if(res==1){
                    this.tierName = this.$t('lang.lang7')
                }else if(res==2){
                    this.tierName = this.$t('lang.lang8')
                }else if(res==3){
                    this.tierName = this.$t('lang.lang9')
                }else if(res==4){
                    this.tierName = this.$t('lang.lang10')
                }
            }
        },  
        async getIsOpen(){
            let res = await this.IDOContract.methods.isOpen().call()
            if(res){
                this.isOpen = res
            }
        },  
        async getTiers(){
            let res = await this.IDOContract.methods.participants().call()
            if(res){
                this.tiersNum = parseInt(res)
            }
        },
        async getRound2start(){
            let res = await this.IDOContract.methods.round2start().call()
            if(res){
                let date = new Date()
                let now = date.getTime()
                let leftTime = res*1000 - now
                this.round2Start = res
                if (leftTime >= 0) {
                    this.round = 1
                    this.getTokensClaimed()
                }else{
                    this.round = 2
                    this.startDate = res
                    this.startTime = this.format(parseInt(res)*1000)
                    this.getR2bought()
                }
                this.getStartTime()
            }
            await this.getUserInfo()
        },
        async getPrice(){
            let res = await this.IDOContract.methods.price().call()
            if(res){
                this.price = parseInt(res)/10000
                this.r1Price = parseInt(res)/10000
                
            }
        },
        async getPrice2(){
            let res = await this.IDOContract.methods.price2().call()
            if(res){
                this.price = parseInt(res)/10000
                
            }
        },
        // async getTokensLeft(){
        //     let res = await this.IDOContract.methods.tokensLeft().call()
        //     if(res){
        //         let balance = new BigNumber(res)
        //         this.tokensLeft = balance.div(Math.pow(10,this.tokenDecimals))
        //     }
        // },
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
                // this.getTokensLeft()
                this.getName()
            }
        },
        // async getUsdtDecimails(){
        //     let res = await this.USDTContract.methods.decimals().call()
        //     if(res){
        //         this.usdtDecimals = res
        //         this.getUsdtBalance()
        //     }
        // },
        async getUsdtBalance () {
            let res = await this.USDTContract.methods.balanceOf(this.defaultAccount).call()
            if(res){
                let dec = this.chainId === 137 ? 6 : 18
                let balance = new BigNumber(res)
                this.usdtBalance = balance.div(Math.pow(10,dec)).toFixed(2)
            }
        },
        async getStartTime(){
            let res = await this.IDOContract.methods.startTime().call()
            let round2start = await this.IDOContract.methods.round2start().call()
            let round2end = await this.IDOContract.methods.round2end().call()//第二轮结束时间
            if(res){
                this.startDate = res
                this.startTime = this.format(parseInt(res)*1000)
            }
            this.round2Start = round2start
            this.fcfsEndTime = round2end
            let duration = await this.IDOContract.methods.duration().call()
            let endTime = parseInt(res)+parseInt(duration)
            this.endTime = endTime//第一轮结束时间
            let clearTime = await this.IDOContract.methods.clearTime().call()
            this.clearTime = parseInt(clearTime)//认领结束时间
            this.getDownTime()
            this.schedule = {
                startTime1:this.startTime,
                endTime1:this.format(parseInt(endTime)*1000),
                endTime2:this.format(parseInt(this.clearTime)*1000),
                startTime3:this.format(parseInt(this.round2Start)*1000),
                endTime3:parseInt(round2end)?this.format(parseInt(round2end)*1000):'--'
            }
        },
        getDownTime(){
            let now = new Date().getTime()
            now = now/1000
            this.downTime = this.endTime
            if(now>this.startDate && now<this.endTime){
                this.downTime = this.endTime
                this.countTime()
                this.isDowning = true
                this.beginPro = true
            }else if(now>this.startDate && now<this.clearTime){
                this.downTime = this.clearTime
                this.countTime()
                this.isDowning = true
                this.beginClaim = true
                this.beginPro = false
                this.getClaimQ()
            }else if(now>this.clearTime && now<this.round2Start){
                this.isDowning = false
                this.beginFcfs = false 
                this.beginClaim = false
            }else if(now>this.round2Start && now<this.fcfsEndTime){
                this.downTime = this.fcfsEndTime
                this.countTime()
                this.isDowning = true
                this.beginFcfs = true 
                this.fcfsBtn = true
                this.getQuota().then(res=>{
                    this.fcfsQuota = res.toFixed(2)
                    this.fcfsQuotaNum = (res-this.userInfo2.amount).toFixed(2)
                    this.fcfsQuotaUsdt = res*this.price
                })
            }
        },
        async getClaimQ(){
            let res = await this.IDOContract.methods.getClaimable(this.defaultAccount).call()
            if(res){
                let balance = new BigNumber(res)
                this.claimQ = balance.div(Math.pow(10,this.tokenDecimals)).toFixed(2)
            }
        },
        async getName(){
            let totalSupply = await this.IDOContract.methods.tokensForSale().call() 
            let totalSupply1 = await this.SALETOKENContract.methods.totalSupply().call()
            if(totalSupply){
                let total = new BigNumber(totalSupply)
                let total1 = new BigNumber(totalSupply1)
                this.totalSupply = total.div(Math.pow(10,this.tokenDecimals))
                this.totalSupply1 = total1.div(Math.pow(10,this.tokenDecimals))
            }
            this.name = await this.SALETOKENContract.methods.name().call()
            this.symbol = await this.SALETOKENContract.methods.symbol().call()
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
        },
        countTime () {
            // 获取当前时间
            let date = new Date()
            let now = date.getTime()
            // 时间差
            let leftTime = this.downTime*1000 - now
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
                // this.getDownTime()
                this.refresh()
                return
            } else {
            // 递归每秒调用countTime方法，显示动态时间效果,
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
        .toUsdt{
            width:600px;
            margin:10px auto;
            text-align:right;
        }
        .idoput{
            width:600px;
            height:80px;
            border:1px solid #999;
            overflow:hidden;
            margin:140px auto 0;
            border-radius:10px;
            position:relative;
            &:nth-child(3){
                margin-top:20px;
                input{
                    width:100%;
                }
            }
            span{
                position:absolute;
                right:0;
                top:0;
                font-size:24px;
                line-height:80px;
                color:#333;
                padding-right:20px;
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
            // box-shadow: 0px 8px 10px 0px rgba(121, 55, 240, 0.43);
            // background:#874FEC;
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
            width:1200px;
            margin:0 auto;
            overflow:hidden;
            .projectName{
                float:left;
                &>img{
                    width:115px;
                    height:115px;
                    vertical-align: middle;
                    border:1px solid #333;
                    border-radius:50%;
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
                width:260px;
                text-align:center;
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
            // background: linear-gradient(360deg, #874FEC 0%, #A467FE 100%);
            // box-shadow: 0px 6px 0px 0px #7249BA;
            padding:30px 0 0;
            .content{
                width:1200px;
                margin:0 auto;
                overflow:hidden;
                .fl{
                    float:left;
                    width:77%;
                    .textbox{
                        padding-bottom:40px;
                        &.pcnone{
                            display:none;
                        }
                        .texts{
                            width:240px;
                            margin-right:90px;
                            display: inline-block;
                            vertical-align: top;
                            &:last-child{
                                margin-right:0;
                            }
                            h3{
                                font-size:18px;
                                // color:#DBC7FF;
                                line-height:25px;
                                white-space: nowrap;
                            }
                            p{
                                font-size:28px;
                                color:#fff;
                                line-height:33px;
                                white-space: nowrap;
                            }
                        }
                    }
                    .tips{
                        color:#fff;
                        text-align:center;
                        padding-bottom:10px;
                    }
                }
                .fr{
                    float:right;
                    .btn{
                        width:260px;
                        height:60px;
                        display:block;
                        border-radius:10px;
                        // background:#fff;
                        text-align:center;
                        font-size:24px;
                        // color:#874FEC;
                        margin-bottom:40px;
                        cursor: pointer;
                        border:none;
                        &.disabled{
                            // background:#BC98FE;
                            cursor:initial;
                        }
                        &:nth-child(1){
                            margin-left:10px;
                        }
                    }
                    .allcationn{
                        display:none;
                    }
                }
            }
        }
        .infoPanel{
            width:1200px;
            margin:80px auto;
            .tabs{
                font-size:0;
                span{
                    display:inline-block;
                    vertical-align: middle;
                    margin-right:40px;
                    font-size:28px;
                    // color:#B994FB;
                    line-height:50px;
                    cursor: pointer;
                    &.active{
                        // color:#874FEC;
                        font-weight:bold;
                        font-size:36px;
                        // border-bottom:8px solid #874FEC;
                    }
                }
            }
            .infoCon{
                // border:1px solid #874FEC;
                border-radius:16px;
                margin-top:40px;
                &.martop{
                    display:none;
                }
                .roundTable{
                    overflow:hidden;
                    .roundHead{
                        // background:#874FEC;
                        padding:0 40px;
                        overflow:hidden;
                        border-radius:16px 16px 0 0;
                        span{
                            float:left;
                            width:33.3%;
                            text-align:left;
                            font-size:24px;
                            color:#fff;
                            line-height:50px;
                            &:first-child{
                                width:25%;
                            }
                            &:nth-child(2){
                                width:40%;
                            }
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
                                &:first-child{
                                    width:25%;
                                }
                                &:nth-child(2){
                                    width:40%;
                                }
                            }
                        }
                    }
                }
                .infoHead{
                    height:66px;
                    border-radius: 16px 16px 0px 0px;
                    overflow:hidden;
                    // background:#874FEC;WW
                    padding:0 40px;
                    span{
                        float:left;
                        width:50%;
                        font-size:24px;
                        color:#fff;
                        line-height:66px;
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
                        &.none{
                            .infoItem{
                                h3{
                                    width:180px;
                                }
                            }
                        }
                        .infoItem{
                            padding-bottom:30px;
                            h3{
                                display:inline-block;
                                vertical-align: top;
                                font-size:24px;
                                color:#AEAEAE;
                                line-height:33px;
                                padding-right:20px;
                                font-weight:400;
                                width:180px;
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
            .toUsdt{
                width:90%;
                margin:10px auto;
            }
            .idoput{
                width:90%;
                height:40px;
                margin:80px auto 0;
                &:nth-child(3){
                    margin-top:20px;
                }
                span{
                    font-size:18px;
                    line-height:40px;
                    padding-right:10px;
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
    .detailPanel{
        padding:0 15px;
        .projectDetail{
            .nameInfo{
                padding:30px 0 20px;
                width:auto;
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
                    width:100%;
                    padding-top:16px;
                    .title{
                        font-size:10px;
                        line-height:14px;
                        color:#333333;
                        text-align:center;
                    }
                    .val{
                        font-size:18px;
                        line-height:14px;
                        // color:#874FEC;
                    }
                }
            }
            .mydetail{
                // background: linear-gradient(360deg, #874FEC 0%, #A467FE 100%);
                // box-shadow: 0px 2px 0px 0px #7249BA;
                border-radius: 10px;
                padding:0 24px;
                .content{
                    width:auto;
                    
                    .fl{
                        float:initial;
                        width:100%;
                        line-height:18px;
                        .tips{
                            font-size:11px;
                            padding-top:10px;
                            padding-bottom:0;
                        }
                        .textbox{
                            &.pcnone{
                                display:block;
                            }
                            padding-bottom:0;
                            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                            .texts{
                                width:50%;
                                margin-right:0;
                                padding:15px 0;
                                h3{
                                    font-size:11px;
                                    // color:#DBC7FF;
                                    line-height:16px;
                                    padding-bottom:8px;
                                    white-space: nowrap;
                                }
                                p{
                                    font-size:14px;
                                    line-height:16px;
                                    color:#fff;
                                }
                                &.none{
                                    display:none;
                                }
                            }
                        }
                    }
                    .fr{
                        float:initial;
                        padding-top:24px;
                        .btn{
                            width:168px;
                            height:40px;
                            // background:#FFFFFF;
                            border-radius:6px;
                            font-size:14px;
                            // color:#874FEC;
                            margin:0 auto 20px;
                            &:first-child{
                                margin-left:auto;
                            }
                            &:nth-child(2){
                                margin: 0 auto 20px;
                            }
                            &.disabled{
                                // background:#BC98FE;
                            }
                        }
                        .allcationn{
                            display:block;
                            margin-bottom:20px;
                            text-align:center;
                            .title{
                                font-size:18px;
                                color:#999999;
                                line-height:26px;
                            }
                            .val{
                                font-size:18px;
                                color:#333333;
                                line-height:26px;
                                font-weight:bold;
                            }
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
                    display:block !important;
                    border-radius:10px 10px 0 0;
                    &.martop{
                        margin-top:-10px;
                    }
                    
                    .roundTable{
                        .roundHead{
                            border-radius:10px 10px 0 0;
                            height:30px;
                            padding:0 10px;
                            span{
                                font-size:14px;
                                color:#fff;
                                line-height:26px;
                                text-align:center;
                                font-weight:bold;
                            }
                        }
                        .roundBody{
                            padding:10px;
                            .roundItem{
                                padding-bottom:10px;
                                span{
                                    font-size:12px;
                                    line-height:20px;
                                    text-align:center;
                                }
                            }
                        }
                    }
                    .infoHead{
                        border-radius:10px 10px 0 0;
                        height:26px;
                        padding:0 17px;
                        span{
                           font-size:12px;
                           color:#fff;
                           line-height:26px;
                           &.none{
                               display:none;
                           }
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
                            &.none{
                                display:none;
                            }
                            h4{
                                font-size:14px;
                                color:#333;
                                line-height:14px;
                                padding-bottom:5px;
                                display:block;
                            }
                            .infoItem{
                                padding-bottom:5px;
                                h3{
                                    font-size:12px;
                                    line-height:20px;
                                    width:35%;
                                    padding:0;
                                }
                                span{
                                    font-size:14px;
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