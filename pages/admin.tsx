import { AdminNavBar } from '@/components/AdminNavBar'
import { Footer } from '@/components/Footer'
import { ColorBox } from '@/components/ui/ColorBox'
import { H2 } from '@/components/ui/typography'
import { AppRoutes } from '@/constants/strings'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const sections = [
  {
    title: 'Overlay',
    link: AppRoutes.overlays,
    img: '/assets/svg/capy_happy.svg',
    varient: 'bg-layer-blue',
    description:
      'Atur Alert dan overlay lainnya di sini. Kompatibel dengan OBS dan Streamlabs.',
  },
  {
    title: 'Dukungan Masuk dan Cashout',
    link: AppRoutes.transactions,
    img: '/assets/svg/chicken_money.svg',
    varient: 'bg-layer-purple',
    description: 'Lihat histori dukungan yang masuk dan cashout di sini.',
  },
  {
    title: 'Dukungan Keluar',
    link: AppRoutes.transactions_outgoing,
    img: '/assets/svg/doggo_happy.svg',
    varient: 'bg-layer-yellow',
    description: 'Lihat histori dukungan yang kamu kirimkan.',
  },
  {
    title: 'Integration',
    link: AppRoutes.admin_integrations,
    img: '/assets/svg/raccoon_happy.svg',
    varient: 'bg-layer-red',
    description: 'Hubungkan aplikasi lain dengan saweria!',
  },
]

export default function Admin() {
  return (
    <div className='w-11/12 max-w-5xl mx-auto'>
      <AdminNavBar />

      <div className='grid grid-cols-2 gap-10'>
        {sections.map((section) => (
          <ColorBox
            href={section.link}
            className={cn('px-12 py-5', section.varient)}
          >
            <div className='flex justify-between'>
              <H2>{section.title}</H2>
              <Image
                width={100}
                height={100}
                src={section.img}
                className='pt-4'
                alt='homepage_characters'
              />
            </div>
            <p className='text-lg mt-auto'>{section.description}</p>
          </ColorBox>
        ))}
      </div>

      <Footer />
    </div>
  )
}
