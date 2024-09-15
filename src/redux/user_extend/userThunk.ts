// Simulate an API call
// await new Promise((resolve) => setTimeout(resolve, 1000))

// if (email === 'test@example.com' && password === 'password123') {
//   return { name: 'Test User', email, password }
// } else {
//   throw new Error('Invalid credentials')
//     }
//   }

interface LoginCredentials {
  email: string
  password: string
}
import { loginUser } from './userSlice'
export const loginUserThunk = async (
  path: String,
  user: LoginCredentials,
  thunkAPI: any
) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const email = user.email
    const password = user.password
    if (email === 'test@example.com' && password === 'password123') {
      thunkAPI.dispatch(loginUser(user))
      return { name: 'Test User', email, password }
    } else {
      throw new Error('Invalid credentials')
    }

    //  return resp.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
