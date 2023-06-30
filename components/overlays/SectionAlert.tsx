import { Card } from '@/components/ui/Card'
import { Button, IconButton } from '@/components/ui/button'
import { BaseCheckbox } from '@/components/ui/checkbox'
import { BaseInput, FormElement, Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SelectElement } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { H4 } from '@/components/ui/typography'
import { voiceVarientOptions } from '@/constants/options'
import { BannerPreviewBox, ColorInput, FontInput, UrlFooterBox } from './shared'

export const SectionAlert = () => {
  const onBringupNotification = () => {
    console.log('hanlde BringupNotification here')
  }

  return (
    <div className='grid grid-cols-1 gap-8'>
      <div>
        <p className='mb-4'>
          Pasang overlay ini untuk mendapatkan notifikasi saat ada dukungan yang
          masuk
        </p>
        <Card className='grid grid-cols-1 gap-3'>
          <H4>Aturan Alert:</H4>

          <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-3'>
              <Label>Nyalakan gif:</Label>
              <BaseCheckbox className='ml-px h-6 w-6' />
            </div>

            <FormElement label='Varian suara Text To Speech:'>
              <SelectElement defaultValue='0' items={voiceVarientOptions} />
            </FormElement>
          </div>

          <H4>Aturan minimum:</H4>
          <div className='grid grid-cols-3 gap-4'>
            <Input defaultValue='Rp 10.000' label='Alert notifikasi:' />
            <Input defaultValue='Rp 10.000' label='GIF / media share:' />
            <Input defaultValue='Rp 10.000' label='Text To Speech:' />
          </div>

          <div className='relative z-10'>
            <Button variant='secondary'>Simpan Aturan</Button>
          </div>
        </Card>
      </div>

      <Card>
        <H4>Suara Notifikasi Alert:</H4>
        <div className='relative z-10 flex gap-4'>
          <div className='flex-1'>
            <BaseInput defaultValue='default' className='border-transparent' />
          </div>
          <Button variant='secondary' className='px-16'>
            Ganti Suara
          </Button>
        </div>
      </Card>

      <Card>
        <H4>Filter kata:</H4>
        <p>
          Pesan dukungan dan nama pendukung tidak akan ditampilkan jika
          mengandung kata-kata dibawah ini. Pisahkan kata dengan&nbsp;
          <span className='font-bold'>spasi</span>.
        </p>
        <div className='my-4'>
          <Textarea />
        </div>
        <div className='relative z-10'>
          <Button variant='secondary'>Simpan Kata</Button>
        </div>
      </Card>

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

          <div className='ml-auto'>
            <div className='flex items-center gap-3'>
              <Label>Default</Label>
              <Switch />
              <Label>Custom</Label>
            </div>
          </div>
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
          <Input label='Durasi Notifikasi (ms):' defaultValue='5000' />
          <FontInput />
        </div>
        <div className='relative z-0'>
          <Button variant='secondary'>Simpan Tampilan</Button>
        </div>
      </Card>

      <UrlFooterBox
        bringUpNotification={onBringupNotification}
        url='https://saweria.co/widgets/alert?streamKey=c1e89a4cda4c630338c854cd9e9c8d74'
      />
    </div>
  )
}
