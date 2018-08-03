<template>
  <div id="app">
     <transition :name="effect">
        <router-view>
        </router-view>
     </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
      return {
          effect: 'slide-fade'
      }
  }
}
</script>

<style lang="less" scoped>
  .slide-fade-enter-active {
    transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

