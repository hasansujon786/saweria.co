import {
  ColorInput,
  FontInput,
  UrlFooterBox,
} from '@/components/overlays/shared'
import { Card } from '@/components/ui/Card'
import { Button, IconButton } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { H4 } from '@/components/ui/typography'
import { applink, demoUser } from '@/constants/strings'
import QRCode from 'react-qr-code'
import { ColorBox } from '../ui/ColorBox'

export const SectionQrCode = () => {
  return (
    <div className='grid grid-cols-1 gap-8'>
      <div>
        <p className='mb-4'>QR yang menunjuk ke halaman saweriamu!</p>
        <div className='max-w-xs mx-auto'>
          <ColorBox className='bg-primary aspect-square'>
            <QRCode
              bgColor='transparent'
              value={`${applink}/${demoUser.userName}`}
              style={{ width: '100%', height: '100%' }}
            />
          </ColorBox>
        </div>
      </div>

      <Card>
        <div className='flex items-center mb-2'>
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

        <div className='grid grid-cols-3 gap-x-4 gap-y-4 mt-8'>
          <ColorInput label='Warna Background:' defaultValue='#faae2b' />
          <ColorInput label='Warna Barcode:' defaultValue='#000' />

          <Input label='Label atas:' />
          <Input label='Label bawah:' />
          <FontInput />
        </div>

        <div className='relative z-0 '>
          <Button variant='secondary'>Simpan Tampilan</Button>
        </div>
      </Card>

      <UrlFooterBox url='https://saweria.co/widgets/qr?streamKey=c1e89a4cda4c630338c854cd9e9c8d74' />
    </div>
  )
}
