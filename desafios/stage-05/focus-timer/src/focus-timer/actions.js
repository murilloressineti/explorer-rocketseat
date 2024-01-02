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

    sounds.buttonPressAudio.play()
}

export function moreTime() {
    el.minutes.click()

    sounds.buttonPressAudio.play()
}

export function lessTime() {
    el.minutes.click()

    sounds.buttonPressAudio.play()
}

export function toggleMusicForest() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.forest.play()
        return
    }

    sounds.forest.pause()
}

export function toggleMusicRain() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.rain.play()
        return
    }

    sounds.rain.pause()
}

export function toggleMusicRestaurant() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.restaurant.play()
        return
    }

    sounds.restaurant.pause()
}

export function toggleMusicFireplace() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.fireplace.play()
        return
    }

    sounds.fireplace.pause()
}