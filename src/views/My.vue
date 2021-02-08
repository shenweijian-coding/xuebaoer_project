<template>
  <div>
    <NavBar :activeIndex="activeIndex"/>
    <div class="my-bg pd">
    <el-tabs tab-position="left" style="height: 600px;">
    <el-tab-pane label="个人信息">用户管理</el-tab-pane>
    <el-tab-pane label="下载记录">配置管理</el-tab-pane>
    <el-tab-pane label="充值兑换">角色管理</el-tab-pane>
    <el-tab-pane label="分享邀请">定时任务补偿</el-tab-pane>
  </el-tabs>

    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      activeIndex: ''
    }
  }
}
</script>

<style scoped>
.my-bg{
  width: 76%;
  height: 600px;
  background: #fff;
  margin: 14px auto;
}
.pd{
  padding: 30px;
}
</style>
