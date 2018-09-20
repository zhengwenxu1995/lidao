<template>
  <div class="retail-trader">
    <el-card class="btn-box">
      <btns :btns = 'retailTraderBtns'
      @createRetailTrader = 'createRetailTrader'
      @editRetailTrader = 'editRetailTrader'
      @countRetailTrader = 'countRetailTrader'
      ></btns>
    </el-card>
    <el-card class="box-card">
      <my-table
        :config='tableConfig'
        :tableData='tableData'
        @handleSizeChange='handleSizeChange'
        @handleCurrentChange='handleCurrentChange'
        @getData='getData'></my-table>
    </el-card>
  </div>
</template>

<script>
import Data from "../test/test.js";
import myTable from "../common/table/table";
import btns from "../common/btns/btns";
export default {
  data () {
    return {
      tableConfig: {
        tableHeaders: [
          {
            fixed: true,
            prop: 'reply',
            label: '关注数',
            width: '150'
          },
          {
            prop: 'title',
            label: '标题',
            width: '300'
          },
          {
            prop: 'href',
            label: '图片',
            width: '100',
            isTemplate: true
          },
          {
            prop: 'click',
            label: '点击量',
            width: '100'
          },
          {
            fixed: true,
            prop: 'author',
            label: '创建者',
            width: '100'
          },
          {
            prop: 'avatar',
            label: '头像',
            width: '100',
            isTemplate: true
          },
          {
            prop: 'lastTime',
            label: '最后登录时间',
            width: '200'
          }
        ],
        requestData: {
          page: 1,
          size: 10
        }
      },
      tableData: [],
      retailTraderBtns: [
        {
          title: '新建分销商',
          icon: require('../../assets/images/common/icon/ag-add.png'),
          clickName: 'createRetailTrader'
        },
        {
          title: '编辑分销商',
          icon: require('../../assets/images/common/icon/ag-edit.png'),
          clickName: 'editRetailTrader'
        },
        {
          title: '统计分销商',
          icon: require('../../assets/images/common/icon/shezhixuhao.png'),
          clickName: 'countRetailTrader'
        }
      ]
    };
  },
  methods: {
    getData () {
      this.tableData = Data.data.slice(0, 10);
    },
    createRetailTrader () {
      console.log('新建分销商');
    },
    editRetailTrader () {
      console.log('编辑分销商');
    },
    countRetailTrader () {
      console.log('统计分销商');
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components: {
    myTable,
    btns
  }
};
</script>

<style scoped>
</style>
