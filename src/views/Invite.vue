<template>
  <div>
    <NavBar :activeIndex="activeIndex"/>
    <!-- 自己的链接区域 -->
    <div class="top-mine-info">
      <!-- <div class="invite-tiitle">复制下方文字分享到设计QQ群，QQ空间、微信群、朋友圈、微博、贴吧、等社交平台，通过您的链接每成功注册1人，您即可获得10天VIP，被邀请者也可获得3天VIP。1天内成功邀请注册≥25人，您即可获取终身VIP奖励。</div> -->
      <!-- 表格区域 -->
      <div>
        <!-- <table class="table-title">
          <thead>
            <tr>
              <td>类别</td>
              <td>类别</td>
              <td>邀请人数(个)</td>
            </tr>
          </thead>
        </table>
        <table>
          <thead>
            <tr>
              <td>1</td>
              <td>普通版(登录获得)</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>白金赞助版</td>
              <td>18</td>
            </tr>
            <tr>
              <td>3</td>
              <td>黄金赞助版</td>
              <td>44</td>
            </tr>
          </thead>
        </table> -->
      </div>
    <div class="bottom-mine-url">
        <div class="invite-mine-url">学宝儿素材解析免费送素材下载虎课网观看{{inviteCode}}登录就能下载素材观看视达虎课，不用钱！</div>
      <div class="invite-copy-btn">复制分享</div>
    </div>
    </div>
    <!-- 获取区域 -->
    <div>获奖区域</div>
    <Usebtn />
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
import Usebtn from '@/components/Usebtn'
export default {
  components: { NavBar, Usebtn },
  data () {
    return {
      activeIndex: 'invite',
      inviteCode: '12345'
    }
  }
}
</script>

<style scoped>
.top-mine-info{
  width: 67%;
  background: #fff;
  margin: 14px auto;
  padding: 30px 100px;
}
.invite-tiitle{
  font-size: 16px;
  text-align: left;
}
.invite-mine-url{
  background: #fafafa;
  padding: 16px 20px;
  width: 76%;
  border: 1px solid #4e8df6;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  color: #4e8df6;
}
.bottom-mine-url{
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  text-align: left;
}
.invite-copy-btn{
  width: 140px;
  height: 50px;
  background: #4e8df6;
  box-shadow: 0 2px 4px #4e8df6;
  border-radius: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
}
table{
  width: 100%;
  border-collapse: collapse;
}
.table-title{
  font-weight: bold;
}
tr{
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  /* text-align: center; */
}
td{
  width: 220px;
}
</style>
