'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const BaseCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border-2 border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <Check className='w-full h-full' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
BaseCheckbox.displayName = CheckboxPrimitive.Root.displayName

export { BaseCheckbox }

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: string
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <div className='items-top flex space-x-2'>
      <BaseCheckbox {...props} />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor={props.id}
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {label}
        </label>
        {/* <p className='text-sm text-muted-foreground'> */}
        {/*   You agree to our Terms of Service and Privacy Policy. */}
        {/* </p> */}
      </div>
    </div>
  )
}
