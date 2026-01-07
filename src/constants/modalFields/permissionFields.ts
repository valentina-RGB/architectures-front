import type { ModalField } from '@/interfaces/ui/modal.Interface'

export const PERMISSION_MODAL_FIELDS: ModalField[] = [
  { name: 'nombre', label: 'Nombre', type: 'text', required: true, placeholder: 'Lorem Ipsum' },
  { name: 'recursos', label: 'Recursos', type: 'text', placeholder: 'Lorem Ipsum' },
  { name: 'accion', label: 'Acción', type: 'select', placeholder: 'Search' },
  {
    name: 'descripcion',
    label: 'Descripción',
    type: 'text',
    placeholder: 'Lorem Ipsum',
    colSpan: 1,
  },
]
