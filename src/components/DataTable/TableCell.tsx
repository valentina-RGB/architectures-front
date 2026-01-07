import { User } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import ActionButtons from './ActionButtons'
import type { TableCellProps } from '@/interfaces/ui/tableProps.Interface'

export default function TableCell({
  item,
  column,
  isFirstColumn,
  showAvatar,
  availableActions,
  onStatusToggle,
  onView,
  onEdit,
  onFilter,
  onDelete,
}: TableCellProps) {
  if (column.key === 'status') {
    return (
      <Switch
        checked={item.status as boolean}
        onCheckedChange={() => onStatusToggle(item.id, item.status as boolean)}
        className="data-[state=checked]:bg-slate-900"
      />
    )
  }

  if (column.key === 'actions') {
    return (
      <ActionButtons
        itemId={item.id}
        availableActions={availableActions}
        onView={onView}
        onEdit={onEdit}
        onFilter={onFilter}
        onDelete={onDelete}
      />
    )
  }

  if (isFirstColumn) {
    return (
      <div className="flex items-center gap-3">
        {showAvatar && (
          <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-100">
            <User className="h-6 w-6 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}
        <span className="font-normal text-gray-900">{item[column.key]}</span>
      </div>
    )
  }

  return <span className="text-gray-700">{item[column.key]}</span>
}
