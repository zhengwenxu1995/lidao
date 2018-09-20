<template>
    <div class="comment-cont">
    <el-card class="btn-box">
      <btns :btns = 'commentBtns'
    @by="by"
    @noBy="noBy"
    @sorSet="sorSet"
    @resInfro="resInfro"
    @viewUserInfro="viewUserInfro"
      ></btns>
    </el-card>

    <el-card class="box-card">
      <div slot="header">
          <span class="Sort">排序</span><el-select v-model="value" placeholder="序号">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <span class="status">状态</span><el-select v-model="values" placeholder="状态">
            <el-option
            v-for="item in optionss"
            :key="item.value"
            :label="item.label"
            :values="item.value">
            </el-option>
        </el-select>
        <div class="serch">
            <el-input  placeholder="请输入内容" class="search-frame"></el-input><el-button type="primary">搜索</el-button>
        </div>
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
import btns from "../common/btns/btns.vue";
import Data from "../test/test.js";
import myTable from "../common/table/table";
    export default {
        data(){
            return{
                value:"",
                values:"",
                tableConfig: {
                    tableHeaders: [
                    {
                        prop: 'number',
                        label: '编号',
                        width: '150'
                    },
                    {
                        prop: 'date',
                        label: '评论时间',
                        width: '200'
                    },
                    {
                        prop: 'title',
                        label: '评论标题',
                        width: '200',
                        
                    },
                    {
                        prop: 'content',
                        label: '评论内容',
                        width: '300'
                    },
                    {
                        prop: 'grade',
                        label: '评论等级',
                        width: '100'
                    },
                    {
                        prop: 'status',
                        label: '审核状态',
                        width: '100',
                        
                    },
                    {
                        prop: 'resourceName',
                        label: '资源名称',
                        width: '200'
                    }
                ],
                requestData: {
                page: 1,
                size: 10
                }
            },
            tableData: [],
            //下拉框
            options:[
                {
                    label:"你好sw",
                    value:"你好a"
                }
            ],
            optionss:[
                {
                    label:"你好ss",
                    value:"你好dd"
                }
            ],
            //按钮
            commentBtns: [
            {
            title: '通过',
            icon: require('../../assets/images/common/icon/tongguo.png'),
            clickName: 'by'
            },
            {
            title: '不通过',
            icon: require('../../assets/images/pd/btongguo.png'),
            clickName: 'noBy'
            },
            {
            title: '排序设置',
            icon: require('../../assets/images/pd/shezhixuhao.png'),
            clickName: 'sorSet'
            },
            {
            title: '查看资源信息',
            icon: require('../../assets/images/pd/chakanziyuan.png'),
            clickName: 'resInfro'
            },
            {
            title: '查看用户信息',
            icon: require('../../assets/images/pd/chakanyonghu.png'),
            clickName: 'viewUserInfro'
            }
        ]
            }
        },
        components:{
            btns,
            myTable
        },
        methods:{
            //通过
            by() {
                console.log("通过");
            },
            //不通过
            noBy() {
                console.log("通过");
            },
            //排序设置
            sorSet() {
                console.log("排序设置");
            },
            //查看资源信息
            resInfro() {
                console.log("查看资源信息");
            },
             //查看用户信息
            viewUserInfro() {
                console.log("查看用户信息");
            },
            handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            },
            getData () {
                this.tableData = Data.data.slice(0, 10);
            }
        }
    }
</script>

<style scoped>
.Sort{
    font-size: 16px;
    color: #333;
    padding-right:10px; 
}
.status{
    font-size: 16px;
    color: #333;
    padding:0 10px; 
}
.search-frame{
    width: 300px;
}
.serch{
    float: right;
    padding-right: 20px;
}
</style>
