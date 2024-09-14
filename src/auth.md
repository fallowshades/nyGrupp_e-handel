#

##

###

#### access global store state

```App.jsx

```

Navbar.jsx

```jsx
const { user } = useSelector((state) => state.user)

return (
  <div className='align-element flex justify-center  '>
    {user ? (
      <div className='flex gap-x-2 sm:gap-x-8 items-center'>
        <p className='text-xs sm:text-sm'>Hello, user</p>
        <button className='btn btn-xs btn-outline btn-primary '>logout</button>
      </div>
    ) : (
      <div className='flex gap-x-6 justify-center items-center'>
        <Link
          to='/login-interior'
          className='link link-hover text-xs sm:text-sm text-white'
        >
          Sign in / Guest
        </Link>
        <Link
          to='/register-interior'
          className='link link-hover text-xs sm:text-sm text-white'
        >
          Create an Account
        </Link>
      </div>
    )}
  </div>
)
```

```Login.jsx, Register.jsx
rafce
```

store.sj

userSlice.js

tailwind.config.js

```JS
  plugins: [require('daisyui')],
}
```

#### cpy mui template

```sh
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material
```

index.html

- usage proper render on touch zooming

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

main.js

```js
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
```

[register-login]https://github.com/mui/material-ui/tree/v6.1.0/docs/data/material/getting-started/templates

- not fun to cpy
