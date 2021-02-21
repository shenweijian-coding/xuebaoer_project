<template>
  <div>
     <el-header height="60px">
       <!-- logo -->
       <a href="#"><img src="../assets/logo.png" alt=""></a>
       <!-- 菜单 -->
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
        background-color="#fff"
        text-color="#71777c"
        active-text-color="">
        <el-menu-item index="index">视频观看</el-menu-item>
        <el-menu-item index="matter">素材下载</el-menu-item>
        <el-menu-item index="pay">获取赞助版</el-menu-item>
        <!-- <el-menu-item index="invite">邀请比赛</el-menu-item> -->
        <el-menu-item index="help">使用教程</el-menu-item>
        <!-- <el-menu-item index="about">关于本站</el-menu-item> -->
        </el-menu>
       <div @click="handleClickAvatar" class="header-userinfo" v-if="name">
           <div class="header-name">
           <p>欢迎您,{{name}}</p>
         </div>
          <!-- 头像 -->
       <div class="headImg">
          <img  :src="avatar" alt="">
       </div>
       <div v-if="isShowSetting" class="userinfo-dialog">
         <ul class="user-setting">
           <li @click="navMyInfo"> <i class="el-icon-user"></i> 个人信息</li>
           <li @click.stop="takeOut"> <i class="el-icon-switch-button"></i> 退出登录</li>
         </ul>
       </div>
       </div>
       <div v-else @click="login" class="login">登录</div>
      </el-header>
      <Login @beforeClose="beforeClose" :isShow="isShow"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from '@/components/Login'
export default {
  components: { Login },
  props: {
    activeIndex: {
      type: String,
      default () {
        return 'index'
      }
    }
  },
  data () {
    return {
      isShow: false,
      name: '',
      isShowSetting: false
    }
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  watch: {

  },
  mounted () {
    const name = this.$store.state.name
    this.name = Buffer.from(name, 'base64').toString()
  },
  methods: {
    // 跳转我的
    navMyInfo () {
      this.$router.push('/my')
    },
    handleSelect (key, keyPath) {
    },
    login () {
      this.isShow = !this.isShow
    },
    beforeClose (state) {
      this.isShow = state
    },
    handleClickAvatar () {
      this.isShowSetting = !this.isShowSetting
    },
    takeOut () {
      this.$store.dispatch('takeOut')
      this.$router.go(0)
    }
  }
}
</script>

<style scoped>
.el-menu{
  min-width: 60%;
  max-width: 62%;
}
.el-header{
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}
.header-userinfo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.userinfo-dialog ul li{
  list-style-type: none;
  font-size: 15px;
  color: #71777c;
  font-weight: 400;
  text-align: center;
  line-height: 38px;
}
.userinfo-dialog ul li:hover{
  background: #f0f0f5;
}
.user-setting{
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}
.userinfo-dialog{
  position: absolute;
  /* width: 200px; */
  height: 100px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  top: 50px;
  right: 10px;
  left: 10px;
  z-index: 10;
}
.header-name{
  font-size: 16px;
  margin-right: 20px;
  font-weight: 400;
}
.el-header img{
  width: 120px;
  position: relative;
}
.headImg{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* background: red; */
  border: 2px solid #eeeeee;
  overflow: hidden;
}
.headImg img{
  width: 100%;
}
.el-menu-item{
  border: none !important;
}
.el-menu--horizontal>.el-menu-item.is-active{
  border: none !important;
}
.el-menu.el-menu--horizontal{
  border: none !important;
}
.login{
  cursor: pointer;
  margin-left:10%;
  font-weight: normal;
  padding: 2px 14px;
  border: 1px solid #409eff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #409eff;
  font-size: 16px;
}
.login:hover{
  background: #409eff;
  color: #fff;
}
</style>
