/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { ThemeProvider, CssBaseline } from '@mui/material'

import theme from '@styles'
import { Home } from '@components/home'

/**
 * Our App with Home page, the MUI theme provider 
 * and using the css baseline for consistency. 
 */
export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </ThemeProvider>
  )
}
