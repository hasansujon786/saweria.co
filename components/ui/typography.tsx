import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
}

export const H1 = ({ children, className }: Props) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl tracking-tight lg:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  )
}

export const H2 = ({ children, className }: Props) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 text-3xl tracking-tight lg:text-4xl',
        className
      )}
    >
      {children}
    </h2>
  )
}

export const H3 = ({ children, className }: Props) => {
  return <h3 className={cn('text-3xl font-medium', className)}>{children}</h3>
}

export const H4 = ({ children, className }: Props) => {
  return <h3 className={cn('text-2xl font-medium', className)}>{children}</h3>
}

export const Mono = ({ children, className }: Props) => {
  return <p className={cn('font-mono', className)}>{children}</p>
}
