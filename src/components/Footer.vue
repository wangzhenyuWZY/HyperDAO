<template>
    <footer class="footer">
        <img class="logo" src="../assets/img/logo.png">
        <div class="contectType">
            <a><img src="../assets/img/icon7.png"></a>
            <a><img src="../assets/img/Twitter1.png"></a>
            <a><img src="../assets/img/telegram1.png"></a>
        </div>
    </footer>
</template>
<style lang="less" scoped>
.footer{
    height:374px;
    background:#4B376E;
    text-align:center;
    .logo{
        margin-top:110px;
        width:360px;
    }
    .contectType{
        padding-top:40px;
        a{
            padding:0 15px;
        }
        img{
            width:40px;
        }
    }
}
@media screen and (max-width:1200px) {
    .footer{
        height:100px;
        .logo{
            margin-top:23px;
            width:146px;
        }
        .contectType{
            padding-top:14px;
            a{
                padding:0 6px;
                img{
                    width:17px;
                }
            }
        }
    }
}
</style>