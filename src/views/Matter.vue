<template>
  <div>
    <NavBar :activeIndex="activeIndex"/>
    <div class="main">
    <!-- 主体布局 -->
      <div class="main-con">
        <!-- 左面部分 -->
      <div class="mian-left">
        <el-row>
          <el-col :span="20">
            <el-input style="width:98%;" v-model="videoLink" placeholder="请输入素材链接"></el-input>
          </el-col>
          <el-col :span="2"> <el-button type="primary" @click="play">立即下载</el-button></el-col>
        </el-row>
      </div>
      <!-- 右面部分 -->
      <div class="main-right">
        <Right />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
import Right from '@/components/Right'
export default {
  components: { NavBar, Right },
  data () {
    return {
      activeIndex: ''
    }
  },
  created () {
    this.activeIndex = this.$route.path.replace('/', '')
    // console.log()
  }
}
</script>

<style>

</style>
