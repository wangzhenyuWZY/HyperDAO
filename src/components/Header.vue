<template>
    <header class="header clearfix">
        <div class="logo">
            <img v-if="itemShow" src="../assets/img/logo1.png">
            <img v-else src="../assets/img/logo1-theme2.png">
        </div>
        <i class="navIco" @click="drawer=true"></i>
        <ul class="navList clearfix">
            <li class="navItem" :class="active==0?'active':''" :data-theme="theme">
                <router-link to="/">{{$t('lang.lang83')}}</router-link>
            </li>
            <li class="navItem" :class="active==1?'active':''" :data-theme="theme">
                <router-link to="project">{{$t('lang.lang84')}}</router-link>
            </li>
            <li class="navItem" :class="active==2?'active':''" :data-theme="theme">
                <router-link to="stake">{{$t('lang.lang85')}}</router-link>
            </li>
            <li class="navItem" :class="active==3?'active':''" :data-theme="theme">
                <router-link to="vote">{{$t('lang.lang86')}}</router-link>
            </li>
            <li class="navItem" :class="active==4?'active':''" :data-theme="theme">
                <router-link to="chain">{{$t('lang.lang87')}}</router-link>
                <img @click="showChooseChain" class="sel-icon" src="@/assets/img/select.png" alt="">
                <div class="selections" v-show="selectionShow">
                    <div class="item" @click="chooseChain('bsc')">
                        <span>BSC</span>
                        <van-icon name="arrow" />
                    </div>
                    <div class="item" @click="chooseChain('polygon')">
                        <span>Polygon</span>   
                        <van-icon name="arrow" />
                    </div>
                </div>
            </li>
        </ul>
        <div class="utils clearfix">
            <a class="wallet" :data-theme="theme">{{defaultAccount?defaultAccount:$t('lang.lang126')}}</a>
            <i class="data" @click="toDatepiker"></i>
            <span class="language" @click="toggleLang">中/En</span>
            <!-- <i class="language" :class="isCn?'isEn':'isCn'" @click="toggleLang"></i> -->
        </div>
        <el-drawer title="我是标题" :visible.sync="drawer" :show-close="false" direction='ltr' custom-class="drawer_body" :with-header="false" @click.stop="tolerPop=false">
            <ul class="mobelNavlist">
                <li :class="active==0?'active':''">
                    <router-link to="/" class="menutitle">{{$t('lang.lang83')}}</router-link>
                </li>
                <li :class="active==1?'active':''">
                    <router-link to="project" class="menutitle">{{$t('lang.lang84')}}</router-link>
                </li>
                <li :class="active==2?'active':''">
                    <router-link to="stake" class="menutitle">{{$t('lang.lang85')}}</router-link>
                </li>
                <li :class="active==3?'active':''">
                    <router-link to="vote" class="menutitle">{{$t('lang.lang86')}}</router-link>
                </li>
                <li :class="active==4?'active':''">
                    <router-link to="chain" class="menutitle">{{$t('lang.lang87')}}</router-link>
                </li>
            </ul>
            <div class="otherLink">
                <p>{{defaultAccount?defaultAccount:$t('lang.lang126')}}</p>
                <p @click="toDatepiker">{{$t('lang.lang124')}}</p>
                <p @click="toggleLang">{{$t('lang.lang125')}}</p>
            </div>
        </el-drawer>
        <Datepiker v-show="isDate"></Datepiker>
    </header>
</template>
<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import Datepiker from '@/views/datePiker'
    import {mapState} from 'vuex'
    export default {
        components:{ 
            Header,
            Footer,
            Datepiker
        },
        computed: {
            ...mapState(['theme']),
            itemShow() {
                return this.theme === 'theme1'
            }
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
                tolerPop:false,
                drawer:false,
                defaultAccount:null,
                active:0,
                isDate:false,
                isCn:true,
                web3:null,
                selectionShow: false
            }
        },
        created(){
            this.$initWeb3().then((web3)=>{
                if(web3.eth.defaultAccount){
                    this.web3 = web3
                    this.defaultAccount = this.plusXing(web3.eth.defaultAccount,5,5)
                }
            })
        },
        mounted() {
            let path = this.$route.path
            if(path=='/index'){
                this.active = 0
            }else if(path=='/project'){
                this.active = 1
            }else if(path=='/details'){
                this.active = 1
            }else if(path=='/stake'){
                this.active = 2
            }else if(path=='/vote'){
                this.active = 3
            }else if(path=='/chain'){
                this.active = 4
            }
        },
        beforeDestroy () {
        
        },
        methods: {
            // 设置钱包地址
            plusXing (str,frontLen,endLen) {
                var len = str.length-frontLen-endLen;
                var xing = '';
                for (var i=0;i<len;i++) {
                    xing ='*******';
                }
                return str.substring(0,frontLen)+xing+str.substring(str.length-endLen);
            },
            toDatepiker(){
                this.isDate = !this.isDate
            },
            toggleLang () {
                this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en'
                localStorage.setItem('lang',this.$i18n.locale)
            },
            showChooseChain() {
                this.selectionShow = !this.selectionShow
            },
            chooseChain(chain) {
                this.showChooseChain()
                if (chain === 'bsc') {
                    this.$store.commit('updateTheme', 'theme1')
                } else {
                    this.$store.commit('updateTheme', 'theme2')
                }
            }
        }
    }
    </script>
<style lang="less" scoped>
.header{
    height:100px;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    .mobelNavlist{
        li{
            margin-bottom:20px;
            text-indent:32px;
            font-size:12px;
            color:#fff;
            line-height:48px;
            &.active{
                border-left:4px solid #fff;
                text-indent:28px;
            }
            a{
                font-size:12px;
                color:#fff; 
            }
        }
    }
    .otherLink{
        padding-left:32px;
        position:absolute;
        bottom:0;
        p{
            font-size:12px;
            color:#fff;
            line-height:48px;
            padding-bottom:20px;
        }
    }
    .logo{
        float:left;
        padding-left:168px;
        line-height:100px;
        img{
            width:273px;
            vertical-align: middle;
        }
    }
    .navIco{
        display: none;
    }
    .navList{
        float:left;
        padding-left:95px;
        .navItem{
            float:left;
            width:138px;
            height:100%;
            cursor:pointer;
            text-align:center;
            a{
                font-size:18px;
                // color:#3B065C;
                line-height:100px;
            }
            &:last-child {
                position: relative;
                .selections {
                    position: absolute;
                    right: 0;
                    // top: 80px;
                    top: 100%;
                    width: 160px;
                    background: #fff;
                    box-sizing: border-box;
                    .item {
                        line-height: 60px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        box-sizing: border-box;
                        padding: 0 15px;
                        &:last-child {
                            border-top: 1px solid #eee;
                        }
                    }
                }
            }
            &.active[data-theme="theme1"]{
                background:#874FEC;
                a{
                    color:#fff;
                }
            }
            &.active[data-theme="theme2"]{
                background:#00C8EE;
                a{
                    color:#fff;
                }
            }
            .sel-icon {
                margin-left: 10px;
            }
        }
    }
    .utils{
        float:right;
        padding-right:160px;
        .wallet{
            padding:0 44px;
            height:50px;
            border-radius:8px;
            line-height:50px;
            text-align:center;
            font-size:18px;
            color:#fff;
            float:left;
            margin-top:25px;
            &[data-theme="theme1"] {
                background:#874FEC;
            }
            &[data-theme="theme2"] {
                background:#00C8EE;
            }
        }
        .data{
            float:left;
            width:30px;
            height:30px;
            margin-left:38px;
            // background:url(../assets/img/data1.png) no-repeat center;
            background-size:100% 100%;
            margin-top:30px;
            cursor: pointer;
        }
        .language{
            float:left;
            width:30px;
            height:30px;
            font-size:20px;
            line-height:30px;
            margin-left:30px;
            margin-top:30px;
            cursor: pointer;
            &.isCn{
                background: url(../assets/img/icon8.png) no-repeat center;
                background-size:100% 100%;
            }
            &.isEn{
                background: url(../assets/img/icon4.png) no-repeat center;
                background-size:100% 100%;
            }
        }
    }
}   

@media screen and (max-width: 1800px) {
    .header {
        // height: 90px;
        // line-height: 90px;
        .navList {
            .navItem {
                width: 110px;
                &:last-child {
                    width: 130px;     
                }
            }
        }
    }
}

@media screen and (max-width: 1699px) {
    .header {
        height: 80px;
        .logo {
            padding-left: 30px;
            line-height: 80px;
        }
        .navList {
            padding-left: 50px;
            .navItem {
                width: 100px;
                a {
                    font-size: 15px;
                    line-height: 80px;
                }
                &:last-child {
                    width: 140px;     
                }
            }
        }
        .utils {
            padding-right: 50px;
            .wallet {
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                margin-top: 20px;
            }
            .data {
                margin-top: 25px;
            }
            .language {
                margin-top: 25px;
            }
        }
    }
}

@media screen and (max-width: 1320px) {
    .header{
        height:42px;
        .logo{
            float:right;
            padding-left:0;
            padding-right:23px;
            line-height:42px;
            img{
                width:99px;
            }
        }
        .navList,.data,.language,.wallet{
            display:none;
        }
        .navIco{
            display:block;
            float:left;
            margin-left:27px;
            margin-top:13px;
            width:17px;
            height:14px;
            // background:url(../assets/img/mImg/navIco.png) no-repeat center;
            background-size:100% 100%;
        }
    }
} 
</style>
<style >
.drawer_body {
    width: 60% !important;
    /* background: #874FEC; */
    outline: 0;
}
</style>