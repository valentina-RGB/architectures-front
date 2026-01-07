import DataTable from '@/components/DataTable/DataTable'
import { userColumns } from '@/config/tableMap'
import { userData } from '@/data/burnedDataTable'
import ChevronLeft from '@/assets/images/icons/black/ChevronLeft.svg'
import type { TableRow } from '@/interfaces/ui/tableProps.Interface'
import { useState } from 'react'

const UsersPage = () => {
  const [users, setUsers] = useState<TableRow[]>(userData)

  const handleUserAdd = () => {
    console.log('Add user clicked')
  }

  const handleUserView = (id: string) => {
    console.log('View user:', id)
  }

  const handleUserEdit = (id: string) => {
    console.log('Edit user:', id)
  }

  const handleUserDelete = (id: string) => {
    setUsers(prev => prev.filter(item => item.id !== id))
    console.log('Delete user:', id)
  }

  const handleUserStatusChange = (id: string, status: boolean) => {
    setUsers(prev => prev.map(item => (item.id === id ? { ...item, status } : item)))
  }

  return (
    <div className="px-9 py-7">
      <div className="flex items-center gap-3 mb-10">
        <img src={ChevronLeft} alt="Navegar hacia atras" className="cursor-pointer" />
        <h2 className="text-xl font-semibold mb-1">Usuarios</h2>
      </div>
      <DataTable
        columns={userColumns}
        data={users}
        addButtonText="Agregar Usuario"
        availableActions={['view', 'edit', 'delete']}
        onAdd={handleUserAdd}
        onView={handleUserView}
        onEdit={handleUserEdit}
        onDelete={handleUserDelete}
        onStatusChange={handleUserStatusChange}
      />
    </div>
  )
}

export default UsersPage
