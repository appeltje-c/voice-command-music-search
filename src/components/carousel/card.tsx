/*
    Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { useRef } from 'react'
import { easing } from 'maath'
import { DoubleSide, Mesh } from 'three'
import { Image } from '@react-three/drei'
import { GroupProps, useFrame } from '@react-three/fiber'

type CardProps = GroupProps & {
    url: string
    hovered: boolean
}

export const Card = ({ url, hovered, ...props }: CardProps) => {

    const ref = useRef<Mesh>(null!)

    useFrame((_, delta) => {
        // move the record a bit up when hovered
        const factor = hovered ? 1.4 : 1
        easing.damp3(ref.current.position, [0, hovered ? 0.25 : 0, 0], 0.1, delta)
        easing.damp3(ref.current.scale, [2, 1.5 * factor, 2], 0.15, delta)
    })

    return (
        <group {...props}>
            <Image ref={ref} transparent radius={0.075} url={url} scale={[1.618, 1]} side={DoubleSide} />
        </group>
    )
}