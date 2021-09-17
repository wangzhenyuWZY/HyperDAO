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
    
  },
  beforeCreate() {
    this.$initWeb3().then((web3)=>{
      web3.eth.getChainId().then(chainId => {
        if (chainId === 56) { // bsc
          this.$store.commit('updateTheme', 'theme2')
        } else { // 137 matic/polygon
          this.$store.commit('updateTheme', 'theme1')
        }
      })
    })
  }
};
</script>

<style lang="less" scoped>

</style>



