/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { Button, Grid, Stack } from "@mui/material"

import { ProductName } from '@components/branding'
import { getCodeVerifier } from "../../util"

const Login = () => {

    const spotifyAuth = async () => {

        const code = getCodeVerifier()
        const data = new TextEncoder().encode(code)
        const hashed = await crypto.subtle.digest('SHA-256', data)

        const code_challenge_base64 = btoa(String.fromCharCode(...new Uint8Array(hashed)))
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')

        localStorage.setItem('code_verifier', code)

        const authUrl = new URL(import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT)
        const params = {
            response_type: 'code',
            client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
            scope: import.meta.env.VITE_SPOTIFY_SCOPE,
            code_challenge_method: 'S256',
            code_challenge: code_challenge_base64,
            redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URL,
        }

        authUrl.search = new URLSearchParams(params).toString()
        window.location.href = authUrl.toString()
    }

    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid item xs={12} sx={{ mt: 25, textAlign: 'center' }}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    <ProductName variant={'h3'} />
                    <Button variant="contained" color="success" onClick={spotifyAuth}>Login with Spotify</Button>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Login