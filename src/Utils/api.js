const key = process.env.REACT_APP_LASTFM_API_KEY;
const api_secret = process.env.REACT_APP_LASTFM_SECRET;
const api_root = "http://ws.audioscrobbler.com/2.0/";

const getTopArtistURI = `${api_root}?method=user.gettopartists&user=matshagen&api_key=${key}&format=json`

export default async function connectAPI() {
    const data = await fetch(getTopArtistURI)
        .then((response) => {
            return response.json();
        }).catch(error => console.error(error));
    return data;
}





