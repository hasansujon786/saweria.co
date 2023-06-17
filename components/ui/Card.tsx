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
        'layer layer-full bg-layer-gray px-4 py-5 ',
        props.className,
        { 'mt-10 !rounded-tr-none': !!props.label }
      )}
    >
      {props.label && (
        <span
          className={cn(
            'layer !absolute px-4 py-1 bottom-full -right-px',
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
