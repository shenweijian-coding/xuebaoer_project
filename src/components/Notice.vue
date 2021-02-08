<template>
  <div>
    <el-dialog
  title="公告弹窗"
  :visible.sync="isShowNotice"
  width="30%"
  center>
  <span>需要注意的是内容是默认不居中的</span>
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
  methods: {
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
