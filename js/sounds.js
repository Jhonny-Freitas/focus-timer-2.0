import {
    forestButton,
    rainButton,
    coffeshopButton,
    fireplaceButton
} from "./elements.js"

export default function(){
    const forestAudio = new Audio("./Audios/Floresta.wav")
    const rainAudio = new Audio("./Audios/Chuva.wav")
    const coffeshopAudio = new Audio("./Audios/Cafeteria.wav")
    const fireplaceAudio = new Audio("./Audios/Lareira.wav")

    forestAudio.loop, rainAudio.loop, coffeshopAudio.loop, fireplaceAudio.loop = true

    function forestAudioStart(){
        forestButton.classList.contains('active-button')
        ? forestAudio.play()
        : forestAudio.pause()
        
    }

    function rainAudioStart(){
        rainButton.classList.contains('active-button')
        ? rainAudio.play()
        : rainAudio.pause()
    }

    function coffeshopAudioStart(){
        coffeshopButton.classList.contains('active-button')
        ? coffeshopAudio.play()
        : coffeshopAudio.pause()
    }

    function fireplaceAudioStart(){
        fireplaceButton.classList.contains('active-button')
        ? fireplaceAudio.play()
        : fireplaceAudio.pause()
    }
    
    return {
        forestAudioStart,
        rainAudioStart,
        coffeshopAudioStart,
        fireplaceAudioStart
    }

}

