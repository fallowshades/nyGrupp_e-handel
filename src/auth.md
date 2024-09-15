#

##

### before set up storage between navigation

#### did before for absolute path imports instead of relative path

```sh
npm i -D @types/node
```

vite.config.ts

```ts
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

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

### optimize

#### try refracture theme and formValidation

- uh some typescript v0.8.3 inspired

// problem w hook set up and decleration file

```sh
npm install --save-dev typescript @types/react @types/react-dom @types/react-router-dom
npx tsc --init
```

tsconfig.json

- module, libs, entry for dev or production

```json
   "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ] /* Specify a set of bundled library declaration files that describe the target runtime environment. */,
    "jsx": "react" /* Specify what JSX code is generated. */,

    "moduleDetection": "force" /* Control what method is used to detect module-format JS files. */,

 "module": "ESNext" /* Specify what module code is generated. */,

    "moduleResolution": "node10" /* Specify how TypeScript looks up a file from a given module specifier. */,
    "baseUrl": "./" /* Specify the base directory to resolve non-relative module names. */,
    "paths": {
      "@/*": ["src/*"]
    }
        "allowJs": true /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */,
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
  "include": ["src/**/*.tsx", "src/hooks/useThemeMode.ts"],
  "exclude": ["node_modules"]
```

userSlice.js

- better to initiate with local storage

```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user-thunc')
  if (!user)
    return {
      loading: false,
      name: null,
      email: '',
      password: 'null',
    }
  return JSON.parse(user)
}

const userSlice = createSlice({
...
  initialState: getUserFromLocalStorage(),
  reducers: {
    loginUser: (state, action) => {
      const user = action.payload
      state.user = user
      localStorage.setItem('user-thunc', JSON.stringify(user))
    },
    logoutUser: (state) => {
      state.user = null
      localStorage.removeItem('user-thunc')
    },
  },
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
```

useThemeMode.ts

```ts
// useThemeMode.ts
import { useState, useEffect } from 'react'
import { PaletteMode } from '@mui/material' // Assuming you're using MUI

export const useThemeMode = () => {
  const [mode, setMode] = useState<PaletteMode>('light')

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null
    if (savedMode) {
      setMode(savedMode)
    } else {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setMode(systemPrefersDark ? 'dark' : 'light')
    }
  }, [])

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark'
    setMode(newMode)
    localStorage.setItem('themeMode', newMode)
  }

  return { mode, toggleColorMode }
```

useFormValidation.ts

- optimizing the state management

```ts
import { useState } from 'react'

interface ValidationState {
  emailError: boolean
  emailErrorMessage: string
  passwordError: boolean
  passwordErrorMessage: string
  nameError: boolean
  nameErrorMessage: string
}

export const useFormValidation = () => {
  const [validation, setValidation] = useState<ValidationState>({
    emailError: false,
    emailErrorMessage: '',
    passwordError: false,
    passwordErrorMessage: '',
    nameError: false,
    nameErrorMessage: '',
  })

  const validateInputs = (): boolean => {
    const email = document.getElementById('email') as HTMLInputElement
    const password = document.getElementById('password') as HTMLInputElement
    const name = document.getElementById('name') as HTMLInputElement

    let isValid = true
    const newValidation = { ...validation } // clone current state

    // Email validation
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      newValidation.emailError = true
      newValidation.emailErrorMessage = 'Please enter a valid email address.'
      isValid = false
    } else {
      newValidation.emailError = false
      newValidation.emailErrorMessage = ''
    }

    // Password validation
    if (!password.value || password.value.length < 6) {
      newValidation.passwordError = true
      newValidation.passwordErrorMessage =
        'Password must be at least 6 characters long.'
      isValid = false
    } else {
      newValidation.passwordError = false
      newValidation.passwordErrorMessage = ''
    }

    // Name validation
    if (!name.value || name.value.length < 1) {
      newValidation.nameError = true
      newValidation.nameErrorMessage = 'Name is required.'
      isValid = false
    } else {
      newValidation.nameError = false
      newValidation.nameErrorMessage = ''
    }

    setValidation(newValidation)
    return isValid
  }

  return {
    ...validation,
    validateInputs,
  }
}
```

#### refracture in login also

useLoginFormValidation.ts

```ts
import { useState, useCallback } from 'react'

interface LoginFormValidation {
  emailError: boolean
  emailErrorMessage: string
  passwordError: boolean
  passwordErrorMessage: string
  validateInputs: () => boolean
}

export const useLoginFormValidation = (): LoginFormValidation => {
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

  // Memoize the validateInputs function to avoid unnecessary re-renders
  const validateInputs = useCallback((): boolean => {
    const email = document.getElementById('email') as HTMLInputElement | null
    const password = document.getElementById(
      'password'
    ) as HTMLInputElement | null

    let isValid = true

    if (!email || !email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true)
      setEmailErrorMessage('Please enter a valid email address.')
      isValid = false
    } else {
      setEmailError(false)
      setEmailErrorMessage('')
    }

    if (!password || !password.value || password.value.length < 6) {
      setPasswordError(true)
      setPasswordErrorMessage('Password must be at least 6 characters long.')
      isValid = false
    } else {
      setPasswordError(false)
      setPasswordErrorMessage('')
    }

    return isValid
  }, [])

  return {
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    validateInputs,
  }
}
```

Login.tsx

```tsx
import { useLoginFormValidation } from '@/hooks/useLoginFormValidation'

export function Register(props: { disableCustomTheme?: boolean }) {
  const {
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    validateInputs,
  } = useLoginFormValidation()
}
```

### formdata and where access from. network aware

#### action most basic event value to formdata

Login.tsx

- a challange upgrading selector code --> useState with redux toolkit typescript.
- async handler
- form element handle update logic
- care formdata may contain a file

```tsx
import { RootState } from '@/redux/store'
import { loginUserThunk } from '@/redux/user_extend/userSlice'
import { useDispatch, useSelector } from 'react-redux'
export function Login(props: { disableCustomTheme?: boolean }) {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state: RootState) => state.user)


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        ...
          const email = data.get('email')
    const password = data.get('password')

    if (typeof email !== 'string' || typeof password !== 'string') {
      console.error('Email or password is missing.')
      return
    }

    if (!validateInputs(email, password)) {
      return !email || !password
    }

    try {
      await dispatch(loginUserThunk({ email, password }) as any)
    } catch (err) {
      console.error('Login failed:', err)
    }
  }

    return(
      ...
        <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
          ...

           <Button type='submit' fullWidth variant='contained'>
              {' '}
              {/**  onClick={validateInputs} */}
              Sign in
            </Button>
            ...
            </Box>
    )
    }


```

useLoginFormValidation.ts

- update validation hook consider is not file

```ts
 interface LoginFormValidation {
  ...
  validateInputs: (email: string, password: string) => boolean
}


export const useLoginFormValidation = (): LoginFormValidation => {

  const validateInputs = useCallback(
    (email: string | null, password: string): boolean => {
        //   const email = document.getElementById('email') as HTMLInputElement | null
      //   const password = document.getElementById(
      //     'password'
      //   ) as HTMLInputElement | null

      const emailString = email ? String(email) : ''
      let isValid = true
      //.value is not needed if not selected element, we useState
      ...
    }

  )
}
```

main.jsx

- don't use file extention in case js --> ts

```jsx
import { store } from './redux/store'
```

store.ts

- needed for typescript

```ts
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ReduxStore = {
  getState: () => RootState
  dispatch: AppDispatch
}
```

userSlice.ts

- loading managed but not yet considered in code

```ts
// Define the type for the thunk's argument
interface LoginCredentials {
  email: string
  password: string
}

// Define the type for the response from the API
interface LoginResponse {
  email: string
  password: string
}

export const loginUserThunk = createAsyncThunk<LoginResponse, LoginCredentials>(
  'user/loginUserThunk',
  async ({ email, password }: LoginResponse) => {
    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
 return { name: 'Test User', email, password }
    if (email === 'test@example.com' && password === 'password123') {
      return { name: 'Test User', email, password }
    } else {
      throw new Error('Invalid credentials')
    }
  }
)

const userSlice = createSlice({
...
 extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        localStorage.setItem('user-thunc', JSON.stringify(action.payload))
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Login failed'
      })
  },
})
```

#### refracture and attempt to avoid flicker

[]https://auth0.com/docs/libraries/auth0-single-page-app-sdk#installation
[react] https://auth0.com/docs/quickstart/spa/react/interactive

```sh
npm install @auth0/auth0-spa-js
```

- can use pre built provider, not gonna

auth0Client.ts

```ts
import { createAuth0Client, Auth0Client } from '@auth0/auth0-spa-js'

let auth0Client: Auth0Client | null = null

export const initializeAuth0Client = async () => {
  if (!auth0Client) {
    auth0Client = await createAuth0Client({
      domain: 'your-domain',
      clientId: 'your-clientId',
    })
  }
  return auth0Client
}
```

Layout.jsx

- failed attempt, annoying having data access and rendering together

```jsx
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
return(...)
}
```

Login.tsx

```tsx
import { loginUser } from '@/redux/user_extend/userSlice'


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
   ...

    try {
      await dispatch(loginUser({ email, password }) as any)
    } catch (err) {
      console.error('Login failed:', err)
    }
  }
```

userSlice.ts

```ts
const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user-thunc')

  return user ? JSON.parse(user) : { loading: true, user: null, error: null }
}

import { loginUserThunk } from './userThunk'

export const loginPrivilagedUser = createAsyncThunk<
  LoginResponse,
  LoginCredentials
>('user/loginUserThunk', async (user, thunkAPI) => {
  const response = await loginUserThunk('/auth/login', user, thunkAPI)
  return response
})

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async () => {
    const user = localStorage.getItem('user-thunc')
    if (user) {
      return JSON.parse(user) // Return the user from local storage
    }
    return null // No user found in local storage
  }
)

const userSlice = createSlice({
  ...
  reducer:{
      getCurrentLocalUser: (state) => {
      const user = localStorage.getItem('user-thunc')
      if (user) {
        state.user = JSON.parse(user) // Set the user from localStorage if available
      }
      state.loading = false
    },
    setLoading: (state, action) => {
      state.loading = action.payload // Set loading state
    },
  }


   extraReducers: (builder) => {
    builder.addCase(loginPrivilagedUser.---, (state) => {---}
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload // Set the user from localStorage if available
      })
   }
})

export const {getCurrentLocalUser, setLoading } =
  userSlice.actions
```

#### axios and session

- [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
- [axios] https://www.npmjs.com/package/axios

```sh
npm install axios
```

corsFetch.tsx

```tsx
import axios from 'axios'
const productionUrl = 'https://strapi-store-server.onrender.com/api/'

export const convenientFetch = axios.create({
  baseURL: productionUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})
```

Navbar.jsx

```jsx
import { clearCart } from '../redux/slice/cartSlice'
import { logoutUser } from '../redux/user_extend/userSlice'
import { useDispatch } from 'react-redux'
function Navbar() {

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(clearCart())
    dispatch(logoutUser())
    navigate('/')
  }
}

return(
   {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>

            <p className='text-xs sm:text-sm text-white'>
              Hello, {user.user?.username}
            </p>
            <button
              className='btn btn-xs btn-outline btn-primary '
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
   ):(...)}
)
```

Login.jsx

```jsx
import { loginPrivilagedUser } from '@/redux/user_extend/userSlice'

  await dispatch(loginPrivilagedUser({ email, password }) as any)
            placeholder='james@gmail.com'
              placeholder='secret••••••'
```

userSlice.ts

```ts
const getUserFromLocalStorage = () => {
...
  return user
    ? JSON.parse(user)
    : {
        user: {
          username: null,
          id: null,
          email: null,
          provider: null,
          confirmed: null,
        },
        jwt: null,
        token: null,
      }

      reducers: {
    loginUser: (state, action) => {
      const user = action.payload
      const user = {
        ...(action.payload.user as any),
        token: action.payload.jwt,
      }
      state.user = user
      state.token = action.payload.jwt

      localStorage.setItem('user-thunc', JSON.stringify(user))
    },
}
```

userThunk.ts

```ts
import { convenientFetch } from '@/utils/corsFetch'

export const loginUserThunk = async (
  path: String,
  user: LoginCredentials,
  thunkAPI: any
) => {
  const url = '/auth/local'
  //https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi#f3a5bd12-8888-40cc-b1af-ed1761395b94
  const response = await convenientFetch.post(url, data)

  thunkAPI.dispatch(loginUser(response.data))
  return response.data
}
```
