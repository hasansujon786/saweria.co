import Qris from '@/components/Qris'
import { Card } from '@/components/ui/Card'
import { ColorBox } from '@/components/ui/ColorBox'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button, IconButton } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { H3, H4 } from '@/components/ui/typography'
import { applink, demoUser } from '@/constants/strings'
import { Facebook, Instagram, Twitch, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'

export default function UserName() {
  return (
    <div className='pt-12 space-y-8'>
      <div className='flex gap-x-6 items-center '>
        <div className='aspect-square w-36'>
          <Avatar className='w-full h-full'>
            <AvatarImage src='' />
            <AvatarFallback className='bg-gray-700 text-6xl text-white'>
              {demoUser.userName.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className='space-y-1'>
          <H3>{demoUser.userName}</H3>
          <div className='flex gap-2 -ml-3'>
            <IconButton className='rounded-full'>
              <Facebook />
            </IconButton>
            <IconButton className='rounded-full'>
              <Instagram />
            </IconButton>
            <IconButton className='rounded-full'>
              <Twitch />
            </IconButton>
            <IconButton className='rounded-full'>
              <Twitter />
            </IconButton>
            <IconButton className='rounded-full'>
              <Youtube />
            </IconButton>
          </div>
          <p>description</p>
        </div>
      </div>
      <Card className='space-y-2'>
        <Input required label='Nominal:' placeholder='Ketik jumlah dukungan' />
        <div className=''>
          <p className='mb-2'>
            Minimum alert: <span className='text-red-500'>Rp 10.000</span>
          </p>
          <div className='relative z-0 flex flex-wrap gap-3'>
            {['5k', '10k', '25k', '100k'].map((t) => (
              <Button className='quick_ammount_btn'>{t}</Button>
            ))}
          </div>
        </div>
        <div className='pt-2'>
          <Label>Dari:</Label>
          <div className='flex relative z-0'>
            <ColorBox shadowSize='none' className='bg-layer-yellow py-3'>
              {demoUser.userName}
            </ColorBox>
          </div>
        </div>

        <div>
          <Input required label='Pesan:' placeholder='Selamat pagi' />
          <div className='space-y-3'>
            <Checkbox label='Saya berusia 17 tahun atau lebih.' id='one' />
            <Checkbox
              label={`Saya setuju bahwa dukungan ini diberikan secara sukarela dan bukan sebagai imbalan atas kegiatan komersial, sesuai dengan syarat dan ketentuan ${applink}`}
              id='two'
            />
          </div>
        </div>

        <div className='pt-4'>
          <H4>Moda pembayaran:</H4>
          <div className='flex mt-4 gap-6'>
            <div className='flex flex-col items-center gap-y-4'>
              <Qris />
              <button className='underline focus-ring'>
                Tampilkan lainnya
              </button>
            </div>
            <div className='flex-1'>
              <Image
                width={300}
                height={140}
                alt='list_qris_payable'
                src='/assets/list_qris_payable.webp'
                className='object-cover h-full w-full'
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
