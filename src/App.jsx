import { CartPage, HomePage, ProductId } from './pages'
import Layout from './components/layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from './redux/slice/productSlice'

import { Login, Register } from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'login',
        element: <Login />,
      },
      { path: 'register', element: <Register /> },
      {
        path: 'CartPage',
        element: <CartPage />,
      },
      {
        path: 'ProductId/:id',
        element: <ProductId />,
      },
    ],
  },
])

import ReactGA from 'react-ga4'
const TRACKING_ID = 'G-5Z45KQMX' // your Measurement ID
ReactGA.initialize(TRACKING_ID)

function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    })
  }, [location])

  return null // This component doesn't render anything
}

import { useLocation } from 'react-router-dom'
function App() {
  // useEffect(() => {
  //   ReactGA.initialize(TRACKING_ID)
  //   // Send pageview with a custom path
  //   ReactGA.send({
  //     hitType: 'pageview',
  //     page: '/landingpage',
  //     title: 'Landing Page',
  //   })
  // }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <RouterProvider router={router}>
      <AnalyticsTracker />
    </RouterProvider>
  )
}

export default App
