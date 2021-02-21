export function isURL (url) {
  const RegUrl = new RegExp()
  // eslint-disable-next-line no-useless-escape
  RegUrl.compile('^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$')
  if (!RegUrl.test(url)) {
    return false
  }
  return true
}
export function isEmail (email) {
  const RegEmail = new RegExp()
  RegEmail.compile('^\\s*\\w+(?:\\.{0,1}[\\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\\.[a-zA-Z]+\\s*$')
  if (!RegEmail.test(email)) {
    return false
  }
  return true
}
