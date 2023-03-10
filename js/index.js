import Timer from "./timer.js"
import Sound from "./sounds.js"
import Event from "./events.js"
import {
    minutesDisplay,
    secondsDisplay
} from "./elements.js"


const timer = Timer({
    minutesDisplay,
    secondsDisplay
})

const sound = Sound()

Event(timer)














