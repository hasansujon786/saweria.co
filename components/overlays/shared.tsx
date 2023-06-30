import { fontOptions } from '@/constants/options'
import { ColorBox } from '../ui/ColorBox'
import { Button } from '../ui/button'
import { BaseInput, FormElement, Input } from '../ui/input'
import { SelectElement } from '../ui/select'
import { H4 } from '../ui/typography'

type ColorInputProps = {
  defaultValue?: string
  buttonText?: string
  label: string
}

export const ColorInput = ({
  defaultValue = '#faae2b',
  buttonText = 'Pilih Warna',
  ...props
}: ColorInputProps) => {
  return (
    <div className='relative z-0'>
      <div>
        <Input defaultValue={defaultValue} label={props.label} />
      </div>
      <Button style={{ background: defaultValue }} className='w-full'>
        {buttonText}
      </Button>
    </div>
  )
}

export const FontInput = ({ label = 'Font Isi:' }: { label?: string }) => {
  return (
    <FormElement label={label}>
      <SelectElement defaultValue='default' items={fontOptions} />
    </FormElement>
  )
}

type UrlFooterBoxProp = {
  url: string
  bringUpNotification?: () => void
}
export const UrlFooterBox = ({
  bringUpNotification,
  url,
}: UrlFooterBoxProp) => {
  return (
    <div className='space-y-3'>
      <H4>URL:</H4>
      <p>Klik tombol Copy dan pastekan URL di "Browser Module" OBS.</p>
      <p>
        <span className='bg-secondary px-1 leading-tight rounded-[2px] font-bold text-[.9em]'>
          NEW
        </span>
        &nbsp;Setelah merubah tampilan, double click pada browser source pada
        OBS dan tekan "Refresh cache of current page". Jika tidak tampil,
        pastikan OBS telah terupdate ke versi terbaru (v28).
      </p>
      <BaseInput
        readOnly
        aria-readonly
        disableWhenReadonly={false}
        defaultValue={url}
      />

      <div className='gap-6 flex flex-col md:flex-row'>
        <Button size='lg' variant='secondary'>
          Copy
        </Button>
        <Button size='lg' variant='default'>
          Buka di tab baru
        </Button>
        {!!bringUpNotification ? (
          <Button
            onClick={bringUpNotification}
            size='lg'
            className='bg-purple-400'
          >
            Munculkan notifikasi
          </Button>
        ) : (
          <div className='flex-1'></div>
        )}
      </div>
    </div>
  )
}

export const BannerPreviewBox = (props: {}) => {
  return (
    <div className='mx-4'>
      <ColorBox className='bg-primary px-16 py-8'>
        <h2 className='text-center text-3xl'>
          <span className='text-purple-700'>Mumu</span> baru saja
          memberikan&nbsp;
          <span className='text-purple-700'>Rp 10.000</span> Semangat ya kamu 😘
        </h2>
      </ColorBox>
    </div>
  )
}

export const BannerTimePreviewBox = (props: {}) => {
  return (
    <div className='mx-4'>
      <ColorBox className='bg-primary px-16 py-8'>
        <h2 className='text-center text-[9rem] leading-none'>10:00:00</h2>
      </ColorBox>
    </div>
  )
}
