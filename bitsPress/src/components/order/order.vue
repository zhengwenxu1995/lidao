<template>
  <div class="order-page">
    <el-card class="box-card">
      <div slot="header">
          <select-search :config='selectSearchConfig'></select-search>
      </div>
      <div class="table-box">
        <my-table
        :config='tableConfig'
        :tableData='tableData'
        @handleSizeChange='handleSizeChange'
        @handleCurrentChange='handleCurrentChange'
        @getData='getData'></my-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import Data from "../test/test.js";
import selectSearch from "../common/selectSearch/selectSearch";
import myTable from "../common/table/table";
export default {
  data () {
    return {
      selectSearchConfig: {
        isSearch: true,
        isSelect: false,
        searchPlaceholder: '请输入',
        searchValue: ''
      },
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
      tableData: []
    };
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.tableData = Data.data.slice(0, 10);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components: {
    selectSearch,
    myTable
  }
};
</script>

<style scoped>

</style>
