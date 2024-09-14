import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    name: null,
    email: '',
    password: 'null',
  },
  reducers: {},
})

export const {} = userSlice.actions
export default userSlice.reducer
