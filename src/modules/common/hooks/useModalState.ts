import type { ModalType } from '@/interfaces/hooks/hooks.Interface'
import type { ModalOptions } from '@/interfaces/hooks/useModalState.Interface'
import { useState } from 'react'

export function useModalState() {
  const [activeModal, setActiveModal] = useState<ModalType>(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [modalOptions, setModalOptions] = useState<ModalOptions>({})

  const openModal = (type: ModalType, editMode: boolean = true, options?: ModalOptions) => {
    setActiveModal(type)
    setIsEditMode(editMode)
    setModalOptions(options || {})
  }

  const closeModal = () => {
    setActiveModal(null)
    setIsEditMode(false)
    setModalOptions({})
  }

  const setEditMode = (mode: boolean) => {
    setIsEditMode(mode)
  }

  return {
    activeModal,
    isEditMode,
    modalOptions,
    openModal,
    closeModal,
    setEditMode,
  }
}
