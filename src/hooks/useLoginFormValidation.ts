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
