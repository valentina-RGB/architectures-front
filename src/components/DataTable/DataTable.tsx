import { useState } from 'react'
import TableControls from './TableControls'
import TablePagination from './TablePagination'
import StatusFilter from './StatusFilter'
import SortIcon from './SortIcon'
import TableCell from './TableCell'
import { useTableData } from '@/modules/common/hooks/useTableData'
import type { DataTableProps } from '@/interfaces/ui/tableProps.Interface'

export default function DataTable({
  columns,
  data,
  addButtonText,
  availableActions = ['view', 'edit', 'filter', 'delete'],
  showAvatar = true,
  onAdd,
  onView,
  onEdit,
  onFilter,
  onDelete,
  onStatusChange,
}: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [showStatusFilter, setShowStatusFilter] = useState(false)
  const [statusFilter, setStatusFilter] = useState<{ active: boolean; inactive: boolean }>({
    active: false,
    inactive: false,
  })
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(
    null
  )

  const filteredData = useTableData({ data, searchTerm, statusFilter, sortConfig })

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  const handleStatusToggle = (id: string, currentStatus: boolean) => {
    onStatusChange?.(id, !currentStatus)
  }

  const handleStatusFilterChange = (filterType: 'active' | 'inactive') => {
    setStatusFilter(prev => ({
      ...prev,
      [filterType]: !prev[filterType],
    }))
  }

  const clearAllFilters = () => {
    setStatusFilter({ active: false, inactive: false })
  }

  const handleSort = (columnKey: string) => {
    let direction: 'asc' | 'desc' = 'asc'

    if (sortConfig && sortConfig.key === columnKey && sortConfig.direction === 'asc') {
      direction = 'desc'
    }

    setSortConfig({ key: columnKey, direction })
  }

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage)
    setCurrentPage(1)
  }

  return (
    <div className="w-full">
      <TableControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
        addButtonText={addButtonText}
        onAdd={onAdd}
      />

      <div className="overflow-x-auto min-h-50">
        <table className="w-full min-w-max">
          <thead>
            <tr className="border-b border-gray-200">
              {columns.map(column => (
                <th
                  key={column.key}
                  className={`p-4 font-semibold text-gray-900 whitespace-nowrap ${
                    column.key === 'actions' ? 'text-center min-w-[180px]' : 'text-left'
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      column.key === 'actions' ? 'justify-center' : 'justify-start'
                    } ${column.sortable ? 'cursor-pointer select-none' : ''}`}
                    onClick={() => column.sortable && handleSort(column.key)}
                  >
                    {column.label}

                    {column.sortable && <SortIcon columnKey={column.key} sortConfig={sortConfig} />}

                    {column.key === 'status' && (
                      <StatusFilter
                        isOpen={showStatusFilter}
                        onToggle={() => setShowStatusFilter(!showStatusFilter)}
                        statusFilter={statusFilter}
                        onFilterChange={handleStatusFilterChange}
                        onClearFilters={clearAllFilters}
                        hasData={data.length > 0}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-[#E6F1FD]' : 'bg-white'}>
                {columns.map(column => (
                  <td
                    key={column.key}
                    className={`px-4 py-3 whitespace-nowrap ${
                      column.key === 'actions' ? 'text-center' : 'text-left'
                    }`}
                  >
                    <TableCell
                      item={item}
                      column={column}
                      isFirstColumn={column.key === columns[0].key}
                      showAvatar={showAvatar}
                      availableActions={availableActions}
                      onStatusToggle={handleStatusToggle}
                      onView={onView}
                      onEdit={onEdit}
                      onFilter={onFilter}
                      onDelete={onDelete}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
