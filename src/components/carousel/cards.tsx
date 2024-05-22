/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { useState } from 'react'

import { Card } from './card'
import { Spotify } from '@types'
import image from '/unknown.jpg'

type CardsProps = {
    data: Spotify.SearchResponse | undefined
}

export const Cards = ({ data, onPointerOver, onPointerOut }: CardsProps) => {

    const [hovered, hover] = useState(null)
    const items = data?.albums?.items || data?.artists?.items || data?.tracks?.items

    return items && items.map((item, i) => {

        const radius = 5
        const amount = items.length
        const angle = (i / amount) * Math.PI * 2
        const imageUrl = item.images?.length > 0 ? item.images[0].url : item.album?.images.length > 0 ? item.album.images[0].url : image

        return (
            <Card
                key={i}
                onPointerOver={(event) => (event.stopPropagation(), hover(i), onPointerOver(i))}
                onPointerOut={() => (hover(null), onPointerOut(null))}
                position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
                rotation={[0, Math.PI / 2 + angle, 0]}
                hovered={hovered === i}
                url={imageUrl}
            />
        )
    })
}