import { Plus } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import type { TableControlsProps } from '@/interfaces/ui/tableProps.Interface'

export default function TableControls({
  searchTerm,
  onSearchChange,
  itemsPerPage,
  onItemsPerPageChange,
  addButtonText,
  onAdd,
}: TableControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4 py-4 sm:py-3">
      <div className="flex items-center gap-2 order-1 md:order-1">
        <span className="text-sm font-medium text-gray-700 ml-5">Ver</span>
        <Select
          value={itemsPerPage.toString()}
          onValueChange={value => onItemsPerPageChange(Number(value))}
        >
          <SelectTrigger className="min-w-12 h-8 bg-[#E0E0E0]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-auto order-2 md:order-2">
        <div className="relative w-full md:w-64">
          <Input
            placeholder="Buscar..."
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full h-8 pl-8 border-gray-300 
             focus:outline-none focus-visible:outline-none 
             focus:ring-0 focus-visible:ring-0 
             focus:ring-offset-0 focus-visible:ring-offset-0"
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <svg
              className="h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-end md:flex-initial md:ml-auto order-1 md:order-3">
        <Button
          onClick={onAdd}
          className="bg-[#4182F9] hover:opacity-90 text-white h-10 min-w-[140px] sm:min-w-[174px] px-3 sm:px-4 text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>{addButtonText}</span>
        </Button>
      </div>
    </div>
  )
}
