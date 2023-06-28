import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

const boxContainerVarients = cva(
  cn(
    'relative rounded-md group hover:focus-visible:ring-0',
    'before:top-4 before:left-8',
    'before:bg-[#222] before:absolute before:rounded-md before:h-full before:w-full before:-z-10'
  ),
  {
    variants: {
      shadowSize: {
        default: 'before:top-2.5 before:left-2.5',
        sm: 'before:top-1 before:left-1',
        none: 'before:top-0 before:left-0',
      },
    },
    defaultVariants: {
      shadowSize: 'default',
    },
  }
)

interface ColorBoxProps extends VariantProps<typeof boxContainerVarients> {
  children?: React.ReactNode
  className?: string
  href?: Url
  containerClassNames?: string
}

export const ColorBox = ({
  href,
  containerClassNames,
  className,
  children,
  shadowSize,
  ...props
}: ColorBoxProps) => {
  const isLink = !!href
  const Comp = isLink ? Link : 'div'
  return (
    <Comp
      href={isLink ? href : ''}
      className={cn(
        boxContainerVarients({ shadowSize, className: containerClassNames }),
        {
          'before:transition-transform before:duration-100 ease-out hover:before:-translate-y-[4px] hover:before:-translate-x-[4px]':
            isLink,
        }
      )}
      {...props}
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
