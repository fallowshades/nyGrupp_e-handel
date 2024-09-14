#

##

### before

###

####

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
