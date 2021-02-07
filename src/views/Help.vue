<template>
<div>
    <NavBar :activeIndex="activeIndex" />
  <div class="main-bg">
    <!-- <iframe width="100%" height="700px" src="//player.bilibili.com/player.html?aid=78516155&bvid=BV1HJ411v7HC&cid=134341515&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe> -->
    <div class="main-help">
      <div></div>
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
      activeIndex: 'help'
    }
  }
}
</script>

<style>
.main-bg{
  height: 90vh;
  width: 100%;
}
.main-help{
  width: 80%;
  height: 96%;
  background: #fff;
  margin: 0 auto;
  margin-top:16px ;
}
</style>
