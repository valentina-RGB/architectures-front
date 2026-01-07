import { permissionsData } from '@/data/burnedDataTable'
import type { TableRow } from '@/interfaces/ui/tableProps.Interface'
import { useState } from 'react'
import ChevronLeft from '@/assets/images/icons/black/ChevronLeft.svg'
import DataTable from '@/components/DataTable/DataTable'
import { permissionsColumns } from '@/config/tableMap'


const PermissionsPage = () => {
  const [permissions, setPermissions] = useState<TableRow[]>(permissionsData)

  const handlePermissionsAdd = () => {
    console.log('Add permissions clicked')
  }

  const handlePermissionsEdit = (id: string) => {
    console.log('Edit permissions:', id)
  }

  const handlePermissionsDelete = (id: string) => {
    setPermissions(prev => prev.filter(item => item.id !== id))
    console.log('Delete permissions:', id)
  }

  const handlePermissionsStatusChange = (id: string, status: boolean) => {
    setPermissions(prev => prev.map(item => (item.id === id ? { ...item, status } : item)))
  }

  return (
    <div className="px-9 py-7">
      <div className="flex items-center gap-3 mb-10">
        <img src={ChevronLeft} alt="Navegar hacia atras" className="cursor-pointer" />
        <h2 className="text-xl font-semibold mb-1">Permisos</h2>
      </div>
      <DataTable
        columns={permissionsColumns}
        data={permissions}
        addButtonText="Agregar Permiso"
        availableActions={['view', 'edit', 'delete']}
        onAdd={handlePermissionsAdd}
        onEdit={handlePermissionsEdit}
        onDelete={handlePermissionsDelete}
        onStatusChange={handlePermissionsStatusChange}
        showAvatar={false}
      />
    </div>
  )
}

export default PermissionsPage
