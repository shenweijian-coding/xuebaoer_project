<template>
  <div>
  <!-- 联系方式 -->
  <div class="right-contact">
    <!-- <ul class="contact flex"> -->
       <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/wxerweima.png" alt="微信公众二维码">
      <!-- <li><img src="../assets/qq.svg" alt="">添加QQ</li>
      <li><img src="../assets/vx.svg" alt="">添加微信</li>
    </ul> -->
  </div>
    <!-- 帮助 -->
  <!-- <div class="right-help"></div> -->
  <!-- 广告 -->
    <div class="right-banner">
       <div class="banner-title">微信公众号(欢迎关注)</div>
    <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/qrcode_for_gh_7f31b0892ccf_258.jpg" alt="">
  </div>
  <div class="right-banner">
    <div class="banner-title">小程序观看(支持PC+手机)</div>
    <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/gh_b312dc891086_258.jpg" alt="微信公众二维码">
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
ul{
    padding: 0;
}
ul li {
  list-style-type: none;
}
img{
  width: 100%;
}
.right-banner{
  /* width: 100%; */
  height: 260px;
  background: #fff;
  margin-top: 10px;
  padding: 8px;
  overflow: hidden;
}
.right-banner img{
  width: 100%;
}
.right-contact{
  width: 100%;
  height: 88px;
  background: #fff;
  /* margin-top: 14px; */
}
.right-help{
  width: 100%;
  height: 100px;
  background: #fff;
}
.right-contact ul li img{
  width: 20px;
  margin-right: 6px;
}
.right-banner .banner-title{
  font-size: 14px;
}
.right-contact ul li{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.contact{
  text-align: center;
  padding: 20px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
