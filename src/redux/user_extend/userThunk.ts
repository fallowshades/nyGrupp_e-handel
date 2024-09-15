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
import { convenientFetch } from '@/utils/corsFetch'
export const loginUserThunk = async (
  path: String,
  user: LoginCredentials,
  thunkAPI: any
) => {
  const url = '/auth/local'
  //https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi#f3a5bd12-8888-40cc-b1af-ed1761395b94
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const email = user.email
    const password = user.password

    // Prepare the request body for the API //"identifier":"james@gmail.com","password":"secret"
    const data = {
      identifier: user.email, // The API expects "identifier" instead of "email"
      password: user.password, // Use the password as provided
    }
    const response = await convenientFetch.post(url, data)

    // Log the entire response object for debugging
    console.log('Full Response Object:', response)

    // Access and log the response data
    console.log('API Response Data:', response.data)

    // Check the response data structure
    console.log('Response Data Keys:', Object.keys(response.data))
    thunkAPI.dispatch(loginUser(response.data))
    return response.data
    //remove the wrong approach
    // if (email === 'test@example.com' && password === 'password123') {
    //   thunkAPI.dispatch(loginUser(user))
    //   return { name: 'Test User', email, password }
    // } else {
    //   throw new Error('Invalid credentials')
    // }

    //  return resp.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
