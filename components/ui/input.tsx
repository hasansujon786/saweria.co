import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import * as React from 'react'

export interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 py-2 w-full border-b border-input bg-transparent text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:outline-none focus-visible:border-blue-500 focus-visible:border-b-2',
          // 'ring-offset-background',
          // 'focus-visible:ring-b focus-visible:ring-ring focus-visible:ring-offset-2 ',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
BaseInput.displayName = 'BaseInput'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  message?: string
}

// TODO: add error state
export const Input = ({ label, message, ...props }: InputProps) => {
  return (
    <div className='grid w-full items-center outline-1 outline-black'>
      {label && (
        <Label className='text-gray-700 text-base mt-4' htmlFor={props.id}>
          {label} {props.required && <span className='text-red-500'>*</span>}
        </Label>
      )}
      <BaseInput
        className='placeholder:text-gray-400'
        type='email'
        {...props}
      />
      <p className='mt-0.5 text-sm text-muted-foreground'>{message}</p>
    </div>
  )
}
