/*
    Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { spotifyClientId, spotifyRedirectUrl, spotifyTokenEndpoint } from '@config'

const Callback = () => {

    const args = new URLSearchParams(window.location.search)
    const code = args.get('code')
    const navigate = useNavigate()

    const getToken = async () => {

        const codeVerifier = localStorage.getItem('code_verifier')

        const params = {
            client_id: spotifyClientId,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: spotifyRedirectUrl,
            code_verifier: codeVerifier
        }

        const response = await fetch(spotifyTokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(params).toString()
        })

        const tokens = await response.json()
        // workaround to prevent strict mode overwriting the token 
        if (localStorage.getItem('access_token') === null) {
            localStorage.setItem('access_token', tokens.access_token)
        }

        navigate('/search')
    }

    useEffect(() => {
        if (code) getToken()
    }, [])

    return <span>Callback</span>
}

export default Callback