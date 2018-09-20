<template>
  <ul class="edit-btns clearfix">
    <li class="btn-item" :class="{'btn-right':bItem.right}" v-for="(bItem, bIndex) in btns" :key="bIndex" @click="clickFun(bItem.clickName)">
      <div class="btn-icon">
        <img :src="bItem.icon" class="img-center" alt="">
      </div>
      <span>{{bItem.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    btns: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  methods: {
    clickFun (funName) {
      this.$emit(funName);
    }
  }
};
</script>

<style scoped>
  .btn-item{
    float: left;
    padding: 0 10px;
    text-align: center;
  }

  .btn-right{
    float: right;
  }

  .btn-icon{
    width: 25px;
    height: 25px;
    margin: 0 auto 12px;
    position: relative;
  }
</style>
