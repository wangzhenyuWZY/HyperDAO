<template>
  <div id="app" :data-theme="theme">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'

console.log(process.env.NODE_ENV);
export default {
  name: "app",
  computed: {
    ...mapState(['theme'])
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>

</style>



