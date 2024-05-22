/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import 'regenerator-runtime/runtime'
import { Carousel } from "@components/carousel"
import { SearchOptions } from "@components/search"
import { Card, CardContent, CircularProgress, Typography } from "@mui/material"
import { ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useSpotifySearchQuery } from "@state"
import { useEffect, useState } from "react"
import { Fragment } from "react/jsx-runtime"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { delay } from '../../util'

const Search = () => {

    const [type, setType] = useState<string>('album')
    const [q, setQ] = useState<string>('Bob Marley')
    const { resetTranscript, transcript } = useSpeechRecognition()

    const searchPhrase = async () => {
        await delay(2000)
        const start = transcript.indexOf('okay search')
        const phrase = transcript.substring(start + 11, transcript.length)
        setQ(phrase)
        resetTranscript()
    }

    if (transcript.includes('okay search')) {
        searchPhrase()
    }

    const { isLoading, isFetching, data } = useSpotifySearchQuery({ q, type })

    useEffect(() => {
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
                        Say: 'Okay Search' and state the artist, album or track
                    </Typography>
                    <Typography color="primary" gutterBottom>
                        Looking for {q}
                    </Typography>
                    <SearchOptions type={type} setType={setType} />
                    <Typography style={{ position: 'absolute', right: 50, top: 50 }}>
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