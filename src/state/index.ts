/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { configureStore } from '@reduxjs/toolkit'
import { Spotify } from '@types'

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spotify.com/v1/",
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_API_TOKEN}`
        }
    }),
    endpoints: (build) => ({
        spotifySearch: build.query<Spotify.SearchResponse, void>({
            query() {
                return {
                    url: "search",
                    params: { q: 'pink', type: 'album', limit: 50 }
                }
            }
        })
    })
})

const { useSpotifySearchQuery } = api

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export { store, useSpotifySearchQuery }
