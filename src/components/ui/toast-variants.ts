import { cva } from 'class-variance-authority'

export const toastVariants = cva(
  `
   group pointer-events-auto relative flex w-full items-center justify-center text-center
  overflow-hidden rounded-lg border py-4 px-9 shadow-lg transition-all
  `,
  {
    variants: {
      variant: {
        default: 'border border-gray-200 bg-white text-gray-800',
        destructive: 'border border-red-100 bg-red-100 text-red-800',
        success: 'border border-[#D6F0E0] bg-[#D6F0E0] text-[#0D6832]',
        info: 'border border-blue-200 bg-blue-50 text-blue-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)
