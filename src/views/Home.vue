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
        个人信息
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

<style>
.main{
  width: 100%;
  height: 100%;
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
  background: #fff;

}
</style>
