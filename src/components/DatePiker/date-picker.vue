<template>
  <div class="cc-calendar">
    <!-- <calendarHeader 
      :headOptions="headOptions" 
      @handlePrevMonth = 'handlePrevMonth'
      @handleNextMonth = 'handleNextMonth'
      @handleToday = 'handleToday'
    /> -->
    <ul class="calendar-week">
      <li v-for="(item, index) in calendarTitleArr" :key="index" class="week-item">{{item}}</li>
    </ul>
    <ul class="calendar-view">
      <li v-for="(item, index) in calendarList" 
        :key="index" 
        class="date-view"
        :class="[
          {'month-class': !isCurrentMonth(item.date)},
          {todayBg: isCurrentDay(item.date)},
          {handleDay: item.clickDay}
        ]"
        @click="handleClickDay(item)"
      >
        <span class="date-day" 
          :style="dayStyle" 
          :class="[{'opacity-class': !isCurrentMonth(item.date)}]"
        >
          {{item.day}}
        </span>
        <span class="calendar-num">
          {{item.calendarNum}}
        </span>
        <span class="hasPro" v-show="item.hasPro"><img src="../../assets/img/icon1.png"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  import calendarHeader from './canlendar-head.vue';
  import * as utils from '../../utils/datepiker.js';
  import axios from "axios"
  export default {
    name: 'cc-calendar',
    componentName: 'cc-calendar',
    props: {
      options: Object
    },
    components: {
      calendarHeader
    },
    data() {
      let {year, month, day} = utils.getNewDate(new Date());
      return {
        headOptions: {
          type: this.options.type,
          style: this.options.headStyle,
          date: '',
        },
        calendarTitleArr: [
          'MON',
          'TUE',
          'WED',
          'THU',
          'FRI',
          'SAT',
          'SUN '
        ],
        time: {year, month, day},
        calendarList: [],
        proTimes:[
          
        ]
      }
    },
    computed : {
      dayStyle : function () {
        return {
          textAlign: this.options.viewStyle.day,
        }
      }
    },
    methods: {
      // 是否是当前月
      isCurrentMonth (date) {
        let {year: currentYear, month: currentMonth} = utils.getNewDate(utils.getDate(this.time.year, this.time.month, 1));
        let {year, month} = utils.getNewDate(date);
        return currentYear == year && currentMonth == month
      },
      // 是否是今天 
      isCurrentDay (date) {
        let {year: currentYear, month: currentMonth, day: currentDay} = utils.getNewDate(new Date());
        let {year, month, day} = utils.getNewDate(date);
        return currentYear == year && currentMonth == month && currentDay == day;
      },
      // 上一个月
      handlePrevMonth () {
        let prevMonth = utils.getDate(this.time.year,this.time.month,1);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        this.time = utils.getNewDate(prevMonth);
        this.headOptions.date = `${utils.englishMonth(this.time.month)} ${this.time.year}`;
        this.$emit('handlePrevMonth');
      },
      // 下一个月
      handleNextMonth () {
        let nextMonth = utils.getDate(this.time.year,this.time.month,1); 
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        this.time = utils.getNewDate(nextMonth);
        this.headOptions.date = `${utils.englishMonth(this.time.month)} ${this.time.year}`;
        this.$emit('handleNextMonth');
      },
      // 点击回到今天
      handleToday () {
        this.time = utils.getNewDate(new Date());
        // this.returnDate();
        this.$emit('handleToday');
      },
      // 点击某一天
      handleClickDay (item) {
        this.$forceUpdate();
        this.$emit('handleClickDay', item);
        this.$set(item, 'clickDay', true);
      },
      getTimeList(){
        let that = this
          var now = new Date(); //当前日期 
          var nowMonth = now.getMonth(); //当前月 
          var nowYear = now.getFullYear(); //当前年 
          //本月的开始时间
          var monthStartDate = new Date(nowYear, nowMonth, 1); 
          //本月的结束时间
          var monthEndDate = new Date(nowYear, nowMonth+1, 0);
          var timeStar=Date.parse(monthStartDate)/1000;//s
          var timeEnd=Date.parse(monthEndDate)/1000;//s
          that.proTimes = [1624506039000,1624592439000]
          that.visibleCalendar()
          // axios.get(process.env.VUE_APP_URL+"menology?begin_time="+timeStar+"&end_time="+timeEnd).then((res)=>{
          //     if(res.data.code==0){
          //         res.data.data.forEach((item,index)=>{
          //             let time = new Date(item.begin_time).getTime()
          //             that.proTimes.push(time)
          //         })
          //         that.visibleCalendar()
          //     }
          // })
      },
      visibleCalendar(){
          let calendatArr = [];
          let {year, month, day} = utils.getNewDate(utils.getDate(this.time.year, this.time.month, 1));
          
          let currentFirstDay = utils.getDate(year, month, 1);

          // 获取当前月第一天星期几
          let weekDay = currentFirstDay.getDay();
          if (weekDay == 0) {
            weekDay += 7;
          }
          let startTime = currentFirstDay - (weekDay - 1) * 24 * 60 * 60 * 1000;

          let monthDayNum;
          if (weekDay == 5 || weekDay == 6){
            monthDayNum = 42
          }else {
            monthDayNum = 35
          };

          for (let i = 0; i < monthDayNum; i++) {
            let daystartTime = new Date(startTime + i * 24 * 60 * 60 * 1000).getTime()
            let dayendTime = daystartTime+86400000
            let hasPro = false
            for(var j=0;j<this.proTimes.length;j++){
              if(daystartTime<=this.proTimes[j] && this.proTimes[j]<dayendTime){
                hasPro = true
              }
            }
            calendatArr.push({
              date: new Date(startTime + i * 24 * 60 * 60 * 1000),
              year: year,
              month: month + 1,
              day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate(),
              clickDay: false,
              hasPro:hasPro
            })
          };
          
          this.headOptions.date = `${utils.englishMonth(month)} ${year}`;
          this.calendarList = calendatArr
        }
    },
    created () {
      this.getTimeList()
      this.calendarType = this.options.calendarType;
    },
    mounted() { 
      
    },
  }
</script>

<style lang="less">
  .cc-calendar {
    width: 100%;
    height: 100%;
    // background: rgba(135, 79, 236, 0.1);
    box-sizing: border-box;
    .calendar-week {
      display: flex;
      width: 100%;
      height: 80px;
      line-height: 80px;
      border-right: none;
      // background:#874FEC;
      .week-item {
        width: 14.285%;
        text-align: center;
        font-size: 14px;
        color: #fff;
        border-right: 1px solid #E4E7EA;
        font-weight: 600;
        &:last-child{
          border:none;
        }
      }
    }
    .calendar-view {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      border-left: 1px solid #E4E7EA;
      .date-view {
        position:relative;
        width: 14.285%;
        height: 185px;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        box-sizing: border-box;
        cursor: pointer;
        &:nth-child(7n){
          border-right:none;
        }
        .date-day {
          padding: 8px 8px 0;
          display: block;
          width: 100%;
          font-size: 14px;
          color: #7F8794;
        }
        .calendar-num {
          margin-top: 6px;
          display: block;
          width: 100%;
          text-align: center;
          font-size: 30px;
          color: #424953;
        }
      }
      .opacity-class {
        opacity: .5;
      }
      .month-class {
        background-image: linear-gradient(45deg,rgba(000, 000, 000, .03) 25%,transparent 25%,transparent 50%,rgba(000, 000, 000, .03) 50%,rgba(000, 000, 000, .03) 75%,transparent 75%,transparent);
        background-size: 20px 20px;
      }
      .todayBg {
        /* background: #FFFDEF; */
      }
      .hasPro{
        text-align:center;
        display:block;
        position:absolute;
        top:30px;
        left:30px;
        img{
          width:134px;
        }
        
      }
      .handleDay {
        background: #2061FF !important;
        .date-day {
          color: #BCCFFF !important;
        }
        .calendar-num {
          color: #fff !important;
        }
      }
    }
  }
  @media screen and (max-width:1200px) {
    .cc-calendar{
      .calendar-week{
        height:23px;
        .week-item{
          font-size:8px;
          line-height:23px;
        }
      }
      .calendar-view{
          .date-view{
            height:46px;
            .hasPro{
              left:8px;
              top:6px;
              img{
                width:33px;
                
              }
            }
          }
      }
    }
    
  }
</style>