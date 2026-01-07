import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogDescription,
} from '@/components/ui/alert-dialog'
import type { AlertsDialogsProps } from '@/interfaces/ui/alert.Interface'

export default function AlertsDialogs({
  trigger,
  title,
  description,
  confirmLabel = 'Aceptar',
  cancelLabel = 'Cancelar',
  onConfirm,
}: AlertsDialogsProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogTitle>{title}</AlertDialogTitle>

        {description ? (
          <AlertDialogDescription>{description}</AlertDialogDescription>
        ) : (
          <VisuallyHidden>
            <AlertDialogDescription> </AlertDialogDescription>
          </VisuallyHidden>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>{confirmLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
