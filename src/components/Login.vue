<template>
  <div>
    <el-dialog
      title=""
      :visible.sync="isShow"
      width="44%"
      :beforeClose="beforeClose"
      >
      <div class="header">扫描登录</div>
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
</style>
