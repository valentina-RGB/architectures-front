import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import { toastVariants } from './toast-variants'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      `
      fixed top-4 left-1/2 -translate-x-1/2 
      flex flex-col items-center
      w-auto max-w-[420px] space-y-2
      z-[9999]
      pointer-events-none
      !bottom-auto !right-auto
      `,
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants> & {
      duration?: number
    }
>(({ className, variant, duration = 3000, ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    duration={duration}
    className={cn(
      toastVariants({ variant }),
      `
        min-w-[400px]
        transition-all duration-300
        data-[state=open]:opacity-100 data-[state=open]:translate-y-0
        data-[state=closed]:opacity-0 data-[state=closed]:-translate-y-2
      `,
      `
        data-[state=open]:animate-[toast-in_0.25s_ease-out]
        data-[state=closed]:animate-[toast-out_0.25s_ease-in]
      `,
      className
    )}
    {...props}
  />
))

Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      `
      inline-flex h-8 shrink-0 items-center justify-center rounded-md border
      bg-transparent px-3 text-sm font-medium ring-offset-background
      transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50
      `,
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      `
      absolute right-2 top-2 rounded-md p-1 text-gray-500
      opacity-0 transition-opacity group-hover:opacity-100
      hover:text-gray-800 focus:outline-none focus:ring-2
      focus:ring-offset-2 focus:ring-gray-400
      `,
      className
    )}
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
