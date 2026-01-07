import type { ReactNode } from 'react'
import type { ModalField, ProfileData } from './modal.Interface'

export interface ModalContainerProps {
  isOpen: boolean
  children: ReactNode
  onBackdropClick?: () => void
}

export interface ModalHeaderProps {
  title?: string
  profileData?: ProfileData
  showEditButton?: boolean
  isEditMode?: boolean
  onEdit?: () => void
}

export interface ModalFooterProps {
  onCancel: () => void
  onSubmit?: () => void
  isEditMode?: boolean
  cancelText?: string
  submitText?: string
  showSaveIcon?: boolean
}

export interface FormFieldRendererProps {
  field: ModalField
  value: string
  onChange: (value: string) => void
  isEditMode: boolean
}
