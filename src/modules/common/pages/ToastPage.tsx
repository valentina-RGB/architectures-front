'use client'

import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from '@/components/ui/toast'
import { Button } from '@/components/ui/button'
import { useToast } from '@/modules/common/hooks/useToasts'

const ToastPage = () => {
  const { toasts, toast } = useToast()

  const handleSuccess = () => {
    toast({
      description: 'La operación se realizó correctamente.',
      variant: 'success',
    })
  }
  const handleSuccessLong = () => {
    toast({
      description:
        'La operación se realizó correctamente para crear un super administrador, administrador e instituto.',
      variant: 'success',
    })
  }

  const handleError = () => {
    toast({
      description: 'Ocurrió un problema al procesar la solicitud.',
      variant: 'destructive',
    })
  }

  const handleErrorLong = () => {
    toast({
      description:
        'Ocurrió un problema al procesar la solicitud para crear un super administrador, administrador e instituto.',
      variant: 'destructive',
    })
  }

  return (
    <ToastProvider>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center space-y-8">
          <div className="flex gap-4 justify-center">
            <Button className="bg-[#D6F0E0] text-[#0d6832]" onClick={handleSuccess}>
              Toast corto
            </Button>
            <Button className="bg-[#D6F0E0] text-[#0d6832]" onClick={handleSuccessLong}>
              Toast largo
            </Button>
            <Button
              className="border-red-100 bg-red-100 text-red-800 hover:bg-red-300"
              onClick={handleError}
            >
              Toast error corto
            </Button>
            <Button
              className="border-red-100 bg-red-100 text-red-800 hover:bg-red-300"
              onClick={handleErrorLong}
            >
              Toast error largo
            </Button>
          </div>
        </div>
      </div>
      {toasts.map(t => (
        <Toast key={t.id} {...t} duration={4000}>
          {t.title && <ToastTitle>{t.title}</ToastTitle>}
          {t.description && <ToastDescription>{t.description}</ToastDescription>}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}

export default ToastPage
