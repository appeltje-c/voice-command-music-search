/*
    Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Spotify } from '@types'
import { spotifyApiUrl } from '@config'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: spotifyApiUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('access_token')
            token && headers.set("authorization", `Bearer ${token}`)
            return headers
        }
    }),
    endpoints: (build) => ({
        spotifySearch: build.query<Spotify.SearchResponse, { q: string, type: string }>({
            query({ q, type }) {
                return {
                    url: "search",
                    params: { q, type, limit: 50 }
                }
            }
        })
    })
})

const { useSpotifySearchQuery } = api

export {
    api,
    useSpotifySearchQuery
}
