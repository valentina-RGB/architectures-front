import type { ModalFormData } from '@/interfaces/forms/formData.Interface'

export function validateRequiredFields<T extends ModalFormData>(
  formData: T,
  requiredFields: Array<keyof T>
): boolean {
  return requiredFields.every(field => {
    const value = formData[field]
    return value !== undefined && value !== null && value !== ''
  })
}

export function clearFormData<T extends ModalFormData>(formData: T): T {
  const clearedData = {} as T
  Object.keys(formData).forEach(key => {
    clearedData[key as keyof T] = '' as T[keyof T]
  })
  return clearedData
}

export function hasFormChanged<T extends ModalFormData>(original: T, current: T): boolean {
  const originalKeys = Object.keys(original) as Array<keyof T>
  return originalKeys.some(key => original[key] !== current[key])
}
