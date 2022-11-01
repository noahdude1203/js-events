window.addEventListener("click", function () {
    console.log("== The window was clicked")
})

function boxClickHandler(event) {
    console.log("== A box was clicked")
    console.log("  -- event.target:", event.target)
    console.log("  -- event.currentTarget:", event.currentTarget)
}

var boxes = document.getElementsByClassName("box")
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", boxClickHandler)
}

function buttonClickHandler(event) {
    console.log("== A button was clicked")
    console.log("  -- event.target:", event.target)
    console.log("  -- event.currentTarget:", event.currentTarget)
    event.stopPropagation()
}

var buttons = document.getElementsByClassName("in-box-button")
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonClickHandler)
}

function one() {
    return 1
}

function two() {
    return 2
}

function three() {
    return 3
}

function addThree(a, b, c) {
    return a + b + c
}

addThree(one(), two(), three())
