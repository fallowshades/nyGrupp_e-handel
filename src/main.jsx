import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import {  HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
     <Provider store={store}>
      <App />
    </Provider>
   </HelmetProvider>
  </StrictMode>
)
