import state from "./state.js"
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from "./timer.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function') {
            return
        }

        actions[action]()
    })
}

export function registerSounds() {
    sounds.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }

        actions[action]()
    })
}

export function moreTime() {
    minutes.addEventListener('click', () => {
        minutes.textContent = Number(minutes.textContent) + 5;
    })

    minutes.addEventListener('click', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
    })

    minutes.addEventListener('click', (event) => {
        console.log(event.target)
    })

}

export function lessTime() {
    minutes.addEventListener('click', () => {
        minutes.textContent = Number(minutes.textContent) - 5;
    })

    minutes.addEventListener('click', (event) => {
        let time = event.currentTarget.textContent
        time = time < 0 ? 0 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
    })

    minutes.addEventListener('click', (event) => {
        console.log(event.target)
    })
    
}


/*minutes.addEventListener('click', () => { 
    if(Number(minutes.textContent) >= 5) {
    minutes.textContent = Number(minutes.textContent) - 2;
} else {
    minutes.textContent = '00';
    seconds.textContent = '00';
}
}) 

*/