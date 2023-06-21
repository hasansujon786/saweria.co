import { NavigationRail } from '@/components/NavigationRail'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { BaseInput, Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { H3 } from '@/components/ui/typography'
import AdminLayout from '@/layouts/admin'

const SecDiscord = () => {
  return (
    <div>
      <Card className='grid grid-cols-1 gap-3'>
        <H3>Discord </H3>
        <p>Kirimkan alert dukungan kamu sebagai pesan pada channel discord!</p>

        <div className='grid grid-cols-2'>
          <div className='flex items-center gap-3'>
            <Label className='text-gray-700 text-base'>Nyalakan:</Label>
            <Switch />
          </div>

          <div className='flex items-center gap-2'>
            <Label className='text-gray-700 text-base'>Hitungan Gagal:</Label>
            <div className='flex-1'>
              <BaseInput defaultValue={0} readOnly aria-readonly />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1'>
          <Input
            label='Webhook URL:'
            placeholder='https://discord.com/api/webhooks/xxxxxxxx'
          />
          <Input
            label='Template Pesan:'
            placeholder='Yay kamu dapet {amount} dari {donator}'
            message='{amount} {donator} akan berubah berdasarkan dukungan yang masuk'
          />
        </div>

        <div className='space-y-2'>
          <p>
            Untuk menemukan url webhook discord, klik{' '}
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 512 512'
              focusable='false'
              className='inline mr-2'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z'></path>
            </svg>
            di sebelah channel, pilih integration dan klik "Webhooks".
          </p>

          <p>
            Kemudian, tekan tombol "New Webhook", dan klik tombol "Copy Webhook
            URL". Pastekan URL tersebut ke kotak "Webhook URL" di atas. Jangan
            lupa klik simpan!
          </p>
        </div>

        <div className='mt-2 relative z-10 gap-4 flex flex-col md:flex-row'>
          <Button className='w-full'>Simpan</Button>
          <Button className='w-full' variant='destructive'>
            Munculkan Notifikasi
          </Button>
        </div>
      </Card>
    </div>
  )
}

const SecWebhook = () => {
  console.log('Webhook')
  return (
    <div>
      <Card className='grid grid-cols-1 gap-3'>
        <H3>Webhook</H3>

        <div className='grid grid-cols-2'>
          <div className='flex items-center gap-3'>
            <Label className='text-gray-700 text-base'>Nyalakan:</Label>
            <Switch />
          </div>

          <div className='flex items-center gap-2'>
            <Label className='text-gray-700 text-base'>Hitungan Gagal:</Label>
            <div className='flex-1'>
              <BaseInput defaultValue={0} readOnly aria-readonly />
            </div>
          </div>
        </div>

        <div className=''>
          <div>
            <Input
              label='Webhook URL:'
              placeholder='https://yourcallbackdestination.com'
            />
          </div>

          <div className='relative z-10 gap-4 flex flex-col md:flex-row'>
            <Button className='w-full'>Simpan</Button>
            <Button className='w-full' variant='destructive'>
              Munculkan Notifikasi
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default function Integrations() {
  return (
    <NavigationRail
      names={['Discord', 'Webhook']}
      sections={[SecDiscord, SecWebhook]}
    />
  )
}

Integrations.getLayout = AdminLayout
