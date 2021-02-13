<template>
  <div>
    <el-dialog
  title="公告弹窗"
  :visible.sync="isShowNotice"
  width="30%"
  center>
  <span>{{dialogInfo}}</span>
  <span slot="footer" class="dialog-footer">
    <!-- <el-button type="" @click="noShowNotice">不在弹出</el-button> -->
    <el-button type="primary" @click="clickIsShowNotice">朕已知悉</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogInfo: ''
    }
  },
  computed: {
    isShowNotice: {
      get () {
        return this.$store.state.isShowNotice
      },
      set (newVal) {
        // console.log(newVal)
      }
    }
  },
  created () {
    this.getHomeInfo()
  },
  methods: {
    // 获取首页相关信息
    async getHomeInfo () {
      const res = await this.$request({ url: 'api/info' })
      this.dialogInfo = res.info
      console.log(res)
    },
    // 关闭弹窗
    clickIsShowNotice () {
      this.$store.commit('SET_NOTICE', false)
    },
    noShowNotice () {}
  }
}
</script>

<style>

</style>
