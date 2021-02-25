<template>
  <div>
    <NavBar/>
    <div class="my-bg pd">
      <el-row>
        <el-col :span="16">
          <div>更改账号密码</div>
        <div class="flex">
        <div class=""><el-input v-model="userName" placeholder="请输入账号" disabled></el-input> </div>
          <div class=""><el-input v-model="oldPwd" placeholder="请输入原密码"></el-input> </div>
          <div class=""><el-input v-model="newPwd" placeholder="请输入新密码"></el-input> </div>
          <el-button type="primary" @click="updatePwd">保存</el-button>
        </div>
        </el-col>
      </el-row>
    <el-row>
      <el-col :span="24">
      <div>你的邮箱</div>
      <el-input placeholder="请输入您的邮箱" v-model="email" style="width:40%"></el-input>
      <el-button type="primary" @click="saveEmail" style="margin-left:10px;">保存</el-button>
    </el-col>
    </el-row>
    <el-row>
    <el-col :span="24">
      <div>账号权益</div>
      <div class="user-info">
        <p>当前账号：{{memberType}}</p>
        <p>素材赞助到期时间：{{memberMatterTime}}</p>
        <p>视频赞助到期时间：{{memberVideoTime}}</p>
      </div>
    </el-col>
    </el-row>
    <div class="flex">
    <div class="table-info">
      <el-table
        :data="matterWeb"
        style="width: 100%"
        border
        height="400px">
        <el-table-column
          prop="webName"
          label="网站名称">
        </el-table-column>
        <el-table-column
          prop="dueNum"
          label="今日剩余次数">
        </el-table-column>
        <template>
        <el-table-column
          prop="scope"
          label="操作">
          <el-button type="primary" @click="toPay" size="mini">赞助</el-button>
        </el-table-column>
        </template>
      </el-table>
    </div>
    <div class="table-info">
      <el-table
        :data="videoWeb"
        style="width: 100%"
        border
        height="400px">
        <el-table-column
          prop="webName"
          label="网站名称">
        </el-table-column>
        <el-table-column
          prop="dueNum"
          label="今日剩余次数">
        </el-table-column>
        <template>
        <el-table-column
          prop="scope"
          label="操作">
          <el-button type="primary" @click="toPay" size="mini">赞助</el-button>
        </el-table-column>
        </template>
      </el-table>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import { isEmail } from '../utils/helper'
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      memberType: '',
      memberMatterTime: '',
      memberVideoTime: '',
      email: '',
      matterWeb: [{}],
      videoWeb: [{}],
      userName: '',
      oldPwd: '',
      newPwd: ''
    }
  },
  created () {
    this.getWebInfo()
  },
  mounted () {
    // eslint-disable-next-line no-undef
  },
  methods: {
    // 获取网站信息
    async getWebInfo () {
      this.userName = this.$store.state.name
      const { info } = await this.$request({
        url: 'api/userinfo'
      })
      this.email = info.email
      this.memberType = info.memberType === 1 ? '赞助版' : '免费版'
      this.memberMatterTime = info.dueTime === '2021-01-01' ? '未赞助' : info.dueTime
      this.memberVideoTime = info.videoTime === '2021-01-01' ? '未赞助' : info.videoTime
      this.matterWeb = [
        {
          webName: '总次数',
          dueNum: info.allDownNum
        },
        {
          webName: '千图网',
          dueNum: info.qiantuNum
        },
        {
          webName: '包图网',
          dueNum: info.baotuNum
        },
        {
          webName: '千库网',
          dueNum: info.qiankuNum
        },
        {
          webName: '摄图网',
          dueNum: info.shetuNum
        },
        {
          webName: '昵图网',
          dueNum: info.nitufen
        },
        {
          webName: '六图网',
          dueNum: info.liutuNum
        },
        {
          webName: '觅知网',
          dueNum: info.mizhiNum
        },
        {
          webName: '我图网',
          dueNum: info.wotuNum
        },
        {
          webName: '90设计',
          dueNum: info.sheji90Num
        },
        {
          webName: '觅元素',
          dueNum: info.miyuansuNum
        },
        {
          webName: '熊猫办公',
          dueNum: info.xiongmaoNum
        },
        {
          webName: '图克巴巴',
          dueNum: info.tukeNum
        },
        {
          webName: '众图网',
          dueNum: info.qiantuNum
        },
        {
          webName: '图精灵',
          dueNum: info.tujinglingNum
        }
      ]
      this.videoWeb = [
        {
          webName: '虎课网',
          dueNum: info.hukeNum
        },
        {
          webName: '视达网',
          dueNum: info.shidaNum
        }
      ]
    },
    // 跳转
    toPay () {
      this.$router.push('/pay')
    },
    // 保存邮箱
    async saveEmail () {
      if (!isEmail(this.email)) return this.$message({ message: '邮箱格式有误', type: 'warning' })
      const res = await this.$request({
        url: 'api/add',
        method: 'POST',
        data: { email: this.email }
      })
      this.$message({
        message: res.msg,
        type: 'success'
      })
    },
    // 更新密码
    async updatePwd () {
      if (!this.oldPwd.trim().length || !this.newPwd.trim().length) {
        return this.$message({ message: '不能为空' })
      }
      const res = await this.$request({
        url: '/api/updatepwd',
        method: 'POST',
        data: {
          oldPwd: this.oldPwd,
          newPwd: this.newPwd
        }
      })
      this.$message({
        message: res.msg,
        type: res.code === 1 ? 'success' : 'warning'
      })
      if (res.code === 1) {
        localStorage.setItem('p', this.newPwd)
      }
    }
  }
}
</script>

<style scoped>
.my-bg{
  width: 76%;
  height: 600px;
  background: #fff;
  margin: 14px auto;
  text-align: left;
}
.pd{
  padding: 30px;
}
.user-info{
  width: 96%;
  background: #ecf5ff;
  height: 40px;
  color: #66b1ff;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 4px;
}
.el-row{
  margin-bottom: 24px;
}
p{
  margin-right: 80px;
}
.table-info{
  width: 40%;
}
.flex{
  display: flex;
  width: 100%;
}
.flex2{
  display: flex;
  width: 40%;
}
.el-input{
  width: 88%;
}
</style>
