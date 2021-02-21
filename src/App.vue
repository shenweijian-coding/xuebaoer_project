<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Loading v-show="isLoading"/>
  </div>
</template>
<script>
import Loading from './components/Loading.vue'
import { mapState } from 'vuex'
export default {
  components: { Loading },
  computed: {
    ...mapState(['isLoading'])
  },
  created () {
    // 在页面加载时读取localStorage里的状态信息
  //   if (sessionStorage.getItem('store')) {
  //     this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
  //     sessionStorage.removeItem('store')
  //   }
  //   // 在ios中，beforeunload被弃用改只用pagehide
  //   // 在页面刷新时将vuex里的信息保存到localStorage里
  //   window.addEventListener('beforeunload', () => {
  //     sessionStorage.setItem('store', JSON.stringify(this.$store.state))
  //   })
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Source Han Sans CN;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #282828;
  padding: 0;
  height: 100vh;
}
  /* 滚动条的整体样式 */
  ::-webkit-scrollbar{
      width: 8px;
      height: 6px;
  }
  /* 滚动条的滚动轨迹 */
  ::-webkit-scrollbar-track{
      border-radius: 10px;
      background-color: rgba(0,0,0,0.05);
      /* -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.2) inset; */
  }
  /* 滚动条上面的小滑块 */
  ::-webkit-scrollbar-thumb{
      border-radius: 10px;
      /* -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2); */
      background-color: rgba(0,0,0,0.2);
  }
</style>
