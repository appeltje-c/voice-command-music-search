/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { SetStateAction, useState } from 'react'

import { Card } from './card'
import { Spotify } from '@types'
import { Dispatch } from '@reduxjs/toolkit'

type CardsProps = {
    data: Spotify.SearchResponse | undefined
    onPointerOver: Dispatch<SetStateAction<string>>
    onPointerOut: Dispatch<SetStateAction<string>>
}

export const Cards = ({ data, onPointerOver, onPointerOut }: CardsProps) => {

    const [hovered, hover] = useState(null)

    return data && data.albums.items.map((album, i) => {

        const radius = 5
        const amount = data.albums.items.length
        const angle = (i / amount) * Math.PI * 2

        return (
            <Card
                key={i}
                onPointerOver={(event) => (event.stopPropagation(), hover(i), onPointerOver(i))}
                onPointerOut={(event) => (hover(null), onPointerOut(event))}
                position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
                rotation={[0, Math.PI / 2 + angle, 0]}
                hovered={hovered === i}
                url={album.images[0].url}
            />
        )
    })
}