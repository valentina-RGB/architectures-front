import Lock from '@/assets/images/icons/black/Lock.png'
import { UnifiedModal } from './UnifiedModal'
import type { ModalField } from '@/interfaces/ui/modal.Interface'
import type {
  RoleModalProps,
  UserModalProps,
  PasswordModalProps,
  CompanyModalProps,
  PermissionModalProps,
} from '@/interfaces/ui/modalProps.Interface'
import type {
  RoleFormData,
  UserFormData,
  PasswordFormData,
  CompanyFormData,
  PermissionFormData,
} from '@/interfaces/forms/formData.Interface'
import {
  ROLE_MODAL_FIELDS,
  getUserModalFields,
  COMPANY_MODAL_FIELDS,
  PERMISSION_MODAL_FIELDS,
} from '@/constants/modalFields'
export function RoleModal({
  isOpen,
  onClose,
  formData,
  onFormChange,
  onSubmit,
  title = 'Nuevo Rol',
  isModal = true,
  maxWidth = '4xl',
}: RoleModalProps) {
  return (
    <UnifiedModal<RoleFormData>
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      mode="edit"
      fields={ROLE_MODAL_FIELDS}
      formData={formData}
      onFormChange={onFormChange}
      onSubmit={onSubmit}
      gridColumns={2}
      maxWidth={maxWidth}
      isModal={isModal}
      inlineButtons={true}
    />
  )
}

export function UserModal({
  isOpen,
  onClose,
  mode,
  profileData,
  formData,
  onFormChange,
  onSubmit,
  onEdit,
  documentTypeOptions,
  title = 'Nuevo Usuario',
  isModal = true,
  hideAvatar = false,
  maxWidth = '5xl',
}: UserModalProps) {
  const fields: ModalField[] = getUserModalFields(mode).map(field => {
    if (field.name === 'tipoDocumento' && documentTypeOptions) {
      return { ...field, options: documentTypeOptions }
    }
    return field
  })

  return (
    <UnifiedModal<UserFormData>
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      mode={mode}
      profileData={profileData}
      showEditButton={mode === 'view'}
      onEdit={onEdit}
      fields={fields}
      formData={formData}
      onFormChange={onFormChange}
      onSubmit={onSubmit}
      gridColumns={3}
      maxWidth={maxWidth}
      isModal={isModal}
      hideAvatar={hideAvatar}
    />
  )
}

export function PasswordModal({
  isOpen,
  onClose,
  profileData,
  formData,
  onFormChange,
  onSubmit,
  isPasswordChangeMode = true,
  onEdit,
  title = 'Contraseña',
  isModal = true,
  maxWidth = '4xl',
}: PasswordModalProps & { isPasswordChangeMode?: boolean; onEdit?: () => void }) {
  const passwordViewDisplay = (
    <div className="space-y-4">
      <div className="text-base font-bold text-gray-900">Contraseña</div>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#4A90E2]">
          <img src={Lock} className="h-5 w-5" />
        </div>
        <div className="flex-1 space-y-1">
          <div className="text-base text-gray-900 font-normal">{profileData?.email || ''}</div>
          <div className="text-sm text-gray-400 tracking-wider">*********</div>
        </div>
      </div>
    </div>
  )

  const customPasswordDisplay = (
    <div className="grid grid-cols-3 gap-6">
      <div className="space-y-4">
        <div className="text-base font-bold text-gray-900">Contraseña</div>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#4A90E2]">
            <img src={Lock} className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="text-base text-gray-900 font-normal">{profileData?.email || ''}</div>
            <div className="text-sm text-gray-400 tracking-wider">*********</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-base font-bold text-gray-900">Nueva contraseña</label>
        <input
          type="password"
          value={formData.newPassword || ''}
          onChange={e => onFormChange({ ...formData, newPassword: e.target.value })}
          placeholder="*****"
          className="w-full bg-[#F9F9F9] border-0 text-gray-600 h-12 rounded-md px-3"
        />
      </div>

      <div className="space-y-2">
        <label className="text-base font-bold text-gray-900">Confirmar contraseña</label>
        <input
          type="password"
          value={formData.confirmPassword || ''}
          onChange={e => onFormChange({ ...formData, confirmPassword: e.target.value })}
          placeholder="*****"
          className="w-full bg-[#F9F9F9] border-0 text-gray-600 h-12 rounded-md px-3"
        />
      </div>
    </div>
  )

  return (
    <UnifiedModal<PasswordFormData>
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      mode={isPasswordChangeMode ? 'edit' : 'view'}
      profileData={profileData}
      showEditButton={!isPasswordChangeMode}
      onEdit={onEdit}
      fields={[]}
      formData={formData}
      onFormChange={onFormChange}
      onSubmit={onSubmit}
      gridColumns={3}
      maxWidth={maxWidth}
      isPasswordModal={true}
      customPasswordDisplay={isPasswordChangeMode ? customPasswordDisplay : passwordViewDisplay}
      showFooter={isPasswordChangeMode}
      isModal={isModal}
    />
  )
}

export function CompanyModal({
  isOpen,
  onClose,
  mode,
  formData,
  onFormChange,
  onSubmit,
  onEdit,
  departmentOptions,
  municipalityOptions,
  title = 'Formarte SAS',
  isModal = true,
  maxWidth = '5xl',
}: CompanyModalProps) {
  const fields: ModalField[] = COMPANY_MODAL_FIELDS.map(field => {
    if (field.name === 'departamento' && departmentOptions) {
      return { ...field, options: departmentOptions }
    }
    if (field.name === 'municipio' && municipalityOptions) {
      return { ...field, options: municipalityOptions }
    }
    return field
  })

  return (
    <UnifiedModal<CompanyFormData>
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      mode={mode}
      showEditButton={true}
      onEdit={onEdit}
      fields={fields}
      formData={formData}
      onFormChange={onFormChange}
      onSubmit={onSubmit}
      gridColumns={3}
      maxWidth={maxWidth}
      isModal={isModal}
    />
  )
}

export function PermissionModal({
  isOpen,
  onClose,
  mode,
  formData,
  onFormChange,
  onSubmit,
  onEdit,
  actionOptions,
  title = 'Nuevo Permiso',
  isModal = true,
  maxWidth = '4xl',
}: PermissionModalProps) {
  const fields: ModalField[] = PERMISSION_MODAL_FIELDS.map(field => {
    if (field.name === 'accion' && actionOptions) {
      return { ...field, options: actionOptions }
    }
    return field
  })

  return (
    <UnifiedModal<PermissionFormData>
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      mode={mode}
      showEditButton={true}
      onEdit={onEdit}
      fields={fields}
      formData={formData}
      onFormChange={onFormChange}
      onSubmit={onSubmit}
      gridColumns={3}
      maxWidth={maxWidth}
      isModal={isModal}
    />
  )
}
