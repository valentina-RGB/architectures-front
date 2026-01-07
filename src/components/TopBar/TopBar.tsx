import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import notification from '@/assets/images/icons/black/notification.png'
import moon from '@/assets/images/icons/black/moon.png'
import profile from '@/assets/images/icons/black/user.png'
import libreta from '@/assets/images/icons/black/sidebar.png'
import below from '@/assets/images/icons/black/below.png'
import type { TopBarProps } from '@/interfaces/layout/topProps.Interface'
import { useState } from 'react'
import SideNavProfile from '../SideNavProfile/SideNavProfile'

export function TopBar({ userName = 'ByeWind' }: TopBarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <header className="sticky w-full top-0 z-40 border-b border-gray-200 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex items-center gap-1">
          <Button size="icon" aria-label="Toggle sidebar">
            <img src={libreta} alt="campaign" className="h-8 w-8 object-contain" />
          </Button>
          <div className="flex items-center gap-2 text-[14px] leading-[20px] tracking-[0px] font-[400] text-sm text-gray-500">
            Dashboard
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <div className="flex items-center ">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className="relative bg-transparent hover:bg-transparent active:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none border-none"
            >
              <img src={notification} alt="campaign" className="h-5 w-5 object-contain" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[10px]"
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="relative bg-transparent hover:bg-transparent active:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none border-none"
            >
              <img src={moon} alt="moon" className="h-5 w-5 object-contain" />
            </Button>
          </div>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="User menu"
          className={`flex items-center gap-2 md:ml-3 ml-0 mr-4 bg-transparent hover:bg-transparent active:bg-transparent focus:outline-none cursor-pointer 
               transition-all duration-300
    active:opacity-30`}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={profile}
              className="h-8 w-8 text-gray-500 dark:text-gray-300"
              alt={userName}
            />
          </Avatar>
          <span className="text-sm font-inter font-normal hidden sm:inline-block text-gray-900 dark:text-gray-100">
            {userName}
          </span>

          <img
            src={below}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`
        h-2.5 w-2.5 object-contain cursor-pointer transition-transform duration-300
        ${isSidebarOpen ? 'rotate-180' : ''}
      `}
            alt="arrow"
          />
        </button>
      </div>
      <SideNavProfile isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  )
}
