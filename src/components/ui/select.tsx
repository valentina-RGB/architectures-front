'use client'

import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type {
  SelectContentProps,
  SelectContextType,
  SelectItemProps,
  SelectProps,
  SelectTriggerProps,
  SelectValueProps,
} from '@/interfaces/ui/selectProps.Interface'

const SelectContext = React.createContext<
  (SelectContextType & { fullWidth?: boolean }) | undefined
>(undefined)

const useSelectContext = () => {
  const context = React.useContext(SelectContext)
  if (!context) {
    throw new Error('Los componentes Select deben usarse dentro de un Select')
  }
  return context
}

const Select = ({
  value = '',
  onValueChange,
  children,
  disabled = false,
  fullWidth = false,
}: SelectProps) => {
  const [open, setOpen] = React.useState(false)
  const triggerRef = React.useRef<HTMLButtonElement | null>(null)

  const contextValue = React.useMemo(
    () => ({
      value,
      onValueChange: onValueChange || (() => {}),
      open,
      setOpen,
      triggerRef,
      disabled,
      fullWidth,
    }),
    [value, onValueChange, open, disabled, fullWidth]
  )

  return (
    <SelectContext.Provider value={contextValue}>
      <div className="relative inline-block w-full">{children}</div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, triggerRef, disabled } = useSelectContext()

    React.useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement)

    return (
      <button
        type="button"
        ref={triggerRef}
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:outline-none',
          className
        )}
        {...props}
      >
        {children}
        <svg
          className={cn(
            'h-2.5 w-2.5 text-[#9E9E9E] transition-transform',
            open && 'rotate-180 opacity-70'
          )}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.482a1 1 0 0 1-1.506 0z" />
        </svg>
      </button>
    )
  }
)

SelectTrigger.displayName = 'SelectTrigger'

const SelectValue = ({ placeholder, className }: SelectValueProps) => {
  const { value } = useSelectContext()

  return <span className={cn('block truncate', className)}>{value || placeholder}</span>
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const { open, setOpen, triggerRef, fullWidth } = useSelectContext()
    const contentRef = React.useRef<HTMLDivElement | null>(null)

    React.useImperativeHandle(forwardedRef, () => contentRef.current as HTMLDivElement)

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node
        if (
          contentRef.current &&
          !contentRef.current.contains(target) &&
          triggerRef.current &&
          !triggerRef.current.contains(target)
        ) {
          setOpen(false)
        }
      }

      if (open) {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [open, setOpen, triggerRef])

    if (!open) return null

    return (
      <div
        ref={contentRef}
        className={cn(
          'absolute mt-1 z-50 rounded-md border-gray-300 bg-white shadow-md animate-in fade-in-0 zoom-in-95',
          fullWidth ? 'w-full' : 'min-w-32',
          className
        )}
        {...props}
      >
        <div className="p-1">{children}</div>
      </div>
    )
  }
)

SelectContent.displayName = 'SelectContent'

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const { value: selectedValue, onValueChange, setOpen, disabled } = useSelectContext()
    const isSelected = selectedValue === value

    const handleClick = () => {
      if (!disabled) {
        onValueChange(value)
        setOpen(false)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100',
          isSelected && 'font-medium bg-gray-50',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {isSelected && <Check className="h-4 w-4" />}
        </span>
        <span className="block truncate">{children}</span>
      </div>
    )
  }
)

SelectItem.displayName = 'SelectItem'

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
