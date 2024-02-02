const favButton = document.querySelector("header button")
const svgColor = document.querySelector("svg path")

favButton.addEventListener(`click`, () => {
    input.value = ""
    input.focus()
})

favButton.addEventListener(`mouseenter`, () => {
    svgColor.style.fill = "#065E7C"
})

favButton.addEventListener(`mouseleave`, () => {
    svgColor.style.fill = "white"
})
