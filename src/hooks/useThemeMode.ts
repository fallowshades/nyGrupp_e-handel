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
}
