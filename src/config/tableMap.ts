import type { TableColumn } from '@/interfaces/ui/tableProps.Interface'

export const instituteColumns: TableColumn[] = [
  { key: 'institute', label: 'Instituto', sortable: false },
  { key: 'email', label: 'Correo', sortable: false },
  { key: 'phone', label: 'Teléfono', sortable: false },
  { key: 'municipality', label: 'Municipio', sortable: false },
  { key: 'status', label: 'Estado', sortable: false },
  { key: 'actions', label: 'Acciones', sortable: false },
]

export const userColumns: TableColumn[] = [
  { key: 'users', label: 'Usuarios', sortable: false },
  { key: 'email', label: 'Correo', sortable: false },
  { key: 'document', label: 'Número de documento', sortable: false },
  { key: 'phone', label: 'Número de teléfono', sortable: false },
  { key: 'role', label: 'Rol', sortable: false },
  { key: 'status', label: 'Estado', sortable: false },
  { key: 'actions', label: 'Acciones', sortable: false },
]

export const permissionsColumns: TableColumn[] = [
  { key: 'permissions', label: 'Permisos', sortable: false },
  { key: 'resources', label: 'Recursos', sortable: false },
  { key: 'action', label: 'Accion', sortable: false },
  { key: 'description', label: 'Descripción', sortable: false },
  { key: 'status', label: 'Estado', sortable: false },
  { key: 'actions', label: 'Acciones', sortable: false },
]
export const assignPermissionsColumns: TableColumn[] = [
  { key: 'rol', label: 'Roles', sortable: false },
  { key: 'description', label: 'Descripción', sortable: false },
  { key: 'status', label: 'Estado', sortable: false },
  { key: 'actions', label: 'Acciones', sortable: false },
]
export const rolesColumns: TableColumn[] = [
  { key: 'role', label: 'Roles', sortable: false },
  { key: 'description', label: 'Descripción', sortable: false },
  { key: 'status', label: 'Estado', sortable: false },
  { key: 'actions', label: 'Acciones', sortable: false },
]
