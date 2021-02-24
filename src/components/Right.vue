<template>
  <div>
    <!-- 联系方式 -->
    <div class="right-contact">
      <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/wxerweima.png" alt="微信公众二维码">
    </div>
    <!-- 推销广告 -->
    <div class="right-banner">
      <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/qrcode_for_gh_7f31b0892ccf_258.jpg" alt="微信小程序二维码">
    </div>
      <!-- 二维码 -->
    <div class="right-banner">
      <div class="banner-title">注意事项</div>
      <p class="tips">1、登录就送永久视达网观看权限。<br />2、观看虎课网时,请提前安装播放插件,自行到使用教程页面下载即可。<br />3、微信公众号同样支持下载素材，扫描上方二维码或者搜索“日常学习宝”。<br />4、如下载失败请及时联系管理员，第一时间解决您的问题。</p>
    </div>
    <!-- icp备案 -->
    <div class="icp">冀ICP备20019087号-1</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
  },
  mounted () {
  }
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
.tips{
  text-align: left;
  line-height: 26px;
  font-size: 12px;
}
.right-userinfo{
  height: 120px;
  background: #fff;
  margin-bottom: 10px;
  padding: 14px;
}
.right-banner{
  background: #fff;
  margin-top: 10px;
  padding: 14px;
}
.right-banner img{
  width: 100%;
}
.right-contact{
  width: 100%;
  background: #fff;
  /* margin-bottom: 10px; */
  border-radius: 2px;
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
.flex2{
  display: flex;
}
.label{
  font-size: 14px;
  color: #8b93a7;
}
.value{
  white-space: nowrap;
  word-break: keep-all;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
.icp{
  color: #fff;
  text-align: left;
}
</style>
