import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SideNav } from '@/components/SideNav/SideNav'
import { TopBar } from '@/components/TopBar/TopBar'
import { defaultNavItems, SideNavProfileNavigations } from '@/config/navLinks'

export const Layout = () => {
  const [activeItem, setActiveItem] = useState('institutos')
  const [activeItemProfile, setActiveItemProfile] = useState('/perfil/informacion-personal')
  const location = useLocation()

  const isCollapsed = location.pathname.includes('/informacion-personal')

  return (
    <div className="flex min-h-screen font-inter">
      <SideNav
        items={defaultNavItems}
        activeItemId={activeItem}
        collapsed={isCollapsed}
        onItemClick={setActiveItem}
        showBrand
      />

      <div className="flex flex-col flex-1">
        <TopBar />

        <main className="flex flex-1 bg-gray-50 overflow-hidden">
          {isCollapsed && (
            <div className="w-60 shrink-0 ">
              <SideNav
                items={SideNavProfileNavigations}
                activeItemId={activeItemProfile}
                onItemClick={setActiveItemProfile}
                showBrand={false}
                isProfileMenu
              />
            </div>
          )}

          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
