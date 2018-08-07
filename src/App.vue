<template>
  <div id="app">
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
html,body{
  width: 100%;
}
/* .clearfix:afetr{
  display: block;
  content: '';
  clear: both;
} */

</style>
