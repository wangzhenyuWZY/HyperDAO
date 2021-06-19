<template>
    <div class="container">
        <Header></Header>
        <div class="datePiker">
            <datePicker 
                :options="calendarArr" 
                class="calendar" 
                @handleClickDay="handleClickDay" 
                @handlePrevMonth="handlePrevMonth"
                @handleNextMonth="handleNextMonth"
            />
        </div>
        <Footer></Footer>
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
    .datePiker{
        width:1400px;
        margin:70px auto;

    }
</style>