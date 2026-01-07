import Pencil from '@/assets/images/icons/black/pencil.svg'
import type { InfoCardProps } from '@/interfaces/ui/infoCard.Interface'

export function InfoCard({
  title,
  subtitle,
  fields,
  onEdit,
  showEditButton = true,
  className = '',
}: InfoCardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 max-w-lg ${className}`}>
      <div className="flex items-start justify-between px-8 pt-6 pb-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900 text-left">{title}</h2>
          {subtitle && <p className="text-sm text-gray-400 mt-1 text-left">{subtitle}</p>}
        </div>
        {showEditButton && onEdit && (
          <button
            onClick={onEdit}
            className="text-gray-400 hover:text-gray-600 transition-colors ml-4"
            aria-label="Editar"
          >
            <img src={Pencil} className="w-4 h-4" />
          </button>
        )}
      </div>

      <div>
        {fields.map((field, index) => (
          <div key={index} className="flex items-start py-4 px-8 border-t border-gray-200">
            <span className="text-sm font-medium text-gray-900 min-w-[180px] text-left">
              {field.label}:
            </span>
            <span className="text-sm text-gray-700 flex-1 text-center">{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
