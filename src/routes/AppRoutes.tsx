import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { Layout } from '@/layout/Layout'
import { privateRoutes } from './PrivateRoutes'
import { publicRoutes } from './PublicRoutes'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route
          element={
            // <ProtectedRoute>
              <Layout />
            // </ProtectedRoute>
          }
        >
          {privateRoutes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="" element={<Navigate to="home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
