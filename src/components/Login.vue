<template>
  <div>
    <el-dialog
      title=""
      :visible.sync="isShow"
      width="44%"
      :beforeClose="beforeClose"
      >
      <div class="header">扫描登录</div>
      <div class="login-con">
        <div class="login login-left">
          <div class="title">温馨提示</div>
          <img src="../assets/vxerweima.jpg" alt="">
        </div>
        <div class="login login-right">
          <div class="title">微信扫码登录</div>
          <img src="../assets/vxerweima.jpg" alt="">
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default () {}
    }
  },
  data () {
    return {
    }
  },
  methods: {
    beforeClose () {
      this.$emit('beforeClose', false)
    }
  }
}
</script>

<style scoped>
.el-dialog{
  background: #f8faff !important;
  height: 200px;
}

.header{
  width: 100%;
  height: 50px;
  background: #409eff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
.login-con{
  /* background: #f8faff; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 300px;
}
.login{
  flex: 1;
  height: 80px;
  margin: 10px;
  background: #fff;
  display: flex;
  /* justify-items: center; */
  align-items: center;
  flex-direction: column;
}
.login .title{
  font-size: 18px;
  font-weight: bold;
}
.login img{
  width: 200px;
}

</style>
