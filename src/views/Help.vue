<template>
  <div>
    <NavBar :activeIndex="activeIndex" />
    <iframe width="100%" height="700px" src="//player.bilibili.com/player.html?aid=78516155&bvid=BV1HJ411v7HC&cid=134341515&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      activeIndex: 'help'
    }
  }
}
</script>

<style>
.video-play{
  width: 100%;
  height: 100%;
}
</style>
