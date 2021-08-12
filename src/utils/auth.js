import { vueCookie } from '@/plugins/cookie'

const TokenKey = 'Admin-token'
const RolesKey = 'Admin-Roles'
const AvatarKey = 'Admin-Avatar'
const TenantKey = 'tenantNumber'

export function getToken() {
  return vueCookie.get(TokenKey)
}

export function setToken(token) {
  return vueCookie.set(TokenKey, token)
}
export function getRoles() {
  return vueCookie.get(RolesKey)
}
export function setRoles(roles) {
  return vueCookie.set(RolesKey, roles)
}
export function getAvatar() {
  return vueCookie.get(AvatarKey)
}

export function setAvatar(avatar) {
  return vueCookie.set(AvatarKey, avatar)
}
export function getTenant() {
  return vueCookie.get(TenantKey)
}

export function setTenant(tenant) {
  return vueCookie.set(TenantKey, tenant)
}
export function removeToken() {
  return vueCookie.remove(TokenKey)
}
export function removeRoles() {
  return vueCookie.remove(RolesKey)
}
export function removeAvatar() {
  return vueCookie.remove(AvatarKey)
}