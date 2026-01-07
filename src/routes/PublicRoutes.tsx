
import LoginPage from '@/modules/auth/pages/LoginPage'
import { NoFoundPage } from '@/modules/common/pages/NoFoundPage'

export const publicRoutes = [
  { path: '/', element: <LoginPage /> },
  { path: '*', element: <NoFoundPage /> },
]
