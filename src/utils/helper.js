export function isURL (url) {
  const RegUrl = new RegExp()
  // eslint-disable-next-line no-useless-escape
  RegUrl.compile('^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$')
  if (!RegUrl.test(url)) {
    return false
  }
  return true
}
