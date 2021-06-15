<template>
    <div class="container">
        <Header></Header>
        <div class="votePanel">
            <h2>正在进行的投票</h2>
            <div class="voteListWrap">
                <div class="voteList">
                    <div class="voteItem">
                        <div class="voteHead">
                            <div class="proName">
                                <img>
                                ABCD
                            </div>
                            <p class="access">Access<br>仅参与IDO的会员</p>
                        </div>
                        <h3 class="votetodo">需要资金展开第二期应用开发</h3>
                        <p class="todoInfo">
                            详细描述（100字以内）
                        </p>
                        <a class="voteBtn">赞成</a>
                        <a class="voteBtn">反对</a>
                        <div class="downtime">2h 38m 45s</div>
                    </div>
                    <div class="voteItem">
                        <div class="voteHead">
                            <div class="proName">
                                <img>
                                ABCD
                            </div>
                            <p class="access">Access<br>仅参与IDO的会员</p>
                        </div>
                        <h3 class="votetodo">需要资金展开第二期应用开发</h3>
                        <p class="todoInfo">
                            详细描述（100字以内）
                        </p>
                        <a class="voteBtn">赞成</a>
                        <a class="voteBtn">反对</a>
                        <div class="downtime">2h 38m 45s</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="votePanel over">
            <h2>已经结束的投票</h2>
            <div class="voteListWrap">
                <div class="voteList">
                    <div class="voteItem">
                        <div class="voteHead">
                            <div class="proName">
                                <img>
                                ABCD
                            </div>
                            <p class="access">Access<br>仅参与IDO的会员</p>
                        </div>
                        <h3 class="votetodo">需要资金展开第二期应用开发</h3>
                        <p class="todoInfo">
                            详细描述（100字以内）
                        </p>
                        <div class="voteProgress">
                            <div class="progressInfo">
                                <div class="infoItem">
                                    <p>赞成</p>
                                    <p>46562354</p>
                                </div>
                                <div class="infoItem">
                                    <p>反对</p>
                                    <p>46562354</p>
                                </div>
                            </div>
                            <div class="all">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="voteItem">
                        <div class="voteHead">
                            <div class="proName">
                                <img>
                                ABCD
                            </div>
                            <p class="access">Access<br>仅参与IDO的会员</p>
                        </div>
                        <h3 class="votetodo">需要资金展开第二期应用开发</h3>
                        <p class="todoInfo">
                            详细描述（100字以内）
                        </p>
                        <div class="voteProgress">
                            <div class="progressInfo">
                                <div class="infoItem">
                                    <p>赞成</p>
                                    <p>46562354</p>
                                </div>
                                <div class="infoItem">
                                    <p>反对</p>
                                    <p>46562354</p>
                                </div>
                            </div>
                            <div class="all">
                                <p></p>
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
.votePanel{
    padding-top:90px;
    padding-bottom:60px;
    &.over{
        h2{
            color:#DADADA;
        }
        .voteList{
            .voteItem{
                background:#999999;
                border:none;
                .voteHead{
                    .proName,.access{
                        color:#DADADA;
                    }
                }
                .votetodo,.todoInfo{
                    color:#DADADA;
                }
                .todoInfo{
                    height:300px;
                }
            }
        }
    }
    h2{
        font-size:36px;
        color:#333333;
        line-height:50px;
        text-align:center;
        font-weight:bold;
        padding-bottom:90px;
    }
    .voteList{
        font-size:0;
        text-align:center;
        .voteItem{
            display:inline-block;
            vertical-align: middle;
            padding:50px;
            margin:0 35px 35px;
            border:2px solid #874FEC;
            border-radius:20px;
            width:680px;
            height:800px;
            text-align:left;
            .voteHead{
                overflow:hidden;
                padding-bottom:60px;
                .proName{
                    float:left;
                    font-size:36px;
                    color:#333;
                    line-height:115px;
                    font-weight:bold;
                    img{
                        width:115px;
                        height:115px;
                        margin-right:38px;
                        vertical-align: middle;
                    }
                }
                .access{
                    float:right;
                    font-size:24px;
                    color:#333333;
                    line-height:33px;
                    padding-top:24px;
                    text-align:right;
                }
            }
            .votetodo{
                font-size:36px;
                color:#333333;
                line-height:50px;
                font-weight:bold;
            }
            .todoInfo{
                font-size:24px;
                color:#333333;
                line-height:33px;
                height:200px;
                padding-bottom:30px;
            }
            .voteBtn{
                display:block;
                width:282px;
                height:66px;
                background:#874FEC;
                margin:0 auto 40px;
                border-radius:10px;
                font-size:24px;
                color:#fff;
                line-height:66px;
                text-align:center;
                cursor: pointer;
            }
            .downtime{
                font-size:36px;
                color:#333333;
                line-height:50px;
                font-weight:bold;
                text-align:center;
            }
            .voteProgress{
                .progressInfo{
                    overflow:hidden;
                    .infoItem{
                        &:first-child{
                            float:left;
                        }
                        &:last-child{
                            float:right;
                            p{
                                text-align:right;
                            }
                        }
                        p{
                            font-size:24px;
                            color:#DADADA;
                            line-height:33px;
                            padding-bottom:8px;
                        }
                    }
                }
                .all{
                    margin-top:12px;
                    height:30px;
                    background:#fff;
                    border-radius:33px;
                    p{
                        background:#DADADA;
                        height:100%;
                        border-radius:33px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:1200px) {
    .votePanel{
        &.over{
            .voteList{
                .voteItem{
                    .todoInfo{
                        height:130px;
                    }
                    .voteProgress{
                        .progressInfo{
                            .infoItem{
                                p{
                                    font-size:10px;
                                    line-height:14px;
                                    padding-bottom:3px;
                                }
                            }
                        }
                        .all{
                            height:10px;
                            margin-top:0;
                        }
                    }
                }
            }
        }
        padding-top:30px;
        h2{
            font-size:16px;
            color:#333;
            line-height:22px;
            padding-bottom:10px;
        }
        .voteListWrap{
            overflow-y: scroll;
        }
        .voteList{
            width:1000px;
            text-align:left;
            .voteItem{
                border:1px solid #874FEC;
                border-radius:10px;
                padding:15px;
                width:260px;
                height:280px;
                margin:0 10px;
                .voteHead{
                    padding-bottom:14px;
                    .proName{
                        font-size:14px;
                        line-height:34px;
                        img{
                            width:34px;
                            height:34px;
                            margin-right:4px;
                        }
                    }
                    .access{
                        font-size:10px;
                        line-height:14px;
                        padding-top:0;
                    }
                }
                .votetodo{
                    font-size:12px;
                    line-height:17px;
                    padding-bottom:4px;
                }
                .todoInfo{
                    font-size:10px;
                    line-height:14px;
                    height:70px;
                }
                .voteBtn{
                    width:120px;
                    height:40px;
                    line-height:40px;
                    font-size:12px;
                    border-radius:6px;
                    margin-bottom:10px;
                }
                .downtime{
                    font-size:10px;
                    line-height:14px;
                }
            }
        }
    }
}
</style>