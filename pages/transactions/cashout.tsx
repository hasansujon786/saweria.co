import { ColorBox } from '@/components/ui/ColorBox'
import { Button } from '@/components/ui/button'
import { FormElement, Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { H2 } from '@/components/ui/typography'
import AdminLayout from '@/layouts/admin'

export function SelectTransferMethod() {
  return (
    <Select defaultValue='bank'>
      <SelectTrigger className=''>
        <SelectValue placeholder='Select a transfer method' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Transfer method</SelectLabel>
          <SelectItem value='bank'>Bank</SelectItem>
          <SelectItem value='e-wallet'>E-Wallet</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default function Cashout() {
  return (
    <div>
      <ColorBox>
        <p>Silahkan simpan nomor rekening sebelum melakukan cashout.</p>
        <H2>Rekening bank/e-wallet tujuan:</H2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 foo'>
          <FormElement message='' label='Pilih bank / E-Wallet:' required>
            <SelectTransferMethod />
          </FormElement>
          <Input label='Nama bank/e-wallet:' required />
          <Input label='Nomor rekening / HP E-Wallet:' required />
          <Input label='Nama pemilik rekening:' required />
        </div>
        <div className='mt-6 z-10'>
          <Button variant='secondary'>Simpan Rekening</Button>
        </div>
      </ColorBox>
    </div>
  )
}

Cashout.getLayout = AdminLayout
