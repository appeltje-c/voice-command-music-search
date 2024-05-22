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
import image from '/unknown.jpg'

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
                    {
                        data.albums &&
                        <>
                            <Text fontSize={0.3} position={[3, 3.8, 0]} anchorX="left">
                                {data.albums.items[hovered].name}
                            </Text>
                            <Text fontSize={0.3} position={[3, 3.4, 0]} anchorX="left">
                                {data.albums.items[hovered].release_date}
                            </Text>
                            <Text fontSize={0.3} position={[3, 3, 0]} anchorX="left">
                                {data.albums.items[hovered].album_type}
                            </Text>
                            <Image
                                transparent
                                radius={0.3}
                                position={[0, 1.5, 0]}
                                scale={5}
                                url={data.albums.items[hovered].images[0].url} />
                        </>
                    }
                    {
                        data.tracks &&
                        <>
                            <Text fontSize={0.3} position={[3, 3.8, 0]} anchorX="left">
                                {data.tracks.items[hovered].name}
                            </Text>
                            <Text fontSize={0.3} position={[3, 3.4, 0]} anchorX="left">
                                # {data.tracks.items[hovered].track_number}
                            </Text>
                            <Text fontSize={0.3} position={[3, 3, 0]} anchorX="left">
                                {data.tracks.items[hovered].album.name}
                            </Text>
                            <Image
                                transparent
                                radius={0.3}
                                position={[0, 1.5, 0]}
                                scale={5}
                                url={data.tracks.items[hovered].album.images[0].url} />
                        </>
                    }
                    {
                        data.artists &&
                        <>
                            <Text fontSize={0.3} position={[3, 3.8, 0]} anchorX="left">
                                {data.artists.items[hovered].name}
                            </Text>
                            <Text fontSize={0.3} position={[3, 3.4, 0]} anchorX="left">
                                {data.artists.items[hovered].type}
                            </Text>
                            <Text fontSize={0.3} position={[3, 3, 0]} anchorX="left">
                                Followers : {data.artists.items[hovered].followers.total}
                            </Text>
                            <Image
                                transparent
                                radius={0.3}
                                position={[0, 1.5, 0]}
                                scale={5}
                                url={data.artists.items[hovered].images.length > 0 ? data.artists.items[hovered].images[0].url : image} />
                        </>
                    }

                </Fragment>
            }
        </Billboard>
    )
}