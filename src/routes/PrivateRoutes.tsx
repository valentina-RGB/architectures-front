import AlertPage from '@/modules/common/pages/AlertPage'
import AssignPermissionsPage from '@/modules/permissions/pages/AssignPermissionsPage'
import Dashboard from '@/modules/dashboard/pages/DashboardPage'
import InstitutePage from '@/modules/institutes/pages/InstitutePage'
import PermissionsPage from '@/modules/permissions/pages/PermissionsPage'
import ProfileConfigurationPage from '@/modules/auth/pages/ProfileConfigurationPage'
import RolesPage from '@/modules/roles/pages/RolesPage'
import SecurityConfigurationPage from '@/modules/auth/pages/SecurityConfigurationPage'
import ToastPage from '@/modules/common/pages/ToastPage'
import UsersPage from '@/modules/user/pages/UsersPage'

export const privateRoutes = [
  { path: 'dashboard', element: <Dashboard /> },
  { path: '/institutos', element: <InstitutePage /> },
  { path: '/usuarios', element: <UsersPage /> },
  { path: '/roles', element: <RolesPage /> },
  { path: '/permisos', element: <PermissionsPage /> },
  { path: '/asignar-permisos', element: <AssignPermissionsPage /> },
  { path: '/alert', element: <AlertPage /> },
  { path: '/perfil/informacion-personal', element: <ProfileConfigurationPage /> },
  { path: '/seguridad/informacion-personal', element: <SecurityConfigurationPage /> },
  { path: '/toast', element: <ToastPage /> },
]
