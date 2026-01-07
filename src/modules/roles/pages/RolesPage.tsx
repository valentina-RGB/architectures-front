import DataTable from '@/components/DataTable/DataTable'
import { rolesColumns } from '@/config/tableMap'
import ChevronLeft from '@/assets/images/icons/black/ChevronLeft.svg'
import { useRoles } from '../hooks/useRoles'

export default function RolesPage() {
const {roles, handleRoleAdd, handleRoleDelete} = useRoles();
  return (
    <div className="px-9 py-7">
      <div className="flex items-center gap-3 mb-10">
        <img src={ChevronLeft} alt="Navegar hacia atrás" className="cursor-pointer" />
        <h2 className="text-xl font-semibold mb-1">Roles</h2>
      </div>

      <DataTable
        columns={rolesColumns}
        data={roles}
        addButtonText="Agregar Rol"
        availableActions={['delete']}
        onAdd={handleRoleAdd}
        onDelete={handleRoleDelete}
        showAvatar={false}
      />
    </div>
  )
}
