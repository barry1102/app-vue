import {_axios} from '@/plugins/axios'

export function login(data) {
  return _axios({
    url: '/arthur-system/account/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return _axios({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}
export function getRoute(roleCodes=[]) {
  return _axios({
    url: '/arthur-system/role/resource/tree',
    method: 'post',
    data: { resourceTypes:['MENU'] ,roleCodes}
  })
}

export function logout() {
  return _axios({
    url: '/arthur-system/account/logout',
    method: 'post'
  })
}
