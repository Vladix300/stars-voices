import { useState } from "react"

export const useVoice = (src) => {
    
    const [starVoice, setStarVoice] = useState(src)

    const nextVoice = (id) => {

        setStarVoice(stars[id].voice)

        starVoice.play()
    }


    return [starVoice, nextVoice]
}