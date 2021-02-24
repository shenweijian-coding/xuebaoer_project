<template>
  <div>
    <NavBar/>
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
          <el-col :span="2"> <el-button class="matter-btn" type="primary" @click="downMatter" :disabled="matterText!='下载素材'">{{matterText}}</el-button></el-col>
        </el-row>
        <!-- 下载选项区域 -->
        <el-row v-if="downOptions && !copyDownUrl">
          <el-col :span="22" class="flex site-option">
            <div v-for="(item,i) in downOptions" :key="i" @click="downCurTypeFile(item.downConfig)" class="option-item png">{{item.downText}}</div>
          </el-col>
        </el-row>
        <!-- 网址复制区域 -->
        <el-row v-if="copyDownUrl" style="line-height:40px">
          <el-col :span="22">
            <div>复制下方链接到浏览器打开即可</div>
            <div>{{copyDownUrl}}</div>
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
            <el-carousel height="260px" :interval="5000">
              <el-carousel-item v-for="(item, i) in bannerList" :key="i">
                <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=1bPHq4DhOFKvBann4a3ZG1fqBYfxqK5X&noverify=0">
                  <img :src="item.imgUrl" alt="联系QQ1834638245">
                </a>
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
    <Usebtn />
  </div>
</template>

<script>
import NavBar from '@/views/NavBar'
import Right from '@/components/Right'
import { isURL } from '../utils/helper'
import { getToken } from '../utils/auth'
import Login from '../components/Login.vue'
import Usebtn from '@/components/Usebtn'
export default {
  components: { NavBar, Right, Login, Usebtn },
  data () {
    return {
      matterLink: '', // 用户输入的素材链接
      isShow: false, // 登录页显示
      matterText: '下载素材',
      reqData: {}, // 发送请求的对象
      urlType: '', // 网站的类型
      downloadFile: '',
      copyDownUrl: '', // 熊猫办公
      downOptions: [],
      bannerList: [{
        imgUrl: 'https://yuanxiaoshen.com/wp-content/uploads/2021/02/banner1.jpg'
      }],
      siteArray: [ // 要展示的网站数组
        {
          webName: '千图网',
          webUrl: 'https://www.58pic.com/',
          isToll: true
        },
        {
          webName: '千库网',
          webUrl: 'https://588ku.com/',
          isToll: true
        },
        {
          webName: '包图网',
          webUrl: 'https://ibaotu.com/',
          isToll: true
        },
        {
          webName: '摄图网',
          webUrl: 'https://699pic.com/',
          isToll: true
        },
        {
          webName: '昵图网',
          webUrl: 'http://www.nipic.com/',
          isToll: true
        },
        {
          webName: '觅知网',
          webUrl: 'https://www.51miz.com/',
          isToll: true
        },
        {
          webName: '90设计',
          webUrl: 'http://90sheji.com/',
          isToll: true
        },
        {
          webName: '熊猫办公',
          webUrl: 'https://www.tukuppt.com/',
          isToll: true
        },
        {
          webName: '众图网',
          webUrl: 'https://www.ztupic.com/',
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
        },
        {
          webName: '待上新',
          webUrl: '',
          isToll: true
        }
      ]
    }
  },
  created () {
  },
  methods: {
    // 发送请求
    async downCurTypeFile (e) {
      if (this.urlType === 23 || this.urlType === 16 || this.urlType === 24 || this.urlType === 21) {
        this.reqData.a = e
      }
      if (this.urlType === 15) {
        this.reqData = e
      }
      if (this.urlType === 12 || this.urlType === 18) {
        this.reqData = { urlLink: this.matterLink }
      }
      if (this.urlType === 13) {
        if (e.includes('http')) {
          window.open(e)
          return
        } else {
          this.reqData = { urlLink: this.matterLink, code: e }
        }
      }
      // 发送请求
      let res = ''
      if (this.urlType === 16) {
        res = await this.$request({
          url: 'api/nitu',
          method: 'post',
          data: {
            ...this.reqData
          }
        })
      } else {
        res = await this.$request({
          url: 'api/matter',
          method: 'post',
          data: {
            reqData: this.reqData,
            urlType: this.urlType
          }
        })
      }
      if (JSON.stringify(res.url) !== '{}') {
        // this.handleIsDisabled()
        if (res.code !== 1005) {
          this.$message({
            message: res.msg,
            type: 'warning'
          })
          return
        }
        if (this.urlType === 19 || this.urlType === 20) {
          this.copyDownUrl = res.url
          return
        }
        if (this.urlType === 18 || this.urlType === 12) {
          window.open(res.url['立即下载'])
          return
        }
        window.open(res.url)
      } else {
        this.$message({ message: '解析失败,请售后再试，或点击右方联系站长', type: 'warning' })
      }
    },
    // 获取后台配置按钮信息
    async getOptionBtnFromNode () {
      const btnOptions = await this.$request({
        url: 'api/matter',
        method: 'POST',
        data: {
          urlType: this.urlType,
          reqData: {
            urlLink: this.matterLink
          }
        }
      })
      if (btnOptions.code !== 1005) {
        this.$message({ message: btnOptions.msg })
        return
      }
      return btnOptions.url
    },
    // 点击下载按钮
    async downMatter () {
      this.copyDownUrl = ''
      const url = this.matterLink
      if (!url) {
        this.$message.error('请输入素材链接哦~')
        return
      }
      if (!isURL(url)) {
        this.$message.error('请输入正确的素材链接')
        return
      }
      if (url.includes('down')) {
        this.$message.error('请复制该素材主页面链接,不要点击下载按钮')
        return
      }
      if (!getToken('userId')) {
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
    async getDownOption () {
      const linkArrData = this.matterLink.split('/') // 先分割成数组
      let optionsType = ''
      let p = ''
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
        case 23: // 觅元素
          if (linkArrData[3] === 'bg') {
            // eslint-disable-next-line no-const-assign
            this.downOptions = [{ downText: '下载jpg', downConfig: 'bdown' }, { downText: '下载psd', downConfig: 'bdownPsd' }]
          } else if (linkArrData[3] === 'sc') {
            // eslint-disable-next-line no-const-assign
            this.downOptions = [{ downText: '下载png', downConfig: 'down' }, { downText: '下载psd', downConfig: 'downPsd' }]
          }
          this.reqData.d = linkArrData[4].split('.')[0] // 将下载id放到请求体
          break
        case 12: // 千图
          this.downOptions = [{ downText: '立即下载', downConfig: '' }]
          break
        case 20:// 图克巴巴
          this.downOptions = [{ downText: '下载文件', downConfig: '' }]
          this.reqData.d = linkArrData[4].split('.')[0]
          break
        case 16:
          this.downOptions = [{ downText: '推荐通道', downConfig: '6' }, { downText: '电信通道', downConfig: '2' }, { downText: '联通网通', downConfig: '5' }]
          this.reqData.d = linkArrData[4].split('.')[0]
          break
        case 17:
          this.downOptions = [{ downText: '立即下载', downConfig: '' }]
          this.reqData.d = linkArrData[4].split('.')[0]
          break
        case 19:
          this.downOptions = [{ downText: '立即下载', downConfig: '' }]
          this.reqData.d = linkArrData[4].split('.')[0]
          break
        case 14: // 包图
          this.downOptions = [{ downText: '立即下载', downConfig: '' }]
          this.reqData.d = linkArrData[4].split('.')[0]
          break
        case 15: // 摄图
          optionsType = await this.getOptionBtnFromNode()
          p = linkArrData[3].split('.')[0].split('-')[1]
          if (optionsType === 1) {
            this.downOptions = [{ downText: '最大尺寸', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 0, f: 3 } }, { downText: 'banner配图', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 0, f: 4 } }, { downText: '微信配图', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 0, f: 2 } }]
          } else if (optionsType === 2) {
            this.downOptions = [{ downText: '最大尺寸', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 0, f: 3 } }, { downText: 'banner配图', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 0, f: 4 } }, { downText: '微信配图', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 0, f: 2 } }, { downText: '源文件', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 0, f: 1 } }]
          } else if (optionsType === 3) {
            this.downOptions = [{ downText: 'gif动图', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 956, f: 3 } }, { downText: '源文件', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 956, f: 1 } }]
          } else if (optionsType === 4) {
            this.downOptions = [{ downText: '最大尺寸', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 887, f: 3 } }, { downText: 'banner配图', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 887, f: 4 } }, { downText: '微信配图', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 887, f: 2 } }, { downText: '源文件', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 887, f: 1 } }]
          } else if (optionsType === 5) {
            this.downOptions = [{ downText: '立即下载', downConfig: { urlLink: 'download/getDownloadUrl', p, b: 0, t: 23, f: '' } }]
          } else if (optionsType === 6) {
            this.downOptions = [{ downText: 'jpg原图', downConfig: { urlLink: 'newdownload/design', p, b: 0, t: 0, f: 5 } }, { downText: 'PSD源文件', downConfig: { urlLink: 'newdownload/design', p, b: 0, t: 0, f: 1 } }]
          } else if (optionsType === 7) {
            this.downOptions = [{ downText: 'png下载', downConfig: { urlLink: 'newdownload/yuansu', p, b: 0, t: 34, f: 3 } }, { downText: '源文件下载', downConfig: { urlLink: 'newdownload/yuansu', p, b: 0, t: 34, f: 1 } }]
          } else if (optionsType === 8) {
            this.downOptions = [{ downText: '预览文件下载', downConfig: { urlLink: `download/video?id=${p}`, p, b: 0, t: 0, f: 6 } }, { downText: '源文件下载', downConfig: { urlLink: `download/video?id=${p}`, p, b: 0, t: 0, f: 7 } }]
          } else if (optionsType === 9) {
            this.downOptions = [{ downText: '音乐下载', downConfig: { urlLink: 'music/download/', p, b: 0, t: 0, f: 0 } }]
          } else if (optionsType === 10) {
            this.downOptions = [{ downText: '手机海报', downConfig: { urlLink: 'music/download', p, b: 0, t: 0, f: 9 } }, { downText: '公众号封面', downConfig: { urlLink: 'music/download', p, b: 0, t: 0, f: 8 } }, { downText: '手机banner', downConfig: { urlLink: 'music/download', p, b: 0, t: 0, f: 7 } }, { downText: '公众号头图', downConfig: { urlLink: 'music/download', p, b: 0, t: 0, f: 6 } }, { downText: '源文件', downConfig: { urlLink: 'music/download', p, b: 0, t: 0, f: 1 } }]
          }
          break
        case 24: // 觅知
          this.reqData.d = linkArrData[4].split('.')[0]
          if (linkArrData[3] === 'sucai') {
            this.downOptions = [{ downText: '下载图片文件', downConfig: { a: 17, f: 'image' } }, { downText: '下载源文件', downConfig: { a: 17, f: 'source' } }]
          } else if (linkArrData[3] === 'ppt') {
            this.downOptions = [{ downText: '下载PPT', downConfig: { a: 9, f: '' } }]
          } else if (linkArrData[3] === 'muban') {
            this.downOptions = [{ downText: '下载模板', downConfig: { a: 18, f: '' } }]
          } else if (linkArrData[3] === 'tupian') {
            this.downOptions = [{ downText: '图片文件', downConfig: { a: 3, f: '' } }]
          } else if (linkArrData[3] === 'fonts') {
            return this.$message.error('暂不支持觅知字体')
            // this.downOptions = [{ downText: '下载字体', downConfig: { a: 19, f: '' } }]
          } else if (linkArrData[3] === 'shipin') {
            this.downOptions = [{ downText: '视频mp4', downConfig: { a: 5, f: 2 } }, { downText: '视频源文件', downConfig: { a: 5, f: '' } }]
          } else if (linkArrData[3] === 'wendang') {
            this.downOptions = [{ downText: '下载文档', downConfig: { a: 10, f: '' } }]
          } else if (linkArrData[3] === 'shouchaobao') {
            this.downOptions = [{ downText: '下载手抄报', downConfig: { a: 8, f: '' } }]
          } else if (linkArrData[3] === 'biaoge') {
            this.downOptions = [{ downText: '下载excel', downConfig: { a: 11, f: '' } }]
          } else if (linkArrData[3] === 'sound') {
            this.downOptions = [{ downText: '下载mp3', downConfig: { a: 21, f: 1 } }, { downText: '下载wav', downConfig: { a: 21, f: '' } }]
          } else if (linkArrData[3] === 'dianshang') {
            this.downOptions = [{ downText: '下载文件', downConfig: { a: 22, f: '' } }]
          }
          break
        case 22: // 我图
          this.downOptions = [{ downText: '下载文件', downConfig: '' }]
          this.reqData.d = linkArrData[3].split('.')[0].split('_')[1]
          break
        case 21: // 图精灵 需要复制链接
          this.downOptions = [{ downText: '图片文件', downConfig: 1 }, { downText: 'PSD文件', downConfig: 2 }]
          this.reqData.d = linkArrData[4].split('.')[0]
          break
        case 25: // 众图
          this.downOptions = [{ downText: '下载文件', downConfig: '' }]
          this.reqData.d = linkArrData[4].split('.')[0]
          break
        case 18:
          break
        case 13:
          optionsType = await this.getOptionBtnFromNode()
          optionsType = JSON.parse(JSON.stringify(optionsType).replace(/<\/a>/g, '').replace(/#/g, ''))
          for (const i in optionsType) {
            this.downOptions.push({ downText: i, downConfig: optionsType[i] })
          }
          break
        default:
          break
      }
    },
    // 取出网站对应编号
    discernSiteType () {
      const pendingUrl = this.matterLink
      const reg = RegExp(/58pic|616pic|588ku|ztupic|ibaotu|699pic|nipic|90sheji|tukuppt|16pic|tuke|51yuansu|ooopic|51miz/)
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
        urlType = 21
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
      } else if (pendingUrl.indexOf('51miz') !== -1) {
        urlType = 24
      } else if (pendingUrl.indexOf('ztupic') !== -1) {
        urlType = 25
      }
      return urlType
    },
    beforeClose () {
      this.isShow = false
    },
    // 播放按钮禁用
    handleIsDisabled () {
      let time = 100
      const playTimmer = setInterval(() => {
        this.matterText = time + 's'
        time--
        if (time < 0) {
          this.matterText = '下载素材'
          clearInterval(playTimmer)
        }
      }, 1000)
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
  margin-top: 10px;
}
.site-item{
  border: 1px solid #eef3f7;
  padding: 10px;
  width: 180px;
  color: #807d7d;
  font-size: 14px;
}
.site-item a:hover{
  /* color: #409eff !important; */
  color: #000;
  text-decoration: underline;
}
.matter-btn{
  width: 100px;
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
  margin-top: 10px;
}
.option-item{
  /* width: 60px; */
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
