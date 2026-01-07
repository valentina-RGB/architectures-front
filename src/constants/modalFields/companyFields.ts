import type { ModalField } from '@/interfaces/ui/modal.Interface'

export const COMPANY_MODAL_FIELDS: ModalField[] = [
  { name: 'nombre', label: 'Nombre', type: 'text', required: true, placeholder: 'Lorem' },
  { name: 'nit', label: 'Nit', type: 'text', required: true, placeholder: 'Lorem' },
  {
    name: 'correo',
    label: 'Correo',
    type: 'email',
    required: true,
    placeholder: 'Lorem@gmail.com',
  },
  { name: 'telefono', label: 'Telefono', type: 'text', required: true, placeholder: '3504789922' },
  {
    name: 'departamento',
    label: 'Departamento',
    type: 'select',
    required: true,
    placeholder: 'Lorem',
  },
  {
    name: 'municipio',
    label: 'Municipio',
    type: 'select',
    required: true,
    placeholder: 'Lorem',
  },
  {
    name: 'direccion',
    label: 'Direccion',
    type: 'text',
    required: true,
    placeholder: 'Lorem',
    colSpan: 1,
  },
]
