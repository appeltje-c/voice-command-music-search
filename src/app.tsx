/*
    Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import theme from '@styles'
import Login from './pages/login'
import Search from './pages/search'
import Callback from './pages/callback'
import { NeedsToken } from '@components/auth'

/**
 * Our App with Home page, the MUI theme provider 
 * and using the css baseline for consistency. 
 */
export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path={`/login`} element={<Login />} />
            <Route path={`/callback`} element={<Callback />} />
            <Route path={`/search`} element={<NeedsToken><Search /></NeedsToken>} />
            <Route path="*" element={<Navigate to={'/search'} replace />} />
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}
