<template>
    <div class="container">
        <Header></Header>
        <div class="banner">
            <img src="../assets/img/banner.png" v-show="isCn" width="100%">
            <img src="../assets/img/banner11.png" v-show="!isCn" width="100%">
        </div>
        <!-- <div class="banner" v-show="!isCn">
            <img src="../assets/img/banner11.png" width="100%">
            <img src="../assets/img/mImg/mImg1.png" width="100%">
        </div> -->
        <div class="btnsbar">
            <router-link to="/project" class="btn">{{$t('lang.lang1')}}</router-link>
            <router-link to="/" class="btn">{{$t('lang.lang2')}}</router-link>
        </div>
        <div class="hdaoinfo">
            <h2>{{$t('lang.lang3')}}</h2>
            <p class="infotext1">{{$t('lang.lang4')}}</p>
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
            <h2>{{$t('lang.lang14')}}</h2>
            <div class="flowItem">
                <h3>{{$t('lang.lang15')}}</h3>
                <p class="flowtext1">{{$t('lang.lang16')}}</p>
                <p class="flowtext1">{{$t('lang.lang17')}}</p>
                <p class="flowtext1">{{$t('lang.lang18')}}</p>
                <h3>{{$t('lang.lang19')}}</h3>
                <p class="flowtext2">{{$t('lang.lang20')}}</p>
                <p class="weight">{{$t('lang.lang21')}}</p>
                <p class="weight">{{$t('lang.lang22')}}</p>
                <p class="weight">{{$t('lang.lang23')}}</p>
                <p class="weight">{{$t('lang.lang24')}}</p>
                <p class="flowtext2" v-show="false">{{$t('lang.lang25')}}</p>
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
            isCn:false
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
        margin-bottom:170px;
        h2{
            font-size:36px;
            color:#333333;
            line-height:50px;
            text-align:center;
            position:relative;
            margin-bottom:50px;
            &:after{
                content:'';
                position:absolute;
                bottom:-10px;
                left:50%;
                width:60px;
                height:1px;
                margin-left:-30px;
                background:#333;
            }
        }
        p{
            font-size:24px;
            color:#333;
            line-height:40px;
            padding-bottom:40px;
            &.infotext1{
                width:1164px;
            }
            &.infotext2{
                width:548px;
            }
            &.infotext3{
                width:548px;
                font-weight: 600;
            }
        }
    }
    .projectlist{
        font-size:0;
        text-align:center;
        .projectItem{
            display:inline-block;
            vertical-align:middle;
            width:400px;
            height:440px;
            padding:30px;
            border-radius:20px;
            background:#874FEC;
            box-sizing:border-box;
            margin:0 20px;
            h2{
                font-size:36px;
                color:#fff;
                line-height:50px;
                text-align:center;
                padding-bottom:10px;
                border-bottom:1px solid #EDD9FF;
            }
            .title{
                font-size:18px;
                color:#FFF;
                line-height:25px;
                text-align:center;
                padding-top:35px;
                /* &.mt200{
                    margin-top:100px;
                } */
            }
            .val{
                font-size:28px;
                color:#EDD9FF;
                line-height:40px;
                text-align:center;
            }
        }
    }
    .flowPanel{
        background:url(../assets/img/bg2.png) no-repeat right 200px bottom;
        background-size:310px 610px;
    }
    .flowItem{
        text-align:left;
        h3{
            font-size:24px;
            color:#333;
            line-height:40px;
            font-weight:600;
            padding-bottom:10px;
            padding-top:60px;
        }
        p{
            font-size:24px;
            color:#333;
            line-height:40px;
            padding-bottom:5px;
            &.weight{
                font-weight:600;
                padding-top:20px;
                width:530px;
            }
            &.flowtext1{
                width:1120px;
            }
            &.flowtext2{
                width:530px;
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
                width:102px;
                height:34px;
                line-height:34px;
                font-size:14px;
                border-radius:4px;
                margin:0 22px;
            }
        }
        .hdaoinfo{
           padding:0 15px 180px; 
           width:100%;
           background:url(../assets/img/mImg/bg.png) no-repeat bottom 25px center;
           background-size:227px 146px;
           margin-bottom:0;
           h2{
               font-size:16px;
               line-height:22px;
           }
           p{
               &.infotext1{
                    width:100%;
                    font-size:14px;
                    line-height:24px;
                    padding-bottom:16px;
                }
                &.infotext2{
                    width:100%;
                    font-size:14px;
                    line-height:24px;
                    padding-bottom:16px;
                }
                &.infotext3{
                    width:100%;
                    font-size:14px;
                    line-height:24px;
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
        .projectlist{
            padding:20px;
            .projectItem{
                width:49%;
                height:200px;
                margin:0;
                padding:11px;
                border-radius:10px;
                margin-bottom:10px;
                &:nth-child(2n){
                    margin-left:2%;
                }
                h2{
                    font-size:16px;
                    line-height:20px;
                }
                .title{
                    font-size:14px;
                    line-height:14px;
                    padding-top:14px;
                    padding-bottom:4px;
                    /* &.mt200{
                        margin-top:20px;
                    } */
                }
                .val{
                    font-size:14px;
                    line-height:14px;
                }
            }
        }
    }
}
</style>