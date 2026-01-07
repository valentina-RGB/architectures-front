import type { ModalField } from '@/interfaces/ui/modal.Interface'

export const getUserModalFields = (mode: 'view' | 'edit'): ModalField[] => [
  {
    name: 'nombre',
    label: 'Nombre',
    type: 'text',
    required: mode === 'edit',
    placeholder: 'Lorem',
  },
  {
    name: 'segundoNombre',
    label: 'Segundo Nombre',
    type: 'text',
    required: false,
    placeholder: 'Lorem',
  },
  { name: 'apellido', label: 'Apellido', type: 'text', required: false, placeholder: 'Lorem' },
  {
    name: 'segundoApellido',
    label: 'Segundo Apellido',
    type: 'text',
    required: false,
    placeholder: 'Lorem',
  },
  {
    name: 'correo',
    label: 'Correo',
    type: 'email',
    required: false,
    placeholder: 'Lorem@gmail.com',
  },
  { name: 'telefono', label: 'Telefono', type: 'text', required: false, placeholder: '3504789562' },
  { name: 'celular', label: 'Celular', type: 'text', required: false, placeholder: '3541287965' },
  {
    name: 'fechaNacimiento',
    label: 'Fecha de Nacimiento',
    type: 'date',
    required: false,
    placeholder: '21/12/1990',
  },
  {
    name: 'tipoDocumento',
    label: 'Tipo de Documento',
    type: 'select',
    required: false,
    placeholder: 'CC',
  },
  {
    name: 'numeroDocumento',
    label: 'Numero de Documento',
    type: 'text',
    required: false,
    placeholder: '1024587963',
  },
  {
    name: 'fechaExpedicion',
    label: 'Fecha de Expedicion del Documento',
    type: 'date',
    required: false,
    placeholder: '21/12/2008',
  },
]
