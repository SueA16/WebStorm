<template>
  <div class="content-body">
    <div class="content-1">
      <div class="course">
        课程分类
      </div>
      <div class="shuffling">
        轮播图
      </div>
    </div>
    <div class="content-2">
      合作高校
    </div>
    <div class="content-3">
      <div style="font-size: 25px">编辑推荐</div>
      <el-row :gutter="20">
        <el-col :span="48" v-for="count in 5">
          <div class="recommended">推荐课程</div>
        </el-col>
      </el-row>
    </div>
    <div class="content-4">
      <div style="font-size: 25px">本周热门课程</div>
      <el-row :gutter="20">
        <el-col :span="8" v-for="count in 3">
          <div class="hot">本周热门课程--{{count}}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
.hot{
  height: 500px;
  background-color: aqua;
}
.recommended{
  background-color: aqua;
  height: 221px;
}
.el-col-48{
  width: 20%;
}
.content-body {
  height: 100%;
  width: 1200px;
  margin: 0 auto;

}

.content-1 {
  display: flex;
  height: 400px;
}

.course {
  height: 100%;
  width: 330px;
  border: 1px solid black;
}

.shuffling {
  height: 100%;
  width: 860px;
  margin-left: 10px;
  border: 1px solid black;
}

.content-2 {
  margin-top: 10px;
  height: 60px;
  border: 1px solid black;
}

.content-3{
  margin-top: 10px;
  height: 250px;
  border: 1px solid black;
}
.content-4{
  margin-top: 10px;
  height: 550px;
  border: 1px solid black;
}
</style>