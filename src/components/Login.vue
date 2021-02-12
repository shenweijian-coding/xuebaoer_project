<template>
  <div>
    <el-dialog
    @open="handleLogin"
      title=""
      :visible.sync="isShow"
      width="44%"
      :beforeClose="beforeClose"
      >
      <div class="header">扫描登录</div>
      <div class="login-con">
        <div class="login login-left">
          <div class="title">加入学宝儿你可以获得:</div>
          <p>1.视达网免费观看+素材下载功能(登录即可获得)</p>
          <p>2.虎课网观看+视频素材下载功能</p>
          <p>3.支持20+素材网站源文件极速下载</p>
          <p>4.不定时优惠福利发放</p>
          <p>5.设计社群交流，结识设计同行好友</p>
          <!-- <img src="" alt="温馨提示"> -->
        </div>
        <div class="login login-right">
          <div class="title">微信扫码关注自动登录</div>
          <img id="wx-img" :src=wxUrl alt="微信二维码【日常学习宝】">
          <p>Tips:二维码有效期为 3分钟</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  props: {
    isShow: {
      type: Boolean,
      default () {}
    }
  },
  created () {
    console.log('我显示了')
  },
  data () {
    return {
      wxUrl: ''
    }
  },
  methods: {
    beforeClose () {
      this.$emit('beforeClose', false)
      clearTimeout(window.QRCodeTimer)
    },
    // 处理登录
    async handleLogin () {
      console.log('我打开了')
      console.log(this.$route.query)
      const res = await this.$store.dispatch('login')
      const { id, expiresIn, imgSrc } = res
      this.wxUrl = 'data:image/png;base64,' + imgSrc
      // 调用循环  检测用户扫码
      console.log('开始轮询')
      await this.waitToSubscribe(id, expiresIn)
      console.log('扫码成功, 开始从cookie获取头像昵称')
      this.$store.dispatch('getUserInfo')
      // 邀请人数统计
      const { code } = this.$route.query
      if (code) {
        this.invitePeople(code)
      }
      this.beforeClose()
      this.$router.go(0)
      console.log('用户扫码进去成功')
    },
    // 邀请送人数
    invitePeople (code) {
      console.log('我执行了', code)
    },
    // 循环请求  检测扫码
    async waitToSubscribe (id, timeout) {
      const _this = this
      let countdown = Math.ceil(timeout / 3)
      return new Promise((resolve, reject) => {
        const loop = async function () {
          const res = await _this.$request({
            url: 'wechat/check',
            method: 'get',
            params: { id }
          })
          console.log(res)
          if (!res) return
          if (res.errno === 0) resolve('扫码成功')
          else if (countdown-- > 0) window.QRCodeTimer = setTimeout(loop, 3000)
        }
        loop()
      })
    }
  }
}
</script>

<style scoped>
p{
  margin: 10px 0;
}
.el-dialog{
  background: #f8faff !important;
  height: 200px;
}

.header{
  width: 100%;
  height: 50px;
  background: #409eff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
.login-con{
  /* background: #f8faff; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 300px;
}
.login{
  flex: 1;
  height: 80px;
  margin: 10px;
  background: #fff;
  display: flex;
  /* justify-items: center; */
  align-items: center;
  flex-direction: column;
}
.login .title{
  font-size: 18px;
  font-weight: bold;
}
.title> p{
  text-align: left;
}
.login img{
  width: 200px;
}

</style>
