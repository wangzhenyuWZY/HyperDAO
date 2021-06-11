<template>
    <header class="header clearfix">
        <div class="logo">
            <img>
        </div>
        <ul class="navList clearfix">
            <li class="navItem">
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
            width:60px;
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
}    
</style>