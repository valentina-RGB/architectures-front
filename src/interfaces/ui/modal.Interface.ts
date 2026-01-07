import type { ReactNode } from 'react'
import type { ModalFormData } from './forms/formData.Interface'

export interface SelectOption {
  value: string
  label: string
}

export interface ModalField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'date' | 'select'
  placeholder?: string
  required?: boolean
  options?: SelectOption[]
  colSpan?: 1 | 2 | 3
}

export interface ProfileData {
  name: string
  email: string
  avatarUrl?: string
}

export interface UnifiedModalProps<T extends ModalFormData = ModalFormData> {
  isOpen: boolean
  onClose: () => void
  title: string
  mode?: 'edit' | 'view'
  profileData?: ProfileData
  showEditButton?: boolean
  onEdit?: () => void
  fields: ModalField[]
  formData: T
  onFormChange: (data: T) => void
  onSubmit: () => void
  gridColumns?: 2 | 3
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'
  isPasswordModal?: boolean
  customPasswordDisplay?: ReactNode
  isModal?: boolean
  showFooter?: boolean
  inlineButtons?: boolean
  hideAvatar?: boolean
}
