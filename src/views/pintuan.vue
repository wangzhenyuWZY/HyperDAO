<template>
  <div>
    <!-- 商品列表 -->
    <ul>
      <li>
        <!-- 商品海报 -->
        <img :src="require('../img/group/hb1.jpg')" width="100%" />
        <div class="name bg-fff">
          <p class="f15 lh15 ml-15 pt-10 black">柳州鲜香螺蛳粉 300g*1</p>
          <p class="f13 gray lh15 ml-15 mt-5">传统制粉手艺 甄选多重原料 地道广西风味</p>
          <div class="flex jc-sb fcc mt-10">
            <p class="redd ml-15">
              <span>&yen;13</span>
              <s class="f12 gray">原价&yen;15.9</s>
            </p>
            <div class="fg1 tx mr-20">
              <img :src="require('../img/group/tx1.jpg')" class="head list" />
              <img :src="require('../img/group/tx2.jpg')" class="head" />
            </div>
            <button class="buttom red fff f14 mr-10">去拼单</button>
          </div>
        </div>
      </li>

      <!-- 商品介绍 -->
      <li class="mt-10">
        <!-- 商品海报 -->
        <img :src="require('../img/group/hb2.jpg')" width="100%" />
        <div class="name bg-fff">
          <p class="f15 lh15 ml-15 pt-10 black">雅诗兰黛 净颜透澈卸妆乳</p>
          <p class="f13 gray lh15 ml-10 mt-5">【香港直邮】 3*30ml/支 深层清洁卸妆 温和不刺激 净莹清爽</p>
          <div class="flex jc-sb fcc mt-10">
            <p class="redd ml-15">
              <span>&yen;64</span>
              <s class="f12 gray">原价&yen;82</s>
            </p>
            <div class="fg1 tx mr-20">
              <!-- <img src="../img/group/tx3.jpg" class="head list"> -->
              <!-- <img src="../img/group/tx4.jpg" class="head"> -->
            </div>
            <button class="buttom red fff f14 mr-10">去拼单</button>
          </div>
        </div>
      </li>
    </ul>
    <Footer page="pintuan"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer
  }
};
</script>

<style scoped lang="less">
// 本页共样式
.red {
  background-color: rgb(192, 49, 49);
}

.redd {
  color: rgb(192, 43, 49);
}

.gray {
  color: #787c82;
}

.black {
  color: #191a1b;
}

.gray2 {
  color: #bdc0c5;
}

.f13 {
  font-size: 13px;
}

.f15 {
  font-size: 15px;
}

// 商品介绍
.name {
  height: 110px;

  .head {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  .list {
    right: 140px;
    font-size: 13;
    margin-right: -13px;
  }

  .tx {
    text-align: right;
  }

  .buttom {
    height: 33px;
    width: 90px;
    border: none;
    border-radius: 3px;
    border: none;
    text-align: center;
    border-radius: 3px;
  }
}
</style>
