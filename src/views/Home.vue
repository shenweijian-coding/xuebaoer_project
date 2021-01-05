<template>
  <div>
    <!-- 导航 -->
    <NavBar />
    <div class="main">
          <!-- 主体布局 -->
      <div class="main-con">
        <!-- 左面部分 -->
      <div class="mian-left">
        <Video />
      </div>
      <!-- 右面部分 -->
      <div class="main-right">
        <!-- 帮助 -->
        <div class="right-help"></div>
        <!-- 广告 -->
        <div class="right-banner"></div>
        <!-- 联系方式 -->
        <div class="right-contact">
          <ul class="contact flex">
            <li><img src="../assets/qq.svg" alt="">添加QQ</li>
            <li><img src="../assets/vx.svg" alt="">添加微信</li>
          </ul>
        </div>
        <ul>
          <li><a href=""><img src="" alt=""></a></li>
        </ul>
        <ul>
          <li><a href=""><img src="" alt=""></a></li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Video from './Video.vue'
import NavBar from '@/views/NavBar'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Video, NavBar },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 100%;
}
ul{
    padding: 0;
}
ul li {
  list-style-type: none;
}
.main-right img{
  width: 100%;
}
.main-con{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
  margin-top: 16px;
  justify-content: space-between;
}
.mian-left{
  width: 71%;
  min-height: 300px;
  background: #fff;
  padding: 30px;
  overflow: hidden;
}
.main-right{
  width: 22%;
  min-height: 300px;
  /* background: #409eff; */
  /* background: #ffe366;; */
}
.right-help{
  width: 100%;
  height: 100px;
  background: #fff;
}
.right-banner{
  width: 100%;
  height: 300px;
  background: #fff;
  margin-top: 14px;
}
.right-contact{
    width: 100%;
  height: 60px;
  background: #fff;
  margin-top: 14px;
}
.right-contact ul li img{
  width: 20px;
  margin-right: 6px;
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
