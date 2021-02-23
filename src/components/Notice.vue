<template>
  <div>
    <el-dialog
  title="公告弹窗"
  :visible.sync="isShowNotice"
  width="30%"
  center>
  <span>{{dialogInfo}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="clickIsShowNotice">朕已知悉</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogInfo: '',
      isShowNotice: false
    }
  },
  computed: {
  },
  created () {
    this.getHomeInfo()
  },
  methods: {
    // 获取首页相关信息
    async getHomeInfo () {
      const res = await this.$request({ url: 'api/info' })
      this.dialogInfo = res.info.dialogInfo
      this.isShowNotice = res.info.isShowDislog
    },
    clickIsShowNotice () {
      this.isShowNotice = false
    }
  }
}
</script>

<style>

</style>
