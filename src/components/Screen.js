import React from "react";
import { useState, useEffect } from "react";

import { stars } from '../data/starData';
import './screen.css';


function Screen(props) {


    const [starIndex, setStarIndex] = useState(0)

    const [star, setStar] = useState(stars[0])

    const [audioPlaying, setAudioPlaying] = useState(false)

    if (props.spotify === 'block') {
      star.voice.pause()
    }


    const togglePlaying = () => {

      if (audioPlaying) {
        setAudioPlaying(false)
        star.voice.pause()

        console.log('paused')

        return
      }

      if (props.spotify === 'block') {
        star.voice.pause()

        window.alert('Voice cannot be played because the Spotify Widget is opened. Close it')
        return
      }

       setAudioPlaying(true)
        star.voice.play()

        console.log('playing')

       }
    
       

      
       
      //  function stopTimeout() {
      //   clearTimeout(t)
      //  }

    
      useEffect(() => {
    
        setAudioPlaying(false)
        star.voice.pause()
        console.log(star.name, 'was just swiped')

        setStar(stars[starIndex])
    
        document.getElementById('starInfoPar').classList.add('parAnimation')

        // REMOVE ANIMATION FROM 'person description paragraph' in 3 seconds in order to enable its 'ADDING' after re-render
        let t = setTimeout(() => {
          document.getElementById('starInfoPar').classList.remove('parAnimation');
          console.log('animation class removed')
          clearTimeout(t)
        }, 3000)
  
      }, [starIndex])
    
      
      // useEffect( () => {
    
      //   // star.voice.play()
      //   // console.log(star.name, ' voice is playing')
      // }, [star])
    
      
      // after LAST person - RESET counter to ZERO , if GOING BACK (-1) - RESET counter to LAST person in array
    
      if (starIndex === stars.length) {
        setStarIndex(0)
      }
      if (starIndex === -1) {
        setStarIndex(stars.length - 1)
      }

      window.onkeydown = (event) => {
        switch (event.key) {
     
          case 'ArrowLeft' :
            setStarIndex(prev => prev - 1 )
            break;

          case 'ArrowRight' :
            setStarIndex(prev => prev + 1 )
            break;
        }
      }


    return (

      <div id='container'>

            <div id='screen'> 

                <img class='starImg'
                src={star.img} alt={star.name}
                />
          
            </div>

            <div id='starInfoContainer'>
                <p id='starInfoPar'> {star.name} , {star.age} </p>
            </div>

      
            <div id='playerContainer'> 

            <lord-icon
            onClick = {() => { setStarIndex(prev => prev - 1 ) } }
            class = 'playerBtns'
            src="https://cdn.lordicon.com/xsdtfyne.json"
            trigger="hover"
            style={{width:"50px", height:"50px", marginRight: '20px', transform: "rotate(-90deg)",
        
            }}>
            </lord-icon>

            <lord-icon
            onClick = {() => togglePlaying()}
            class = 'playerBtns'
            src="https://cdn.lordicon.com/ensnyqet.json"
            trigger="morph"
            style={{width: "50px", height: "50px", marginRight: '20px'}}>
            </lord-icon>


            <lord-icon
            onClick = {() => setStarIndex(prev => prev + 1)}
            class = 'playerBtns'
            src="https://cdn.lordicon.com/xsdtfyne.json"
            trigger="hover"
            style={{width:"50px", height:"50px", transform: "rotate(90deg)"}}>
            </lord-icon>


            </div>

      </div>

    )
}

export default Screen