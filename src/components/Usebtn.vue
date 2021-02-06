<template>
  <!-- 最左面固定区域 -->
  <div class="funBtnbox flex">
    <div class="btn-con flex2" v-if="isShowQQ" @mouseenter="enterQQ" @mouseleave="leaveQQ">
      <div>QQ号:1834638245</div>
      <div><a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=1bPHq4DhOFKvBann4a3ZG1fqBYfxqK5X&noverify=0">直接点我添加</a></div>
      <div>时间:9:00-22:00</div>
      <div>回复不及时,请见谅</div>
    </div>
    <div class="btn-con" v-if="isShowVX" @mouseenter="enterQQ" @mouseleave="leaveQQ">
      <img src="https://yuanxiaoshen.com/wp-content/uploads/2021/02/gh_b312dc891086_258.jpg" alt="">
    </div>
    <div class="btn-item flex2" @mouseenter="enterQQ" @mouseleave="leaveQQ">
      <img src="../assets/qq.svg" alt="联系QQ">
      <div>QQ</div>
    </div>
    <div class="line"></div>
    <div class="btn-item flex2" @mouseenter="enterVX" @mouseleave="leaveVX">
      <img src="../assets/vx.svg" alt="联系微信">
      <div>微信</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowQQ: false,
      isShowVX: false
    }
  },
  methods: {
    enterQQ (e) {
      this.isShowQQ = true
    },
    leaveQQ (e) {
      this.isShowQQ = false
    },
    enterVX () {
      this.isShowVX = true
    },
    leaveVX () {
      this.isShowVX = false
    },
    addMe () {
      window.open('https://qm.qq.com/cgi-bin/qm/qr?k=1bPHq4DhOFKvBann4a3ZG1fqBYfxqK5X&noverify=0')
    }
  }
}
</script>

<style scoped>
.btn-con{
  position: absolute;
  width: 160px;
  height: 100%;
  background: #fff;
  right: 58px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  border-radius: 4px;
  overflow: hidden;
}
.funBtnbox .btn-con img{
  width: 100%;
}
.funBtnbox{
  position: fixed;
  right: 0;
  bottom: 100px;
  /* height: 400px; */
  width: 58px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  border-radius: 6px;
}
.funBtnbox img{
  width: 50%;
}
.flex{
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}
.flex2{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.line{
  width: 100%;
  height: 1px;
  background: #ebebebf7;
}
.btn-item{
  height: 80px;
  width: 100%;
  padding: 0px 0;
  cursor: pointer;
}
.btn-item:hover{
  background: #f0f0f5;
}
</style>
