import type {
  RoleFormData,
  UserFormData,
  PasswordFormData,
  CompanyFormData,
  PermissionFormData,
} from '../forms/formData.Interface'
import type { SelectOption, ProfileData } from './modal.Interface'

export interface RoleModalProps {
  isOpen: boolean
  onClose: () => void
  formData: RoleFormData
  onFormChange: (data: RoleFormData) => void
  onSubmit: () => void
  title?: string
  isModal?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'
}

export interface UserModalProps {
  isOpen: boolean
  onClose: () => void
  mode: 'edit' | 'view'
  profileData: ProfileData
  formData: UserFormData
  onFormChange: (data: UserFormData) => void
  onSubmit: () => void
  onEdit: () => void
  documentTypeOptions: SelectOption[]
  title?: string
  isModal?: boolean
  hideAvatar?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'
}

export interface PasswordModalProps {
  isOpen: boolean
  onClose: () => void
  mode: 'view' | 'change'
  profileData: ProfileData
  formData: PasswordFormData
  onFormChange: (data: PasswordFormData) => void
  onSubmit: () => void
  title?: string
  isModal?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'
}

export interface CompanyModalProps {
  isOpen: boolean
  onClose: () => void
  mode: 'edit' | 'view'
  formData: CompanyFormData
  onFormChange: (data: CompanyFormData) => void
  onSubmit: () => void
  onEdit?: () => void
  departmentOptions: SelectOption[]
  municipalityOptions: SelectOption[]
  title?: string
  isModal?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'
}

export interface PermissionModalProps {
  isOpen: boolean
  onClose: () => void
  mode: 'edit' | 'view'
  formData: PermissionFormData
  onFormChange: (data: PermissionFormData) => void
  onSubmit: () => void
  onEdit?: () => void
  actionOptions: SelectOption[]
  title?: string
  isModal?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'
}
