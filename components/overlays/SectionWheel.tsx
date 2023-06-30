import {
  ColorInput,
  FontInput,
  UrlFooterBox,
} from '@/components/overlays/shared'
import { Card } from '@/components/ui/Card'
import { Button, IconButton } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { H4 } from '@/components/ui/typography'
import { ColorBox } from '../ui/ColorBox'
import { CreateVotingOptions } from './SectionVoting'

export const SectionWheel = () => {
  const onBringupNotification = () => {
    console.log('hanlde BringupNotification here')
  }
  return (
    <div className='grid grid-cols-1 gap-8'>
      <div>
        <p className='mb-4'>
          Gunakan overlay ini untuk menampilkan Wheel of Prizes. Roda akan
          berputar setelah milestone dukungan tercapai!
        </p>
        <ColorBox className='bg-primary space-y-2'>
          <p className='text-center'>???</p>
          {/* TODO: add animation */}
          <div className='bg-white h-3'>
            <span
              style={{ width: '10%' }}
              className='bg-blue-500 h-full block'
            ></span>
          </div>
          <p className='text-center'>Rp 10.000/Rp 100.000</p>
        </ColorBox>
      </div>

      <Card>
        <div className='flex items-center mb-3'>
          <H4 className='mr-1'>Tampilan:</H4>
          <IconButton>
            {/* add button hover */}
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              aria-hidden='true'
              focusable='false'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='none'
                stroke='#000'
                stroke-width='2'
                d='M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9'
              ></path>
            </svg>
          </IconButton>
        </div>

        <div className='grid grid-cols-3 gap-x-4 gap-y-4'>
          <Input label='Putar saat dukungan mencapai:' defaultValue='100000' />
          <div className='self-end'>
            <Input label='Jumlah awal:' defaultValue='10000' />
          </div>
          <div className='self-end'>
            <FontInput />
          </div>

          <Input label='Besar Font:' defaultValue={16} />

          <ColorInput label='Warna Teks:' defaultValue='#333333' />
          <ColorInput label='Warna Background:' defaultValue='#faae2b' />
        </div>

        <div className='mt-4'>
          <CreateVotingOptions label='Pilihan Wheel of Prizes:' />
        </div>

        <div className='relative z-0 mt-4'>
          <Button variant='secondary'>Simpan Tampilan</Button>
        </div>
      </Card>

      <UrlFooterBox
        bringUpNotification={onBringupNotification}
        url='https://saweria.co/widgets/wheel?streamKey=c1e89a4cda4c630338c854cd9e9c8d74'
      />
    </div>
  )
}
