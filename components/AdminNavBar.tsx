import Link from 'next/link'
import { HeroLogoSmall } from './HeroLogo'
import NavButton from './NavButton'

export const AdminNavBar = () => {
  return (
    <div className='h-24 mb-6 flex justify-between items-center'>
      <Link href='/admin'>
        <HeroLogoSmall />
      </Link>
      <NavButton />
    </div>
  )
}
