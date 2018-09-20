<template>
  <div :id="id" class="echart-box" :style="`height:${height}px`"></div>
</template>

<script>
import echarts from 'echarts';
export default {
  props: {
    height: {
      type: Number,
      default () {
        return 300;
      }
    },
    id: {
      type: String,
      default () {
        return '';
      }
    },
    option: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  data () {
    return {
      default: {
        tooltip: {}
      }
    };
  },
  watch: {
    option: {
      handler (newvalue, oldvalue) {
        this.initEcharts(newvalue);
      },
      deep: true
    }
  },
  mounted () {
    this.initEcharts(this.option);
  },
  methods: {
    initEcharts (option) {
      var that = this;
      var newOptions = Object.assign({}, this.default, option);
      console.log(newOptions);
      this.$nextTick(() => {
        echarts.init(document.getElementById(that.id)).setOption(newOptions);
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .echart-box{
    width: 100%;
    margin-bottom: 20px;
  }
</style>
