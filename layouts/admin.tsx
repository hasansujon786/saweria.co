import { AdminNavBar } from '@/components/AdminNavBar'
import { Footer } from '@/components/Footer'

const AdminLayout = (page: React.ReactElement) => {
  return (
    <div className='w-11/12 max-w-5xl mx-auto | min-h-screen flex flex-col'>
      <AdminNavBar />
      {page}
      <Footer />
    </div>
  )
}
export default AdminLayout
