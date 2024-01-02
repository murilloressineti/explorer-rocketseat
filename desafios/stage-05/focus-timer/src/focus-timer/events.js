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
    el.minutes.addEventListener('click', () => {
        el.minutes.textContent = Number(el.minutes.textContent) + 5;
        
    })

    el.minutes.addEventListener('click', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
    })
}

export function lessTime() {
    /*el.minutes.addEventListener('click', () => {
        el.minutes.textContent = Number(el.minutes.textContent) - 5;
        
    })
    */
    el.minutes.addEventListener('click', (event) => {
        let time = event.currentTarget.textContent
        time = time < 0 ? 0 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
    })
}