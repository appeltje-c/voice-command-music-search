/*
    Incentrify - Voice command music search
    Author : Martijn Benjamin<martijn.teigeler@gmail.com>

    This program has been created as part of the 
    Incentro Technical Assessment.

    This program is shared in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR ANY PARTICULAR PURPOSE.
*/
export namespace Spotify {

    /**
     * The model has been derived from these docs:
     * https://developer.spotify.com/documentation/web-api/reference/search
     */
    export type SearchResponse = {
        tracks: Pagination & {
            items: Array<Track>
        }
        artists: Pagination & {
            items: Array<Artist>
        }
        albums: Pagination & {
            items: Array<Album>
        }
    }

    type Pagination = {
        href: string
        limit: number
        next: string | null
        offset: number
        previous: string | null
        total: number
    }

    type Track = {
        album: Album
        artists: Array<Artist>
        available_markets: Array<CountryISO>
        disc_number: number
        duration_ms: number
        explicit: boolean
        external_ids: ExternalIds
        external_url: ExternalUrls
        href: string
        id: string
        is_playable: boolean
        linked_from: object
        restrictions: Restrictions
        name: string
        popularity: number
        preview_url?: string
        track_number: number
        type: "track"
        uri: string
        is_local: boolean
    }

    type ArtistShortInfo = {
        external_urls: ExternalUrls
        href: string
        id: string
        name: string
        type: "artist"
        uri: string
    }

    type Artist = ArtistShortInfo & {
        followers: Followers
        genres: Array<string>
        images: Array<Image>
        popularity: number
    }

    type Followers = {
        href: string
        total: number
    }

    enum AlbumType {
        "album",
        "single",
        "compilation"
    }

    type Album = {
        album_type: AlbumType
        total_tracks: number
        available_markets: Array<CountryISO>
        external_urls: ExternalUrls
        href: string
        id: string
        images: Array<Image>
        name: string
        release_date: string
        release_date_precision: string
        restrictions: Restrictions
        type: "album"
        uri: string
        artists: Array<Artist>
    }

    type Image = {
        url: string
        height: number
        width: number
    }

    type ExternalUrls = {
        spotify: string
    }

    /**
     * isrc: International Standard Recording Code 
     * https://en.wikipedia.org/wiki/International_Standard_Recording_Code
     * 
     * ean: International Article Number
     * https://en.wikipedia.org/wiki/International_Article_Number
     * 
     * upc: Universal Product Code
     * https://en.wikipedia.org/wiki/Universal_Product_Code
     */
    type ExternalIds = {
        isrc: string
        ean: string
        upc: string
    }

    type Restrictions = {
        reason: RestrictionReason
    }

    /**
     * The reason for the restriction. Supported values:
     * 
     * market   The content item is not available in the given market.
     * product  The content item is not available for the user's subscription type.
     * explicit The content item is explicit and the user's account is set to 
     *          not play explicit content.
     * 
     * Additional reasons may be added in the future. 
     * Note: If you use this field, make sure that your application safely 
     * handles unknown values.
     */
    enum RestrictionReason {
        "market",
        "product",
        "explicit"
    }

    enum CountryISO {
        "AF",
        "AX",
        "AL",
        "DZ",
        "AS",
        "AD",
        "AO",
        "AI",
        "AQ",
        "AG",
        "AR",
        "AM",
        "AW",
        "AU",
        "AT",
        "AZ",
        "BS",
        "BH",
        "BD",
        "BB",
        "BY",
        "BE",
        "BZ",
        "BJ",
        "BM",
        "BT",
        "BO",
        "BA",
        "BW",
        "BV",
        "BR",
        "IO",
        "BN",
        "BG",
        "BF",
        "BI",
        "KH",
        "CM",
        "CA",
        "CV",
        "KY",
        "CF",
        "TD",
        "CL",
        "CN",
        "CX",
        "CC",
        "CO",
        "KM",
        "CG",
        "CD",
        "CK",
        "CR",
        "CI",
        "HR",
        "CU",
        "CY",
        "CZ",
        "DK",
        "DJ",
        "DM",
        "DO",
        "EC",
        "EG",
        "SV",
        "GQ",
        "ER",
        "EE",
        "ET",
        "FK",
        "FO",
        "FJ",
        "FI",
        "FR",
        "GF",
        "PF",
        "TF",
        "GA",
        "GM",
        "GE",
        "DE",
        "GH",
        "GI",
        "GR",
        "GL",
        "GD",
        "GP",
        "GU",
        "GT",
        "GG",
        "GN",
        "GW",
        "GY",
        "HT",
        "HM",
        "VA",
        "HN",
        "HK",
        "HU",
        "IS",
        "IN",
        "ID",
        "IR",
        "IQ",
        "IE",
        "IM",
        "IL",
        "IT",
        "JM",
        "JP",
        "JE",
        "JO",
        "KZ",
        "KE",
        "KI",
        "KR",
        "KP",
        "KW",
        "KG",
        "LA",
        "LV",
        "LB",
        "LS",
        "LR",
        "LY",
        "LI",
        "LT",
        "LU",
        "MO",
        "MK",
        "MG",
        "MW",
        "MY",
        "MV",
        "ML",
        "MT",
        "MH",
        "MQ",
        "MR",
        "MU",
        "YT",
        "MX",
        "FM",
        "MD",
        "MC",
        "MN",
        "ME",
        "MS",
        "MA",
        "MZ",
        "MM",
        "NA",
        "NR",
        "NP",
        "NL",
        "AN",
        "NC",
        "NZ",
        "NI",
        "NE",
        "NG",
        "NU",
        "NF",
        "MP",
        "NO",
        "OM",
        "PK",
        "PW",
        "PS",
        "PA",
        "PG",
        "PY",
        "PE",
        "PH",
        "PN",
        "PL",
        "PT",
        "PR",
        "QA",
        "RE",
        "RO",
        "RU",
        "RW",
        "BL",
        "SH",
        "KN",
        "LC",
        "MF",
        "PM",
        "VC",
        "WS",
        "SM",
        "ST",
        "SA",
        "SN",
        "RS",
        "SC",
        "SL",
        "SG",
        "SK",
        "SI",
        "SB",
        "SO",
        "ZA",
        "GS",
        "ES",
        "LK",
        "SD",
        "SR",
        "SJ",
        "SZ",
        "SE",
        "CH",
        "SY",
        "TW",
        "TJ",
        "TZ",
        "TH",
        "TL",
        "TG",
        "TK",
        "TO",
        "TT",
        "TN",
        "TR",
        "TM",
        "TC",
        "TV",
        "UG",
        "UA",
        "AE",
        "GB",
        "US",
        "UM",
        "UY",
        "UZ",
        "VU",
        "VE",
        "VN",
        "VG",
        "VI",
        "WF",
        "EH",
        "YE",
        "ZM",
        "ZW"
    }
}
