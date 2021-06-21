<template>
    <div class="container">
        <Header></Header>
        <div class="projectPanel">
            <h2>正在进行的项目</h2>
            <div class="projectWrap">
                <ul class="projectList" :class="_isMobile?'':'pclist'" :style="'width:'+openItem+'rem'">
                    <li v-for="(item,index) in proList" :key="index" v-if="item.status==1">
                        <span class="statubtn">项目进行中</span>
                        <div class="name">
                            <img :src="item.logo_url">
                            {{item.name}}
                        </div>
                        <div class="types">
                            <a :href="item.url"><img src="../assets/img/icon10.png"></a>
                            <a :href="item.medium_account"><img src="../assets/img/icon11.png"></a>
                            <a :href="item.twitter_account"><img src="../assets/img/Twitter.png"></a>
                            <a :href="item.telegram_account"><img src="../assets/img/telegram.png"></a>
                        </div>
                        <p class="status">Allocation</p>
                        <div class="swaprate">
                            <p class="title">Swap Rate</p>
                            <p class="val">1 USDT={{item.asset_retention_ratio}} {{item.name}}</p>
                        </div>
                        <div class="capaccess">
                            <div class="swaprate">
                                <p class="title">Cap</p>
                                <p class="val">{{item.ido_asset_total}} USDT</p>
                            </div>
                            <div class="swaprate">
                                <p class="title">Access</p>
                                <p class="val">Private</p>
                            </div>
                        </div>
                        <div class="swaprate">
                            <p class="title">participants</p>
                            <p class="val">{{item.participate_number}}</p>
                        </div>
                        <router-link :to="{path:'/details',query: {id: item.id}}" class="detailbtn">Details</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="projectPanel ready">
            <h2>即将开始的项目</h2>
            <div class="projectWrap">
                <ul class="projectList" :class="_isMobile?'':'pclist'" :style="'width:'+readyItem+'rem'">
                    <li v-for="(item,index) in proList" :key="index" v-if="item.status==0">
                        <span class="statubtn">即将开始</span>
                        <div class="name">
                            <img :src="item.logo_url">
                            {{item.name}}
                        </div>
                        <div class="types">
                            <a :href="item.url"><img src="../assets/img/icon10.png"></a>
                            <a :href="item.medium_account"><img src="../assets/img/icon11.png"></a>
                            <a :href="item.twitter_account"><img src="../assets/img/Twitter.png"></a>
                            <a :href="item.telegram_account"><img src="../assets/img/telegram.png"></a>
                        </div>
                        <div class="swaprate">
                            <p class="title">Swap Rate</p>
                            <p class="val">1 USDT={{item.asset_retention_ratio}} {{item.name}}</p>
                        </div>
                        <div class="capaccess">
                            <div class="swaprate">
                                <p class="title">Cap</p>
                                <p class="val">{{item.ido_asset_total}} USDT</p>
                            </div>
                            <div class="swaprate">
                                <p class="title">Access</p>
                                <p class="val">Private</p>
                            </div>
                        </div>
                        <div class="swaprate">
                            <p class="title">participants</p>
                            <p class="val">{{item.participate_number}}</p>
                        </div>
                        <div class="progress">
                            <p class="title">progress</p>
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
        <div class="projectPanel over">
            <h2>已经结束的项目</h2>
            <div class="projectWrap">
                <ul class="projectList" :class="_isMobile?'':'pclist'" :style="'width:'+closeItem+'rem'" >
                    <li v-for="(item,index) in proList" :key="index" v-if="item.status==2">
                        <span class="statubtn">已结束</span>
                        <div class="name">
                            <img :src="item.logo_url">
                            {{item.name}}
                        </div>
                        <div class="types">
                            <a :href="item.url"><img src="../assets/img/icon10.png"></a>
                            <a :href="item.medium_account"><img src="../assets/img/icon11.png"></a>
                            <a :href="item.twitter_account"><img src="../assets/img/Twitter.png"></a>
                            <a :href="item.telegram_account"><img src="../assets/img/telegram.png"></a>
                        </div>
                        <div class="swaprate">
                            <p class="title">Swap Rate</p>
                            <p class="val">1 USDT={{item.asset_retention_ratio}} {{item.name}}</p>
                        </div>
                        <div class="capaccess">
                            <div class="swaprate">
                                <p class="title">Cap</p>
                                <p class="val">{{item.ido_asset_total}} USDT</p>
                            </div>
                            <div class="swaprate">
                                <p class="title">Access</p>
                                <p class="val">Private</p>
                            </div>
                        </div>
                        <div class="swaprate">
                            <p class="title">participants</p>
                            <p class="val">{{item.participate_number}}</p>
                        </div>
                        <div class="progress">
                            <p class="title">progress</p>
                            <div class="all">
                                <span></span>
                            </div>
                            <p class="info">
                                <span >{{item.progress}}%</span>
                                <span>{{item.ido_asset_collect}}/{{item.ido_asset_total}}</span>   
                            </p>
                        </div>
                    </li>
                </ul>
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
            closeItem:0 
        }
    },
    computed : {
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        } 
    },
    mounted() {
       this.getList() 
    },
    beforeDestroy () {
    
    },
    methods: {
        getList(){
            axios.get("http://192.168.31.77:9091/hdaos").then((res)=>{
                if(res.data.code==0){
                    res.data.data.forEach((item,index)=>{
                        if(item.status==1){
                            this.openItem += 1.51
                        }else if(item.status==0){
                            this.readyItem += 1.51
                        }else if(item.status==2){
                            this.closeItem += 1.51
                            item.progress = (item.ido_asset_collect/item.ido_asset_total*100).toFixed(2)
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
    &.over{
        color:#DADADA;
        h2{
            color:#DADADA;
        }
        .projectList{
            li{
                background:#999999;
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
            }
        }
    }
    h2{
        font-size:36px;
        color:#874FEC;
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
            background:#874FEC;
            width:420px;
            height:680px;
            border-radius:20px;
            margin:0 15px;
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
                color:#874FEC;
            }
            .name{
                padding-top:5px;
                font-size:36px;
                color:#fff;
                line-height:80px;
                margin-bottom:15px;
                img{
                    width:80px;
                    margin-right:20px;
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
                    color:#EDD9FF;
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
                    color:#EDD9FF;
                    line-height:25px;
                    margin-bottom:12px;
                }
                .all{
                    background:#fff;
                    height:18px;
                    border-radius:11px;
                    span{
                        height:100%;
                        background:#77FF7C;
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
    .projectPanel{
        overflow:hidden;
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
                    font-size:10px;
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
                }
                .status{
                    font-size:10px;
                    line-height:14px;
                }
                .swaprate{
                    padding-top:14px;
                    .title{
                        font-size:10px;
                        line-height:14px;
                    }
                    .val{
                        font-size:10px;
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
                        font-size:10px;
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
                           font-size:10px;
                           line-height:14px; 
                        }
                    }
                }
            }
        }
    }
}
</style>