import ChevronLeft from '@/assets/images/icons/black/ChevronLeft.svg'
import { UserModal } from '@/components/CustomFormModals/CustomFormModals'
import { DEFAULT_PROFILE_DATA, INITIAL_USER_DATA } from '@/constants/defaultOptions'
import { DOCUMENT_TYPE_OPTIONS } from '@/constants/formOptions'
import { useFormData } from '@/modules/common/hooks/useFormData'
import { useModalState } from '@/modules/common/hooks/useModalState'
import type { UserFormData } from '@/interfaces/forms/formData.Interface'
const ProfileConfigurationPage = () => {
  const { activeModal, isEditMode, closeModal, setEditMode } = useModalState()
  const { formData: userData, updateFormData: updateUserData } =
    useFormData<UserFormData>(INITIAL_USER_DATA)
  const handleUserSubmit = () => {
    console.log('User submitted:', userData)
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

      <UserModal
        isModal={false}
        isOpen={activeModal === 'user'}
        onClose={closeModal}
        mode={isEditMode ? 'edit' : 'view'}
        profileData={profileData}
        formData={userData}
        onFormChange={updateUserData}
        onSubmit={handleUserSubmit}
        onEdit={() => setEditMode(true)}
        documentTypeOptions={DOCUMENT_TYPE_OPTIONS}
        maxWidth="full"
      />
    </div>
  )
}

export default ProfileConfigurationPage
