<template>
    <div class="container">
        <Header></Header>
        <div class="banner">
            <img src="../assets/img/banner.jpg" v-show="isCn" width="100%">
            <img src="../assets/img/banner11.png" v-show="!isCn" width="100%">
        </div>
        <!-- <div class="banner" v-show="!isCn">
            <img src="../assets/img/banner11.png" width="100%">
            <img src="../assets/img/mImg/mImg1.png" width="100%">
        </div> -->
        <div class="btnsbar">
            <a href="https://info.quickswap.exchange/pair/0xBC08937FCAac78476266F25f1f75857e1c8aD2e2" target="_block" class="btn">{{$t('lang.lang1')}}</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScEb_nNOyzkGzkg2e3R5hhc-LGgCytF92mRNRb54rErfgdRmA/viewform?usp=sf_link" target="_block" class="btn">{{$t('lang.lang2')}}</a>
        </div>
        <div class="hdaoinfo">
            <h2><span>{{$t('lang.lang3')}}</span></h2>
            <p class="infotext1" :class="isCn?'isCn':''">{{$t('lang.lang4')}}</p>
            <p class="infotext2">{{$t('lang.lang5')}}</p>
            <p class="infotext3">{{$t('lang.lang6')}}</p>
        </div>
        <div class="projectlist">
            <div class="projectItem">
                <h2>{{$t('lang.lang7')}}</h2>
                <p class="title">{{$t('lang.lang11')}}</p>
                <p class="val">10000HDAO</p>
                <p class="title">{{$t('lang.lang12')}}</p>
                <p class="val">YES</p>
                <p class="title mt200">{{$t('lang.lang13')}}</p>
                <p class="val">10</p>
            </div>
            <div class="projectItem">
                <h2>{{$t('lang.lang8')}}</h2>
                <p class="title">{{$t('lang.lang11')}}</p>
                <p class="val">100000HDAO</p>
                <p class="title">{{$t('lang.lang12')}}</p>
                <p class="val">YES</p>
                <p class="title mt200">{{$t('lang.lang13')}}</p>
                <p class="val">145</p>
            </div>
            <div class="projectItem">
                <h2>{{$t('lang.lang9')}}</h2>
                <p class="title">{{$t('lang.lang11')}}</p>
                <p class="val">500000HDAO</p>
                <p class="title">{{$t('lang.lang12')}}</p>
                <p class="val">YES</p>
                <p class="title mt200">{{$t('lang.lang13')}}</p>
                <p class="val">925</p>
            </div>
            <div class="projectItem">
                <h2>{{$t('lang.lang10')}}</h2>
                <p class="title">{{$t('lang.lang11')}}</p>
                <p class="val">1000000HDAO</p>
                <p class="title">{{$t('lang.lang12')}}</p>
                <p class="val">YES</p>
                <p class="title mt200">{{$t('lang.lang13')}}</p>
                <p class="val">2500</p>
            </div>
        </div>
        <div class="hdaoinfo flowPanel">
            <h2><span>{{$t('lang.lang14')}}</span></h2>
            <div class="flowItem">
                <h3>{{$t('lang.lang15')}}</h3>
                <div class="infoscon">
                    <div class="text">
                        <p class="flowtext1">{{$t('lang.lang16')}}</p>
                        <p class="flowtext1">{{$t('lang.lang17')}}</p>
                        <p class="flowtext1">{{$t('lang.lang18')}}</p>
                    </div>
                    <div><img src="../assets/img/infoimg1.png"></div>
                    
                </div>
                
                <h3>{{$t('lang.lang19')}}</h3>
                <div class="infoscon">
                    <div class="text">
                        <p class="flowtext2">{{$t('lang.lang20')}}</p>
                        <p class="weight">{{$t('lang.lang21')}}</p>
                        <p class="weight">{{$t('lang.lang22')}}</p>
                        <p class="weight">{{$t('lang.lang23')}}</p>
                        <p class="weight">{{$t('lang.lang24')}}</p>
                        <p class="flowtext2" v-show="false">{{$t('lang.lang25')}}</p>
                    </div>
                    <div><img src="../assets/img/infoimg2.png"></div>
                    
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
            isCn:localStorage.getItem('lang')=='zh'
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
.container{
    .banner{
        /* img:first-child{
            display:block;
        }
        img:last-child{
            display:none;
        } */
    }
    .btnsbar{
        text-align:center;
        margin-top:-50px;
        position:relative;
        z-index:1;
        .btn{
            display:inline-block;
            vertical-align: middle;
            width:300px;
            height:100px;
            background:#874FEC;
            border-radius:50px;
            box-shadow: 0px 10px 10px -4px rgba(141, 92, 231, 0.5);
            margin:0 65px;
            font-size:30px;
            color:#fff;
            line-height:100px;
            cursor: pointer;
        }
    }
    .hdaoinfo{
        padding-top:110px;
        width:1200px;
        margin:0 auto;
        background:url(../assets/img/bg.png) no-repeat right bottom;
        background-size:650px 420px;
        margin-bottom:100px;
        h2{
            font-size:36px;
            color:#874FEC;
            line-height:50px;
            text-align:center;
            position:relative;
            margin-bottom:50px;
            span{
                position:relative;
                &:after{
                    content:'';
                    position:absolute;
                    top:50%;
                    left:-70px;
                    width:60px;
                    height:1px;
                    background:#874FEC;
                }
                &:before{
                    content:'';
                    position:absolute;
                    top:50%;
                    right:-70px;
                    width:60px;
                    height:1px;
                    background:#874FEC;
                }
            }
            
        }
        p{
            font-size:18px;
            color:#333;
            line-height:40px;
            padding-bottom:40px;
            width:548px;
            &.infotext3{
                width:548px;
            }
            &.infotext1{
                width:100%;
            }
            &.isCn{
                width:548px;
            }
        }
    }
    .projectlist{
        font-size:0;
        text-align:center;
        padding:60px 0;
        background: rgba(135, 79, 236, 0.05);
        .projectItem{
            display:inline-block;
            vertical-align:middle;
            width:294px;
            height:364px;
            padding:0 30px;
            border-radius:10px;
            background: linear-gradient(360deg, #874FEC 0%, #A467FE 100%);
            box-shadow: 0px 4px 0px 0px #7249BA;
            box-sizing:border-box;
            margin:0 20px;
            h2{
                width:158px;
                height:50px;
                font-size:16px;
                color:#fff;
                line-height:50px;
                text-align:center;
                border-radius: 0px 0px 10px 10px;
                background:#9052FF;
                display:inline-block;
            }
            .title{
                font-size:16px;
                color:#FFF;
                line-height:25px;
                text-align:center;
                padding-top:35px;
                /* &.mt200{
                    margin-top:100px;
                } */
            }
            .val{
                font-size:18px;
                color:#EDD9FF;
                line-height:40px;
                text-align:center;
            }
        }
    }
    .flowPanel{
        background:none;
        h2{
            
            span{
                font-size:36px;
                position:relative;
                &:after{
                    content:'';
                    position:absolute;
                    top:50%;
                    left:-70px;
                    width:60px;
                    height:1px;
                    background:#874FEC;
                }
                &:before{
                    content:'';
                    position:absolute;
                    top:50%;
                    right:-70px;
                    width:60px;
                    height:1px;
                    background:#874FEC;
                }
            }
        }
    }
    .flowItem{
        text-align:left;
        h3{
            width:280px;
            height:48px;
            background: linear-gradient(270deg, #874FEC 0%, #A467FE 100%);
            box-shadow: 0px 2px 0px 0px #7249BA;
            border-radius: 100px;
            font-size:18px;
            color:#fff;
            line-height:48px;
            font-weight:400;
            text-align:center;
            margin:0 auto 40px;
        }
        p{
            font-size:18px;
            color:#333;
            line-height:24px;
            padding-bottom:30px;
        }
        .infoscon{
            display:flex;
            justify-content:space-between;
            align-content: space-between;
            flex-wrap: wrap;
            padding:0 100px 60px;
            .text{
                width:50%;
            }
            img{
                width:348px;
            }
        }
    }
}
@media screen and (max-width:1200px) {
    .container{
        .banner{
            /* img:first-child{
                display:none;
            }
            img:last-child{
                display:block;
            } */
        }
        .btnsbar{
            margin-top:16px;
            margin-bottom:16px;
            .btn{
                width:134px;
                height:40px;
                line-height:40px;
                font-size:12px;
                border-radius:10px;
                margin:0 22px;
                background: linear-gradient(360deg, #874FEC 0%, #A467FE 100%);
                box-shadow: 0px 2px 0px 0px #7249BA;
            }
        }
        .hdaoinfo{
           padding:0 20px 40px; 
           width:100%;
           background:url(../assets/img/bg1.png) no-repeat bottom -60px right;
           background-size:225px 225px;
           margin-bottom:0;
           h2{
               font-size:24px;
               line-height:22px;
               margin-top:30px;
               margin-bottom:10px;
           }
           p{
               &.infotext1{
                    width:100%;
                    font-size:12px;
                    line-height:20px;
                    padding-bottom:16px;
                }
                &.infotext2{
                    width:100%;
                    font-size:12px;
                    line-height:20px;
                    padding-bottom:16px;
                }
                &.infotext3{
                    width:100%;
                    font-size:12px;
                    line-height:20px;
                    padding-bottom:16px;
                }
           }
           &.flowPanel{
               padding-bottom:0;
               margin-bottom:45px;
               background:url(../assets/img/mImg/bg2.png) no-repeat right 30px bottom;
               background-size:90px 177px;
               h2{
                   padding-bottom:0;
                   margin-bottom:25px;
               }
               .flowItem{
                   h3{
                       font-size:14px;
                       line-height:14px;
                       padding-bottom:7px;
                       padding-top:20px;
                   }
                   .text{
                        p{
                            font-size:14px;
                            line-height:24px;
                            &.flowtext1{
                                width:100%;
                                
                            }
                            &.flowtext2{
                                padding-bottom:0;
                                width:60%;
                            }
                            &.weight{
                                width:60%;
                                padding-top:0;
                                padding-bottom:0;
                            }
                        }
                   }
                   
               }
           }
        }
        .projectlist{
            padding:20px;
            background:none;
            .projectItem{
                width:49%;
                height:200px;
                margin:0;
                padding:0 11px;
                border-radius:10px;
                margin-bottom:20px;
                &:nth-child(2n){
                    margin-left:2%;
                }
                h2{
                    font-size:12px;
                    line-height:28px;
                    width:86px;
                    height:28px;
                }
                .title{
                    font-size:10px;
                    line-height:14px;
                    padding-top:14px;
                    padding-bottom:4px;
                    /* &.mt200{
                        margin-top:20px;
                    } */
                }
                .val{
                    font-size:10px;
                    line-height:14px;
                }
            }
        }
        .hdaoinfo{
            &.flowPanel {
                padding:0;
                margin-bottom:0;
                background:none;
                h2{
                    span{
                        font-size:24px;
                        color:#874FEC;
                    }
                }
                .flowItem{
                    background:url(../assets/img/bg4.png) no-repeat right bottom;
                    background-size:102px 336px;
                    h3{
                        width:140px;
                        height:24px;
                        background: linear-gradient(270deg, #874FEC 0%, #A467FE 100%);
                        box-shadow: 0px 2px 0px 0px #7249BA;
                        border-radius: 0px 100px 100px 0px;
                        line-height:24px;
                        font-size:12px;
                        padding:0;
                        margin:0;
                    }
                    .infoscon{
                        display:block;
                        padding:20px;
                        .text{
                            width:100%;
                            p{
                                font-size:12px;
                                padding-bottom:20px;
                                &.flowtext2,&.weight{
                                    width:100%;
                                }
                            }
                        }
                        img{
                            display:none;
                        }
                    }
                }
            }
        }
    }
}
</style>