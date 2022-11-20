import './App.css';
import {useEffect, useState} from "react"


import Screen from './components/Screen';
import SpotifyWidget from './components/Spotify';

import logo from './assets/logo.png'

<>
<script src="https://cdn.lordicon.com/qjzruarw.js"></script>
<script src="https://open.spotifycdn.com/cdn/build/web-player/web-player.ddca802c.js"> </script>
</>
 

 let uniCounter = 0;



function App() {

  const universes = ['universe', 'anotherUniverse', 'anotherUniverse-2']

  const [background, setBackground] = useState(universes[0])

  const [spotify, toggleSpotify] = useState('none')

   function changeBackground() {

    uniCounter++;

    if (uniCounter === universes.length) {
      uniCounter = 0;
    }
    // console.log(uniCounter)

    setBackground(universes[uniCounter])

  }

  function displaySpotify() {

    toggleSpotify(spotify === 'none' ? 'block' : 'none')
  }
  
 


  return (

    <div className={`App ${background}`}>

    <img id='logo' src={logo} alt='stars voices logo' />

      <button id='darkModeBtn' onClick={() => {changeBackground() } }> 
        SWITCH 
      </button>

     <Screen spotify = {spotify} /> 

     <SpotifyWidget spotify = {spotify} displaySpotify = {displaySpotify}/>


    </div>



  

    
  );
}

export default App;
