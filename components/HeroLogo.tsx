import { appName } from '@/constants/strings'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const HeroLogo = () => {
  return (
    <div className='text-center flex flex-col items-center'>
      <Image
        width={280}
        height={100}
        src='/assets/svg/homepage_characters.svg'
        className='pt-4'
        alt='homepage_characters'
      />
      <h1 className='font-sans text-4xl lg:text-6xl font-extralight tracking-tight'>
        {appName}
      </h1>
    </div>
  )
}

export const HeroLogoSmall = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-end', className)}>
      <Image
        width={80}
        height={80}
        src='/assets/svg/homepage_characters.svg'
        alt='homepage_characters'
        className=''
      />
      <h1 className='font-sans text-4xl font-extralight tracking-tight'>
        {appName}
      </h1>
    </div>
  )
}
