import Cookies from 'js-cookie'

const Token = 'openID'

export function getToken (key) {
  console.log(key)
  console.log(Cookies.get(key))
  return Cookies.get(key)
}

export function setToken (token) {
  return Cookies.set(Token, token)
}

export function removeToken (key) {
  return Cookies.remove(key)
}
