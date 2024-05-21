/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { Fragment } from 'react/jsx-runtime'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'

import { Carousel } from '@components/carousel'
import { SearchOptions } from '@components/search'
import { useSpotifySearchQuery } from '@state'

/**
 * On the Home component we define the scenery. A canvas for three to draw with camera
 * the scroll controls to be able to rotate through the results and the Rig with Carousel.
 */
export const Home = () => {

    const { isUninitialized, isLoading, isError, isSuccess, data } = useSpotifySearchQuery()

    return (
        <Fragment>
            <SearchOptions />
            <Canvas dpr={[1, 1.5]} style={{ height: '100vh', width: '100vw' }} >
                <ScrollControls pages={4} infinite>
                    <Carousel data={data} />
                </ScrollControls>
            </Canvas>
        </Fragment>
    )
}
