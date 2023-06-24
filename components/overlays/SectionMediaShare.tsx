import {
  BannerPreviewBox,
  ColorInput,
  FontInput,
  UrlFooterBox,
} from '@/components/overlays/shared'
import { Card } from '@/components/ui/Card'
import { Button, IconButton } from '@/components/ui/button'
import { BaseCheckbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { H4 } from '@/components/ui/typography'

export const SectionMediaShare = () => {
  return (
    <div className='grid grid-cols-1 gap-8'>
      <div>
        <p className='mb-4'>
          Gunakan overlay ini untuk membolehkan penontonmu mengirimkan youtube
          video untuk ditampilkan pada streammu.
        </p>
        <Card className='grid grid-cols-1 gap-3'>
          <H4>Pengaturan Mediashare:</H4>

          <div className='grid grid-cols-3 gap-4'>
            <div className='flex flex-col gap-3'>
              <Label>Aktifkan media share.</Label>
              <BaseCheckbox className='ml-px h-6 w-6' />
            </div>

            <Input defaultValue='300' label='Maksimum video (detik):' />
            <Input defaultValue='Rp 100' label='Berapa rupiah per detik?' />
          </div>

          <H4>Aturan minimum:</H4>
          <div className='grid grid-cols-3 gap-4'>
            <Input defaultValue='Rp 10.000' label='GIF / media share:' />
          </div>

          <div className='relative z-10'>
            <Button variant='secondary'>Simpan</Button>
          </div>
        </Card>
      </div>

      {/* TODO: place video */}

      <BannerPreviewBox />

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

        <div className='grid grid-cols-3 gap-4 relative z-0'>
          <ColorInput label='Warna Background:' defaultValue='#faae2b' />
          <ColorInput label='Warna Highlight:' defaultValue='#744fc9' />
          <ColorInput label='Warna Teks:' defaultValue='#333333' />
        </div>

        <div className='grid grid-cols-3 gap-x-4 mt-8'>
          <Input label='Template teks:' defaultValue='baru saja memberikan' />
          <div className='flex flex-col gap-3'>
            <Label>Tanpa Border:</Label>
            <BaseCheckbox className='ml-0.5 h-6 w-6' />
          </div>
          <Input label='Ketebalan Teks:' defaultValue='500' />
          <FontInput />
          <div className='flex flex-col gap-3'>
            <Label>Tampilkan media NSFW:</Label>
            <BaseCheckbox className='ml-0.5 h-6 w-6' />
          </div>
        </div>

        <div className='relative z-0'>
          <Button variant='secondary'>Simpan Tampilan</Button>
        </div>
      </Card>

      <UrlFooterBox url='https://saweria.co/widgets/mediashare?streamKey=c1e89a4cda4c630338c854cd9e9c8d74' />
    </div>
  )
}
