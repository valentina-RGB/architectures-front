import type { InfoCardField } from '@/interfaces/ui/infoCard.Interface'
import type {
  UserFormData,
  CompanyFormData,
  PermissionFormData,
} from '@/interfaces/forms/formData.Interface'
import type { ProfileData } from '@/interfaces/ui/modal.Interface'

export const DEFAULT_PROFILE_DATA: ProfileData = {
  name: 'Lorem Impsum',
  email: 'Lorem@gmail.com',
  avatarUrl:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K9AniVULqo4RvNniOwHLCvQGQhVmGM.png',
}

export const INSTITUTE_INFO_FIELDS: InfoCardField[] = [
  { label: 'Nombre', value: 'Formarte SAS' },
  { label: 'Nit', value: '654789102-9' },
  { label: 'Correo', value: 'formartesas@gmail.com' },
  { label: 'Telefono', value: '3504648798' },
  { label: 'Direccion', value: 'Clle 85 #12-20' },
  { label: 'Departamento', value: 'Antioquia' },
  { label: 'Municipio', value: 'Medellin:' },
  { label: 'Estado', value: 'Active' },
]

export const INITIAL_USER_DATA: UserFormData = {
  nombre: 'Lorem',
  segundoNombre: 'Lorem',
  apellido: 'Lorem',
  segundoApellido: 'Lorem',
  tipoDocumento: 'CC',
  numeroDocumento: '1024785942',
  fechaExpedicion: '03/01/2024',
  fechaNacimiento: '12/12/2006',
  correo: 'lorem@gmail.com',
  telefono: '3145247899',
  celular: '3004112578',
  role: 'qualifier',
}

export const INITIAL_COMPANY_DATA: CompanyFormData = {
  nombre: 'Lorem',
  nit: 'Lorem',
  correo: 'Lorem@gmail.com',
  telefono: '3504789922',
  departamento: 'Lorem',
  municipio: 'Lorem',
  direccion: 'Lorem',
}

export const INITIAL_PERMISSION_DATA: PermissionFormData = {
  nombre: 'Lorem Ipsum',
  recursos: 'Lorem Ipsum',
  accion: 'Edit',
  descripcion: 'Lorem Ipsum',
}
