import React, { useEffect, useState } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import { DataLayerValue } from './Datalayer';
import Player from './Player/Player';
import { getTokenFromResponse } from './spotify';
import Login from './Login/Login';

const spotify = new SpotifyWebApi();

function App() {
   
   const [{ user, token }, dispatch] = DataLayerValue();

   useEffect(() => {
     const hash = getTokenFromResponse();
     window.location.hash = "";
     const _token = hash.access_token;

     if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
       

       spotify.setAccessToken(_token);

       spotify.getMe().then((user) => {
         dispatch({
           type: "SET_USER",
           user: user,
         });
       });
     

     spotify.getUserPlaylists().then((playlists) => {
       dispatch({
         type: "SET_PLAYLISTS",
         playlists: playlists,
       });
      });
     } 
   }, []);


  return (
    <div className="app">
       {
         token ? (
           <Player spotify={spotify}/>
         ) : (
           <Login />
         )
       }
    </div>
  );
}

export default App;
    