/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from "react";

export const SearchOptions = () => {

    const [option, setOption] = useState('albums');

    const handleChange = (_: React.MouseEvent<HTMLElement>, option: string,) => {
        setOption(option)
    }

    return (
        <ToggleButtonGroup
            style={{ position: 'fixed', top: 50, left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}
            color="primary"
            value={option}
            exclusive
            onChange={handleChange}
            aria-label="search-option">
            <ToggleButton value="albums">Albums</ToggleButton>
            <ToggleButton value="songs">Songs</ToggleButton>
            <ToggleButton value="artists">Artists</ToggleButton>
        </ToggleButtonGroup>
    )
}