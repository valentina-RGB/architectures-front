import AppAlertDialog from '@/components/AlertDialog/AlertsDialogs'
import { Button } from '@/components/ui/button'

export default function AlertPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <AppAlertDialog
        title="¿Estás segura de eliminar este item?"
        confirmLabel="Sí"
        trigger={<Button className="bg-red-500 text-white px-6 py-2">Delete Item</Button>}
        onConfirm={() => console.log('Item eliminado')}
      />

      <AppAlertDialog
        title="Advertencia importante"
        trigger={<Button className="bg-yellow-500 text-white px-6 py-2">Remove User</Button>}
        onConfirm={() => console.log('Usuario removido')}
      />

      <AppAlertDialog
        title="Operación completada"
        description="Ignorenlo, pero se puede llegar a utilizar para notificaciones."
        trigger={<Button className="bg-green-500 text-white px-6 py-2">Success Dialog</Button>}
      />
    </div>
  )
}
