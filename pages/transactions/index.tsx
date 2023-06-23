import { ColorBox } from '@/components/ui/ColorBox'
import { Button, IconButton } from '@/components/ui/button'
import { H1, H3 } from '@/components/ui/typography'
import { AppRoutes } from '@/constants/strings'
import AdminLayout from '@/layouts/admin'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Transactions() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-10'>
        <ColorBox className={cn('bg-layer-yellow')}>
          <div className='flex'>
            <div className='flex flex-col gap-4 z-10 pl-8 py-8'>
              <H1>Rp 0</H1>
              <p className='text-lg'>
                Angka di atas adalah total saldo kamu. Setiap transaksi harus
                menunggu 3 hari untuk bisa dicairkan.
              </p>
            </div>
            <Image
              width={180}
              height={100}
              src='/assets/svg/chicken_money.svg'
              className=''
              alt='homepage_characters'
            />
          </div>
        </ColorBox>

        <ColorBox className={cn('bg-layer-blue')}>
          <div className='flex'>
            <div className='flex flex-col gap-4 z-10 pl-8 py-8'>
              <H1>Rp 0</H1>
              <p className='text-lg'>
                Angka di atas adalah total saldo yang siap dicairkan.
              </p>
              <div>
                <Button asChild>
                  <Link href={AppRoutes.transactions_cashout}>Cairkan</Link>
                </Button>
              </div>
            </div>
            <Image
              width={180}
              height={100}
              src='/assets/svg/capy_money.svg'
              className=''
              alt='homepage_characters'
            />
          </div>
        </ColorBox>
      </div>
      <p className='mt-8'>
        Cek FAQ kami untuk pertanyaan seputar dukungan dan pencairannya.
      </p>
      <div className='mt-8 flex justify-between'>
        <H3>Daftar Transaksi:</H3>
        <div>
          {/* // TODO: Add popup */}
          <Button variant='secondary'>Export</Button>
          <div className='mt-6 flex justify-end gap-3'>
            <IconButton>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-eye'
              >
                <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                <circle cx='12' cy='12' r='3'></circle>
              </svg>
            </IconButton>
            <IconButton>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-calendar'
              >
                <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
                <line x1='16' y1='2' x2='16' y2='6'></line>
                <line x1='8' y1='2' x2='8' y2='6'></line>
                <line x1='3' y1='10' x2='21' y2='10'></line>
              </svg>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

Transactions.getLayout = AdminLayout
