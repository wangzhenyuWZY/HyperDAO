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
                            <a class="btn">参与预申购</a>
                            <a class="btn disabled">领取额度</a>
                            <a class="btn disabled">FCFS</a>
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
                            <p>项目详情</p>
                        </div>
                        <div class="infoBody">
                            <div class="infoDetail">
                                <h4>Pool详情</h4>
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
                                <h4>Token详情</h4>
                                <div class="infoItem">
                                    <h3>项目名称</h3>
                                    <span>ABCD</span>
                                </div>
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
        <div class="popWrap">
            <div class="popPanel">
                <i class="close"></i>
                <div class="idoput">
                    <input>
                    <p>4985345<span>/ USDT</span></p>
                </div>
                <a class="btn">确认</a>
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
        width:1350px;
        height:800px;
        margin-left:-675px;
        background:#fff;
        border-radius:20px;
        .close{
            position:absolute;
            width:37px;
            height:37px;
            background:url(../assets/img/closeIco.png) no-repeat center;
            background-size:100% 100%;
            right:74px;
            top:52px;
            cursor: pointer;
        }
        .idoput{
            width:1020px;
            height:160px;
            border:1px solid #999;
            overflow:hidden;
            margin:220px auto 0;
            input{
                width:50%;
                line-height:160px;
                text-indent:35px;
                font-size:36px;
                color:#333333;
                float:left;
                border:none;
                background:none;
                outline:none;
            }
            p{
                float:right;
                font-size:48px;
                color:#333;
                line-height:160px;
                font-weight:bold;
                padding-right:40px;
                span{
                    font-size:36px;
                }
            }
        }
        .btn{
            display:block;
            margin:140px auto 0;
            width:600px;
            height:140px;
            line-height:140px;
            box-shadow: 0px 8px 10px 0px rgba(121, 55, 240, 0.43);
            background:#874FEC;
            border-radius:10px;
            font-size:48px;
            color:#fff;
            text-align:center;
            cursor: pointer;
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