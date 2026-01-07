import type React from 'react'

export interface SelectContextType {
  value: string
  onValueChange: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
  disabled?: boolean
}

export interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  disabled?: boolean
  fullWidth?: boolean
}

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
  fullWidth?: boolean
}

export interface SelectValueProps {
  placeholder?: string
  className?: string
}

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
  value: string
}
