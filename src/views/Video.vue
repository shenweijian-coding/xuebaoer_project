<template>
  <div>
    <el-row>
      <el-col :span="20">
        <el-input style="width:98%" v-model="videoLink" placeholder="请输入视频链接"></el-input>
      </el-col>
      <el-col :span="2"> <el-button type="primary" @click="play">立即观看</el-button></el-col>
    </el-row>
    <el-row style="margin-top:30px">
    <el-col :span="20">
    <video-player  class="video-player vjs-custom-skin"
      style='width: 100%;height: auto'
     ref="videoPlayer"
     title="QQ1834638245"
     :playsinline="true"
     :options="playerOptions"
    ></video-player>
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
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        overNative: true,
        autoplay: false, // 是否自动播放
        controls: true,
        aspectRatio: '16:9', // 视频比例
        techOrder: ['html5'],
        poster: '', // 你的封面地址
        notSupportedMessage: '请刷新重新获取，多次错误请联系QQ1834638245', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
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
      // if (!getToken()) {
      //   // 未登录  弹出登录弹窗
      //   this.isShow = true
      //   return
      // }
      const res = await this.$request({
        url: 'api/play',
        method: 'get'
      })

      console.log(res.res.url)
      this.playerOptions.sources[0].src = res.res.url
      // eslint-disable-next-line no-undef
      // const player = videojs('play-video', { playbackRates: [0.5, 1, 1.5, 2] })
      // player.play()
    },
    beforeClose () {
      this.isShow = false
    }
  }
}
</script>

<style>

</style>
