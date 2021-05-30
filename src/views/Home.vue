<template>
  <div>
    <!-- 导航 -->
    <NavBar :curNavName="curNavName"/>
    <div class="main">
          <!-- 主体布局 -->
      <div class="main-con">
        <!-- 左面部分 -->
      <div class="mian-left">
        <Video />
      </div>
      <!-- 右面部分 -->
      <div class="main-right">
        <Right />
      </div>
      </div>
    </div>
    <Usebtn />
    <Notice />
  </div>
</template>

<script>
import Video from './Video.vue'
import NavBar from '@/views/NavBar'
import Right from '@/components/Right'
import Usebtn from '../components/Usebtn.vue'
import Notice from '@/components/Notice'
import { mapGetters } from 'vuex'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Video, NavBar, Right, Usebtn, Notice },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'curNavName'
    ])
  },
  methods: {

  }
}
</script>

<style>
.main{
  width: 100%;
  height: 100%;
}
.main-right img{
  width: 100%;
}
.main-con{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
  margin-top: 16px;
  justify-content: space-between;
}
.mian-left{
  width: 72%;
  min-height: 300px;
  background: #ffffff;
  padding: 30px;
  overflow: hidden;
}
.main-right{
  width: 20%;
  min-height: 300px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
