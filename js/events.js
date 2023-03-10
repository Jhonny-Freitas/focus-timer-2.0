import Sound from "./sounds.js"
import {
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonFewer,
    forestButton,
    rainButton,
    coffeshopButton,
    fireplaceButton
} from "./elements.js"

const sound = Sound()

export default function(timer){

    buttonPlay.addEventListener("click", buttonPlayClick)
    buttonStop.addEventListener("click", buttonStopClick)
    buttonPlus.addEventListener("click", buttonPlusClick)
    buttonFewer.addEventListener("click", buttonFewerClick)
    forestButton.addEventListener("click", forestButtonActivated)
    rainButton.addEventListener("click", rainButtonActivated)
    coffeshopButton.addEventListener("click", coffeshopButtonActivated)
    fireplaceButton.addEventListener("click", fireplaceButtonActivated)

    function buttonPlayClick(){
        timer.countDown()
    }

    function buttonStopClick(){
        timer.resetTimer()
    }

    function buttonPlusClick(){
        timer.addMinutes()
    }

    function buttonFewerClick(){
        timer.decraseMinutes()
    }

    function activeButton(button){

        let svgElement = button.querySelector("svg path")
    
        button.classList.toggle("active-button")
        svgElement.classList.toggle("svg-button-white")
             
    }

    function forestButtonActivated(){
        activeButton(forestButton)
        sound.forestAudioStart()
        
    }
    
    function rainButtonActivated(){
        activeButton(rainButton)
        sound.rainAudioStart()
    }
    
    function coffeshopButtonActivated(){
        activeButton(coffeshopButton)
        sound.coffeshopAudioStart()
    }
    
    function fireplaceButtonActivated(){
        activeButton(fireplaceButton)
        sound.fireplaceAudioStart()
    }
}