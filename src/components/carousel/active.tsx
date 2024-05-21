/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { Fragment } from "react"
import { Billboard, Image, Text } from '@react-three/drei'

import { Spotify } from '@types'

type ActiveCardProps = {
    hovered: number | null
    data: Spotify.SearchResponse | undefined
}

export const ActiveCard = ({ hovered, data }: ActiveCardProps) => {

    return (
        <Billboard>
            {
                hovered && data &&
                <Fragment>
                    <Text fontSize={0.3} position={[0, 6, 0]} anchorY="top">
                        {data.albums.items[hovered].name}
                    </Text>
                    <Text fontSize={0.3} position={[0, 5.5, 0]} anchorY="top">
                        {data.albums.items[hovered].release_date}
                    </Text>
                    <Text fontSize={0.3} position={[0, 5, 0]} anchorY="top">
                        {data.albums.items[hovered].album_type}
                    </Text>
                    <Image
                        transparent
                        radius={0.3}
                        position={[0, 1.5, 0]}
                        scale={5}
                        url={data.albums.items[hovered].images[0].url} />
                </Fragment>
            }
        </Billboard>
    )
}