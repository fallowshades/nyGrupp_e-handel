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

    if (email === 'test@example.com' && password === 'password123') {
      return { name: 'Test User', email, password }
    } else {
      throw new Error('Invalid credentials')
    }
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
  },
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

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
