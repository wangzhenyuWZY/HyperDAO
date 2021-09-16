<template>
    <footer class="footer" :data-theme="theme">
        <img class="logo" src="../assets/img/logo.png">
        <div class="contectType">
            <a><img src="../assets/img/icon7.png"></a>
            <a><img src="../assets/img/Twitter1.png"></a>
            <a><img src="../assets/img/telegram1.png"></a>
        </div>
    </footer>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['theme'])
    },
}
</script>

<style lang="less" scoped>
.footer{
    height:374px;
    text-align:center;
    &[data-theme="theme1"] {
        background:#4B376E;
    }
    &[data-theme="theme2"] {
        background: linear-gradient(90deg, #007DEE 0%, #00C8EE 100%);
    }
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