export type ModalType = 'role' | 'user' | 'password' | 'company' | 'permission' | null

export interface UseModalStateReturn {
  activeModal: ModalType
  isEditMode: boolean
  openModal: (type: ModalType, editMode?: boolean) => void
  closeModal: () => void
  setEditMode: (editMode: boolean) => void
}

export interface UseFormDataReturn<T> {
  formData: T
  updateFormData: (newData: Partial<T> | T) => void
  resetFormData: () => void
}
