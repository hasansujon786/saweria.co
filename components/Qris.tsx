import Image from 'next/image'
import { ColorBox } from './ui/ColorBox'

const Qris = () => {
  return (
    <div className='relative z-0 flex'>
      <ColorBox className='bg-[#C6B392]' shadowSize='sm'>
        <div className='w-32 h-16'>
          <Image
            className='w-full h-full object-cover'
            alt='qris logo'
            width={100}
            height={100}
            src='/assets/qris.webp'
          />
        </div>
      </ColorBox>
    </div>
  )
}

export default Qris
