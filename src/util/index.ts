
/**
 * Creates the random string for the PKCE standard compliant verifier code
 */
export const getCodeVerifier = () => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const randomValues = crypto.getRandomValues(new Uint8Array(64))
    return randomValues.reduce((acc, x) => acc + possible[x % possible.length], "")
}

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms))