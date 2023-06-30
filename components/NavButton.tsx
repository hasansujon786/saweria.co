import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AppRoutes, demoUser } from '@/constants/strings'
import { useRouter } from 'next/navigation'
import { ColorBox } from './ui/ColorBox'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

export default function NavButton() {
  const router = useRouter()

  const handleLogout = () => {
    console.log('logout')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus-ring rounded-md'>
        <Button tabIndex={-1} size='md' variant='muted'>
          <Avatar>
            <AvatarImage src='' />
            <AvatarFallback className='bg-[#669093]'>U</AvatarFallback>
          </Avatar>
          <span className='pl-3'>{demoUser.userName}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='bg-transparent border-none shadow-none'>
        <ColorBox shadowSize='sm' className='py-1 px-0 min-w-[200px] font-mono'>
          <DropdownMenuItem
            onClick={() => router.push(AppRoutes.profile)}
            className='text-lg px-3 rounded-none'
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleLogout}
            className='text-lg px-3 rounded-none'
          >
            Logout
          </DropdownMenuItem>
        </ColorBox>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
