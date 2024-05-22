/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { useRef, useState } from 'react'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group, Object3DEventMap } from 'three'
import { easing } from 'maath'

import { Spotify } from '@types'
import { Cards } from './cards'
import { ActiveCard } from './hover'

type CarouselProps = {
    data: Spotify.SearchResponse | undefined
}

/**
 * Carousel presentations of the search results
 * as 'records' you can spin round and showing
 * the hovered one lifted in the center
 */
export const Carousel = ({ data, ...props }: CarouselProps) => {

    const ref = useRef<Group<Object3DEventMap>>(null!)
    const scroll = useScroll()
    const [hovered, hover] = useState(null)

    useFrame((state, delta) => {
        ref.current.rotation.y = -scroll.offset * (Math.PI * 2)
        if (state.events.update) state.events.update()
        easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9], 0.3, delta)
        state.camera.lookAt(0, 0, 0)
    })

    return (
        <group ref={ref} {...props}>
            {
                data &&
                <Cards data={data} onPointerOver={hover} onPointerOut={hover} />
            }
            <ActiveCard hovered={hovered} data={data} />
        </group>
    )
}