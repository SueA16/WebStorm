<template>
  <el-row>
    <el-col :span="4" class="head-part">
      <div class="logo"><a href=""><img src="/src/assets/img/logo.png" alt=""></a></div>
    </el-col>
    <el-col :span="8" :offset="4">
      <el-row class="head-part">
        <el-col :span="6">
          <a href="">专业教具</a>
        </el-col>
        <el-col :span="6">
          <a href="">教师空间</a>
        </el-col>
        <el-col :span="6">
          <a href="">关于我们</a>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="4" class="head-part">
      <div>
        <el-input
            v-model="searchData"
            placeholder="搜索课程"
        >
          <template #append>
            <el-button :icon="Search"/>
          </template>
        </el-input>
      </div>
    </el-col>
    <el-col :span="4" class="head-part">
      <div style="margin-left: 100px" @click="visible=true" class="welkin">登录&nbsp;|&nbsp;注册</div>
    </el-col>
  </el-row>
  <div class="hhh">
    <el-dialog v-model="visible" width="562px" :show-close="false" :align-center="true">
      <template #header>
        <el-menu mode="horizontal" :ellipsis="false" class="my-menu" default-active="1">
          <el-menu-item index="1" class="menu-item" @click="changeVisible(0)">手机号登录</el-menu-item>
          <el-menu-item index="2" class="menu-item" @click="changeVisible(1)">邮箱登录</el-menu-item>
          <el-menu-item index="3" class="menu-item" @click="changeVisible(2)">账号注册</el-menu-item>
        </el-menu>
      </template>
      <div class="loginByPhone" v-show="visibleList[0]">
        <el-input
            v-model="input1"
            class="my-input"
            placeholder="请输入手机号"
            :prefix-icon="Search"
        />
        <el-input
            v-model="input1"
            class="my-input"
            placeholder="请输入手机号"
            :prefix-icon="Search"
        />
        <br>
        <lay-button style="width: 360px;height: 46px;margin-left: 80px;background-color: #00c758;color: white">登录</lay-button>
      </div>
      <div class="loginByEmail" v-show="visibleList[1]">222</div>
      <div class="signup" v-show="visibleList[2]">333</div>
    </el-dialog>
  </div>

</template>

<script setup>
import {ref} from 'vue'
import {Search} from '@element-plus/icons-vue'
import {ElButton, ElDialog} from 'element-plus'
const input1 = ref('')
let searchData = ref('')
const visible = ref(false)
const visibleList = ref([true, false, false])
const changeVisible = (index) => {
  for(let i=0;i<3;i++){
    visibleList.value[i] = i === index;
  }
}
</script>

<style scoped>
.hhh :deep(.el-dialog__header) {
  margin-right: 0;
}
.hhh :deep(.menu-item) {
  width: 174px;
  font-size: 20px;
  color: #999999;
}
.hhh :deep(.el-menu-item:not(.is-disabled):focus)  {
  background-color: #ffffff;
}
.hhh :deep(.el-menu-item:not(.is-disabled):hover)  {
  color: #999999;
  background-color: #ffffff;
}
.hhh :deep(.el-menu-item.is-active)  {
  color: #00c758 !important;
  border-bottom: 2px solid #00c758;
}

.logo img {
  height: 32px;
  width: 217px;
}

.head-part {
  font-size: 16px;
  font-family: 微软雅黑, 'Microsoft YaHei', serif;
  text-align: center;
  line-height: 64px;
}

.head-part a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #00c758;
}

.el-input {
  --el-input-focus-border-color: #00c758;
}
.welkin{
  cursor:pointer;
}
.welkin:hover{
  color: #00c758;
}
.my-input{
  height: 46px;
  width: 360px;
  margin-left: 80px;
  margin-bottom: 30px;
}
</style>