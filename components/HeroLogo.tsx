import { appName } from '@/constants/strings'
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
      <h1 className='mt-1 font-sans text-4xl lg:text-6xl font-extralight tracking-tight'>
        {appName}
      </h1>
    </div>
  )
}
