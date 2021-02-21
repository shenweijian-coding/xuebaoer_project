<template>
  <div>
    <el-row>
    <el-col :span="23">
      <!-- <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/video.png" v-if="!playerOptions.sources[0].src" alt=""> -->
      <div v-if="!playerOptions.sources[0].src && !hukeVideoUrl" class="no-video flex">
        <div class="video-tip">提示：视达网可直接免费观看，虎课网请提前安装播放插件。</div>
      </div>
      <div v-else>
      <video-player class="video-player vjs-custom-skin"
        style='width: 100%;height: auto'
        v-if="playerOptions.sources[0].src"
        ref="videoPlayer"
        title="QQ1834638245"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
     <iframe height="480px" v-if="hukeVideoUrl" width="100%" :src="hukeVideoUrl" frameborder="0"></iframe>
      </div>
    </el-col>
    </el-row>
     <div class="flex">
        <div v-for="(item,i) in downOptions" :key="i" class="sourcefile" @click="downVideoFile(item)">{{item.downText}}</div>
     </div>
    <el-row style="margin-top:14px">
      <el-col :span="20">
        <el-input style="width:98%;" v-model="videoLink" placeholder="请输入视频链接"></el-input>
      </el-col>
      <el-col :span="2"><el-button class="play-btn" type="primary" @click="play" :disabled="playText!=='立即观看'">{{playText}}</el-button></el-col>
    </el-row>
        <el-row class="web-options">
      <el-col :span="24">
        <ul class="flex web-site">
          目前支持:
          <li v-for="(item,i) in siteArray" :key="i"><a target="_blank" :href="item.webUrl">{{item.webName}}</a></li>
        </ul>
      </el-col>
    </el-row>
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
      playText: '立即观看',
      playDisabled: false, // 播放是否禁用
      hukeVideoUrl: '', // 虎课播放链接
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        overNative: true,
        autoplay: true, // 是否自动播放
        controls: true,
        aspectRatio: '16:9', // 视频比例
        techOrder: ['html5'],
        poster: '', // 你的封面地址
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
      },
      siteArray: [
        {
          webName: '视达网(免费)',
          webUrl: 'https://shida66.com/',
          isToll: true
        },
        {
          webName: '虎课网(赞助)',
          webUrl: 'https://huke88.com/',
          isToll: true
        },
        {
          webName: '待上新',
          webUrl: '#',
          isToll: true
        }
      ]
    }
  },
  created () {
    this.invitePeople()
  },
  mounted () {
  },
  methods: {
    // 邀请人数
    invitePeople () {
      const { code } = this.$route.query
      if (!code) {
        return 0
      }
      // 登录成功 发送请求
      this.$request({
      }).then(res => {

      })
    },
    // 下载素材文件
    async downVideoFile (e) {
      if (this.urlType === 10) {
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
        if (res.res) {
          window.open(res.res)
        } else {
          this.$message('解析失败,请售后再试，或点击右方联系站长')
        }
      } else if (this.urlType === 11) {
        const { d, type } = e.downConfig
        const res = await this.$request({
          url: 'api/play',
          method: 'POST',
          data: {
            reqData: {
              urlLink: this.videoLink,
              d,
              type
            },
            urlType: 8
          }
        })
        if (res.res) {
          window.open(res.res)
        } else {
          this.$message('解析失败,请售后再试，或点击右方联系站长')
        }
      }
    },
    // 点击播放按钮
    async play () {
      this.playerOptions.sources[0].src = ''
      const url = this.videoLink
      if (!url) {
        this.$message.error('请输入播放链接哦~')
        return
      }
      if (!isURL(url)) {
        this.$message.error('请输入正确的播放链接')
        return
      }
      if (!getToken('userId')) {
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
      // 如果是视达
      if (this.urlType === 10) {
        if (res.code !== 1005) return this.$message.info(res.msg)
        const type = res.res.url.indexOf('m3u8') !== -1 ? 'application/x-mpegURL' : ''
        this.playerOptions.sources[0].type = type
        // this.handleIsDisabled()
        this.playerOptions.sources[0].src = res.res.url // 播放链接
        // eslint-disable-next-line no-unused-expressions
        res.res.isShowDown ? this.getDownOption(res.res) : '' // 获取后台的配置
      } else if (this.urlType === 11) { // 如果是虎课网
        // 获取后台的配置
        // eslint-disable-next-line no-unused-expressions
        // res.res.isShowDown ? this.getDownOption(res.res) : ''
        if (res.code !== 1005) return this.$message.info(res.msg)
        this.getDownOption(res.res)
        // this.handleIsDisabled()
        this.hukeVideoUrl = 'chrome-extension://fmiemdpcncaapleljkbkkcljdaihmnbc/player.html#' + res.res.videoUrl
      } else {
        this.$message.error('解析失败,多次错误,请联系管理员处理~')
      }
    },
    // 配置下载按钮
    getDownOption (options) {
      switch (this.urlType) {
        case 10: // 视达网
          this.downOptions = [{ downText: '下载素材+源文件', downConfig: options.vid }]
          break
        case 11: // 虎课网d
        default:
          this.downOptions = [{ downText: '源文件', downConfig: { d: options.d, type: 1 } }, { downText: '本课素材', downConfig: { d: options.d, type: 2 } }]
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
      if (pendingUrl.includes('shida')) urlType = 10
      else if (pendingUrl.includes('huke')) urlType = 11
      return urlType
    },
    beforeClose () {
      this.isShow = false
    },
    // 播放按钮禁用
    handleIsDisabled () {
      let time = 100
      const playTimmer = setInterval(() => {
        this.playText = time + 's'
        time--
        if (time < 0) {
          this.playText = '立即观看'
          clearInterval(playTimmer)
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
.web-options{
  margin-top: 10px;
}
.web-site{
  font-size: 14px;
}
.web-site li{
  margin: 0 6px;
}
.play-btn{
  width: 100px;
}
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
.no-video{
  width: 100%;
  height: 500px;
  background: #000;
}
.video-tip{
  color: #fff;
  font-size: 16px;
}
.flex{
  display: flex;
  justify-content: center;
}
</style>
