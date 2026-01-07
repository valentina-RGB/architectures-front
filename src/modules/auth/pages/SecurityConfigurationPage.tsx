import ChevronLeft from '@/assets/images/icons/black/ChevronLeft.svg'
import { PasswordModal } from '@/components/CustomFormModals/CustomFormModals'
import { DEFAULT_PROFILE_DATA } from '@/constants/defaultOptions'

import { useFormData } from '@/modules/common/hooks/useFormData'
import { useModalState } from '@/modules/common/hooks/useModalState'
import type { PasswordFormData } from '@/interfaces/forms/formData.Interface'
const SecurityConfigurationPage = () => {
  const { activeModal, isEditMode, closeModal, setEditMode } = useModalState()
  const { formData: passwordData, updateFormData: updatePasswordData } =
    useFormData<PasswordFormData>({})
  const handlePasswordSubmit = () => {
    console.log('Password submitted:', passwordData)
    setEditMode(false)
    closeModal()
  }
  const profileData = DEFAULT_PROFILE_DATA
  return (
    <div className="px-9 py-7">
      <div className="flex items-center gap-3 mb-10">
        <img src={ChevronLeft} alt="Navegar hacia atras" className="cursor-pointer" />
        <h2 className="text-xl font-semibold mb-1">Configuración de perfil</h2>
      </div>

      <PasswordModal
        isModal={false}
        mode="change"
        isOpen={activeModal === 'password'}
        onClose={closeModal}
        profileData={profileData}
        formData={passwordData}
        onFormChange={updatePasswordData}
        onSubmit={handlePasswordSubmit}
        isPasswordChangeMode={isEditMode}
        onEdit={() => setEditMode(true)}
        maxWidth="full"
      />
    </div>
  )
}

export default SecurityConfigurationPage
