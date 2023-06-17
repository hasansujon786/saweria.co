export const Footer = () => {
  return (
    <footer className='flex justify-between text-lg font-mono pb-8 pt-12'>
      <div className='space-y-3 mt-auto'>
        <p>Made with 💙 from SUB</p>
        <p>PT Harta Tahta Sukaria</p>
      </div>

      <ul className='space-y-1 text-right'>
        <li>
          <a className='underline hover:no-underline' href='#'>
            Syarat dan ketentuan
          </a>
        </li>
        <li>
          <a className='underline hover:no-underline' href='#'>
            FAQ
          </a>
        </li>
        <li>
          <a className='underline hover:no-underline' href='#'>
            Changelog
          </a>
        </li>
        {/* // TODO: add icon */}
      </ul>
    </footer>
  )
}
