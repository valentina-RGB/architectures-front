import type { SortIconProps } from '@/interfaces/ui/tableProps.Interface'
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react'

export default function SortIcon({ columnKey, sortConfig }: SortIconProps) {
  if (!sortConfig || sortConfig.key !== columnKey) {
    return <ArrowUpDown className="h-4 w-4 text-gray-400" />
  }

  return sortConfig.direction === 'asc' ? (
    <ArrowUp className="h-4 w-4 text-slate-900" />
  ) : (
    <ArrowDown className="h-4 w-4 text-slate-900" />
  )
}
