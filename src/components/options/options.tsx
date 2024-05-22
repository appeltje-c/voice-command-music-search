/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

type OptionsProps = {
    type: string
    setType: Function
}

/**
 * Selection of search option Album, Artist, Track
 */
export const Options = ({ type, setType }: OptionsProps) => {

    const handleChange = (_: React.MouseEvent<HTMLElement>, option: string,) => {
        setType(option)
    }

    return (
        <ToggleButtonGroup
            style={{ position: 'fixed', top: 50, left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}
            color="primary"
            value={type}
            exclusive
            onChange={handleChange}
            aria-label="search-option">
            <ToggleButton value="album">Album</ToggleButton>
            <ToggleButton value="track">Track</ToggleButton>
            <ToggleButton value="artist">Artist</ToggleButton>
        </ToggleButtonGroup>
    )
}