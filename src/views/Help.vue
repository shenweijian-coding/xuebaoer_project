<template>
  <div>
    <NavBar :activeIndex="activeIndex" />
    <div class="main-bg">
      <!-- <iframe width="100%" height="700px" src="//player.bilibili.com/player.html?aid=78516155&bvid=BV1HJ411v7HC&cid=134341515&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe> -->
      <div class="main-help">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="网站说明(使用本站必读)" name="1">
            <div>本站所有服务均由私人VIP账号提供,（若您经济允许推荐自行开通官方会员支持正版,谢谢合作）</div>
            <div>作者本人开发本站仅供学习技术之用。网站的正常运行需要作者花费精力与成本(服务器、会员账号),由于本人还是学生,并没有具体的收入来源。</div>
            <div>所以在我能力范围内开放部分网站供大家免费使用,可赞助我获取其他使用权限(服务器、网站账号的相关成本费用,毕竟免费的东西不长久么👍)</div>
            <!-- <div class="img-1">
              <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/qq_pic_merged_1612700778049.jpg" alt="微信收款码">
              <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/qq_pic_merged_1612700831638.jpg" alt="微信收款码">
            </div> -->
          </el-collapse-item>
          <el-collapse-item title="视频网站" name="2">
          </el-collapse-item>
          <el-collapse-item title="" name="3">
            本站
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      activeIndex: 'help',
      activeNames: ''
    }
  }
}
</script>

<style>
.main-bg {
  height: 90vh;
  width: 100%;
}
.main-help {
  width: 74%;
  height: 92%;
  background: #fff;
  margin: 0 auto;
  margin-top: 16px;
  padding: 30px;
}
.img-1 img{
  width: 200px;
  margin: 20px 80px;
}
</style>
