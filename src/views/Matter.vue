<template>
  <div>
    <NavBar :activeIndex="activeIndex"/>
    <div class="main">
    <!-- 主体布局 -->
      <div class="main-con">
        <!-- 左面部分 -->
      <div class="mian-left">
        <el-row>
          <!-- 输入网址区域 -->
          <el-col :span="20">
            <el-input style="width:98%;" v-model="matterLink" placeholder="请输入素材链接"></el-input>
          </el-col>
          <el-col :span="2"> <el-button type="primary" @click="downMatter">下载素材</el-button></el-col>
        </el-row>
        <!-- 下载选项区域 -->
        <el-row v-if="downOptions">
          <el-col :span="22" class="flex site-option">
            <div v-for="(item,i) in downOptions" :key="i" @click="downCurTypeFile(item.downConfig)" class="option-item png">{{item.downText}}</div>
          </el-col>
        </el-row>
        <!-- 网站区域 -->
        <el-row>
        <el-col :span="23">
          <div class="site-total flex">
          <div v-for="(item,i) in siteArray" :key="i" class="site-item">
            <a target="blank" :href="item.webUrl">{{item.webName}}<p class="istoll">{{item.isToll?'':'(免费)'}}</p></a>
          </div>
          </div>
        </el-col>
        </el-row>
        <!-- banner区域 -->
        <el-row style="margin-top:20px">
          <el-col :span="23">
            <el-carousel height="150px" :interval="5000">
              <el-carousel-item v-for="item in 2" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
              </el-carousel>
          </el-col>
        </el-row>
      </div>
      <!-- 右面部分 -->
      <div class="main-right">
        <Right />
      </div>
      </div>
    </div>
    <Login @beforeClose="beforeClose" :isShow="isShow"/>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
import Right from '@/components/Right'
import { isURL } from '../utils/helper'
import { getToken } from '../utils/auth'
import Login from '../components/Login.vue'
export default {
  components: { NavBar, Right, Login },
  data () {
    return {
      activeIndex: '', // tab激活
      matterLink: '', // 用户输入的素材链接
      isShow: false, // 登录页显示
      reqData: {}, // 发送请求的对象
      urlType: '', // 网站的类型
      downloadFile: '',
      downOptions: [],
      siteArray: [ // 要展示的网站数组
        {
          webName: '千图网(收费)',
          webUrl: 'https://www.58pic.com/',
          isToll: true
        },
        {
          webName: '千库网(收费)',
          webUrl: 'https://588ku.com/',
          isToll: true
        },
        {
          webName: '包图网(收费)',
          webUrl: 'https://ibaotu.com/',
          isToll: true
        },
        {
          webName: '摄图网(收费)',
          webUrl: 'https://699pic.com/',
          isToll: true
        },
        {
          webName: '昵图网(收费)',
          webUrl: 'http://www.nipic.com/',
          isToll: true
        },
        {
          webName: '90设计(收费)',
          webUrl: 'http://90sheji.com/',
          isToll: true
        },
        {
          webName: '熊猫办公(收费)',
          webUrl: 'https://www.tukuppt.com/',
          isToll: true
        },
        {
          webName: '六图网',
          webUrl: 'http://www.16pic.com/',
          isToll: false
        },
        {
          webName: '易图网',
          webUrl: 'https://ibaotu.com/',
          isToll: false
        },
        {
          webName: '图精灵',
          webUrl: 'http://616pic.com/',
          isToll: false
        },
        {
          webName: '图克巴巴',
          webUrl: 'http://www.tuke88.com/',
          isToll: false
        },
        {
          webName: '觅元素',
          webUrl: 'http://www.51yuansu.com/',
          isToll: false
        },
        {
          webName: '我图网VIP',
          webUrl: 'https://www.ooopic.com/sucaixiazai/',
          isToll: false
        }
      ]
    }
  },
  created () {
    this.activeIndex = this.$route.path.replace('/', '')
    // console.log()
  },
  methods: {
    // 发送请求
    async downCurTypeFile (e) {
      this.reqData.a = e
      // 发送请求
      const res = await this.$request({
        url: 'api/matter',
        method: 'post',
        data: {
          reqData: this.reqData,
          urlType: this.urlType
        }
      })
      if (res.res.url) {
        window.location.href = res.res.url
      } else {
        this.$message('解析失败,请售后再试，或点击右方联系站长')
      }
    },
    // 点击下载按钮
    async downMatter () {
      const url = this.matterLink
      if (!url) {
        this.$message.error('请输入素材链接哦~')
        return
      }
      if (!isURL(url)) {
        this.$message.error('请输入正确的素材链接')
        return
      }
      if (!getToken('openID')) {
        // 未登录  弹出登录弹窗
        this.isShow = true
        return
      }
      // 识别网站类型 返回编号
      const urlType = this.discernSiteType()
      if (!urlType) return
      this.urlType = urlType // 将网站类型进行保存
      // 展示下载按钮的选项
      this.getDownOption()
    },
    // 取出下载选项按钮
    getDownOption () {
      const linkArrData = this.matterLink.split('/') // 先分割成数组
      /**
       * {
       *  downText: 下载图片文件
       *  downConfig: down
       * },
       * {
       *  downText： 下载源文件
       *  downConfig: downPsd
       * }
       */
      switch (this.urlType) {
        case 23:
          if (linkArrData[3] === 'bg') {
            // eslint-disable-next-line no-const-assign
            this.downOptions = [{ downText: '下载jpg', downConfig: 'bdown' }, { downText: '下载psd', downConfig: 'bdownPsd' }]
          } else if (linkArrData[3] === 'sc') {
            // eslint-disable-next-line no-const-assign
            this.downOptions = [{ downText: '下载png', downConfig: 'down' }, { downText: '下载psd', downConfig: 'downPsd' }]
          }
          this.reqData.d = linkArrData[4].split('.')[0] // 将下载id放到请求体
          break
        case 22:
          break
        default:
          break
      }
    },
    // 取出网站对应编号
    discernSiteType () {
      const pendingUrl = this.matterLink
      const reg = RegExp(/58pic|616pic|588ku|ibaotu|699pic|nipic|90sheji|tukuppt|16pic|tuke|51yuansu|ooopic/)
      if (!reg.test(pendingUrl)) {
        this.$message.error('暂不支持该网站哦~')
        return
      }
      // 验证通过  开始区分网站类型
      // eslint-disable-next-line no-unused-vars
      let urlType = ''
      if (pendingUrl.indexOf('58pic') !== -1) {
        urlType = 12
      } else if (pendingUrl.indexOf('51yuansu') !== -1) {
        urlType = 23
      } else if (pendingUrl.indexOf('588ku') !== -1) {
        urlType = 13
      } else if (pendingUrl.indexOf('616pic') !== -1) {
        urlType = 11
      } else if (pendingUrl.indexOf('ibaotu') !== -1) {
        urlType = 14
      } else if (pendingUrl.indexOf('699pic') !== -1) {
        urlType = 15
      } else if (pendingUrl.indexOf('nipic') !== -1) {
        urlType = 16
      } else if (pendingUrl.indexOf('90sheji') !== -1) {
        urlType = 17
      } else if (pendingUrl.indexOf('tukuppt') !== -1) {
        urlType = 19
      } else if (pendingUrl.indexOf('16pic') !== -1) {
        urlType = 18
      } else if (pendingUrl.indexOf('tuke') !== -1) {
        urlType = 20
      } else if (pendingUrl.indexOf('ooopic') !== -1) {
        urlType = 22
      }
      return urlType
    },
    beforeClose () {
      this.isShow = false
    }
  }
}
</script>

<style scoped>
.flex{
  display: flex;
  justify-content: center;
}
.flex li{
  margin: 10px;
}
.site-total{
  margin-top: 20px;
}
.site-item{
  border: 1px solid #eef3f7;
  padding: 10px;
  width: 180px;
  color: #807d7d;
  font-size: 14px;
}
.site-item a{
  text-decoration: none;
  color:#807d7d ;
}
.istoll{
  color: red;
  /* font-size: 10px; */
  display: inline;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.site-option{
  margin-top: 20px;
}
.option-item{
  width: 60px;
  border-radius: 4px;
  padding: 8px;
  color: #fff;
  margin: 0 10px;
  font-size: 12px;
  cursor: pointer;
}
.png{
  background:#3dbb2b;
}
.psd{
  background: #17cedd;
}
</style>
