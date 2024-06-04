/*
    Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import 'regenerator-runtime/runtime'
import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Fragment } from 'react/jsx-runtime'
import { ScrollControls } from '@react-three/drei'
import InfoIcon from '@mui/icons-material/Info'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Card, CardContent, CircularProgress, Typography } from '@mui/material'

import { delay } from '@util'
import { useSpotifySearchQuery } from '@api'
import { Options } from '@components/options'
import { Carousel } from '@components/carousel'

/**
 * The search component combines the voice command
 * search option selection, invokes the search 
 * and renders the result. 
 */
const Search = () => {

    const [type, setType] = useState<string>('album')
    const [q, setQ] = useState<string>('Bob Marley') // i like bob
    const { resetTranscript, transcript } = useSpeechRecognition()
    const { isLoading, isFetching, data } = useSpotifySearchQuery({ q, type })

    // wait for 2 seconds and then use anything after the prompt to search with
    const searchPhrase = async () => {
        await delay(2000)
        const prompt = transcript.indexOf('okay search')
        const phrase = transcript.substring(prompt + 11, transcript.length)
        setQ(phrase)
        resetTranscript()
    }

    // "okay search" is our prompt
    if (transcript.includes('okay search')) {
        searchPhrase()
    }

    useEffect(() => {
        // start continuous listening when mounted
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-GB'
        })
    }, [])

    return (
        <Fragment>
            <Card style={{ position: 'absolute', width: '100vw' }}>
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <InfoIcon /> Say: 'Okay Search' and an Artist, Album or Track
                    </Typography>
                    <Typography color="primary" gutterBottom>
                        Looking for {q}
                    </Typography>
                    <Options type={type} setType={setType} />
                    <Typography style={{ position: 'absolute', right: 50, top: 25 }}>
                        {
                            (isLoading || isFetching) &&
                            <CircularProgress color="success" />
                        }
                    </Typography>
                </CardContent>
            </Card>
            <Canvas dpr={[1, 1.5]} style={{ height: '100vh', width: '100vw' }} >
                <ScrollControls pages={4} infinite>
                    <Carousel data={data} />
                </ScrollControls>
            </Canvas>
        </Fragment>
    )
}

export default Search