import Home from '@/assets/images/icons/black/home.png'
import Institute from '@/assets/images/icons/black/institutes.png'
import Users from '@/assets/images/icons/black/users.png'
import Roles from '@/assets/images/icons/black/roles.png'
import Permissions from '@/assets/images/icons/black/permissions.png'
import AssignPermission from '@/assets/images/icons/black/assign-permission.png'

import Profile from '@/assets/images/icons/black/profile.png'
import security from '@/assets/images/icons/black/security.png'

import HomeWhite from '@/assets/images/icons/white/home.png'
import InstituteWhite from '@/assets/images/icons/white/institutes.png'
import UsersWhite from '@/assets/images/icons/white/users.png'
import RolesWhite from '@/assets/images/icons/white/roles.png'
import PermissionsWhite from '@/assets/images/icons/white/permissions.png'
import AssignPermissionWhite from '@/assets/images/icons/white/assign-permission.png'

import ProfileWhite from '@/assets/images/icons/white/profile.png'
import securityWhite from '@/assets/images/icons/white/security.png'

import Setting from '@/assets/images/icons/black/settings.png'
import SettingWhite from '@/assets/images/icons/white/settings.png'

import Support from '@/assets/images/icons/black/support.png'
import SupportWhite from '@/assets/images/icons/black/support.png'

export const iconMap: Record<string, { black: string; white: string }> = {
  dashboard: { black: Home, white: HomeWhite },
  institutos: { black: Institute, white: InstituteWhite },
  usuarios: { black: Users, white: UsersWhite },
  roles: { black: Roles, white: RolesWhite },
  permisos: { black: Permissions, white: PermissionsWhite },
  asignar: { black: AssignPermission, white: AssignPermissionWhite },
}

export const iconProfileMap: Record<string, { black: string; white: string }> = {
  perfil: { black: Profile, white: ProfileWhite },
  seguridad: { black: security, white: securityWhite },
}

export const iconSideNavProfileMap: Record<string, { black: string; white: string }> = {
  perfil: {
    black: Setting,
    white: SettingWhite,
  },
  seguridad: {
    black: Support,
    white: SupportWhite,
  },
}
