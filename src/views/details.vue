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
                                <a><img src="../assets/img/icon6.png"></a>
                                <a><img src="../assets/img/Twitter.png"></a>
                                <a><img src="../assets/img/telegram.png"></a>
                            </div>
                        </div>
                    </div>
                    <div class="allcationn">
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
                                    <p>10000 BUSD</p>
                                    <p>100BNB</p>
                                </div>
                                <div class="texts">
                                    <h3>我的等级</h3>
                                    <p>黄金</p>
                                </div>    
                            </div>
                            <div class="textbox">
                                <div class="texts">
                                    <h3>Swapped</h3>
                                    <p>0.0000 BUSD</p>
                                    <p>0.0000 ABCD</p>
                                </div>
                                <div class="texts">
                                    <h3>剩余额度</h3>
                                    <p>0.0000 BUSD</p>
                                </div>
                                <div class="texts">
                                    <h3>Participants</h3>
                                    <p>1888</p>
                                </div>
                            </div>
                        </div>
                        <div class="fr">
                            <a class="btn">+ Join Pool</a>
                            <a class="btn">View Maticvigil</a>
                        </div>
                    </div>
                </div>
                <div class="infoPanel">
                    <div class="tabs">
                        <span class="active">项目详情</span>
                        <span>项目日程</span>
                    </div>
                    <div class="infoCon">
                        <div class="infoHead">
                            <span>Pool详情</span>
                            <span>Token详情</span>
                        </div>
                        <div class="infoBody">
                            <div class="infoDetail">
                                <div class="infoItem">
                                    <h3>开始时间</h3>
                                    <span>2021-05-09 08:00:00 UTC</span>
                                </div>
                                <div class="infoItem">
                                    <h3>结束时间</h3>
                                    <span>2021-05-09 08:00:00 UTC</span>
                                </div>
                                <div class="infoItem">
                                    <h3>兑换比例</h3>
                                    <span>1BUSD=3.33ABCD</span>
                                </div>
                                <div class="infoItem">
                                    <h3>IDO总额</h3>
                                    <span>10000 USDB</span>
                                </div>
                                <div class="infoItem">
                                    <h3>参与人数</h3>
                                    <span>3333</span>
                                </div>
                            </div>
                            <div class="infoDetail">
                                <div class="infoItem">
                                    <h3>币种名称</h3>
                                    <span>ABCD</span>
                                </div>
                                <div class="infoItem">
                                    <h3>发行总量</h3>
                                    <span>1000000</span>
                                </div>
                                <div class="infoItem">
                                    <h3>简介</h3>
                                    <span>internetComputer是一个第一层协议，旨在开发一个去中心化的公共网络，使只能合约得以大规模运行。该项目旨在成为互联网计算机，提供公共互联网的功能，并允许将后端软件托管在网络上。</span>
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
                    padding-top:60px;
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
                }
                .infoBody{
                    padding:30px 40px;
                    overflow:hidden;
                    .infoDetail{
                        float:left;
                        width:50%;
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
</style>