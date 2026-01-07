import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../modules/common/hooks/useRedux'
import type { ProtectedRouteProps } from '@/interfaces/routing/route.Interface'

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = useAppSelector(state => state.auth.token)
  if (!token) return <Navigate to="/" replace />
  return children
}
