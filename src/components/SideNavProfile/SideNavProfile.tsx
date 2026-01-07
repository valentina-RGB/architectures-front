import { iconSideNavProfileMap } from '@/config/iconMap'
import { SideNavProfileItems } from '@/config/navLinks'
import type { SidebarProps } from '@/interfaces/layout/navProps.Interface'
import Lock from '@/assets/images/icons/black/security.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '@/features/auth/authSlice'

export default function Sidebar({ isOpen, onClose, position = 'right' }: SidebarProps) {
  const location = useLocation()
  const pathname = location.pathname

  const sidebarPosition = position === 'left' ? 'left-0' : 'right-0'
  const borderClass = position === 'left' ? 'border-r' : 'border-l'
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <>
      <div
        className={`fixed bg-black/20 z-40 lg:hidden transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-16 ${sidebarPosition} h-[calc(100vh-4rem)] max-w-60 w-48 bg-white ${borderClass} border-gray-200 z-50 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-1 px-4 py-3 flex-1">
            {SideNavProfileItems.map(item => {
              const isActive =
                item.id === 'perfil'
                  ? pathname.includes('informacion-personal')
                  : pathname === item.path

              const iconSet = iconSideNavProfileMap[item.id]
              const iconSrc = iconSet ? (isActive ? iconSet.white : iconSet.black) : undefined

              return (
                <Link
                  key={item.id}
                  to={item.path || '/'}
                  onClick={onClose}
                  className={`relative flex items-center h-[50px] gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-[#002552] text-white'
                      : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {isActive && (
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-full bg-[#002552] rounded-r-full" />
                  )}

                  {iconSrc && (
                    <img
                      src={iconSrc || '/placeholder.svg'}
                      alt={item.label}
                      className="w-5 h-5 object-contain transition-all duration-200"
                    />
                  )}

                  <span className="text-[15px] font-normal">{item.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="px-4 pb-4">
            <button
              onClick={handleLogout}
              className="relative flex items-center h-[50px] gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-50 w-full text-gray-700"
            >
              <img src={Lock} className="w-5 h-5" />
              <span className="text-[15px] font-normal">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
