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

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return <RouterProvider router={router} />
}

export default App
