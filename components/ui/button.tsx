import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center relative focus-ring',
    'text-xl font-mono border border-black',
    'disabled:opacity-50 disabled:pointer-events-none',
    'before:bg-[#222] before:absolute before:h-full before:w-full before:-z-10',
    'before:top-[var(--sdw-gap)] before:left-[var(--sdw-gap)] before:rounded-md rounded-md',
    'before:transition-transform active:before:-translate-y-[3px] active:before:-translate-x-[3px]'
  ),
  {
    variants: {
      variant: {
        default: 'bg-primary text-black',
        secondary: 'bg-secondary text-secondary-foreground',
        muted: 'bg-layer-gray text-black'
        // destructive: 'bg-destructive text-destructive-foreground',
        // outline:
        //   'border border-input hover:bg-accent hover:text-accent-foreground',
        // ghost: 'hover:bg-accent hover:text-accent-foreground',
        // link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-12 px-5 py-2',
        lg: 'h-20 px-5 flex-1 py-2',
        md: 'h-16 px-5 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
