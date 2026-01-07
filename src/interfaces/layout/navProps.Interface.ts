export interface NavItem {
  id: string
  label: string
  icon?: string
  href?: string
  path?: string
}

export interface SideNavProps {
  items: NavItem[]
  activeItemId?: string
  collapsed?: boolean
  onItemClick?: (itemId: string) => void
  logoUrl?: string
  collapsedLogoUrl?: string
  brandName?: string
  showBrand?: boolean
  isProfileMenu?: boolean
}
export interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  position?: 'left' | 'right'
}
