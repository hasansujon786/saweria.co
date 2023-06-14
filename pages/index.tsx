import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { H3, Mono } from '@/components/ui/typography'
import { appName } from '@/constants/strings'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-screen pb-16 w-10/12 max-w-xl mx-auto'>
      <section className='text-center flex flex-col items-center'>
        <Image
          width={280}
          height={100}
          src='/assets/svg/homepage_characters.svg'
          className='pt-4'
          alt='homepage_characters'
        />
        <h1 className='mt-2 text-4xl tracking-tight lg:text-5xl font-light'>
          {appName}
        </h1>
        <H3 className='mt-6'>Jembatan interaksi dengan penontonmu!</H3>
        <div className='space-x-8 mt-8'>
          <Button variant='secondary'>Login</Button>
          <Button>Daftar</Button>
        </div>
      </section>

      <section className='mt-10 flex flex-col gap-y-12'>
        <Card>
          <Mono>
            Saweria membantu kamu mendapatkan dukungan finansial dari penggemar
            karyamu dengan moda pembayaran di bawah ini:
          </Mono>
          <div className='mt-4 flex justify-center '>
            <ul className='text-2xl font-mono text-left list-disc'>
              <li>GOPAY</li>
              <li>OVO</li>
              <li>DANA</li>
              <li>LINKAJA</li>
              <li>QRIS</li>
            </ul>
          </div>
        </Card>

        <Card label='cara memulai'>
          <ol className='list-decimal list-inside font-mono'>
            <li>Daftarkan dirimu</li>
            <li>Verifikasi akun kamu</li>
            <li>Atur overlay yang ingin digunakan</li>
            <li>Jangan lupa pasang QR code atau link saweriamu</li>
            <li>Sapa dan terima dukungan dari penggemarmu!</li>
          </ol>
        </Card>

        <div className='text-center'>
          <h2 className='text-3xl lg:text-4xl mt-8'>
            siap bergabung bersama saweria?
          </h2>
          <div className='space-x-8 mt-8'>
            <Button>Daftar</Button>
          </div>
        </div>

        <Card label='pricing' labelSeconday>
          <Mono>
            Setiap transaksi masuk akan terkena biaya sebesar 5% (6% untuk OVO)
            dengan batas minimum 150 rupiah
          </Mono>
          <Mono className='mt-4'>
            Pencairan dana menuju rekening bank/e-wallet streamer akan terkena
            biaya sebesar IDR 5.000
          </Mono>
        </Card>

        <Card>
          <div className='text-center space-y-2'>
            <H3>bingung?</H3>
            <H3>ada pertanyaan?</H3>
            <H3>cek FAQ kami dulu</H3>
          </div>
        </Card>

        <div className='gap-6 flex flex-col md:flex-row'>
          <Button size='lg'>Tutorial</Button>
          <Button size='lg' variant='secondary'>
            Syarat dan Ketentuan
          </Button>
        </div>
      </section>
    </div>
  )
}
