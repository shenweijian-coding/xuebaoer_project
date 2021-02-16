<template>
  <div>
    <NavBar :activeIndex="activeIndex"/>
    <div class="my-bg pd">
    <el-tabs tab-position="left" style="height: 600px;">
    <el-tab-pane label="个人信息">
    </el-tab-pane>
    <el-tab-pane label="下载记录">配置管理</el-tab-pane>
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
      activeIndex: '',
      returnCitySN: ''
    }
  },
  created () {
    // eslint-disable-next-line no-undef
    console.log(returnCitySN.cip)
  },
  mounted () {
    // eslint-disable-next-line no-undef
    console.log(returnCitySN.cip)
  },
  methods: {}
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
