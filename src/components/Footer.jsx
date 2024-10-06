import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-4 text-center'>
      <ul className='flex justify-center space-x-8'>
        <li>
          <Link
            to='/'
            className='hover:text-gray-300'
            data-cy='nav-home'
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to=''
            className='hover:text-gray-300'
            data-cy='nav-about'
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to=''
            className='hover:text-gray-300'
            data-cy='nav-contact'
          >
            {/**note that the to is just concattening the / */}
            Contact Us
          </Link>
        </li>
        <li>
          <a
            href='#'
            className='twitter-share-button'
            data-cy='nav-tweet'
          >
            <i>
              <span>Tweet</span>
            </i>
          </a>
        </li>
      </ul>
      <p className='mt-4'>
        &copy; {new Date().getFullYear()} NYA GRUPPEN Webshop. All rights
        reserved.
      </p>
    </footer>
  )
}

export default Footer
