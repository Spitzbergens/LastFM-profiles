
const key = process.env.REACT_APP_LASTFM_API_KEY;
const api_root = "http://ws.audioscrobbler.com/2.0/";

const getTopArtists = async (user) => {
    const getTopArtistURI = `${api_root}?method=user.gettopartists&user=${user}&api_key=${key}&format=json`
    const data = await fetch(getTopArtistURI)
        .then((response) => {
            return response.json();
        }).catch(error => console.error(error));
    return data;
}

const getUserInfo = async (user) => {
    const getUser = `${api_root}?method=user.getinfo&user=${user}&api_key=${key}&format=json`;
    const data = await fetch(getUser)
        .then((data) => {
            return data.json();
        }).catch((error) => {
            console.error(error);
        })
    return data;
}



export { getTopArtists, getUserInfo };








