<template>
  <div class="select-search clearfix">
    <el-select v-model="config.selectIndex" v-if="config.isSelect" :placeholder="config.selectPlaceholder" class="select-box">
      <el-option
        v-for="item in config.selects"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="search-box fl" v-if="config.isSearch" :class="{'fr':config.isSelect}">
      <el-input
        size="small"
        :clearable = 'true'
        :placeholder="config.searchPlaceholder"
        suffix-icon="el-icon-search"
        v-model="config.searchValue" v-if='config.isSelect'>
      </el-input>
      <el-input
        size="small"
        :clearable = 'true'
        :placeholder="config.searchPlaceholder"
        prefix-icon="el-icon-search"
        v-model="config.searchValue" v-else>
      </el-input>
    </div>
    <div class="button-box fr">
      <el-button type="primary" v-if="config.isButton">{{config.btnText}}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default () {
        return {};
      }
    },
    data () {
      return {};
    },
    methods: {}
  }
};
</script>

<style scoped>
  .search-box{
    width: 366px;
  }

  .button-box .el-button{
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
  }
</style>

<style>
  .select-search .el-input__inner{
    height: 30px;
    line-height: 30px;
  }

  .select-search .el-input__icon{
    line-height: 30px;
  }
</style>
