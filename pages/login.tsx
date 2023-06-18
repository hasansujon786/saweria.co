import { HeroLogo } from '@/components/HeroLogo'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { H3 } from '@/components/ui/typography'
import Link from 'next/link'

function Login() {
  return (
    <div className='pt-4'>
      <Card>
        <HeroLogo />
        <H3 className='text-center mt-8'>Login</H3>
        <Input label='Email' placeholder='youremail@gmail.com' required />
        <Input label='Password' required />

        <div className='mt-4 gap-x-6 relative z-10 flex justify-between items-center'>
          <a href='' className='text-lg flex-1'>
            Lupa Password
          </a>
          <Button asChild className='flex-1' variant='secondary'>
            <Link href='/admin'>Masuk</Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Login

