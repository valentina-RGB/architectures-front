import type { ProfileData } from '@/interfaces/ui/modal.Interface'

export const defaultProfile: ProfileData = {
  name: 'Lorem Impsum',
  email: 'Lorem@gmail.com',
  avatarUrl:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K9AniVULqo4RvNniOwHLCvQGQhVmGM.png',
}

export const documentTypeOptions = [
  { value: 'CC', label: 'Cédula de Ciudadanía' },
  { value: 'TI', label: 'Tarjeta de Identidad' },
  { value: 'CE', label: 'Cédula de Extranjería' },
  { value: 'Pasaporte', label: 'Pasaporte' },
]

export const actionOptions = [
  { value: 'Edit', label: 'Edit' },
  { value: 'Search', label: 'Search' },
  { value: 'Delete', label: 'Delete' },
]

export const departmentOptions = [
  { value: 'Antioquia', label: 'Antioquia' },
  { value: 'Cundinamarca', label: 'Cundinamarca' },
  { value: 'Valle', label: 'Valle del Cauca' },
]

export const municipalityOptions = [
  { value: 'Medellín', label: 'Medellín' },
  { value: 'Bogotá', label: 'Bogotá' },
  { value: 'Cali', label: 'Cali' },
]
