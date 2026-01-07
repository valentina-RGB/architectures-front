import { useState, useCallback } from 'react'
import type { UseFormDataReturn } from '@/interfaces/hooks/hooks.Interface'

/**
 * Hook genérico para manejar el estado de datos de formularios
 * @param initialData - Datos iniciales del formulario
 * @returns Objeto con datos actuales y funciones para manipularlos
 */
export function useFormData<T>(initialData: T): UseFormDataReturn<T> {
  const [formData, setFormData] = useState<T>(initialData)

  const updateFormData = useCallback((newData: Partial<T> | T) => {
    setFormData(prev => ({ ...prev, ...newData }))
  }, [])

  const resetFormData = useCallback(() => {
    setFormData(initialData)
  }, [initialData])

  return {
    formData,
    updateFormData,
    resetFormData,
  }
}
