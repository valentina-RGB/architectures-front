import { useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import Filter from '@/assets/images/icons/black/filter.png'
import type { StatusFilterProps } from '@/interfaces/ui/tableProps.Interface'

export default function StatusFilter({
  isOpen,
  onToggle,
  statusFilter,
  onFilterChange,
  onClearFilters,
  hasData,
}: StatusFilterProps) {
  const filterRef = useRef<HTMLDivElement>(null)
  const hasActiveFilters = statusFilter.active || statusFilter.inactive

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        onToggle()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onToggle])

  return (
    <div className="relative" ref={filterRef}>
      <button
        onClick={e => {
          e.stopPropagation()
          if (hasData) {
            onToggle()
          }
        }}
        disabled={!hasData}
        className={`p-1 rounded transition-colors ${
          !hasData ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'
        }`}
      >
        <img src={Filter || '/placeholder.svg'} alt="Filter" className="h-4 w-4" />
      </button>

      {isOpen && hasData && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-4 z-[9999] min-w-[200px]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">Filter Status</span>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-4 w-4 text-blue-600" />
              </button>
            )}
          </div>
          <div className="space-y-3">
            <FilterCheckbox
              label="Active"
              checked={statusFilter.active}
              onChange={() => onFilterChange('active')}
            />
            <FilterCheckbox
              label="Inactive"
              checked={statusFilter.inactive}
              onChange={() => onFilterChange('inactive')}
            />
          </div>
        </div>
      )}
    </div>
  )
}

function FilterCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
        <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-slate-900 peer-checked:border-slate-900 flex items-center justify-center transition-all">
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm text-gray-900">{label}</span>
    </label>
  )
}
