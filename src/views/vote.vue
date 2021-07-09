<template>
    <div class="container">
        <Header></Header>
        <div class="voteContainer">
            <div class="votePanel">
                <h2>{{$t('lang.lang71')}}</h2>
                <div class="voteListWrap" :class="openCenter?'openCenter':''">
                    <div class="voteList" :class="_isMobile?'':'pclist'" :style="'width:'+openItem+'rem'">
                        <div class="voteItem" v-for="(item,index) in taskList" :key="index" v-if="item.status==1">
                            <div class="voteHead">
                                <div class="proName">
                                    <img :src="item.logo_url">
                                    <div class="nameandpotic">
                                        <p>{{isCn?item.name_zh:item.name_en}}</p>
                                        <p>{{isCn?item.topic_zh:item.topic_en}}</p>
                                    </div>
                                    
                                </div>
                                <p class="access">Access<br>{{$t('lang.lang73')}}</p>
                            </div>
                            <h3 class="votetodo">{{item.amount}}</h3>
                            <p class="todoInfo">
                                {{isCn?item.description_zh:item.description_en}}
                            </p>
                            
                            <a class="voteBtn" @click="toVote(item,0)">{{$t('lang.lang74')}}</a>
                            <a class="voteBtn" @click="toVote(item,1)">{{$t('lang.lang75')}}</a>
                            <div class="downtime">{{item.djs}}</div>
                            <div class="voteProgress" style="margin-top:60px;">
                                <div class="progressInfo">
                                    <div class="infoItem">
                                        <p>{{$t('lang.lang74')}}</p>
                                        <p>{{item.counts.favor}}</p>
                                    </div>
                                    <div class="infoItem">
                                        <p>{{$t('lang.lang75')}}</p>
                                        <p>{{item.counts.oppos}}</p>
                                    </div>
                                </div>
                                <div class="all">
                                    <p :style="'width:'+item.counts.progress+'%'"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="votePanel over">
                <h2>{{$t('lang.lang72')}}</h2>
                <div class="voteListWrap" :class="overCenter?'overCenter':''">
                    <div class="voteList" :style="'width:'+overItem+'rem'" :class="_isMobile?'':'pclist'" >
                        <div class="voteItem" v-for="(item,index) in taskList" :key="index" v-if="item.status==2">
                            <div class="voteHead">
                                <div class="proName">
                                    <img :src="item.logo_url">
                                    <div class="nameandpotic">
                                        <p>{{isCn?item.name_zh:item.name_en}}</p>
                                        <p>{{isCn?item.topic_zh:item.topic_en}}</p>
                                    </div>
                                    
                                </div>
                                <p class="access">Access<br>{{$t('lang.lang73')}}</p>
                            </div>
                            <h3 class="votetodo">{{item.amount}}</h3>
                            <p class="todoInfo">
                                {{isCn?item.description_zh:item.description_en}}
                            </p>
                            <div class="voteProgress">
                                <div class="progressInfo">
                                    <div class="infoItem">
                                        <p>{{$t('lang.lang74')}}</p>
                                        <p>{{item.counts.favor}}</p>
                                    </div>
                                    <div class="infoItem">
                                        <p>{{$t('lang.lang75')}}</p>
                                        <p>{{item.counts.oppos}}</p>
                                    </div>
                                </div>
                                <div class="all">
                                    <p :style="'width:'+item.counts.progress+'%'"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
function InitTime(endtime){
    var dd,hh,mm,ss = null;
    var time = parseInt(endtime) - new Date().getTime();
    if(time<=0){
        return '结束'
    }else{
        dd = Math.floor(time / 1000/ 60 / 60 / 24);
        hh = Math.floor((time / 1000/ 60 / 60) % 24);
        mm = Math.floor((time / 1000/ 60) % 60);
        ss = Math.floor((time / 1000) % 60);
        var str = dd+"D  "+hh+"h  "+mm+"m  "+ss+"s";
        return str;
    }
}    
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import axios from "axios"
import { HDAO_MATIC,IDO_TOKEN} from '../utils/contract'
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
            defaultAccount:'',
            IDOContract:null,
            taskList:[],
            isCn:false,
            openItem:0,
            openCenter:false,
            overItem:0,
            overCenter:false
        }
    },
    computed : {
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        } 
    },
    created(){
        this.$initWeb3().then((web3)=>{
            if(web3.eth.defaultAccount){
                this.web3 = web3
                this.defaultAccount = web3.eth.defaultAccount
                this.init()
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
    methods: {
        init(){
            this.getVoteList()
        },
        setDownTime(){
            setInterval( ()=> {
                for (var key in this.taskList) {
                    if(this.taskList[key]['status']==1){
                        var aaa = new Date(this.taskList[key]["end_time"]).getTime();
                        var bbb = new Date().getTime();
                        var rightTime = aaa - bbb;
                        if (rightTime > 0) {
                            var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
                            var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
                            var mm = Math.floor((rightTime / 1000 / 60) % 60);
                            var ss = Math.floor((rightTime / 1000) % 60);
                        }
                        this.taskList[key]["djs"] = dd + "D  " + hh + "h  " + mm + "m  " + ss + "s";
                    }
                }
            }) 
        },
        getVoteList(){
            axios.get(process.env.VUE_APP_URL+"proposals").then((res)=>{
                if(res.data.code==0){
                    this.taskList = res.data.data
                    this.setDownTime()
                    this.getVoteInfo()
                    res.data.data.forEach((item,index)=>{
                        if(item.status==1){
                            this.openItem += 1.5
                            if(this.openItem<2){
                                this.openCenter = true
                            }else{
                                this.openCenter = false
                            }
                        }else if(item.status==2){
                            this.overItem += 1.5
                            if(this.overItem<2){
                                this.overCenter = true
                            }else{
                                this.overCenter = false
                            }
                        }
                    })
                    res.data.data.map( (obj,index)=>{
                        if(obj.status==1){
                            let endTime = new Date(obj.end_time).getTime()
                            this.$set(
                                obj,"djs",InitTime(endTime)
                            );
                        }
                    })
                }
            })
        },
        getVoteInfo(){
            this.taskList.map( (obj,index)=>{
                let IDOContract = new this.web3.eth.Contract(IDO_TOKEN.abi, obj.ido_address)
                this.$set(obj,"IDOContract",IDOContract)
                if(obj.status==1){
                    this.getUserInfo(obj)
                }
                this.getVoteCount(obj)
            })
        },
        async getVoteCount(obj){
            let favorCounts = await obj.IDOContract.methods.voteCounts(0).call()
            let oppositionCounts = await obj.IDOContract.methods.voteCounts(1).call()
            favorCounts = new BigNumber(favorCounts)
            favorCounts = favorCounts.div(Math.pow(10,18))
            oppositionCounts = new BigNumber(oppositionCounts)
            oppositionCounts = oppositionCounts.div(Math.pow(10,18))
            let progress = favorCounts.plus(oppositionCounts)
            progress = favorCounts.div(progress)
            progress = progress.times(100)
            console.log(progress.toFixed())
            let counts = {
                favor:favorCounts,
                oppos:oppositionCounts,
                progress:progress.toFixed(2)
            }
            this.$set(obj,"counts",counts)
        },
        async getUserInfo(obj){
            let isVote = await obj.IDOContract.methods.isVote().call()
            this.$set(obj,"isVote",isVote)
            let voteRound = await obj.IDOContract.methods.voteRound().call()
            this.$set(obj,"voteRound",voteRound)
            let userVote = await obj.IDOContract.methods.userVote(this.defaultAccount,voteRound).call()
            this.$set(obj,"userVote",userVote)
        },
        async toVote(item,unit){
            if(!item.isVote){
                this.$message({
                    message: this.$t('lang.lang103'),
                    type: 'warning'
                })
            }else if(item.userVote.voted){
                this.$message({
                    message: this.$t('lang.lang104'),
                    type: 'warning'
                })
            }else{
                let res = await item.IDOContract.methods.vote(unit).send({ from: this.defaultAccount })
                if(res){
                    this.$message({
                        message: this.$t('lang.lang105'),
                        type: 'success'
                    })
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .voteContainer{
        min-height:80vh;
    }
.votePanel{
    padding-top:90px;
    padding-bottom:60px;
    &.over{
        h2{
            color:#DADADA;
        }
        .voteList{
            .voteItem{
                height:800px;
                background:#999999;
                border:none;
                .voteHead{
                    .proName,.access{
                        color:#DADADA;
                    }
                }
                .votetodo,.todoInfo{
                    color:#DADADA;
                }
                .todoInfo{
                    height:300px;
                }
            }
        }
    }
    h2{
        font-size:36px;
        color:#333333;
        line-height:50px;
        text-align:center;
        font-weight:bold;
        padding-bottom:90px;
    }
    .voteList{
        &.pclist{
                width:auto !important;
            }
        font-size:0;
        text-align:center;
        .voteItem{
            display:inline-block;
            vertical-align: middle;
            padding:50px;
            margin:0 35px 35px;
            border:2px solid #874FEC;
            border-radius:20px;
            width:680px;
            height:1000px;
            text-align:left;
            .voteHead{
                overflow:hidden;
                padding-bottom:60px;
                .proName{
                    float:left;
                    font-size:36px;
                    color:#333;
                    line-height:115px;
                    font-weight:bold;
                    img{
                        width:115px;
                        height:115px;
                        margin-right:38px;
                        vertical-align: middle;
                    }
                    .nameandpotic{
                        display:inline-block;
                        vertical-align: middle;
                        p{
                            font-size:28px;
                            line-height:36px;
                        }
                    }
                }
                .access{
                    float:right;
                    font-size:24px;
                    color:#333333;
                    line-height:33px;
                    padding-top:24px;
                    text-align:right;
                }
            }
            .votetodo{
                font-size:36px;
                color:#333333;
                line-height:50px;
                font-weight:bold;
            }
            .todoInfo{
                font-size:24px;
                color:#333333;
                line-height:33px;
                height:200px;
                padding-bottom:30px;
            }
            .voteBtn{
                display:block;
                width:282px;
                height:66px;
                background:#874FEC;
                margin:0 auto 40px;
                border-radius:10px;
                font-size:24px;
                color:#fff;
                line-height:66px;
                text-align:center;
                cursor: pointer;
            }
            .downtime{
                font-size:36px;
                color:#333333;
                line-height:50px;
                font-weight:bold;
                text-align:center;
            }
            .voteProgress{
                .progressInfo{
                    overflow:hidden;
                    .infoItem{
                        &:first-child{
                            float:left;
                        }
                        &:last-child{
                            float:right;
                            p{
                                text-align:right;
                            }
                        }
                        p{
                            font-size:24px;
                            color:#DADADA;
                            line-height:33px;
                            padding-bottom:8px;
                        }
                    }
                }
                .all{
                    margin-top:12px;
                    height:30px;
                    background:#DADADA;
                    border-radius:33px;
                    overflow:hidden;
                    p{
                        background:#fff;
                        height:100%;
                        border-radius:33px;
                        width:0;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:1200px) {
    .voteContainer{
        min-height:80vh;
    }
    .votePanel{
        &.over{
            .voteList{
                .voteItem{
                    height:300px;
                    .todoInfo{
                        height:130px;
                    }
                    
                }
            }
        }
        padding-top:30px;
        h2{
            font-size:16px;
            color:#333;
            line-height:22px;
            padding-bottom:10px;
        }
        .voteListWrap{
            overflow-y: scroll;
            &.openCenter,&.overCenter{

                .voteList{
                    width:100% !important;
                    text-align:center;
                    .voteItem{
                        display:inline-block;
                        float:initial;
                    }
                }
            }
        }
        .voteList{
            text-align:left;
            overflow:hidden;
            .voteItem{
                border:1px solid #874FEC;
                border-radius:10px;
                padding:15px;
                width:260px;
                height:380px;
                margin:0 10px;
                float:left;
                .voteProgress{
                        .progressInfo{
                            .infoItem{
                                p{
                                    font-size:14px;
                                    line-height:14px;
                                    padding-bottom:3px;
                                }
                            }
                        }
                        .all{
                            height:10px;
                            margin-top:0;
                        }
                    }
                .voteHead{
                    padding-bottom:14px;
                    .proName{
                        font-size:14px;
                        line-height:34px;
                        img{
                            width:34px;
                            height:34px;
                            margin-right:4px;
                        }
                    }
                    .access{
                        font-size:10px;
                        line-height:14px;
                        padding-top:0;
                    }
                }
                .votetodo{
                    font-size:12px;
                    line-height:17px;
                    padding-bottom:4px;
                }
                .todoInfo{
                    font-size:10px;
                    line-height:14px;
                    height:100px;
                }
                .voteBtn{
                    width:120px;
                    height:40px;
                    line-height:40px;
                    font-size:12px;
                    border-radius:6px;
                    margin-bottom:10px;
                }
                .downtime{
                    font-size:14px;
                    line-height:14px;
                }
            }
        }
    }
}
</style>