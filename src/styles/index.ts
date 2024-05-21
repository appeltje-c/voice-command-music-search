/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material/styles'

const options: ThemeOptions = {
    palette: {
        mode: 'dark'
    }
}

export default responsiveFontSizes(createTheme(options))
