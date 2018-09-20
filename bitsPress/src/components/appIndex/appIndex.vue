<template>
  <div id="appinfo">
    <el-container>
      <el-header style="padding:0"><my-head></my-head></el-header>
      <el-container>
        <el-aside width="320px" class="app-aside">
          <div class="agency-box">
            <div class="aside-title">
              <p class="font16">机构信息</p>
            </div>
            <div class="agency-wrapper">
              <img class="agency-icon" src="../../assets/images/com/lvs.png" alt="机构 Logo">
              <div class="agency-name">
                <span class="font16">{{agencyName}}</span>
                <i class="fa fa-pencil-square-o agency-edit"  @click="showDialogFun" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="shop-box">
            <div>
              <div class="aside-title">
                <p class="font16">购买版本</p>
              </div>
              <div class="shop-wrapper clearfix">
                <span>数字出版基础版</span>
                <el-button type="primary" class="shop-btn fr upgrade-btn" round>立刻升级</el-button>
              </div>
            </div>
            <div>
              <div class="aside-title">
                <p class="font16">有效期限</p>
              </div>
              <div class="shop-wrapper clearfix">
                <span>{{expirationDate}}</span>
                <el-button type="primary" class="shop-btn fr renew-btn" plain round>续费</el-button>
              </div>
            </div>
          </div>
          <div class="tips-box">
            <div class="tip-title">
              <p class="font16">小贴士</p>
            </div>
            <div class="tip-msg">
              <p>{{tipMsg}}</p>
            </div>
          </div>
          <div class="lc-tips">
            <p class="font16">小贴士</p>
            <p class="font16 lcs-explain">
              你知道吗，比特出版可以和DPS5数据互通，DPS5数据可以轻松在比特出版中灵活使用。只需要通过类型管理面板中建立类型之间的关联关系，即可以在新建资源的时候轻松导入DPS5数据。
            </p>
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import myHead from '@/components/common/header/header';
export default {
  data () {
    return {
      expirationDate: '2018-01-01',
      agencyName: '旅游教育出版社',
      tipMsg: '你知道吗，比特出版可以和DPS5数据互通，DPS5数据可以轻松在比特出版中灵活使用。只需要通过类型管理面板中建立类型之间的关联关系，即可以在新建资源的时候轻松导入DPS5数据。'
    };
  },
  methods: {
    showDialogFun () {
      this.appData.formdata.dialogVisible = true;
    }
  },
  components: {
    myHead
  }
};
</script>

<style scoped>
  #appinfo, .el-container{
    height: 100%;
  }

  .el-header{
    box-shadow: 0 2px 5px 0 rgba(102,102,102,0.35);
  }

  .app-aside{
    padding: 20px;
    border-right: 1px solid #dcdcdc;
  }
  /* 机构信息 */
  .agency-box{
    padding-right: 8px;
    margin-bottom: 20px;
  }

  .aside-title{
    padding-top: 9px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .agency-wrapper{
    padding: 13px 0 20px;
    border: 1px solid #dcdcdc;
    text-align: center;
  }

  .agency-icon{
    width: 88px;
    height: 88px;
    margin-bottom: 9px;
  }

  .agency-name{
    line-height: 16px;
  }

  .agency-edit{
    color: #2182f8;
    vertical-align: top;
    font-size: 18px;
    margin-left: 9px;
    cursor: pointer;
  }
  /* 购买--- 续费*/
  .shop-wrapper{
    line-height: 30px;
    font-size: 16px;
    color: #2182f8;
  }

  .shop-btn{
    height: 30px;
    width: 80px;
    padding: 0;
  }

  .upgrade-btn,.renew-btn:hover{
    background: #2182f8;
    color: #fff;
    box-sizing: border-box;
  }

  .renew-btn{
    background: #fff;
    color: #3899ec;
    border-color: #3899ec;
  }
</style>
