import type { NavItem } from '@/interfaces/layout/navProps.Interface'

export const defaultNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
  { id: 'institutos', label: 'Institutos', path: '/institutos' },
  { id: 'usuarios', label: 'Usuarios', path: '/usuarios' },
  { id: 'roles', label: 'Roles', path: '/roles' },
  { id: 'permisos', label: 'Permisos', path: '/permisos' },
  { id: 'asignar', label: 'Asignar Permisos', path: '/asignar-permisos' },
]

export const profileNavItems: NavItem[] = [
  { id: 'perfil', label: 'Perfil', path: '/perfil' },
  { id: 'seguridad', label: 'Seguridad', path: '/seguridad' },
]

export const SideNavProfileItems: NavItem[] = [
  { id: 'perfil', label: 'Perfil', path: '/perfil/informacion-personal' },
  { id: 'seguridad', label: 'Seguridad', path: '/seguridad' },
]
export const SideNavProfileNavigations: NavItem[] = [
  { id: 'perfil', label: 'Perfil', path: '/perfil/informacion-personal' },
  { id: 'seguridad', label: 'Seguridad', path: '/seguridad/informacion-personal' },
]
