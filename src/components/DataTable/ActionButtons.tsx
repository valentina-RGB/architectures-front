import { Button } from '@/components/ui/button'
import See from '@/assets/images/icons/black/see.png'
import Edit from '@/assets/images/icons/black/edit.png'
import Filter from '@/assets/images/icons/black/filter.png'
import Delete from '@/assets/images/icons/black/delete.png'
import type { ActionButtonsProps } from '@/interfaces/ui/tableProps.Interface'

export default function ActionButtons({
  itemId,
  availableActions,
  onView,
  onEdit,
  onFilter,
  onDelete,
}: ActionButtonsProps) {
  const actions = [
    { name: 'view', icon: See, alt: 'View', handler: onView },
    { name: 'edit', icon: Edit, alt: 'Edit', handler: onEdit },
    { name: 'filter', icon: Filter, alt: 'Filter', handler: onFilter },
    { name: 'delete', icon: Delete, alt: 'Delete', handler: onDelete },
  ]

  return (
    <div className="flex items-center justify-center gap-0">
      {actions.map(
        action =>
          availableActions.includes(action.name) && (
            <Button
              key={action.name}
              variant="ghost"
              size="sm"
              onClick={() => action.handler?.(itemId)}
              className="h-8 w-8 p-0 hover:bg-gray-100"
            >
              <img src={action.icon || '/placeholder.svg'} alt={action.alt} className="h-5 w-5" />
            </Button>
          )
      )}
    </div>
  )
}
