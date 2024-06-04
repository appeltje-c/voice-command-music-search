/*
    Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/

// constants
const spotifyApiUrl = 'https://api.spotify.com/v1/'
const spotifyAuthEndpoint = 'https://accounts.spotify.com/authorize'
const spotifyClientId = '181957a34b474eb1864c317ca221c1de'
const spotifyScope = 'streaming user-read-email user-read-private user-library-read'
const spotifyRedirectUrl = 'http://localhost:5173/callback'
const spotifyTokenEndpoint = 'https://accounts.spotify.com/api/token'

export {
    spotifyApiUrl,
    spotifyAuthEndpoint,
    spotifyClientId,
    spotifyScope,
    spotifyRedirectUrl,
    spotifyTokenEndpoint
}