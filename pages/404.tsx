import Link from 'next/link'

export default function Error404() {
  return (
    <div className='flex flex-col items-center justify-center flex-1'>
      <h1 className='text-9xl text-gray-400'>404</h1>
      <p className='-mt-2 text-gray-400 text-lg font-semibold'>
        Page not exists
      </p>
      <Link
        href='/'
        className='mt-4 font-semibold text-sm text-blue-500 underline hover:text-blue-700'
      >
        Go Back
      </Link>
    </div>
  )
}
