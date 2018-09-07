<template>
  <div id="app" class="clearfix">
    <!-- 这个容器相当于body，可以用来装页面弹窗组件等 -->
    <div class="global-component-box">
      
    </div>
    <div class="head-container">
        <div class="head-fixed-container">
          <app-head></app-head>
        </div>
    </div>
    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Head from './components/Head';
export default {
  components: {
    'app-head': Head
  }
}
</script>

<style lang="scss">
 *{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
.clearfix:after{
  display: table;
  content: ' ';
  clear: both;
}
html,body{
  width: 100%;
  background-color: #f4f5f5;
}
.head-container{
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 60px;
  line-height: 60px;
  .head-fixed-container{
    position: fixed;
    width: 100%;
    background: #fff;
    z-index: 250;
  }
}
.content-container{
  margin: 20px auto 0;
  max-width: 960px;
}
</style>
