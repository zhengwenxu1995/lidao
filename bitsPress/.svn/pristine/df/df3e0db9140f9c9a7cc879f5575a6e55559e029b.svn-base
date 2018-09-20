<template>
  <div class="login">
    <pageHeader></pageHeader>
    <div class="loginBox">
      <div class="loginBox-title">
        <span>登&nbsp;&nbsp;录</span>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="loginForm">
        <el-form-item prop="userName" class="margin-bottom">
          <el-input v-model="ruleForm.userName" class="login-input" auto-complete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" class="login-input" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="remember">
          <el-checkbox v-model="ruleForm.remember">记住密码</el-checkbox>
        </el-form-item>
        <el-button type="primary" round class="submitBtn" @click="submit">登录</el-button>
      </el-form>
    </div>
    <div class="login-footer">
      <p>版权所有© 2014-2018 北京立道软件股份有限公司</p>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/components/common/header/header';
export default {
  components: {
    pageHeader
  },
  data() {
    var validateUserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: '',
        password: '',
        remember: ''
      },
      rules: {
        userName: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      }
    };
  },
  created () {
    console.log('login');
  },
  methods: {
    submit() {
      var that = this;
      console.log(that.ruleForm);
      that.$router.push({name: 'index'});
    }
  }
};
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    position: relative;
  }

  .loginBox{
    width: 630px;
    height: 510px;
    padding: 60px 135px 0 135px;
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -255px;
    margin-left: -315px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.15);
  }

  .loginBox-title{
    text-align: center;
    margin-bottom: 60px;
  }

  .loginBox-title span{
    display: inline-block;
    width: 140px;
    padding-bottom: 10px;
    border-bottom: 2px solid #2182f8;
    color: #2182f8;
    font-size: 30px;
    text-align: center;
  }

  .submitBtn{
    width: 100%;
    font-size: 16px;
    letter-spacing:6px;
    margin-top: 10px;
  }

  .login-footer{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 48px;
    line-height: 48px;
    background: #2182F8;
    font-size: 16px;
    color: #fff;
    text-align: center;
  }
</style>

<style>
  /* 重置form样式 */
  .loginForm .el-input__inner{
    border-top: none;
    border-right: none;
    border-bottom: 1px solid #dcdcdc;
    border-left: none;
    border-radius: 0;
  }

  .loginForm .el-form-item.is-success .el-input__inner{
    border-color: #2182f8;
  }

  .loginForm .margin-bottom{
    margin-bottom: 40px;
  }
</style>
