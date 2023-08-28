import JSCookie from 'js-cookie'
declare const analytics: any;

const getUserId = () => {
  try {
    return JSCookie.get("user-info") && JSON.parse(JSCookie.get("user-info") as string)['username']
  } catch {
    return ""
  }
}

export default (type: string, config: any) => {
  config.event && analytics[type](config.event, {
    userId: getUserId(),
    properties: config.properties || {}
  })
}