import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import './index.css'
import App from './App.jsx'
import { theme } from './theme'
import cartReducer from './state'


const store = configureStore({
  reducer: { cart: cartReducer },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
