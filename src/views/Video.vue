<template>

  <div>
    <remote-js src="https://cdn.bootcdn.net/ajax/libs/video.js/7.10.1/alt/video.core.js"></remote-js>
    <remote2-js src="https://cdn.bootcdn.net/ajax/libs/videojs-contrib-hls/5.9.0/videojs-contrib-hls.js"></remote2-js>
    <remote-css href="https://cdn.bootcdn.net/ajax/libs/video.js/7.10.1/alt/video-js-cdn.min.css"></remote-css>
    <el-row>
      <el-col :span="20">
        <el-input style="width:98%" v-model="input" placeholder="请输入视频链接"></el-input>
      </el-col>
      <el-col :span="2"> <el-button type="primary" @click="play">立即观看</el-button></el-col>
    </el-row>
    <el-row style="margin-top:30px">
    <el-col :span="20">
          <video id="play-video" width="1000" height='500' class="video-js vjs-default-skin"
      autoplay="autoplay" controls="controls" loop="loop">
      <source
        src="https://video.shida66.com/m3u8_sd/2019/08/21/0B4735B2-AA51-162D-73E1-7D4A4AFF39DC_S.m3u8"
        type="application/x-mpegURL">
    </video>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {
    'remote-js': {
      render (createElement) {
        return createElement('script', { attrs: { type: 'text/javascript', src: this.src } })
      },
      props: {
        src: { type: String, required: true }
      }
    },
    'remote2-js': {
      render (createElement) {
        return createElement('script', { attrs: { type: 'text/javascript', src: this.src } })
      },
      props: {
        src: { type: String, required: true }
      }
    },
    'remote-css': {
      render (createElement) {
        return createElement('link', { attrs: { rel: 'stylesheet', href: this.href } })
      },
      props: {
        href: { type: String, required: true }
      }
    }
  },
  data () {
    return {
      input: ''
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    play () {
      // eslint-disable-next-line no-undef
      const player = videojs('play-video', { playbackRates: [0.5, 1, 1.5, 2] })
      player.play()
    }
  }
}
</script>

<style>

</style>
