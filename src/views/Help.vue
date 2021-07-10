<template>
  <div>
    <NavBar :curNavName="curNavName"/>
    <div class="main-bg">
      <div class="main-help">
          <div class="title">网站使用说明(使用本站必读)</div>
            <div>本站所有服务均由私人VIP账号提供,（若您经济允许推荐自行开通官方会员支持正版,谢谢合作）</div>
            <div>作者本人开发本站仅供学习技术之用。网站的正常运行需要作者花费精力与成本(服务器、会员账号),由于本人还是学生,并没有具体的收入来源。</div>
            <div>所以在我能力范围内开放部分网站供大家免费使用,可赞助我获取其他使用权限(服务器、网站账号的相关成本费用,毕竟免费的东西不长久么👍)</div>
          <div class="title">虎课网使用教程(观看虎课必读)</div>
            <h3>windows用户</h3>
            <div>将播放插件安装到自己的浏览器即可</div>
            <div><a href="https://wwa.lanzoui.com/iO63Alrztwj" target="_blank">crx文件(点我下载)</a></div>
            <div><a href="https://wwa.lanzoui.com/i7vktlrzttg" target="_blank">zip文件(点我下载)</a></div>
            <h3>Mac用户</h3>
            <div>Mac用户无需安装任何插件,使用自带的Safari浏览器即可自动播放。</div>
          <div class="title">素材网站使用教程(下载素材必读)</div>
            <div>所有素材网站的正确解析链接格式为素材主页的下载链接</div>
            <div>不要点下载按钮(切记)</div>
            <div>不要点下载按钮(切记)</div>
            <div>不要点下载按钮(切记)</div>
            <div>否则会出现链接格式不正确,或无法解析的情况,请知悉~</div>
            <div><img src="http://clumsybird.work/static/img/img6.jpg" alt=""></div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
  computed: {
    ...mapGetters([
      'curNavName'
    ])
  }
}
</script>

<style scopedx>
.main-bg {
  width: 100%;
}
.main-help {
  width: 74%;
  background: #fff;
  margin: 0 auto;
  margin-top: 16px;
  padding: 30px;
  text-align: left;
}
div{
  font-size: 14px;
  line-height: 28px;
}
a{
  color: blue;
}
.title{
  font-size: 22px;
}
.title img{
  width: 60%;
}
</style>
