/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/

/**
 * Creates the random string for the PKCE standard compliant verifier code
 */
export const getCodeVerifier = () => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const randomValues = crypto.getRandomValues(new Uint8Array(64))
    return randomValues.reduce((acc, x) => acc + possible[x % possible.length], "")
}

/**
 * Returns promise with timeout of requested ms.
 * Use this to 'await' delay inline in your code. 
 */
export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))