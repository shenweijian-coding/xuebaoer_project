import Cookies from 'js-cookie'

const Token = 'openID'

export function getToken (key) {
  return Cookies.get(key)
}

export function setToken (token) {
  return Cookies.set(Token, token)
}

export function removeToken () {
  return Cookies.remove(Token)
}
