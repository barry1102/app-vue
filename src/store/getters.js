import { getAvatar } from '@/utils/auth'
const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar || getAvatar(),
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  roleCodes: state => state.user.roles.map(item=>item.roleCode),
  permission_routes: state => state.permission.addRoutes,
  errorLogs: state => state.errorLog.logs
}
export default getters