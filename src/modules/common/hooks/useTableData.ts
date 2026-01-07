import { useMemo } from 'react'
import type { TableRow } from '@/interfaces/ui/tableProps.Interface'

interface UseTableDataProps {
  data: TableRow[]
  searchTerm: string
  statusFilter: { active: boolean; inactive: boolean }
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null
}

export function useTableData({ data, searchTerm, statusFilter, sortConfig }: UseTableDataProps) {
  return useMemo(() => {
    let result = data

    // Apply search filter
    if (searchTerm) {
      result = result.filter(item =>
        Object.values(item).some(value =>
          value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    // Apply status filter
    if (statusFilter.active || statusFilter.inactive) {
      result = result.filter(item => {
        if (statusFilter.active && statusFilter.inactive) return true
        if (statusFilter.active) return item.status === true
        if (statusFilter.inactive) return item.status === false
        return true
      })
    }

    // Apply sorting
    if (sortConfig) {
      result = [...result].sort((a, b) => {
        const aValue = a[sortConfig.key]
        const bValue = b[sortConfig.key]

        if (aValue === undefined || aValue === null) return 1
        if (bValue === undefined || bValue === null) return -1

        const aString = aValue.toString().toLowerCase()
        const bString = bValue.toString().toLowerCase()

        if (aString < bString) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (aString > bString) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }

    return result
  }, [data, searchTerm, statusFilter, sortConfig])
}
