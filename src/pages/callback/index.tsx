/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Callback = () => {

    const args = new URLSearchParams(window.location.search)
    const code = args.get('code')
    const navigate = useNavigate()

    const getToken = async () => {

        const code_verifier = localStorage.getItem('code_verifier')

        const params = {
            client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URL,
            code_verifier: code_verifier
        }

        const response = await fetch(import.meta.env.VITE_SPOTIFY_TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(params).toString()
        })

        const tokens = await response.json()
        localStorage.setItem('access_token', tokens.access_token)

        navigate('/search')
    }

    useEffect(() => {
        if (code) getToken()
    }, [])

    return <span>Callback</span>
}

export default Callback