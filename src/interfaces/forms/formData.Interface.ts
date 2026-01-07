export interface RoleFormData {
  rol?: string
  descripcion?: string
}

export interface UserFormData {
  nombre?: string
  segundoNombre?: string
  apellido?: string
  segundoApellido?: string
  tipoDocumento?: string
  numeroDocumento?: string
  fechaExpedicion?: string
  fechaNacimiento?: string
  correo?: string
  telefono?: string
  celular?: string
  role?: string
}

export interface PasswordFormData {
  currentPassword?: string
  newPassword?: string
  confirmPassword?: string
}

export interface CompanyFormData {
  nombre?: string
  nit?: string
  correo?: string
  telefono?: string
  departamento?: string
  municipio?: string
  direccion?: string
}

export interface PermissionFormData {
  nombre?: string
  recursos?: string
  accion?: string
  descripcion?: string
}

export type ModalFormData =
  | RoleFormData
  | UserFormData
  | PasswordFormData
  | CompanyFormData
  | PermissionFormData
  | Record<string, string | number | boolean | undefined>
