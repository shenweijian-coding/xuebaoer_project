<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f4f5f5;
  padding: 0;
  min-height: 100vh;
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
