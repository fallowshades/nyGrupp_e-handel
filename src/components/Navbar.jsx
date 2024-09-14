import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import SearchItem from './searchItem'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navbar() {
  const [input, setInput] = useState('')
  const { user } = useSelector((state) => state.user)
  const navigate = useNavigate()

  const products = useSelector((state) => state.products.items || [])
  const { numItemsInCart } = useSelector((state) => state.cart || [])
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  )

  function handleSearch(e) {
    setInput(e.target.value)
  }

  // if cart is empty, dont redirect, eme
  function handleCartClick() {
    if (numItemsInCart > 0) {
      navigate('/CartPage')
    }
  }

  function handleLogoClick() {
    navigate('/')
  }

  return (
    <nav className=' shadow p-4 bg-gray-800 w-full'>
      <div className='mx-auto flex items-center justify-between'>
        <div className='hover:cursor-pointer' onClick={handleLogoClick}>
          <img
            src='logo.png'
            alt='Logo'
            className='w-[120px] h-[60px]  rounded-md'
          />
        </div>
        <div className='flex justify-center'>
          <input
            type='text'
            value={input}
            placeholder='Search'
            onChange={handleSearch}
            className='w-[80%] px-8 py-2 border border-gray-300 border-r-0 rounded-l-lg focus:outline-none'
          />
          <div className='py-2 bg-white rounded-r-lg pr-2'>
            <FaSearch color='Gray' size={24} />
          </div>
        </div>
        <div>
          <button
            className='border-white border py-3 px-8 rounded-lg hover:scale-105 flex'
            onClick={handleCartClick}
          >
            <FaShoppingCart color='White' size={24} />
            <span className=' pl-2 text-white'>{numItemsInCart}</span>
          </button>
        </div>
      </div>

      {input && (
        <div className='searchItem'>
          <ul>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id}>
                  <SearchItem
                    imgSrc={product.image}
                    imgAlt={product.title}
                    title={product.title}
                    id={product.id}
                  />
                </li>
              ))
            ) : (
              <p className='text-white'>No products found</p>
            )}
          </ul>
        </div>
      )}
      <div className='align-element flex justify-center  '>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hello, user</p>
            <button className='btn btn-xs btn-outline btn-primary '>
              logout
            </button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center'>
            <Link
              to='/login'
              className='link link-hover text-xs sm:text-sm text-white'
            >
              Sign in / Guest
            </Link>
            <Link
              to='/register'
              className='link link-hover text-xs sm:text-sm text-white'
            >
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
