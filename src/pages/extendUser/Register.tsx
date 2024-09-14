import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import MuiCard from '@mui/material/Card'
import {
  createTheme,
  ThemeProvider,
  styled,
  PaletteMode,
} from '@mui/material/styles'
import getSignUpTheme from './mui/theme/getSignUpTheme'
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './mui/CustomIcons'
import TemplateFrame from './mui/TemplateFrame'
import { useThemeMode } from '@/hooks/useThemeMode'
import { useFormValidation } from '@/hooks/useFormValidation'
const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}))

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: 4,
  backgroundImage:
    'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
  backgroundRepeat: 'no-repeat',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
  }),
}))

export default function SignUp() {
  const { mode, toggleColorMode } = useThemeMode() //refracture hook
  ///
  const [showCustomTheme, setShowCustomTheme] = React.useState(true)
  const defaultTheme = createTheme({ palette: { mode } })
  const SignUpTheme = createTheme(getSignUpTheme(mode))

  //
  const {
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    nameError,
    nameErrorMessage,
    validateInputs,
  } = useFormValidation()

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      name: data.get('name'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <TemplateFrame
      toggleCustomTheme={toggleCustomTheme}
      showCustomTheme={showCustomTheme}
      mode={mode}
      toggleColorMode={toggleColorMode}
    >
      <ThemeProvider theme={showCustomTheme ? SignUpTheme : defaultTheme}>
        <CssBaseline enableColorScheme />

        <SignUpContainer direction='column' justifyContent='space-between'>
          <Stack
            sx={{
              justifyContent: 'center',
              height: '100dvh',
              p: 2,
            }}
          >
            <Card variant='outlined'>
              <SitemarkIcon />
              <Typography
                component='h1'
                variant='h4'
                sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
              >
                Sign up
              </Typography>
              <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                {
                  // #region Form Fields
                  true && (
                    <>
                      ({' '}
                      <FormControl>
                        <FormLabel htmlFor='name'>Full name</FormLabel>
                        <TextField
                          autoComplete='name'
                          name='name'
                          required
                          fullWidth
                          id='name'
                          placeholder='Jon Snow'
                          error={nameError}
                          helperText={nameErrorMessage}
                          color={nameError ? 'error' : 'primary'}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <TextField
                          required
                          fullWidth
                          id='email'
                          placeholder='your@email.com'
                          name='email'
                          autoComplete='email'
                          variant='outlined'
                          error={emailError}
                          helperText={emailErrorMessage}
                          color={passwordError ? 'error' : 'primary'}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <TextField
                          required
                          fullWidth
                          name='password'
                          placeholder='••••••'
                          type='password'
                          id='password'
                          autoComplete='new-password'
                          variant='outlined'
                          error={passwordError}
                          helperText={passwordErrorMessage}
                          color={passwordError ? 'error' : 'primary'}
                        />
                      </FormControl>
                      )
                    </>
                  )
                  // #endregion
                }
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='I want to receive updates via email.'
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  onClick={validateInputs}
                >
                  Sign up
                </Button>
                <Typography sx={{ textAlign: 'center' }}>
                  Already have an account?{' '}
                  <span>
                    <Link
                      href='/material-ui/getting-started/templates/sign-in/'
                      variant='body2'
                      sx={{ alignSelf: 'center' }}
                    >
                      Sign in
                    </Link>
                  </span>
                </Typography>
              </Box>
              <Divider>
                <Typography sx={{ color: 'text.secondary' }}>or</Typography>
              </Divider>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  type='submit'
                  fullWidth
                  variant='outlined'
                  onClick={() => alert('Sign up with Google')}
                  startIcon={<GoogleIcon />}
                >
                  Sign up with Google
                </Button>
                <Button
                  type='submit'
                  fullWidth
                  variant='outlined'
                  onClick={() => alert('Sign up with Facebook')}
                  startIcon={<FacebookIcon />}
                >
                  Sign up with Facebook
                </Button>
              </Box>
            </Card>
          </Stack>
        </SignUpContainer>
      </ThemeProvider>
    </TemplateFrame>
  )
}
