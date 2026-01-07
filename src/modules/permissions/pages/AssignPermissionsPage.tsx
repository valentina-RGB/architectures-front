import DataTable from '@/components/DataTable/DataTable'
import ChevronLeft from '@/assets/images/icons/black/ChevronLeft.svg'
import { assignPermissionsColumns } from '../../../config/tableMap'
import { useAssignPermissions } from '../hooks/useAssignPermissions'

export default function AssignPermissionsPage() {
  const {
    assignPermissions,
    handleAssignPermissionsAdd,
    handleAssignPermissionsView,
    handleAssignPermissionsEdit,
    handleAssignPermissionsFilter,
    handleAssignPermissionsDelete,
    handleAssignPermissionsStatusChange,
  } = useAssignPermissions()
  return (
    <div className="px-9 py-7">
      <div className="flex items-center gap-3 mb-10">
        <img src={ChevronLeft} alt="Navegar hacia atras" className="cursor-pointer" />
        <h2 className="text-xl font-semibold mb-1">Asignar permisos</h2>
      </div>
      <DataTable
        columns={assignPermissionsColumns}
        data={assignPermissions}
        addButtonText="Asignar permisos"
        availableActions={['view']}
        onAdd={handleAssignPermissionsAdd}
        onView={handleAssignPermissionsView}
        onEdit={handleAssignPermissionsEdit}
        onFilter={handleAssignPermissionsFilter}
        onDelete={handleAssignPermissionsDelete}
        onStatusChange={handleAssignPermissionsStatusChange}
        showAvatar={false}
      />
    </div>
  )
}
