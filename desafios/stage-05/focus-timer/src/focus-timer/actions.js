import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function moreTime() {
    el.minutes.setAttribute('contenteditable', true) /*adicionar tempo de 5 em 5 */
    el.minutes.focus()
}

export function lessTime() {
    el.minutes.setAttribute('contenteditable', true) /*diminuir tempo de 5 em 5 */
    el.minutes.focus()
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.forest.play()
        return
    }

    sounds.forest.pause()
}