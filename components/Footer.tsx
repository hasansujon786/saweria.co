import { Instagram, Mail, Twitter } from 'lucide-react'
import { IconButton } from './ui/button'

export const Footer = () => {
  return (
    <footer className='flex justify-between text-lg font-mono py-8 mt-auto'>
      <div className='space-y-3 mt-auto'>
        <p>Made with 💙 from SUB</p>
        <p>PT Harta Tahta Sukaria</p>
      </div>

      <ul className='space-y-1 text-right'>
        <li>
          <a className='underline hover:no-underline focus-ring' href='#'>
            Syarat dan ketentuan
          </a>
        </li>
        <li>
          <a className='underline hover:no-underline focus-ring' href='#'>
            FAQ
          </a>
        </li>
        <li>
          <a className='underline hover:no-underline focus-ring' href='#'>
            Changelog
          </a>
        </li>

        <div className='space-x-2'>
          <IconButton className='rounded-full'>
            <Mail />
          </IconButton>
          <IconButton className='rounded-full'>
            <Instagram />
          </IconButton>
          <IconButton className='rounded-full'>
            <Twitter />
          </IconButton>
        </div>
      </ul>
    </footer>
  )
}
