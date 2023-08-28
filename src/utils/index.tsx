import { observer, MobXProviderContext } from "mobx-react"
import React from "react"
import JSCookie from 'js-cookie'
function useStores(name: string) {
  return React.useContext(MobXProviderContext)[name]
}
export { observer, useStores, MobXProviderContext }


export const gettoken = () => {
  let userInfo: any = {}
  try {
    userInfo = JSON.parse(JSCookie.get('user-info') as string)
  } catch (e) {
  }
  return userInfo.auth_token || ''
}

export function debounce<T>(fn: T, delay = 500): () => void {
  let timer: NodeJS.Timeout
  return function(): void {
    const args: any[] = Array.prototype.map.call(arguments, val => val);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      typeof fn === 'function' && fn.apply(null, args);
      clearTimeout(timer);
    }, delay > 0 ? delay : 500);
  };
}

export const onEnter = (e: any) => {
  return new Promise<void>((resolve, reject) => {
    if (e.keyCode === 13) {
      resolve()
    }
  })
}

// export const validateNumber = (n: any): boolean => {
//   const num = parseFloat(n);
//   return !NumisMobileber.isNaN(num) && Number.isFinite(num) && Number(n) == n;
// }

export const detectDeviceType = (): string => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ? 'Mobile': 'Desktop';


export const isMobile = (str: string) => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( str )

export const isPc = (str: string) => !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent )