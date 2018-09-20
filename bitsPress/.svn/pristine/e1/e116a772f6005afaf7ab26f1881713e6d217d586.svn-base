<template>
  <div class="pageHeader">
    <div class="header-logo">
      <img :src="pageIcon.logo" alt="">
    </div>
    <ul class="header-nav">
      <li v-if="navState == 1" class="header-nav-item">
        <img :src="pageIcon.back" title="返回">
      </li>
      <li v-if="navState == 1" class="header-nav-item">
        <img :src="pageIcon.msg" title="消息">
      </li>
      <li class="header-nav-item">
        <img :src="pageIcon.help" title="帮助">
      </li>
      <li v-if="navState == 1" class="header-nav-item">
        <img :src="pageIcon.user" title="个人中心">
      </li>
      <li v-if="navState == 1" class="header-nav-item split"></li>
      <li v-if="navState == 1" class="header-nav-item">
        <img :src="pageIcon.close" title="关闭">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageIcon: {
        logo: require('@/assets/images/common/header/logo.png'),
        back: require('@/assets/images/common/header/back.png'),
        close: require('@/assets/images/common/header/close.png'),
        help: require('@/assets/images/common/header/help.png'),
        msg: require('@/assets/images/common/header/msg.png'),
        user: require('@/assets/images/common/header/user.png')
      },
      navState: 0 // 0 未登录，1 已登录
    };
  },
  methods: {
  },
  components: {
  }
};
</script>

<style scoped>
  .pageHeader{
    height: 66px;
    background: url("../../../assets/images/common/header/header-bj.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }

  .header-logo{
    height: 60px;
    float: left;
  }

  .header-logo img{
    width: auto;
    height: 34px;
    margin: 13px 0 13px 20px;
  }

  .header-nav{
    overflow: hidden;
    height: 60px;
    float: right;
    margin-right: 13px;
  }

  .header-nav-item{
    float: left;
    height: 100%;
    padding: 15px 7px;
  }

  .header-nav-item img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    cursor: pointer;
  }

  .header-nav-item.split{
    width: 1px;
    height: 34px;
    background: #ffffff;
    padding: 0;
    margin: 13px;
  }
</style>
