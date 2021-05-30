<template>
  <div>
    <NavBar :curNavName="curNavName"/>
    <div class="pay-top-info">
      <div class="title">👍赞助成功，对应权限即刻到账。有任何问题及时联系右下方，不用不好意思哈~👍</div>
      <!-- <div class="title">·普通版(登录即可获得)·</div>
      <div>视达网播放权限(涵盖课堂素材)+部分网站素材解析。👍</div>
      <div class="title">·赞助版(赞助后获得)·</div>
      <div>1.赞助完成后,对应权限即可自动生效。👍</div>
      <div>2.自助赞助目前仅支持支付宝赞助,如需其他通道请联系右下方。👍</div>
      <div>3.自行选择赞助套餐,有任何问题随时联系右下方,随时解决。👍</div>
      <div>4.关注公众号,每周不定时发送免费发放赞助会员。👍</div> -->
      <!-- 付款 -->
      <div class="pay-con">
          <el-table
    :data="payData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="payType"
      width="140"
      label="赞助种类">
      <template slot-scope="scope">
        <div class="flex">
          <div>{{scope.row.payType}}</div>
          <img v-if="scope.row.isHot" src="@/assets/rexiao.png" alt="">
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="payWeb"
      label="适用网站">
    </el-table-column>
    <el-table-column
      prop="payTimeOrNum"
      width="150"
      label="可用时间">
    </el-table-column>
    <el-table-column
      prop="payPrice"
      width="100"
      label="赞助费(元)">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handlePay(scope.row)" type="text">立即赞助</el-button>
      </template>
    </el-table-column>
  </el-table>
      </div>
      <!-- 赞助弹窗 -->
      <el-dialog
        title="请放心扫码赞助，排版可能显示错乱。"
        :visible.sync="payDialogIsShow"
        width="width"
        :before-close="payDialogBeforeClose">
        <div>
      <iframe height="400px" width="100%" :src="payUrl" frameborder="0"></iframe>
        </div>
        <div slot="footer">
          <el-button @click="payDialogIsShow = false">取消支付</el-button>
          <el-button type="primary" @click="payDialogIsShow = false">支付完成</el-button>
        </div>
      </el-dialog>
    </div>
    <Usebtn />
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
import Usebtn from '@/components/Usebtn'
import { getToken } from '../utils/auth'
import { mapGetters } from 'vuex'

export default {
  components: { NavBar, Usebtn },
  data () {
    return {
      payUrl: '',
      payDialogIsShow: false,
      payData: [
        {
          payType: '试用',
          payWeb: '站内所有网站(昵图虎课除外)/1次',
          payPrice: '1',
          payTimeOrNum: '无到期时间',
          isHot: false
        },
        {
          payType: '赞助一',
          payWeb: '站内所有网站(昵图虎课除外)/50次',
          payPrice: '11',
          payTimeOrNum: '无到期时间',
          isHot: true
        },
        {
          payType: '赞助二',
          payWeb: '千图、包图、摄图、千库、90设计、熊猫办公、觅元素、觅知网、众图网等',
          payPrice: '70',
          payTimeOrNum: '365天',
          isHot: true
        },
        {
          payType: '赞助三',
          payWeb: '站内所有网站(昵图虎课除外)/10次',
          payPrice: '3',
          payTimeOrNum: '无到期时间',
          isHot: true
        },
        {
          payType: '赞助四',
          payWeb: '千图、包图、摄图、千库、90设计、熊猫办公、觅元素、觅知网、众图网等',
          payPrice: '12',
          payTimeOrNum: '30天',
          isHot: true
        },
        {
          payType: '赞助五',
          payWeb: '虎课网观看(支持下载课堂文件)',
          payPrice: '30',
          payTimeOrNum: '365天',
          isHot: false
        },
        {
          payType: '赞助六',
          payWeb: '昵图网(仅支持解析昵图共享分素材,不支持人民币素材)',
          payPrice: '4',
          payTimeOrNum: '昵图1000分',
          isHot: false
        },
        {
          payType: '赞助七',
          payWeb: '昵图网(仅支持解析昵图共享分素材,不支持人民币素材)',
          payPrice: '10',
          payTimeOrNum: '昵图5000分',
          isHot: false
        }
      ],
      dialogVisible: true
    }
  },
  created () {
  },
  computed: {
    ...mapGetters([
      'curNavName'
    ])
  },
  methods: {
    // 支付弹窗
    handlePay (e) {
      const { payPrice } = e
      const userId = getToken('userId')
      if (!userId) return this.$message({ message: '请先登录' })
      this.payUrl = `https://api.xiuxiu888.com/creat_order/?id=633479&token=iQpf9WtQeQuc3iekAKIE17YqBQ2qN6zY&price=${payPrice}&pay_id=${userId}&type=1&page=1&debug=1&act=0`
      this.payDialogIsShow = true
    },
    payDialogBeforeClose () {
      this.payDialogIsShow = false
      this.payUrl = ''
    }
  }
}
</script>

<style scoped>
.pay-top-info{
  width: 80%;
  background: #fff;
  margin: 14px auto;
  min-height: 650px;
  /* text-align: left; */
}
.flex{
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.title{
  line-height: 50px;
  font-weight: bold;
}
.pay-con{
  width: 90%;
  height: 90px;
  padding: 20px;
  margin:  0 auto;
}
.pay-item{
  width: 230px;
}
.pay-img{
  width: 230px;
  height: 170px;
  border-radius: 4px;
  background: #000;
}
.pay-text{
  line-height: 20px;
  color: #000;
}
img{
  width: 30%;
}
</style>
