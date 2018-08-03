<template>
   <div class="home-header">
      <span>欢迎使用 wksin 框架</span>
   </div>
</template>
<script>
export default {
    name: 'home'
}
</script>

<style lang='less' scoped>
  @font-color: white;
  .home-header {
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: @font-color;
    font-size: 25px;
    font-weight: lighter;
    transition: width .2s, opacity .4s;
  }
</style>
