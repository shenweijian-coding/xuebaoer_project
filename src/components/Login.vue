<template>
  <div>
    <el-dialog
      title=""
      :visible.sync="isShow"
      width="44%"
      :beforeClose="beforeClose"
      >
      <div class="header">登录</div>
      <div class="login-con">
        <div class="login login-left">
          <div class="title">加入学宝儿你可以获得</div>
          <p>1.视达网观看+课堂源文件下载(登录即可获得)</p>
          <p>2.部分素材网站下载(登录即可获得)</p>
          <p>3.虎课网观看+课堂源文件下载</p>
          <p>4.20+素材网站源文件极速下载</p>
          <p>5.每周定时优惠福利发放</p>
          <p>6.设计社群交流,结识设计同行好友</p>
          <!-- <img src="" alt="温馨提示"> -->
        </div>
        <div class="login login-right">
          <div class="title">学宝儿素材网</div>
          <div v-if="isShowLogin">
            <el-input v-model="userInfo.userName" placeholder="请输入账号"></el-input>
            <el-input v-model="userInfo.userPwd" type="password" placeholder="请输入密码"></el-input>
            <div class="btn-login flex">
              <el-button type="primary" style="width:100%" @click="handleLogin">立即登录</el-button>
            </div>
            <div class="flex" style="width:100%">
              <div class="flex" @click="getQR"><div>没有账号?</div><div class="get-id">立即获取</div></div>
              <div class="find-pwd">忘记账号或密码?</div>
          </div>
          </div>
          <div v-if="!isShowLogin">
            <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/qrcode_for_gh_7f31b0892ccf_258.jpg" alt="微信公众号">
            <div>扫码关注回复&nbsp;<strong>我要账号</strong></div>
            <div style="width:100%" class="flex2" @click="goLogin"><div>已有账号?</div><div class="get-id">立即登录</div></div>
          </div>
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
    this.userInfo.userName = localStorage.getItem('u')
    this.userInfo.userPwd = localStorage.getItem('p')
  },
  data () {
    return {
      wxUrl: '',
      isShowLogin: true,
      userInfo: {
        userName: '',
        userPwd: ''
      }
    }
  },
  methods: {
    // 登录请求
    async handleLogin () {
      if (this.userInfo.userPwd.trim() === '' || this.userInfo.userPwd.trim() === '') return this.$message({ message: '账号密码不能为空' })
      const res = await this.$store.dispatch('login', this.userInfo)
      if (res.msg === '登录成功') {
        this.$store.dispatch('getUserInfo')
        this.$message({ message: res.msg, type: 'success' })
        // 密码通过 存入local
        localStorage.setItem('u', this.userInfo.userName)
        localStorage.setItem('p', this.userInfo.userPwd)
        this.$router.go(0)
      } else {
        this.$message({ message: res.msg })
      }
      console.log(res)
    },
    beforeClose () {
      this.$emit('beforeClose', false)
      // clearTimeout(window.QRCodeTimer)
    },
    getQR () {
      this.isShowLogin = false
    },
    goLogin () {
      this.isShowLogin = true
    },
    // 处理登录
    // async handleLogin () {
    //   const res = await this.$store.dispatch('login')
    //   console.log(res)
    // const { id, expiresIn, imgSrc } = res
    // this.wxUrl = 'data:image/png;base64,' + imgSrc
    // 调用循环  检测用户扫码
    // await this.waitToSubscribe(id, expiresIn)
    // this.$store.dispatch('getUserInfo')
    // 邀请人数统计
    // const { code } = this.$route.query
    // if (code) {
    //   this.invitePeople(code)
    // }
    // this.beforeClose()
    // debugger
    // this.$router.go(0)
    // },
    // 邀请送人数
    invitePeople (code) {
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
  height: 160px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* min-height: 300px; */
}
.login{
  flex: 1;
  margin: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.login .title{
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}
.title> p{
  text-align: left;
}
.el-input{
  margin: 14px 0;
}
.login img{
  width: 200px;
}
.flex{
  display: flex;
  justify-content: space-between;
}
.flex2{
  display: flex;
  justify-content: space-evenly;
}
.btn-login{
  width: 100%;
  margin: 20px 0;
}
.get-id{
  cursor: pointer;
  color: #409eff;
}
.find-pwd{
  cursor: pointer;
}
</style>
