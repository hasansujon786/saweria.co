import { Footer } from '@/components/Footer'
import { HeroLogo } from '@/components/HeroLogo'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { H3 } from '@/components/ui/typography'

function Register() {
  return (
    <div className='pt-4 | w-11/12 max-w-2xl mx-auto'>
      <Card>
        <HeroLogo />
        <H3 className='text-center mt-8'>Registrasi</H3>
        <Input label='Email' placeholder='youremail@gmail.com' required />

        <div className='flex flex-col gap-3 mt-5'>
          <Checkbox label='Berusia 17 tahun ke atas' id='one' />
          <Checkbox
            label='Tidak menggunakan saweria untuk jual beli / komersil'
            id='two'
          />
          <Checkbox
            label='Tidak menyebarkan konten terlarang (pornografi, judi, dll)'
            id='three'
          />
          <Checkbox label='Menyetujui syarat dan ketentuan' id='four' />
          <p>
            Melanggar syarat dan ketentuan dapat menyebabkan akun Anda untuk
            dinonaktifkan (ban) secara sepihak oleh saweria.
          </p>
        </div>

        <div className='mt-4 gap-x-6 relative z-10 flex justify-between items-center'>
          <Button className='flex-1' variant='secondary'>
            Daftar
          </Button>
        </div>
      </Card>

      <Footer />
    </div>
  )
}

export default Register
