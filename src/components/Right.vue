<template>
  <div>
    <!-- 个人信息 -->
    <!-- <div class="right-userinfo">
      <div class="info flex2">
        <div class="label">版本：</div>
        <div class="value">{{yourVersions}}</div>
      </div>
      <div class="info flex2">
        <div class="label">邮箱：</div>
        <div class="value">{{yourEmail}}</div>
      </div>
      <div class="info flex2">
        <div class="label">关注时间：</div>
        <div class="value">{{attentionTime}}</div>
      </div>
      <div class="info flex2">
        <div class="label">登录IP：</div>
        <div class="value">{{loginIp}}</div>
      </div>
    </div> -->
    <!-- 联系方式 -->
    <div class="right-contact">
      <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/wxerweima.png" alt="微信公众二维码">
    </div>
    <!-- 二维码 -->
    <div class="right-banner">
      <div class="banner-title">小程序(支持PC+手机)观看</div>
      <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/wxxiaochengxu.jpg" alt="微信小程序二维码">
    </div>
    <!-- 推销广告 -->
    <div class="right-banner">
      <!-- <div class="banner-title"></div> -->
      <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/qrcode_for_gh_7f31b0892ccf_258.jpg" alt="微信小程序二维码">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginIp: '',
      wordDay: '',
      yourEmail: '1834638245@qq.com',
      attentionTime: '2021-02-14',
      yourVersions: '普通版'
    }
  },
  created () {
    // this.getWordDay()
  },
  mounted () {
    this.getUserIp()
  },
  methods: {
    getUserIp () {
      // eslint-disable-next-line no-undef
      this.loginIp = returnCitySN.cip
    }
    // async getWordDay () {
    //   const res = await this.$request({ url: 'https://api.btstu.cn/yan/api.php?charset=utf-8&encode=json' })
    //   this.wordDay = res.text
    // }
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
</style>
