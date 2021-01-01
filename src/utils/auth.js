import Cookies from 'js-cookie'

const Token = 'user'

export function getToken () {
  return Cookies.get(Token)
}

export function setToken (token) {
  return Cookies.set(Token, token)
}

export function removeToken () {
  return Cookies.remove(Token)
}
