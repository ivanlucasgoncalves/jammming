
const clientID = '';
const redirectURI = 'http://jammming-ivan.surge.sh';

let accessToken;

const Spotify = {
  
  getAccessToken(){
    if(accessToken){
      return accessToken;
    } else if(window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      let expirationTime = window.location.href.match(/expires_in=([^&]*)/)[1];
      window.setTimeout(() => (accessToken = ''), expirationTime * 1000);
      window.history.pushState('Access Token', null, '/'); 
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },
  search(term) {
    const accessToken = this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      if(response.ok){
        return response.json();
      }
      throw new Error('Request Failed');
    }, networkError => console.log(networkError.message)).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },
  savePlaylist(playlistName, trackURIs) {
    if (!playlistName || !trackURIs.length) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userID;
    return fetch('https://api.spotify.com/v1/me', {
      headers: headers
    }).then(response => {
      if(response.ok){
        response.json();
      }
      throw new Error('Request Failed');
    }, networkError => console.log(networkError.message)).then(jsonResponse => {
      userID = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: playlistName})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackURIs})
        });
      });
    });
  }
  
};

export default Spotify;