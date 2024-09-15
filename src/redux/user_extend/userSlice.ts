import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user-thunc')
  return user ? JSON.parse(user) : { loading: true, user: null, error: null }
}

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
  name: 'user',
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPrivilagedUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginPrivilagedUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        localStorage.setItem('user-thunc', JSON.stringify(action.payload))
      })
      .addCase(loginPrivilagedUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Login failed'
      })
      ///
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload // Set the user from localStorage if available
      })
  },
})

export const { loginUser, logoutUser, getCurrentLocalUser, setLoading } =
  userSlice.actions
export default userSlice.reducer
