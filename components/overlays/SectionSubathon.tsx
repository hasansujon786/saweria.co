import {
  BannerTimePreviewBox,
  ColorInput,
  FontInput,
  UrlFooterBox,
} from '@/components/overlays/shared'
import { Card } from '@/components/ui/Card'
import { Button, IconButton } from '@/components/ui/button'
import { BaseCheckbox } from '@/components/ui/checkbox'
import { BaseInput, Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { H4 } from '@/components/ui/typography'
import { Play, Settings } from 'lucide-react'

export const SectionSubathon = () => {
  return (
    <div className='grid grid-cols-1 gap-8'>
      <div>
        <p className='mb-4'>
          Tampilkan waktu yang tersisa pada Subathon dan tambahkan waktu secara
          otomatis saat ada dukungan yang masuk.
        </p>
        <BannerTimePreviewBox />
      </div>

      <Card className='grid grid-cols-1 gap-3'>
        <H4>Aturan pertambahan waktu:</H4>

        <div className='grid grid-cols-4 gap-4'>
          <Label>Besar dukungan</Label>
          <Label>Jam</Label>
          <Label>Menit</Label>
          <Label>Detik</Label>
          <BaseInput defaultValue={0} />
          <BaseInput defaultValue={0} />
          <BaseInput defaultValue={0} />
          <BaseInput defaultValue={0} />
          {/* TODO: add del button */}
        </div>

        <h5 className='font-sans text-lg'>Ilustrasi pertambahan:</h5>
        <div className='grid grid-cols-4 gap-4'>
          <Label>Dukungan sebesar</Label>
          <BaseInput defaultValue='10000' />
          <Label>akan menambahkan waktu sebanyak</Label>
          <Label>0 jam, 0 menit, 0 detik.</Label>
        </div>
      </Card>

      {/* TODO: place video */}

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
          <Input label='Durasi awal (jam):' defaultValue='10' />
          <Input label='Durasi awal (menit):' defaultValue='0' />
          <Input label='Durasi awal (detik):' defaultValue='0' />
          <div className='flex flex-col gap-3'>
            <Label>Tanpa Border:</Label>
            <BaseCheckbox className='ml-0.5 h-6 w-6' />
          </div>
          <ColorInput label='Warna Background:' defaultValue='#faae2b' />
          <div className='flex flex-col gap-3'>
            <Label>Auto Play:</Label>
            <BaseCheckbox className='ml-0.5 h-6 w-6' />
          </div>
          <ColorInput label='Warna Teks:' defaultValue='#333333' />
          <Input label='Tebal Teks:' defaultValue='500' />
          <FontInput />
        </div>

        <div className='relative z-0 mt-6'>
          <Button variant='secondary'>Simpan Tampilan</Button>
        </div>
      </Card>

      <div>
        <H4 className=''>Panduan penggunaan:</H4>
        <ol className='list-decimal space-y-2 mt-3'>
          <li>
            <span className='font-bold'>Copy url di bawah</span> dan pastekan
            pada OBS Browser source seperti penggunaan overlay saweria yang
            lain.
          </li>
          <li>
            Setelah tersimpan, <span className='font-bold'>klik kanan </span>
            pada source yang baru saja ditambahkan dan pilih
            <span className='font-bold'> interact</span>.
          </li>
          <li>
            Sebuah window akan muncul dan pada sisi
            <span className='font-bold'> kanan</span> akan terlihat 2 tombol
            yang berfungsi untuk:
            <div className='ml-8 mt-2'>
              <Play size={18} className='inline mr-3' />
              div Memulai / menghentikan hitungan mundur.
            </div>
            <div className='ml-8 mt-2'>
              <Settings size={18} className='inline mr-3' />
              Menambahkan waktu secara manual.
            </div>
          </li>
        </ol>
      </div>

      <UrlFooterBox url='https://saweria.co/widgets/subathon?streamKey=c1e89a4cda4c630338c854cd9e9c8d74' />
    </div>
  )
}
