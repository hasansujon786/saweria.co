import { AdminNavBar } from '@/components/AdminNavBar'
import { Footer } from '@/components/Footer'
import { H2 } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type BoxType = {
  children?: React.ReactNode
  className?: string
  title: string
  img: string
  description: string
}
export const Box = (props: BoxType) => {
  return (
    <div
      className={cn(
        'layer layer-full px-12 py-5 flex flex-col',
        props.className
      )}
    >
      <div className='flex justify-between'>
        <H2>{props.title}</H2>
        <Image
          width={100}
          height={100}
          src={props.img}
          className='pt-4'
          alt='homepage_characters'
        />
      </div>
      <p className='text-lg mt-auto'>{props.description}</p>
    </div>
  )
}

export default function Admin() {
  return (
    <div className='w-11/12 max-w-5xl mx-auto'>
      <AdminNavBar/>
      <div className='grid grid-cols-2 gap-10'>
        <Box
          title='Overlay'
          img='/assets/svg/capy_happy.svg'
          className='bg-layer-blue'
          description='Atur Alert dan overlay lainnya di sini. Kompatibel dengan OBS dan Streamlabs.'
        />
        <Box
          title='Dukungan Masuk dan Cashout'
          img='/assets/svg/chicken_money.svg'
          className='bg-layer-purple'
          description='Lihat histori dukungan yang masuk dan cashout di sini.'
        />
        <Box
          title='Dukungan Keluar'
          img='/assets/svg/doggo_happy.svg'
          className='bg-layer-yellow'
          description='Lihat histori dukungan yang kamu kirimkan.'
        />
        <Box
          title='Integration'
          img='/assets/svg/raccoon_happy.svg'
          className='bg-layer-red'
          description='Hubungkan aplikasi lain dengan saweria!'
        />
      </div>

      <Footer />
    </div>
  )
}
