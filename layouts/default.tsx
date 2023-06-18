import { Footer } from '@/components/Footer'
import React from 'react'

const DefaultLayout = (page: React.ReactElement) => {
  return (
    <div className='w-11/12 max-w-2xl mx-auto | min-h-screen flex flex-col'>
      {page}
      <Footer />
    </div>
  )
}
export default DefaultLayout
