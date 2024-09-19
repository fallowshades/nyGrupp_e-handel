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
