import { observable, action, computed } from "mobx"
// @ts-ignore
import { BaseStore, getOrCreateStore } from "next-mobx-wrapper"

import JSCookie from 'js-cookie'

export class GlobalStore extends BaseStore {
  @observable userInfo = {
    username: '',
    email: '',
    id: '',
    auth_token: '',
    theme: 'light',
    notify: false
  }

  @observable theme = 'light'

  @computed get userName() {
    try {
      return (
        this.userInfo.username || JSCookie.get("user-info") && JSON.parse(JSCookie.get("user-info") as string)['username']
      )
    } catch {
      return ""
    }
  }

  @action.bound
  setUserInfo(userInfo: any) {
    this.userInfo = JSON.parse(JSON.stringify(userInfo))
    JSCookie.set('user-info', JSON.stringify(userInfo))
  }

  @action.bound
  setTheme(theme: any) {
    this.theme = theme
  }

  @action.bound
  getUserInfo() {
    const userInfo = JSCookie.get("user-info")
    if (userInfo) {
      try {
        const USER_INNFO = JSON.parse(userInfo)
        if (!USER_INNFO.theme) {
          USER_INNFO.theme = 'light'
        }
        this.userInfo = USER_INNFO
      } catch {
        this.userInfo = { username: '', email: '', id: '', auth_token: '', theme: 'night', notify: false }
      }
    }
  }
  @action.bound
  logOut() {
    JSCookie.set('user-info', JSON.stringify({}))
  }
  @computed get _theme() {
    return this.theme
  }
}

export const getGlobalStore = getOrCreateStore("globalStore", GlobalStore)
