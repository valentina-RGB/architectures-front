import { NavLink } from 'react-router-dom'
import LexxiAzul from '@/assets/images/logos/logo_azul.png'
import Logo from '@/assets/images/logos/logo.svg'
import type { SideNavProps } from '@/interfaces/layout/navProps.Interface'
import { iconMap, iconProfileMap } from '@/config/iconMap'

export function SideNav({
  items,
  collapsed = false,
  showBrand = true,
  isProfileMenu = false,
}: SideNavProps) {
  const currentIconMap = isProfileMenu ? iconProfileMap : iconMap

  return (
    <nav
      className={`flex flex-col bg-white border-r border-gray-200 transition-all duration-300
    ${isProfileMenu ? 'h-full overflow-y-auto' : 'h-screen'}
    ${collapsed ? 'w-16' : 'max-w-60'}
  `}
    >
      {showBrand && (
        <div className={`flex items-center ${collapsed ? 'justify-center p-4' : 'gap-3 p-0'}`}>
          <img
            src={!collapsed ? LexxiAzul : Logo}
            alt="Logo"
            className={`${collapsed ? 'w-[37px] h-[69px] -mb-3 ' : 'w-full h-full'} object-contain`}
          />
        </div>
      )}

      <div className="flex flex-col gap-1 px-4 py-3 flex-1">
        {items.map(item => {
          const iconSet = currentIconMap[item.id]

          return (
            <NavLink
              key={item.id}
              to={item.path || '/'}
              className={({ isActive }) =>
                `relative flex items-center h-[50px] rounded-lg transition-all duration-200
                ${collapsed ? 'justify-center py-3' : 'gap-3 px-4 py-3'}
                ${isActive && !collapsed ? 'bg-[#002552] text-white' : ''}`
              }
            >
              {({ isActive }) => {
                const iconSrc =
                  iconSet != null
                    ? isActive && !collapsed
                      ? iconSet.white
                      : iconSet.black
                    : item.icon

                return (
                  <>
                    {isActive && !collapsed && (
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-full bg-[#002552] rounded-r-full" />
                    )}
                    <img
                      src={iconSrc}
                      alt={item.label}
                      className="w-5 h-5 object-contain transition-all duration-200"
                    />
                    {!collapsed && <span className="text-[15px] font-normal">{item.label}</span>}
                  </>
                )
              }}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
