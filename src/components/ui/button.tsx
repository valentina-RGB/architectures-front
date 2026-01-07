import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { buttonVariants } from './button-variants'
import type { ButtonProps } from '@/interfaces/ui/buttonsProps.Interface'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, leftIcon, rightIcon, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
        {leftIcon && <span className="flex items-center">{leftIcon}</span>}

        {children}

        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export { Button }
