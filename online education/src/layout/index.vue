<template>
  <div class="header">
    <Header/>
  </div>
  <div class="content">
    <Content/>
  </div>
  <div class="footer">
    <Footer/>
  </div>
</template>

<script setup>
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import Footer from './Footer/index.vue'
</script>

<style>
.header {
  width: 100%;
  height: 64px;
  background-color: white;
}
.content {
  width: 100%;
  height: 1300px;
  margin-top: 10px;
}
.footer{
  width: 100%;
  height: 100px;
  margin-top: 30px;
}
</style>