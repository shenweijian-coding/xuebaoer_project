<template>
  <div>
    <el-row>
      <el-col :span="20">
        <el-input style="width:98%;" v-model="videoLink" placeholder="请输入视频链接"></el-input>
      </el-col>
      <el-col :span="2"> <el-button type="primary" @click="play">立即观看</el-button></el-col>
    </el-row>
    <el-row style="margin-top:30px">
    <el-col :span="23">
      <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/video.png" v-if="!playerOptions.sources[0].src" alt="">
    <video-player  v-else class="video-player vjs-custom-skin"
      style='width: 100%;height: auto'
     ref="videoPlayer"
     title="QQ1834638245"
     :playsinline="true"
     :options="playerOptions"
    ></video-player>
    </el-col>
    </el-row>
     <div class="flex">
        <div v-for="(item,i) in downOptions" :key="i" class="sourcefile" @click="downVideoFile(item)">{{item.downText}}</div>
     </div>
    <Login @beforeClose="beforeClose" :isShow="isShow"/>
  </div>
</template>

<script>
import { isURL } from '../utils/helper'
import { getToken } from '../utils/auth'
import Login from '@/components/Login'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-contrib-hls'
export default {
  components: {
    Login,
    videoPlayer
  },
  data () {
    return {
      videoLink: '',
      isShow: false,
      downOptions: [],
      urlType: '',
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        overNative: true,
        autoplay: true, // 是否自动播放
        controls: true,
        aspectRatio: '16:9', // 视频比例
        techOrder: ['html5'],
        poster: 'http://qmc5b9ctq.hb-bkt.clouddn.com/video.png', // 你的封面地址
        notSupportedMessage: '请复制播放链接至上方输入框', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        sourceOrder: true,
        flash: {
          hls: { withCredentials: false }
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            withCredentials: false,
            type: 'application/x-mpegURL',
            src: ''
          }
        ]
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    async downVideoFile (e) {
      console.log(e)
      //       'https://shida66.com/8046.html'.split('/')[3].split('.')[0]
      // 'https://shida66.com/8046_10244.html'.split('/')[3].split('.')[0].split('_')
      const vid = e.downConfig
      let sid = this.videoLink.split('/')[3].split('.')[0]
      if (sid.includes('_')) {
        sid = this.videoLink.split('/')[3].split('.')[0].split('_')[0]
      }
      const res = await this.$request({
        url: 'api/play',
        method: 'POST',
        data: {
          reqData: {
            vid,
            sid
          },
          urlType: 9
        }
      })
      console.log(res)
      if (res.res) {
        window.open(res.res)
      } else {
        this.$message('解析失败,请售后再试，或点击右方联系站长')
      }
    },
    // 点击播放按钮
    async play () {
      const url = this.videoLink
      if (!url) {
        this.$message.error('请输入播放链接哦~')
        return
      }
      if (!isURL(url)) {
        this.$message.error('请输入正确的播放链接')
        return
      }
      console.log(getToken())
      if (!getToken('openID')) {
        // 未登录  弹出登录弹窗
        this.isShow = true
        return
      }
      // 识别网站类型  返回对应网站编号
      const urlType = this.discernSiteType()
      if (!urlType) return
      this.urlType = urlType
      // 找到网站类型 开始请求数据
      // 获取必要的请求参数
      // const vidSource = await this.$request({ url: url })
      // const vid = vidSource.match(/Params.vid = '(\S*)';/)[0].replace(/[^0-9]/ig, '')
      // 链接正确 已经登录 可以向后台发送请求了
      const data = {
        reqData: { urlLink: this.videoLink },
        urlType: urlType
      }
      // 发送请求
      const res = await this.$request({
        url: 'api/play',
        method: 'post',
        data
      })
      console.log(res.res.url)
      this.playerOptions.sources[0].src = res.res.url // 播放链接
      // eslint-disable-next-line no-unused-expressions
      res.res.isShowDown ? this.getDownOption(res.res) : '' // 获取后台的配置
    },
    // 配置下载按钮
    getDownOption (options) {
      switch (this.urlType) {
        case 10: // 视达网
          this.downOptions = [{ downText: '下载素材+源文件', downConfig: options.vid }]
          break
        case 11: // 虎课网d
        default:
          break
      }
    },
    // 返回网址编号
    discernSiteType () {
      const pendingUrl = this.videoLink
      const reg = RegExp(/shida|huke/)
      if (!reg.test(pendingUrl)) {
        this.$message.error('暂不支持该网站哦~')
        return
      }
      // 验证通过  开始区分网站类型
      // eslint-disable-next-line no-unused-vars
      let urlType = ''
      if (pendingUrl.indexOf('shida')) urlType = 10
      else if (pendingUrl.indexOf('huke')) urlType = 11
      return urlType
    },
    beforeClose () {
      this.isShow = false
    }
  }
}
</script>

<style scoped>
.sourcefile{
  padding: 10px;
  background:#409eff;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.flex{
  display: flex;
  justify-content: center;
}
</style>
