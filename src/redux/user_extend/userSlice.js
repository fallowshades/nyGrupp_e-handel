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
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
