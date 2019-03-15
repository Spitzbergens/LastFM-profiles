
const key = process.env.REACT_APP_LASTFM_API_KEY;
const api_root = "https://ws.audioscrobbler.com/2.0/";

const test = "g";

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

const getUserFriends = async (user) => {
    const getUser = `${api_root}?method=user.getfriends&user=${user}&api_key=${key}&format=json`;
    const data = await fetch(getUser)
        .then((data) => {
            return data.json();
        }).catch((error) => {
            console.error(error);
        })
    return data;
}

const getTokenLastFM = async (token) => {
    const getToken = `${api_root}?method=auth.gettoken&api_key=${key}&format=json`;
    const tokenn = await fetch(getToken)
        .then((data) => {
            return data.json();
        }).catch((error) => {
            console.error(error);
        })
    return tokenn;
}

const getWeeklyArtists = async (user) => {
    const getUser = `${api_root}?method=user.getweeklyartistchart&user=${user}&api_key=${key}&format=json`;
    const artists = fetch(getUser).
        then((data) => {
            return data.json();
        }).catch(error => console.error(error));
    return artists;
}




export { getTopArtists, getUserInfo, getUserFriends, getTokenLastFM, getWeeklyArtists };








