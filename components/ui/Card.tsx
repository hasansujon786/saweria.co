import { cn } from '@/lib/utils'
import React from 'react'

type CardProps = {
  children: React.ReactNode
  className?: string
  label?: string
  labelSeconday?: boolean
}
const beforeClasses =
  'before:bg-[#222] before:absolute before:top-3 before:left-3 before:rounded-md before:-z-10 before:h-full before:w-full'

export const Card = (props: CardProps) => {
  return (
    <div
      className={cn(
        'relative border rounded-md border-black bg-layer-gray px-4 py-5 ',
        beforeClasses,
        props.className,
        { 'mt-10 !rounded-tr-none': !!props.label }
      )}
    >
      {props.label && (
        <span
          className={cn(
            'absolute border rounded-md border-black px-4 py-1 bottom-full -right-px',
            beforeClasses,
            '!rounded-b-none before:!h-[150%] before:w-full',
            {
              'bg-layer-red': !props.labelSeconday,
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
