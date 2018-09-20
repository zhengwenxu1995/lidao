<template>
  <div class="statistics-box">
    <div class="order-wrapper">
      <div class="statistics-title">订单数据</div>
      <el-row :gutter="30">
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="card-title">
              <span>今日</span>
              <el-date-picker
                v-model="order.day.date"
                type="date"
                readonly
                format="yyyy年MM月dd日"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <echarts :id='order.day.id' :option="options.day"></echarts>
            <div class="card-total">
              <span>总订单量：</span>
              <span class="count-num">{{order.day.countDay}}</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="card-title">
              <span>本周</span>
              <el-date-picker
                v-model="order.week.week"
                type="week"
                format="yyyy 第WW周"
                placeholder="选择周">
              </el-date-picker>
            </div>
            <echarts :id='order.week.id' :option="options.week"></echarts>
            <div class="card-total">
              <span>总订单量：</span>
              <span class="count-num">{{order.week.countWeek}}</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="card-title">
              <span>本月</span>
              <el-date-picker
                v-model="order.month.month"
                type="month"
                format="yyyy年MM月"
                placeholder="选择月">
              </el-date-picker>
            </div>
            <echarts :id='order.month.id' :option="options.month"></echarts>
            <div class="card-total">
              <span>总订单量：</span>
              <span class="count-num">{{order.month.countMonth}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="trade-wrapper">
      <div class="statistics-title">交易数据</div>
    </div>
    <div class="buy-wrapper">
      <div class="statistics-title">购买数据</div>
    </div>
  </div>
</template>

<script>
import Echarts from '../common/echart/echart';
export default {
  data () {
    return {
      options: {
        day: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#2182f8'
              }
            }
          },
          grid: {
            top: '20px',
            bottom: '30px',
            right: '20px',
            show: false
          },
          xAxis: {
            type: 'category',
            name: '今日总订单量',
            nameLocation: 'center',
            boundaryGap: ['10%', '10%'],
            show: true
          },
          yAxis: {
            max: 600,
            show: false
          },
          series: {
            data: [{value: 80}],
            type: 'bar',
            color: '#2182F8',
            barMaxWidth: 100
          }
        },
        week: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#2182f8'
              }
            }
          },
          grid: {
            top: '20px',
            bottom: '30px',
            right: '20px',
            show: true
          },
          xAxis: {
            type: 'category',
            nameGap: 30,
            maxInterval: 3600 * 24 * 1000,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            show: true
          },
          yAxis: {
            max: 600,
            show: true
          },
          series: {
            data: [
              {value: 80},
              {value: 200},
              {value: 120},
              {value: 300},
              {value: 160},
              {value: 400},
              {value: 600}
            ],
            type: 'line',
            color: '#2182F8',
            barMaxWidth: 100
          }
        },
        month: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#2182f8'
              }
            }
          },
          grid: {
            top: '20px',
            bottom: '30px',
            right: '20px',
            show: true
          },
          xAxis: {
            type: 'category',
            nameGap: 30,
            boundaryGap: true,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            show: true
          },
          yAxis: {
            max: 600,
            show: true
          },
          series: [
            {
              data: [
                {value: 80},
                {value: 200},
                {value: 120},
                {value: 300},
                {value: 160},
                {value: 400},
                {value: 600}
              ],
              type: 'bar',
              barGap: '0%',
              color: '#003366',
              barMaxWidth: 100
            },
            {
              data: [
                {value: 80},
                {value: 200},
                {value: 120},
                {value: 300},
                {value: 160},
                {value: 400},
                {value: 600}
              ],
              type: 'bar',
              color: '#006699',
              barMaxWidth: 100
            },
            {
              data: [
                {value: 80},
                {value: 200},
                {value: 120},
                {value: 300},
                {value: 160},
                {value: 400},
                {value: 600}
              ],
              type: 'bar',
              color: '#4cabce',
              barMaxWidth: 100
            },
            {
              data: [
                {value: 80},
                {value: 200},
                {value: 120},
                {value: 300},
                {value: 160},
                {value: 400},
                {value: 600}
              ],
              type: 'bar',
              color: '#e5323e',
              barMaxWidth: 100
            },
            {
              data: [
                {value: 80},
                {value: 200},
                {value: 120},
                {value: 300},
                {value: 160},
                {value: 400},
                {value: 600}
              ],
              type: 'bar',
              color: '#4091FF',
              barMaxWidth: 100
            },
          ]
        }
      },
      order: {
        day: {
          date: '',
          countDay: '80',
          id: 'orderDay',
          color: '#2182F8'
        },
        week: {
          week: '',
          countWeek: '600',
          id: 'orderWeek'
        },
        month: {
          month: '',
          countMonth: '1600',
          id: 'orderMonth'
        }
      }
    };
  },
  created () {
    var date = this.toolClass.dateFtt('yyyy-MM-dd', new Date());
    this.order.day.date = date;
    this.order.week.week = date;
    this.order.month.month = date;
  },
  methods: {
    initEchart () {
    }
  },
  components: {
    Echarts
  }
};
</script>

<style scoped>
  .statistics-title{
    margin-bottom: 20px;
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }

  .card-title {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    display: flex;
    line-height: 40px;
  }

  .card-title .el-date-editor{
    flex: 1;
  }

  .card-total{
    font-size: 16px;
    color: #333;
  }

  .count-num{
    color: #2182f8;
    font-weight: bold;
  }
</style>
<style>
  .statistics-box .el-input__inner{
    border: none;
    padding-right: 0;
    color: #999;
  }
</style>
