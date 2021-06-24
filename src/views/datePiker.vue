<template>
    <div class="container">
        <div class="datePiker">
            <datePicker 
                :options="calendarArr" 
                class="calendar" 
                @handleClickDay="handleClickDay" 
                @handlePrevMonth="handlePrevMonth"
                @handleNextMonth="handleNextMonth"
            />
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import datePicker from '../components/DatePiker/date-picker'
export default {
    components:{ 
        Header,
        Footer,
        datePicker
    },
    watch: {
        
    },
    data() {
        return {
            calendarArr: {
                type: 'combination',
                headStyle: {
                    todayBtn: 'right',
                    combination: 'center',
                    checkBtn: 'right',
                },
                viewStyle: {
                    day: 'right'
                },
                calendarData: []
            },
        }
    },
    mounted() {
        
    },
    beforeDestroy () {
    
    },
    methods: {
        handleClickDay () {
            console.log(1111);
        },
        handlePrevMonth () {

        },
        handleNextMonth () {
        
        }
            
    }
}
</script>
<style lang="less" scoped>
    .container{
        position:absolute;
        top:100px;
        left:0;
        right:0;
        height:200vh;
        background:#fff;
        z-index:999;
    }
    .datePiker{
        width:1400px;
        margin:70px auto;

    }
    @media screen and (max-width:1200px) {
        .container{
            top:42px;
            padding:0 10px;
            .datePiker{
                width:100%;
            }
        }
    }
</style>