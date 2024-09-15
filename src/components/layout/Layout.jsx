import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentLocalUser, setLoading } from '@/redux/user_extend/userSlice'

const Layout = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.user)
  const mounted = useRef(false)
  useLayoutEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    dispatch(setLoading(true))
    dispatch(getCurrentLocalUser())
  }, [])

  if (loading || !mounted) {
    // Render a loading spinner or fallback UI while checking user status (avoid flicker)
    return <div>Loading...</div>
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
