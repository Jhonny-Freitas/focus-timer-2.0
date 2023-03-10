export default function Timer({
    minutesDisplay,
    secondsDisplay,
}){

    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    let timerTimeout

    function updateTimeDisplay(minutes, seconds){
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    function resetTimer(){
        updateTimeDisplay(minutes, 0)
        clearTimeout(timerTimeout)
    }
    
    function countDown (){
        timerTimeout = setTimeout(() => {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            
            updateTimeDisplay(minutes, 0)
    
            if(minutes <= 0 && seconds <= 0){
                return
            }
            
            if(seconds <= 0){
                seconds = 60
                --minutes
            }
    
            updateTimeDisplay(minutes, String(seconds - 1))
                            
            countDown()
        }, 1000)
    }

    function addMinutes(){
        let newMinutes = Number(minutesDisplay.textContent)
    
        updateTimeDisplay(newMinutes + 5, seconds)
    }
    
    function decraseMinutes(){
        let newMinutes = Number(minutesDisplay.textContent)
        newMinutes = newMinutes - 5
    
        if(newMinutes < 0){
            newMinutes = 0
        }
        updateTimeDisplay(newMinutes, seconds)
    }

    return{
        resetTimer,
        countDown,
        addMinutes,
        decraseMinutes
    }
}