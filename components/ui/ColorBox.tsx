import { cn } from '@/lib/utils'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

type ColorBoxProps = {
  children?: React.ReactNode
  className?: string
  href?: Url
}

export const ColorBox = ({
  href,
  className,
  children,
  ...props
}: ColorBoxProps) => {
  const isLink = !!href
  const Comp = isLink ? Link : 'div'
  return (
    <Comp
      href={isLink ? href : ''}
      className={cn(
        'relative rounded-md group hover:focus-visible:ring-0',
        'before:top-4 before:left-8',
        'before:bg-[#222] before:absolute before:rounded-md before:h-full before:w-full before:-z-10',
        'before:top-2.5 before:left-2.5',
        {
          'before:transition-transform before:duration-100 ease-out hover:before:-translate-y-[4px] hover:before:-translate-x-[4px]':
            isLink,
        }
      )}
    >
      <div
        className={cn(
          'border rounded-md border-black p-4 flex flex-col bg-layer-gray w-full h-full',
          className,
          {
            'transition-transform duration-100 ease-out group-hover:translate-y-[3px] group-hover:translate-x-[3px]':
              isLink,
          }
        )}
      >
        {children}
      </div>
    </Comp>
  )
}
