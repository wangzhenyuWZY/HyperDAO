<template>
  <div class="pb-60">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
.van-nav-bar__text,
.van-nav-bar .van-icon {
  color: #ff5f16;
}
.pb-60 {
  padding-bottom: 60px;
}
</style>



