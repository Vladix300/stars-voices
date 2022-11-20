import React, { useState } from "react";

import './screen.css';
import Iframe from "react-iframe";

import {songs} from '../data/songData.js'

let counter = 0;



export default function SpotifyWidget(props) {


    const [song, setSong] = useState(songs[counter])

    // const [spotifyPlaying, setSpotifyPlaying] = useState(false)

    const changeSong = () => {
        counter++;

        if (counter === songs.length) {
            counter = 0;
        }

        setSong(songs[counter])
    }


    return (

    <>

    <div id='spotifyPlayer' style={props.spotify === 'block' ? {left: '10px'} 
        :  {left:'-320px'}}>

       <Iframe
            id = 'iframeSpotify'
            // display={props.spotify}
            style="border-radius:12px"
            src={song}
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
        />


        <div id='spotifyNextBtnContainer'>
            <button 
                id='spotifyNextBtn'
                // style = {{'display' : props.spotify}}
                onClick={() => changeSong()}>
                Another song
            </button>
        </div>

     </div>

        <img 
            id='spotifyLogo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png'
            onClick={() => props.displaySpotify()}      
          />
        
     
     </>
    
    
        
    )
}