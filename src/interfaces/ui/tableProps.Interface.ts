export interface TableColumn {
  key: string
  label: string
  sortable?: boolean
}
export interface DataTableProps {
  columns: TableColumn[]
  data: TableRow[]
  addButtonText: string
  availableActions?: ActionType[]
  showAvatar?: boolean
  onAdd?: () => void
  onView?: (id: string) => void
  onEdit?: (id: string) => void
  onFilter?: (id: string) => void
  onDelete?: (id: string) => void
  onStatusChange?: (id: string, status: boolean) => void
}

export interface TableRow {
  id: string
  status: boolean
  avatar?: string
  [key: string]: string | boolean | number | undefined
}

export type ActionType = 'view' | 'edit' | 'filter' | 'delete'

export interface TableCellProps {
  item: TableRow
  column: TableColumn
  isFirstColumn: boolean
  showAvatar: boolean
  availableActions: string[]
  onStatusToggle: (id: string, currentStatus: boolean) => void
  onView?: (id: string) => void
  onEdit?: (id: string) => void
  onFilter?: (id: string) => void
  onDelete?: (id: string) => void
}

export interface ActionButtonsProps {
  itemId: string
  availableActions: string[]
  onView?: (id: string) => void
  onEdit?: (id: string) => void
  onFilter?: (id: string) => void
  onDelete?: (id: string) => void
}
export interface SortIconProps {
  columnKey: string
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null
}

export interface StatusFilterProps {
  isOpen: boolean
  onToggle: () => void
  statusFilter: { active: boolean; inactive: boolean }
  onFilterChange: (filterType: 'active' | 'inactive') => void
  onClearFilters: () => void
  hasData: boolean
}

export interface TableControlsProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  itemsPerPage: number
  onItemsPerPageChange: (value: number) => void
  addButtonText: string
  onAdd?: () => void
}
export interface TablePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}
