<template>
  <div class="process" :style="{
    width: percent + '%',
    opacity: hide ? 0 : 1
  }"></div>
</template>
<script>
export default {
  data () {
    return {
      percent: 0,
      delay: 1000,
      hide: false
    }
  },
  methods: {
    start () {
      this.percent = 0
      this.hide = false

      if (this.timer) {
        clearInterval(this.timer)
      }

      this.cut = 10000 / Math.floor(300)
      this.timer = setInterval(() => {
        this.increase(this.cut * Math.random())
        if (this.percent > 98) {
          this.finish()
        }
      }, 100)
    },
    increase (num) {
      this.percent = this.percent + Math.floor(num)
    },
    finish () {
      if (this.timer) {
        clearInterval(this.timer)
      }

      this.percent = 0
      this.hide = true
    }
  }
}
</script>
<style lang="scss" scoped>
  $bg-clor: #E6A23C;
  .process {
    position: fixed;
    height: 3px;
    background: $bg-clor;
    top: 60px;
    opacity: 1;
    transition: width .2s, opacity .4s
  }
</style>


