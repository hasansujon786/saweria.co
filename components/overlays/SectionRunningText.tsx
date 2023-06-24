import { ColorInput, UrlFooterBox } from '@/components/overlays/shared'
import { Card } from '@/components/ui/Card'
import { Button, IconButton } from '@/components/ui/button'
import { BaseCheckbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { H4 } from '@/components/ui/typography'
import { ColorBox } from '../ui/ColorBox'

export const SectionRunningText = () => {
  return (
    <div className='grid grid-cols-1 gap-8'>
      <div>
        <p className='mb-4'>
          Gunakan overlay ini untuk melihat 5 transaksi terakhir di 1 bulan
          terakhir.
        </p>
        <ColorBox className='bg-primary'>
          {/* TODO: add animation */}
          <p className='text-center'>
            dukung di https://saweria.co/hasanmahmud7152 |{' '}
          </p>
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
          <div className='flex flex-col gap-3'>
            <Label>Tanpa Border:</Label>
            <BaseCheckbox className='ml-0.5 h-6 w-6' />
          </div>
          <div className='flex flex-col gap-3'>
            <Label>Tanpa Jumlah Uang:</Label>
            <BaseCheckbox className='ml-0.5 h-6 w-6' />
          </div>
          <Input label='Kecepatan:' defaultValue='100' />

          <ColorInput label='Warna Background:' defaultValue='#faae2b' />
          <ColorInput label='Warna Teks:' defaultValue='#333333' />
          <Input label='Tebal Teks:' defaultValue={500} />

          <div className='col-span-full'>
            <Input
              label='Tambahan:'
              defaultValue='dukung di https://saweria.co/username'
            />
          </div>
        </div>

        <div className='relative z-0 '>
          <Button variant='secondary'>Simpan Tampilan</Button>
        </div>
      </Card>

      {/* // TODO: remove 3rd button */}
      <UrlFooterBox url='https://saweria.co/widgets/recent?streamKey=c1e89a4cda4c630338c854cd9e9c8d74' />
    </div>
  )
}
