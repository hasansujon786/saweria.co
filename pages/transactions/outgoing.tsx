import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { H3 } from '@/components/ui/typography'
import AdminLayout from '@/layouts/admin'

export default function Outgoing() {
  return (
    <div>
      <H3>Histori Dukungan:</H3>
      <div className='flex justify-end items-center gap-2'>
        <Label className='text-lg'>Lihat sebagai tabel</Label>
        <Switch />
      </div>
      <table
        role='table'
        className='mt-6 w-full text-sm uppercase font-sans text-muted-foreground'
      >
        <thead className='css-0'>
          <tr role='row' className='border-b'>
            <th className='py-2 font-normal'>Tanggal</th>
            <th className='py-2 font-normal'>Nominal</th>
            <th className='py-2 font-normal'>Untuk</th>
            <th className='py-2 font-normal'>Pesan</th>
          </tr>
        </thead>
        <tbody className='css-0'></tbody>
      </table>
    </div>
  )
}

Outgoing.getLayout = AdminLayout
