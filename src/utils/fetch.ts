import { message } from 'antd'
import { gettoken } from '@src/utils/index'
import Config from '../config'

export default function(config: any) {
  let query = ''
  if (!config?.method || config?.method.toLocaleLowerCase() === 'get' && config?.params) {
    const arr = []
    for(let i in config?.params) {
      config?.params[i] && arr.push(`${i}=${config?.params[i]}`)
    }
    query = '?' + arr.join('&')
  }
  const headers: any = {
    'Content-Type': 'application/json'
  }
  const tokenKey = config?.token ? 'Token ' : 'JWT '
  if (config?.auth) {
    headers['Authorization'] = ( gettoken() ? tokenKey + gettoken() : '')
  }
  return fetch(Config.baseUrl + config?.url + query, {
    method: config?.method || "GET",
    body: config?.body,
    headers: config?.headers || headers
  }).then( async res => {
    let data: any = {}
    try { 
      data = await res.json()
    } catch (e) {}
    if (res.status >= 100 && res.status < 400) {
      return {
        status: res.status,
        data
      }
    } else {
      let msg = ''
      try {
        if (data?.detail) {
          msg = data?.detail
        } else if (typeof data === 'object' && data !== null) {
          for(let i in data) {
            msg += data[i][0] + ';'
          }
        }
        config?.output && msg && message.error(msg)
      } catch (e) {}
      return Promise.reject(data)
    }
  })
}