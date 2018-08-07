<template>
  <div id="app" class="clearfix">
    <div class="head-container">
      <app-head></app-head>
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
  height: 100%;
  background-color: #f4f5f5;
}
.head-container{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 80px;
  line-height: 80px;
  z-index: 250; 
}
.content-container{

}
</style>
