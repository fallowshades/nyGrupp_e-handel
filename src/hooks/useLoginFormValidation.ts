import { useState, useCallback } from 'react'

interface LoginFormValidation {
  emailError: boolean
  emailErrorMessage: string
  passwordError: boolean
  passwordErrorMessage: string
  validateInputs: (email: string, password: string) => boolean
}

export const useLoginFormValidation = (): LoginFormValidation => {
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

  // Memoize the validateInputs function to avoid unnecessary re-renders
  const validateInputs = useCallback(
    (email: string | null, password: string): boolean => {
      //   const email = document.getElementById('email') as HTMLInputElement | null
      //   const password = document.getElementById(
      //     'password'
      //   ) as HTMLInputElement | null

      const emailString = email ? String(email) : ''
      let isValid = true
      //.value is not needed if not selected element, we useState
      if (!email || !email || !/\S+@\S+\.\S+/.test(email)) {
        setEmailError(true)
        setEmailErrorMessage('Please enter a valid email address.')
        isValid = false
      } else {
        setEmailError(false)
        setEmailErrorMessage('')
      }

      if (!password || !password || password.length < 6) {
        setPasswordError(true)
        setPasswordErrorMessage('Password must be at least 6 characters long.')
        isValid = false
      } else {
        setPasswordError(false)
        setPasswordErrorMessage('')
      }

      return isValid
    },
    []
  )

  return {
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    validateInputs,
  }
}
