let guess = 1;

// all guess boxes on the page
let boxes1 = document.getElementById("guess1").children;
let boxes2 = document.getElementById("guess2").children;
let boxes3 = document.getElementById("guess3").children;
let boxes4 = document.getElementById("guess4").children;
let boxes5 = document.getElementById("guess5").children;
let boxes6 = document.getElementById("guess6").children;

// clear boxes on site load
document.addEventListener("load", reset, false);
function reset() {
    for (i of boxes1) { i.value = ""; }
    for (i of boxes2) { i.value = ""; }
    for (i of boxes3) { i.value = ""; }
    for (i of boxes4) { i.value = ""; }
    for (i of boxes5) { i.value = ""; }
    for (i of boxes6) { i.value = ""; }
}

// activate guesses
function setSelectables() {
    if (guess === 1) {
        for (let i of boxes1) { i.disabled = false; }
        for (let i of boxes2) { i.disabled = true; }
        for (let i of boxes3) { i.disabled = true; }
        for (let i of boxes4) { i.disabled = true; }
        for (let i of boxes5) { i.disabled = true; }
        for (let i of boxes6) { i.disabled = true; }
    }

    if (guess === 2) {
        for (let i of boxes2) { i.disabled = false; }
        for (let i of boxes1) { i.disabled = true; }
        for (let i of boxes3) { i.disabled = true; }
        for (let i of boxes4) { i.disabled = true; }
        for (let i of boxes5) { i.disabled = true; }
        for (let i of boxes6) { i.disabled = true; }
    }

    if (guess === 3) {
        for (let i of boxes3) { i.disabled = false; }
        for (let i of boxes2) { i.disabled = true; }
        for (let i of boxes1) { i.disabled = true; }
        for (let i of boxes4) { i.disabled = true; }
        for (let i of boxes5) { i.disabled = true; }
        for (let i of boxes6) { i.disabled = true; }
    }

    if (guess === 4) {
        for (let i of boxes4) { i.disabled = false; }
        for (let i of boxes2) { i.disabled = true; }
        for (let i of boxes3) { i.disabled = true; }
        for (let i of boxes1) { i.disabled = true; }
        for (let i of boxes5) { i.disabled = true; }
        for (let i of boxes6) { i.disabled = true; }
    }

    if (guess === 5) {
        for (let i of boxes5) { i.disabled = false; }
        for (let i of boxes2) { i.disabled = true; }
        for (let i of boxes3) { i.disabled = true; }
        for (let i of boxes4) { i.disabled = true; }
        for (let i of boxes1) { i.disabled = true; }
        for (let i of boxes6) { i.disabled = true; }
    }

    if (guess === 6) {
        for (let i of boxes6) { i.disabled = false; }
        for (let i of boxes2) { i.disabled = true; }
        for (let i of boxes3) { i.disabled = true; }
        for (let i of boxes4) { i.disabled = true; }
        for (let i of boxes5) { i.disabled = true; }
        for (let i of boxes1) { i.disabled = true; }
    }

    if (guess === 7) {
        for (let i of boxes6) { i.disabled = true; }
        for (let i of boxes2) { i.disabled = true; }
        for (let i of boxes3) { i.disabled = true; }
        for (let i of boxes4) { i.disabled = true; }
        for (let i of boxes5) { i.disabled = true; }
        for (let i of boxes1) { i.disabled = true; }
    }
}

setSelectables();

// move box cursor
let currentNum = 1;

document.addEventListener("keydown", typed, false);
function typed(e) {
    // move to next box on typing
    if (e.keyCode !== 13 && e.keyCode !== 8 && document.activeElement.value !== "") { // (disallow) enter or backspace
        try {
            document.getElementsByName(Number(document.activeElement.name) + 1)[guess - 1].focus();
        } catch(e) {
            document.getElementsByName("1")[guess - 1].focus();
        }
    }

    // move to back box on backspacing
    if (e.keyCode !== 13 && e.keyCode === 8 && document.activeElement.value === "") { // disallow enter, allow backspace
        document.getElementsByName(Number(document.activeElement.name) - 1)[guess - 1].focus();
    }

    // navigate around boxes with arrow keys
    if (e.keyCode === 37) { // <- (left arrow)
        document.getElementsByName(Number(document.activeElement.name) - 1)[guess - 1].focus();
    }

    if (e.keyCode === 39) { // -> (right arrow)
        document.getElementsByName(Number(document.activeElement.name) + 1)[guess - 1].focus();
    }
}

// word submission
let passes = 0;

let userWord = "";
let userWordArray = [];

document.addEventListener("keydown", submit, false);
function submit(e) {
    if (e.keyCode === 13) { // enter key
        if (guess === 1) {
            for (let i of boxes1) {
                if (!(i.value === "")) {
                    passes += 1;
                    userWordArray.push(i.value);
                }
            }
        }
        if (guess === 2) {
            for (let i of boxes2) {
                if (!(i.value === "")) {
                    passes += 1;
                    userWordArray.push(i.value);
                }
            }
        }
        if (guess === 3) {
            for (let i of boxes3) {
                if (!(i.value === "")) {
                    passes += 1;
                    userWordArray.push(i.value);
                }
            }
        }
        if (guess === 4) {
            for (let i of boxes4) {
                if (!(i.value === "")) {
                    passes += 1;
                    userWordArray.push(i.value);
                }
            }
        }
        if (guess === 5) {
            for (let i of boxes5) {
                if (!(i.value === "")) {
                    passes += 1;
                    userWordArray.push(i.value);
                }
            }
        }
        if (guess === 6) {
            for (let i of boxes6) {
                if (!(i.value === "")) {
                    passes += 1;
                    userWordArray.push(i.value);
                }
            }
        }

        if (passes === 5) {
            userWord = userWordArray.join("").toUpperCase();
            userWordArray = [];
            passes = 0;
            guess += 1;
            setSelectables();
        }
    }
}

let goal = ["B", "O", "R", "E", "D"]; // test value for now

function wordOfTheDay() {

}