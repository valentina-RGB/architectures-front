import DataTable from '@/components/DataTable/DataTable'
import { instituteColumns } from '@/config/tableMap'
import ChevronLeft from '@/assets/images/icons/black/ChevronLeft.svg'
import { useInstitute } from '../hooks/useInstitute'

export default function InstitutePage() {
  
  const {
    institutes,
    handleInstituteAdd,
    handleInstituteView,
    handleInstituteEdit,
    handleInstituteFilter,
    handleInstituteDelete,
    handleInstituteStatusChange,
  } = useInstitute()

  return (
    <div className="px-9 py-7">
      <div className="flex items-center gap-3 mb-10">
        <img src={ChevronLeft} alt="Navegar hacia atras" className="cursor-pointer" />
        <h2 className="text-xl font-semibold mb-1">Institutos</h2>
      </div>
      <DataTable
        columns={instituteColumns}
        data={institutes}
        addButtonText="Agregar Instituto"
        availableActions={['view', 'edit', 'filter', 'delete']}
        onAdd={handleInstituteAdd}
        onView={handleInstituteView}
        onEdit={handleInstituteEdit}
        onFilter={handleInstituteFilter}
        onDelete={handleInstituteDelete}
        onStatusChange={handleInstituteStatusChange}
        showAvatar={false}
      />
    </div>
  )
}
