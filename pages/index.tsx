import { Footer } from '@/components/Footer'
import { HeroLogo } from '@/components/HeroLogo'
import { Card } from '@/components/ui/Card'
import { ColorBox } from '@/components/ui/ColorBox'
import { Button } from '@/components/ui/button'
import { H3, H4, Mono } from '@/components/ui/typography'
import { AppRoutes } from '@/constants/strings'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col gap-y-12'>
      <div>
        <HeroLogo />
        <H3 className='text-center mt-8'>
          Jembatan interaksi dengan penontonmu!
        </H3>
        <div className='space-x-8 mt-6 text-center'>
          <Button asChild variant='secondary'>
            <Link href={AppRoutes.login}>Login</Link>
          </Button>
          <Button asChild>
            <Link href={AppRoutes.register}>Daftar</Link>
          </Button>
        </div>
      </div>

      <Card>
        <Mono>
          Saweria membantu kamu mendapatkan dukungan finansial dari penggemar
          karyamu dengan moda pembayaran di bawah ini:
        </Mono>
        <div className='mt-4 flex justify-around px-20'>
          <ul className='text-xl font-mono font-normal text-left list-disc'>
            <li>GOPAY</li>
            <li>OVO</li>
            <li>DANA</li>
            <li>LINKAJA</li>
            <li>QRIS</li>
          </ul>

          <div>
            <Image
              width={100}
              height={100}
              src='/assets/svg/chicken_money.svg'
              className='pt-4'
              alt='homepage_characters'
            />
          </div>
        </div>
        <Mono>
          Dana dapat dengan mudah dicairkan ke semua rekening bank di Indonesia
          dan e-wallet (Gopay, OVO, DANA, LinkAja, dan Shopeepay).
        </Mono>
      </Card>

      <Card label='cara memulai'>
        <ol className='list-decimal list-inside font-mono px-5'>
          <li>Daftarkan dirimu</li>
          <li>Verifikasi akun kamu</li>
          <li>Atur overlay yang ingin digunakan</li>
          <li>Jangan lupa pasang QR code atau link saweriamu</li>
          <li>Sapa dan terima dukungan dari penggemarmu!</li>
        </ol>
      </Card>

      <div className='text-center flex flex-col items-center gap-y-4'>
        <Image
          width={240}
          height={100}
          src='/assets/svg/capy_happy.svg'
          className='-mr-16'
          alt='homepage_characters'
        />
        <H4>siap bergabung bersama saweria?</H4>
        <Button asChild>
          <Link href={AppRoutes.register}>Daftar</Link>
        </Button>
      </div>

      <Card
        label='pricing'
        labelSeconday
        className='flex justify-center gap-x-6'
      >
        <div className='space-y-5 w-[26ch]'>
          <Mono>
            Setiap transaksi masuk akan terkena biaya sebesar 5% (6% untuk OVO)
            dengan batas minimum 150 rupiah
          </Mono>
          <Mono className='col-start-1'>
            Pencairan dana menuju rekening bank/e-wallet streamer akan terkena
            biaya sebesar IDR 5.000
          </Mono>
        </div>
        <Image
          width={120}
          height={100}
          src='/assets/svg/raccoon_happy.svg'
          className=''
          alt='homepage_characters'
        />
      </Card>

      <ColorBox href={AppRoutes.faq} className='bg-red-200 py-8'>
        <div className='flex justify-center gap-x-6'>
          <div className='f-center'>
            <Image
              width={70}
              height={70}
              src='/assets/svg/chicken_sad.svg'
              alt='homepage_characters'
            />
          </div>
          <div className='text-center space-y-2 mt-3'>
            <H3>bingung?</H3>
            <H3>ada pertanyaan?</H3>
            <H3>cek FAQ kami dulu</H3>
          </div>
        </div>
      </ColorBox>

      <div className='gap-6 flex flex-col md:flex-row'>
        <Button size='lg'>Tutorial</Button>
        <Button size='lg' variant='secondary'>
          Syarat dan Ketentuan
        </Button>
      </div>
    </div>
  )
}

Home.getLayout = (page: React.ReactElement) => {
  return (
    <div className='min-h-screen w-10/12 max-w-xl mx-auto'>
      {page}
      <Footer />
    </div>
  )
}
