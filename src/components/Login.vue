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
          <div class="title">温馨提示</div>
          <img src="../assets/vxerweima.jpg" alt="">
        </div>
        <div class="login login-right">
          <div class="title">微信扫码登录</div>
          <img :src=wxUrl alt="">
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
    async handleLogin () {
      console.log('我打开了')
      const res = await this.$store.dispatch('login')
      const { id, expiresIn, imgSrc } = res
      this.wxUrl = 'data:image/png;base64,' + imgSrc
      // 调用循环  检测用户扫码
      await this.waitToSubscribe(id, expiresIn)
      console.log('用户扫码进去成功')
      // const { imgSrc } = res
      // this.wxUrl = `data:image/png;base64,${imgSrc}`
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
          if (res.errno === 0) resolve('subscribe')
          else if (countdown-- > 0) window.QRCodeTimer = setTimeout(loop, 3000)
        }
        loop()
      })
    }
  }
}
</script>

<style scoped>
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
.login img{
  width: 200px;
}

</style>
