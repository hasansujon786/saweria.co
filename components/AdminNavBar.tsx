import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { HeroLogoSmall } from './HeroLogo'
import { Button } from './ui/button'

export const AdminNavBar = (props: {}) => {
  return (
    <div className='h-24 mb-6 flex justify-between items-center'>
      <Link href='/admin'>
        <HeroLogoSmall />
      </Link>
      <Button size='md' variant='muted'>
        <Avatar>
          <AvatarImage src='' />
          <AvatarFallback className='bg-[#669093]'>U</AvatarFallback>
        </Avatar>
        <span className='pl-3'>username123</span>
      </Button>
    </div>
  )
}
