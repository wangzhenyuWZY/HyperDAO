<template>
    <div class="container">
        <Header></Header>
        <div class="projectContainer">
            <div class="projectPanel doing" :class="openCenter?'openCenter':''">
                <h2>{{$t('lang.lang26')}}</h2>
                <div class="projectWrap">
                    <ul class="projectList" :class="_isMobile?'':'pclist'" :style="'width:'+openItem+'rem'">
                        <li v-for="(item,index) in proList" :key="index" v-if="item.status==1">
                            <span class="statubtn">{{$t('lang.lang109')}}</span>
                            <div class="name">
                                <img :src="item.logo_url">
                                <div class="time">
                                    <p>{{isCn?item.name_zh:item.name_en}}</p>
                                </div>
                            </div>
                            <div class="types">
                                <a :href="item.url"><img src="../assets/img/icon10.png"></a>
                                <a :href="item.medium_account"><img src="../assets/img/icon11.png"></a>
                                <a :href="item.twitter_account"><img src="../assets/img/Twitter.png"></a>
                                <a :href="item.telegram_account"><img src="../assets/img/telegram.png"></a>
                            </div>
                            <p class="status">Allocation</p>
                            <div class="swaprate">
                                <p class="title">{{$t('lang.lang29')}}</p>
                                <p class="val">{{item.tasks[0].price}} USDT</p>
                            </div>
                            <div class="capaccess">
                                <div class="swaprate">
                                    <p class="title">{{$t('lang.lang30')}}</p>
                                    <p class="val">{{item.ido_asset_total}} USDT</p>
                                </div>
                                <div class="swaprate">
                                    <p class="title">{{$t('lang.lang31')}}</p>
                                    <p class="val">{{$t('lang.lang32')}}</p>
                                </div>
                            </div>
                            <div class="swaprate">
                                <p class="title">{{$t('lang.lang33')}}</p>
                                <p class="val">{{item.participate_number}}</p>
                            </div>
                            <router-link :to="{path:'/details',query: {id: item.id}}" class="detailbtn">{{$t('lang.lang127')}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="projectPanel ready" :class="readyCenter?'readyCenter':''">
                <h2>{{$t('lang.lang27')}}</h2>
                <div class="projectWrap">
                    <ul class="projectList" :class="_isMobile?'':'pclist'" :style="'width:'+readyItem+'rem'">
                        <li v-for="(item,index) in proList" :key="index" v-if="item.status==0">
                            <span class="statubtn">{{$t('lang.lang110')}}</span>
                            <div class="name">
                                <img :src="item.logo_url">
                                <div class="time">
                                    <p>{{item.tasks[0].begin_time}}</p>
                                    <p>{{isCn?item.name_zh:item.name_en}}</p>
                                </div>
                            </div>
                            <div class="types">
                                <a :href="item.url"><img src="../assets/img/icon10.png"></a>
                                <a :href="item.medium_account"><img src="../assets/img/icon11.png"></a>
                                <a :href="item.twitter_account"><img src="../assets/img/Twitter.png"></a>
                                <a :href="item.telegram_account"><img src="../assets/img/telegram.png"></a>
                            </div>
                            <div class="swaprate">
                                <p class="title">{{$t('lang.lang29')}}</p>
                                <p class="val">{{item.tasks[0].price}} USDT</p>
                            </div>
                            <div class="capaccess">
                                <div class="swaprate">
                                    <p class="title">{{$t('lang.lang30')}}</p>
                                    <p class="val">{{item.ido_asset_total}} USDT</p>
                                </div>
                                <div class="swaprate">
                                    <p class="title">{{$t('lang.lang31')}}</p>
                                    <p class="val">{{$t('lang.lang32')}}</p>
                                </div>
                            </div>
                            <div class="swaprate">
                                <p class="title">{{$t('lang.lang33')}}</p>
                                <p class="val">{{item.participate_number}}</p>
                            </div>
                            <div class="progress">
                                <p class="title">{{$t('lang.lang34')}}</p>
                                <div class="all">
                                    <span></span>
                                </div>
                                <p class="info">
                                    <span>0.00%</span>
                                    <span>0.0000/TBA</span>   
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>    
            </div>
            <div class="projectPanel over" :class="closeCenter?'closeCenter':''">
                <h2>{{$t('lang.lang28')}}</h2>
                <div class="projectWrap">
                    <ul class="projectList" :class="_isMobile?'':'pclist'" :style="'width:'+closeItem+'rem'" >
                        <li v-for="(item,index) in proList" :key="index" v-if="item.status==2">
                            <span class="statubtn">{{$t('lang.lang111')}}</span>
                            <div class="name">
                                <img :src="item.logo_url">
                                <div class="time">
                                    <p>{{isCn?item.name_zh:item.name_en}}</p>
                                </div>
                            </div>
                            <div class="types">
                                <a :href="item.url"><img src="../assets/img/icon10.png"></a>
                                <a :href="item.medium_account"><img src="../assets/img/icon11.png"></a>
                                <a :href="item.twitter_account"><img src="../assets/img/Twitter.png"></a>
                                <a :href="item.telegram_account"><img src="../assets/img/telegram.png"></a>
                            </div>
                            <div class="swaprate">
                                <p class="title">{{$t('lang.lang29')}}</p>
                                <p class="val">{{item.tasks[0].price}} USDT</p>
                            </div>
                            <div class="capaccess">
                                <div class="swaprate">
                                    <p class="title">{{$t('lang.lang30')}}</p>
                                    <p class="val">{{item.ido_asset_total}} USDT</p>
                                </div>
                                <div class="swaprate">
                                    <p class="title">{{$t('lang.lang31')}}</p>
                                    <p class="val">{{$t('lang.lang32')}}</p>
                                </div>
                            </div>
                            <div class="swaprate">
                                <p class="title">{{$t('lang.lang33')}}</p>
                                <p class="val">{{item.participate_number}}</p>
                            </div>
                            <div class="progress">
                                <p class="title">{{$t('lang.lang34')}}</p>
                                <div class="all">
                                    <span :style="'width:'+item.progress+'%'"></span>
                                </div>
                                <p class="info">
                                    <span >{{item.progress}}%</span>
                                    <span>{{item.usdt_asset_collect}}/{{item.ido_asset_total}}</span>   
                                </p>
                            </div>
                        </li>
                    </ul>
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
export default {
    components:{ 
        Header,
        Footer
    },
    watch: {
        
    },
    data() {
        return {
            proList:[],
            readyItem:0,
            openItem:0,
            closeItem:0,
            openCenter:false,
            readyCenter:false,
            closeCenter:false,
            isCn:false
        }
    },
    computed : {
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        } 
    },
    mounted() {
        console.log(process)
       this.getList() 
    },
    beforeDestroy () {
    
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
    methods: {
        getList(){
            axios.get("/api/hdaos?scan=2").then((res)=>{
                if(res.data.code==0){
                    res.data.data.forEach((item,index)=>{
                        if(item.status==1){
                            this.openItem += 1.51
                            if(this.openItem<2){
                                this.openCenter = true
                            }else{
                                this.openCenter = false
                            }
                        }else if(item.status==0){
                            this.readyItem += 1.51
                            if(this.readyItem<2){
                                this.readyCenter = true
                            }else{
                                this.readyCenter = false
                            }
                        }else if(item.status==2){
                            this.closeItem += 1.54
                            if(this.closeItem<2){
                                this.closeCenter = true
                            }else{
                                this.closeCenter = false
                            }
                            item.progress = item.ido_asset_collect!==0?(item.usdt_asset_collect/item.ido_asset_total*100).toFixed(2):0
                        }
                    })
                    this.proList = res.data.data
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
 .projectContainer{
        min-height:80vh;
    }
.projectPanel{
    &.ready{
        h2{
            color:#EC8F4F;
        }
        .projectList{
            li{
                .statubtn{
                    background:#FFDB77;
                    color:#EC8F4F;
                }
            }
        }
    }
    &.doing{
        .projectList{
            
            li{
                // height:750px;
                .time{
                    p{
                        font-size:30px;
                        padding-top:15px;
                    }
                }
            }
        }
    }
    &.over{
        color:#DADADA;
        h2{
            color:#DADADA;
        }
        .projectList{
            li{
                background:#999999;
                box-shadow:none;
                .statubtn{
                    background:#DADADA;
                    color:#999999;
                }
                .swaprate{
                    .title{
                        color:#DADADA;
                    }
                }
                .progress{
                    .title{
                        color:#DADADA;
                    }
                }
                .time{
                    p{
                        font-size:18px;
                        padding-top:15px;
                    }
                }
            }
        }
    }
    h2{
        font-size:36px;
        // color:#874FEC;
        line-height:50px;
        text-align:center;
        padding:90px 60px;
    }
    .projectList{
        font-size:0;
        padding-bottom:75px;
        text-align:center;
        &.pclist{
            width:auto !important;
        }
        li{
            display:inline-block;
            vertical-align: middle;
            // background: linear-gradient(360deg, #874FEC 0%, #A467FE 100%);
            // box-shadow: 0px 2px 0px 0px #7249BA;
            width:420px;
            height:680px;
            border-radius:20px;
            margin:0 15px 15px;
            padding:35px;
            box-sizing:border-box;
            text-align:left;
            position:relative;
            .types{
                font-size:0;
                cursor: pointer;
                padding-bottom:10px;
                img{
                    width:24px;
                    margin-right:30px;
                }
            }
            .statubtn{
                position:absolute;
                top:0;
                right:0;
                width:130px;
                height:40px;
                background:#77FF7C;
                border-radius:0 20px 0 20px;
                text-align:center;
                line-height:40px;
                font-size:18px;
                // color:#874FEC;
            }
            .name{
                padding-top:5px;
                font-size:36px;
                color:#fff;
                line-height:80px;
                margin-bottom:15px;
                .time{
                    display: inline-block;
                    vertical-align: top;
                    padding-top:10px;
                }
                p{
                    font-size:24px;
                    line-height:33px;
                    
                }
                img{
                    width:80px;
                    margin-right:20px;
                    border-radius:50%;
                }
            }
            .status{
                font-size:24px;
                color:#fff;
                line-height:33px;
            }
            .swaprate{
                padding-top:30px;
                .title{
                    font-size:24px;
                    // color:#EDD9FF;
                    line-height:33px;
                    padding-bottom:6px;
                }
                .val{
                    font-size:24px;
                    color:#fff;
                    line-height:33px;
                }
            }
            .capaccess{
                font-size:0;
                .swaprate{
                    display:inline-block;
                    vertical-align:middle;
                    width:50%;
                }
            }
            .detailbtn{
                width:100%;
                height:80px;
                display:block;
                box-sizing: border-box;
                border:2px solid #fff;
                border-radius:10px;
                font-size: 28px;
                color:#fff;
                line-height:80px;
                text-align:center;
                margin-top:26px;
                cursor: pointer;
                margin-bottom:20px;
            }
            .progress{
                margin-top:36px;
                .title{
                    font-size:18px;
                    // color:#EDD9FF;
                    line-height:25px;
                    margin-bottom:12px;
                }
                .all{
                    background:#fff;
                    height:18px;
                    border-radius:11px;
                    position:relative;
                    span{
                        max-width:100%;
                        height:100%;
                        background:#DADADA;
                        position:absolute;
                        left:0;
                        top:0;
                        border-radius:11px;
                    }
                }
                .info{
                    overflow:hidden;
                    padding-top:16px;
                    span{
                        font-size:18px;
                        color:#fff;
                        line-height:25px;
                        &:first-child{
                            float:left;
                        }
                        &:last-child{
                            float:right;
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width:1200px) {
    .projectContainer{
        min-height:83vh;
    }
    .projectPanel{
        overflow:hidden;
        &.openCenter,&.readyCenter,&.closeCenter{
            .projectList{
                width:100% !important;
                text-align:center;
                li{
                    float:initial;
                    display:inline-block;
                }
            }
        }
        &.doing{
            .projectList{
                li{
                    .time{
                        p{
                            font-size:30px;
                            padding-top:7px;
                        }
                    }
                }
            }
        }
        h2{
            padding:32px 0 10px;
            font-size:16px;
            line-height:22px;
        }
        .projectWrap{
            overflow-y: scroll;
        }
        &.ready{
            .projectList{
                li{
                    height:340px;
                }
            }
        }
        &.over{
            .projectList{
                li{
                    height:340px;
                }
            }
        }
        .projectList{
            padding-bottom:24px;
            width:10000px;
            text-align:left;
            li{
                width:260px;
                height:360px;
                border-radius:10px;
                padding:15px;
                .statubtn{
                    width:80px;
                    height:30px;
                    border-radius: 0px 10px 0px 10px;
                    font-size:14px;
                    line-height:30px;
                }
                .types{
                    img{
                        width:20px;
                        margin-right:15px;
                    }
                }
                .name{
                    img{
                        width:34px;
                        margin-right:3px;
                    }
                    font-size:14px;
                    color:#fff;
                    line-height:34px;
                    .time{
                        padding-top:0;
                        p{
                            font-size:14px;
                            line-height:20px;
                        }
                    }
                }
                .status{
                    font-size:10px;
                    line-height:14px;
                }
                .swaprate{
                    padding-top:14px;
                    .title{
                        font-size:14px;
                        line-height:14px;
                    }
                    .val{
                        font-size:14px;
                        line-height:14px; 
                    }
                }
                .capaccess{
                    .swaprate{
                        padding-top:14px;
                    }
                }
                .detailbtn{
                    width:184px;
                    height:42px;
                    line-height:42px;
                    border-radius:6px;
                    font-size:14px;
                    border:1px solid #fff;
                    margin:15px auto 0;
                }
                .progress{
                    margin-top:19px;
                    .title{
                        font-size:14px;
                        line-height:14px;
                        padding-bottom:5px;
                        margin-bottom:0;
                    }   
                    .all{
                        height:10px;
                        border-radius:11px;
                    }
                    .info{
                        padding-top:5px;
                        span{
                           font-size:14px;
                           line-height:14px; 
                        }
                    }
                }
            }
        }
    }
}
</style>