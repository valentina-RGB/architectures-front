import type { TablePaginationProps } from '@/interfaces/ui/tableProps.Interface'

export default function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
}: TablePaginationProps) {
  const maxPages = Math.max(totalPages, 3)
  const pageNumbers: number[] = Array.from({ length: maxPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-3 py-4 sm:py-6 border-t border-gray-200">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-500 hover:text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        Anterior
      </button>

      {pageNumbers.map(page => (
        <button
          key={page}
          onClick={() => page <= totalPages && onPageChange(page)}
          disabled={page > totalPages}
          className={`px-2 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md transition-colors ${
            currentPage === page && page <= totalPages
              ? 'bg-[#002552] text-white hover:bg-slate-800'
              : page > totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#E0E0E0] text-gray-700 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-500 hover:text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        Siguiente
      </button>
    </div>
  )
}
