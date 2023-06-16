import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  label?: string
  labelSeconday?: boolean
}

export const Card = (props: Props) => {
  return (
    <div
      className={cn(
        'layer layer-full border border-black bg-gray-150 px-4 py-5 rounded-md relative',
        props.className,
        { 'mt-10 rounded-tr-none': !!props.label }
      )}
    >
      {props.label && (
        <span
          className={cn(
            'absolute px-4 py-1 bottom-full -right-px border border-black rounded-md rounded-b-none',
            'layer before:h-[150%] before:w-full',
            {
              'bg-red-300': !props.labelSeconday,
              'bg-secondary': props.labelSeconday,
            }
          )}
        >
          <p className='text-lg font-medium'>{props.label}</p>
        </span>
      )}
      {props.children}
    </div>
  )
}
