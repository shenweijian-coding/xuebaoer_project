import request from '@/utils/request'

export function login () {
  return request({
    url: 'wechat/qrcode?type=2',
    method: 'get'
  })
}

function waitToSubscribe () {
  return request({
    url: '',
    method: 'get'
  })
}

export function polling () {
  return new Promise((resolve, reject) => {
    waitToSubscribe.then(res => {
      if (res.errno !== 0) { // 这个继续进行轮询的条件，需要根据自己的需要修改
        setTimeout(() => {
          resolve(polling())
        }, 2000)
      } else {
        resolve(res)
      }
    })
  })
}
