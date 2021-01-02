<template>
  <div>
     <el-header height="60px">
       <!-- logo -->
       <img src="../assets/logo.png" alt="">
       <!-- 菜单 -->
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        router
        text-color="#71777c"
        active-text-color="#007fff">
        <el-menu-item index="index">视频观看</el-menu-item>
        <el-menu-item index="matter">素材下载</el-menu-item>
        <el-menu-item index="news">今日热点</el-menu-item>
        <el-menu-item index="wool">福利羊毛</el-menu-item>
        </el-menu>
       <div class="header-userinfo" v-if="name">
           <div class="header-name">
           <p>{{name}}</p>
         </div>
          <!-- 头像 -->
       <div class="headImg">
          <img  :src="avatar" alt="">
       </div>
       </div>
       <div v-else @click="login" style="cursor: pointer;">登录</div>
      </el-header>
      <Login @beforeClose="beforeClose" :isShow="isShow"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from '@/components/Login'
export default {
  components: { Login },
  data () {
    return {
      activeIndex: 'index',
      isShow: false
    }
  },
  computed: {
    ...mapGetters([
      'avatar',
      'name'
    ])
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    login () {
      this.isShow = !this.isShow
    },
    beforeClose (state) {
      this.isShow = state
    }
  }
}
</script>

<style>
.el-menu{
  min-width: 64%;
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
}
.header-name{
  font-size: 16px;
  margin-right: 20px;
}
.el-header img{
  width: 120px;
  position: relative;
}
.headImg{
  width: 42px;
  height: 42px;
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
</style>
