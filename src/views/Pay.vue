<template>
  <div>
    <NavBar :activeIndex="activeIndex"/>
    <div class="pay-top-info">
      <div class="title">·普通版(登录即可获得)·</div>
      <div>视达网播放权限(涵盖课堂素材)+部分网站素材解析</div>
      <div class="title">·赞助版(赞助后获得)·</div>
      <div>本站所有视频网站+素材网站下载服务(昵图网除外,昵图需要单独充值昵图分)</div>
      <div class="title">·我要赞助·</div>
      <div class="pay-text">您的专属赞助码,付款后,即可获得赞助版权限(全网下载),有问题点击右下方联系即可。</div>
      <!-- 付款 -->
      <iframe height="700px" width="100%" :src="payUrl" frameborder="0"></iframe>
    </div>
    <Usebtn />
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
import Usebtn from '@/components/Usebtn'
import { getToken } from '../utils/auth'

export default {
  components: { NavBar, Usebtn },
  data () {
    return {
      activeIndex: 'pay',
      payUrl: '',
      dialogVisible: true
    }
  },
  created () {
    this.payUrl = `https://api.xiuxiu888.com/creat_order/?id=633479&token=iQpf9WtQeQuc3iekAKIE17YqBQ2qN6zY&price=0.01&pay_id=${getToken('openID')}&type=1&page=1&debug=1&act=0`
  }
}
</script>

<style scoped>
.pay-top-info{
  width: 80%;
  background: #fff;
  margin: 14px auto;
  min-height: 500px;
  /* text-align: left; */
}
.title{
  line-height: 50px;
  font-weight: bold;
}
.pay-text{
  color: red;
  font-size: 18px;
}
</style>
