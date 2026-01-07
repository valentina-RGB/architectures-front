import type { SelectOption } from '@/interfaces/ui/modal.Interface'

export const DOCUMENT_TYPE_OPTIONS: SelectOption[] = [
  { value: 'CC', label: 'Cédula de Ciudadanía' },
  { value: 'TI', label: 'Tarjeta de Identidad' },
  { value: 'CE', label: 'Cédula de Extranjería' },
  { value: 'Pasaporte', label: 'Pasaporte' },
]

export const ACTION_OPTIONS: SelectOption[] = [
  { value: 'Edit', label: 'Edit' },
  { value: 'Search', label: 'Search' },
  { value: 'Delete', label: 'Delete' },
]

export const DEPARTMENT_OPTIONS: SelectOption[] = [
  { value: 'Antioquia', label: 'Antioquia' },
  { value: 'Cundinamarca', label: 'Cundinamarca' },
  { value: 'Valle', label: 'Valle del Cauca' },
]

export const MUNICIPALITY_OPTIONS: SelectOption[] = [
  { value: 'Medellín', label: 'Medellín' },
  { value: 'Bogotá', label: 'Bogotá' },
  { value: 'Cali', label: 'Cali' },
]
