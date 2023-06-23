import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import * as React from 'react'

export interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  disableWhenReadonly?: boolean
}

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, type, disableWhenReadonly = true, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 py-2 w-full border-b border-input bg-transparent text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:outline-none focus-visible:border-blue-500 focus-visible:border-b-2',
          // 'ring-offset-background focus-visible:ring-b focus-visible:ring-ring focus-visible:ring-offset-2 ',
          className,
          {
            'read-only:border-transparent read-only:focus-visible:border-transparent':
              disableWhenReadonly,
          }
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
    <FormElement label={label} message={message} {...props}>
      <BaseInput
        className='placeholder:text-gray-400'
        type='email'
        {...props}
      />
    </FormElement>
  )
}

export const FormElement = ({ label, message, ...props }: InputProps) => {
  return (
    <div className='flex flex-col justify-between h-full w-full utline outline-red-400 '>
      {label && (
        <Label htmlFor={props.id}>
          {label} {props.required && <span className='text-red-500'>*</span>}
        </Label>
      )}
      {props.children}
      <p className='mt-0.5 min-h-[20px] text-sm text-muted-foreground'>
        {message}
      </p>
    </div>
  )
}
