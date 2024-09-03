import { CartItem } from './pages'
import { ProductPage } from './pages'
import { HomePage } from './pages'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/Cartitem',
    element: <CartItem />,
  },
  {
    path: '/Product',
    element: <ProductPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
