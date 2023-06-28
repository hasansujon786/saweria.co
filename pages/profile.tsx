import { Card } from '@/components/ui/Card'
import { ColorBox } from '@/components/ui/ColorBox'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, IconButton } from '@/components/ui/button'
import { BaseInput, FormElement, Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { H3 } from '@/components/ui/typography'
import { applink, demoUser } from '@/constants/strings'
import AdminLayout from '@/layouts/admin'
import { cn } from '@/lib/utils'
import { Copy, ExternalLink, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className='space-y-8'>
      <UpdateProfileCard />
      <div className='grid grid-cols-2 gap-8'>
        <PageSettings />
        <PreviewCard />
        <PasswordSettings />
        <TwoFactorAuthentication />
      </div>
    </div>
  )
}

Profile.getLayout = AdminLayout

const UpdateProfileCard = () => {
  return (
    <Card>
      <div className='grid grid-cols-[240px_auto] gap-6'>
        <section className='relative z-0 flex flex-col items-center'>
          <div className='aspect-square w-36'>
            <Avatar className='w-full h-full'>
              <AvatarImage src='' />
              <AvatarFallback className='bg-gray-700 text-6xl text-white'>
                {demoUser.userName.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* for='file_input' */}
          <div className='mb-[22px] mt-5'>
            <input
              // accept='image/*'
              type='file'
              accept='.png, .jpeg, .webp, .gif, .bmp, .jpg, .svg'
              className={cn(
                'block w-full text-base text-gray-900 pb-1.5 border-b border-input cursor-pointer focus-ring'
              )}
            />
          </div>
          <Button className='w-full' variant='secondary'>
            Ganti Gambar
          </Button>
        </section>
        <section className='flex-1 relative z-0 flex flex-col justify-end'>
          <H3 className='mb-auto'>Informasi User</H3>
          <Input label='Username:' />
          <Input label='Email:' />
          <div className='flex justify-end'>
            <Button className='px-20' variant='secondary'>
              Ubah
            </Button>
          </div>
        </section>
      </div>
    </Card>
  )
}

const PageSettings = () => {
  return (
    <Card>
      <H3>Pengaturan Halaman</H3>
      <p className='text-red-500'>
        Halaman saweria akan berubah 3 menit setelah terganti.
      </p>

      <div className='flex items-center'>
        <p className='mr-2'>URL:</p>
        <p>{`${applink}/${demoUser.userName}`}</p>

        <div className='ml-auto space-x-2'>
          <IconButton>
            <Copy size={18} />
          </IconButton>

          <IconButton>
            <ExternalLink size={18} />
          </IconButton>
        </div>
      </div>
      <FormElement label='Pesan:' required>
        <Textarea className='rounded-md mt-1' />
      </FormElement>

      <div className='flex items-center gap-2'>
        <p className='text-lg'>Atur tombol quick amount:</p>
        <IconButton>
          <Plus size={20} />
        </IconButton>
      </div>

      {['Rp 5.000', 'Rp 10.000', 'Rp 25.000', 'Rp 100.000'].map((rp) => (
        <div key={rp} className='flex items-center gap-2'>
          <Input defaultValue={rp} />
          <IconButton>
            <Trash2 size={18} />
          </IconButton>
        </div>
      ))}

      <p className='text-lg'>Media sosial:</p>
      {[
        'facebook.com',
        'instagram.com',
        'twitch.tv',
        'twitter.com',
        'youtube.com',
      ].map((link) => (
        <div key={link} className='flex items-end mt-1'>
          <p className='pb-2'>{link}/</p>
          <div className='flex-1'>
            <BaseInput />
          </div>
        </div>
      ))}

      <div className='z-0 relative mt-8'>
        <Button className='w-full' variant='secondary'>
          Simpan
        </Button>
      </div>
    </Card>
  )
}

const PreviewCard = () => {
  return (
    <div className='space-y-3'>
      <H3>Preview:</H3>
      <div className='flex items-center gap-3'>
        <Avatar className='w-16 h-16'>
          <AvatarImage src='' />
          <AvatarFallback className='bg-gray-700 text-4xl text-white leading-none'>
            {demoUser.userName.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <H3>{demoUser.userName}</H3>
      </div>

      <Card className='space-y-4 max-w-sm'>
        <div className='bg-gray-300 h-6 animate-pulse'></div>
        <div className='bg-gray-300 h-6 animate-pulse'></div>
        <div className='relative z-0 flex flex-wrap gap-3'>
          {['bg-secondary', 'bg-blue-400', 'bg-primary', 'bg-purple-400'].map(
            (t) => (
              <div className='flex-1'>
                <Button className={cn('w-full px-8', t)}>5k</Button>
              </div>
            )
          )}
        </div>
        <div className='bg-gray-300 h-6 animate-pulse'></div>
        <div className='bg-gray-300 h-6 animate-pulse'></div>
        <div className='relative z-0 flex'>
          <ColorBox className='bg-[#C6B392]' shadowSize='sm'>
            <div className='w-32 h-16'>
              <Image
                className='w-full h-full object-cover'
                alt='qrid logo'
                width={100}
                height={100}
                src='/assets/qris.webp'
              />
            </div>
          </ColorBox>
        </div>
      </Card>
    </div>
  )
}

const PasswordSettings = () => {
  return (
    <Card>
      <H3 className='mb-4'>Password:</H3>
      <Input label='Password lama:' />
      <Input label='Password baru:' />
      <Input label='Konfirmasi password baru:' />

      <div className='z-0 relative mt-2'>
        <Button className='w-full' variant='secondary'>
          Ganti
        </Button>
      </div>
    </Card>
  )
}

const TwoFactorAuthentication = () => {
  return (
    <Card>
      <div className='space-y-2'>
        <H3 className='mb-4'>2 Factor Authentication</H3>
        <p>Status: Belum Terpasang</p>
        <p className='text-red-500'>
          Jangan hapus aplikasi Google Authenticator/Authy setelah mengaktifkan
          2FA.
        </p>
      </div>

      <div className='z-0 relative mt-2'>
        <Button variant='secondary'>Pasang 2FA</Button>
      </div>
    </Card>
  )
}
