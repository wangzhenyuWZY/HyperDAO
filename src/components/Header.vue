<template>
    <header class="header clearfix">
        <div class="logo">
            <img src="../assets/img/logo1.png">
        </div>
        <ul class="navList clearfix">
            <li class="navItem active">
                <a>首页</a>
            </li>
            <li class="navItem">
                <a>项目</a>
            </li>
            <li class="navItem">
                <a>质押</a>
            </li>
            <li class="navItem">
                <a>治理</a>
            </li>
            <li class="navItem">
                <a>跨链通道</a>
            </li>
        </ul>
        <div class="utils clearfix">
            <a class="wallet">我的钱包</a>
            <i class="data"></i>
            <i class="language"></i>
        </div>
    </header>
</template>
<style lang="less" scoped>
.header{
    height:100px;
    .logo{
        float:left;
        padding-left:168px;
        line-height:100px;
        img{
            width:273px;
            vertical-align: middle;
        }
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
</style>