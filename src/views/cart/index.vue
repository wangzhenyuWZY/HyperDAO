<template>
  <div>
    <van-nav-bar title="购物车" left-text="返回" left-arrow/>
    <Footer page="cart"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer
  },

  created() {
    this.getList();
  },

  methods: {
    getList() {
      let url = '/list';
      this.$axios.get(url).then(res=> {
        console.log('res',res);
      }).catch(err=> {
        console.log('err',err);
      })
    }
  }
};
</script>

<style>
</style>
