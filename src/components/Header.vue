<template>
    <header class="header clearfix">
        <div class="logo">
            <img src="../assets/img/logo1.png">
        </div>
        <i class="navIco" @click="drawer=true"></i>
        <ul class="navList clearfix">
            <li class="navItem active">
                <router-link to="/">首页</router-link>
            </li>
            <li class="navItem">
                <router-link to="project">项目</router-link>
            </li>
            <li class="navItem">
                <router-link to="stake">质押</router-link>
            </li>
            <li class="navItem">
                <router-link to="vote">治理</router-link>
            </li>
            <li class="navItem">
                <router-link to="chain">跨链通道</router-link>
            </li>
        </ul>
        <div class="utils clearfix">
            <a class="wallet">我的钱包</a>
            <i class="data"></i>
            <i class="language"></i>
        </div>
        <el-drawer title="我是标题" :visible.sync="drawer" :show-close="false" direction='ltr' custom-class="drawer_body" :with-header="false" @click.stop="tolerPop=false">
            <ul class="mobelNavlist">
                <li class="active">
                    <span class="menutitle">首页</span>
                </li>
                <li>
                    <span class="menutitle">项目</span>
                </li>
                <li>
                    <span class="menutitle">质押</span>
                </li>
                <li>
                    <span class="menutitle">治理</span>
                </li>
                <li>
                    <span class="menutitle">跨链通道</span>
                </li>
            </ul>
            <div class="otherLink">
                <p>我的钱包</p>
                <p>日历</p>
                <p>切换语言</p>
            </div>
        </el-drawer>
    </header>
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
                tolerPop:false,
                drawer:false
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
.header{
    height:100px;
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
                color:#3B065C;
                line-height:100px;
            }
            &.active{
                background:#874FEC;
                a{
                    color:#fff;
                }
            }
        }
    }
    .utils{
        float:right;
        padding-right:160px;
        .wallet{
            padding:0 44px;
            height:50px;
            background:#874FEC;
            border-radius:8px;
            line-height:50px;
            text-align:center;
            font-size:18px;
            color:#fff;
            float:left;
            margin-top:25px;
        }
        .data{
            float:left;
            width:30px;
            height:30px;
            margin-left:38px;
            background:url(../assets/img/data1.png) no-repeat center;
            background-size:100% 100%;
            margin-top:30px;
            cursor: pointer;
        }
        .language{
            float:left;
            width:30px;
            height:30px;
            margin-left:30px;
            background: url(../assets/img/icon8.png) no-repeat center;
            background-size:100% 100%;
            margin-top:30px;
            cursor: pointer;
        }
    }
}   
@media screen and (max-width:1200px) {
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
            background:url(../assets/img/mImg/navIco.png) no-repeat center;
            background-size:100% 100%;
        }
    }
} 
</style>
<style >
.drawer_body {
    width: 60% !important;
    background: #874FEC;
    outline: 0;
}
</style>