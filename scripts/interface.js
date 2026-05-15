// script for the ui

let guess = 1;

// all guess boxes on the page
let boxes = [
    document.getElementById("guess1").children,
    document.getElementById("guess2").children,
    document.getElementById("guess3").children,
    document.getElementById("guess4").children,
    document.getElementById("guess5").children,
    document.getElementById("guess6").children,
]

// clear boxes on site load
document.addEventListener("load", reset, false);
function reset() {
    for (let i = 0; i < 5; i++) {
        for (let j of boxes[i]) { j.value = ""; }
    }
}

// activate guesses
function setSelectables() {
    const reference = guess - 1;

    for (let i = 0; i < 6; i++) { // for boxes
        if (i === reference) {
            for (let j of boxes[i]) {
                j.disabled = false;
            }
        } else {
            for (let j of boxes[i]) {
                j.disabled = true;
            }
        }
    }
}

setSelectables();

// move box cursor
document.addEventListener("keydown", typed, false);
function typed(e) {
    // move to next box on typing
    if (e.keyCode !== 13 && e.keyCode !== 8 && e.keyCode !== 37 && e.keyCode !== 39 && document.activeElement.value !== "") { // disallow enter, arrows, backspace
        try {
            document.activeElement.nextElementSibling.focus();
        } catch(e) {
            if (document.activeElement.name === undefined) {
                document.getElementsByName("1")[guess - 1].focus();
            }
        }
    }

    // move to back box on backspacing
    if (e.keyCode !== 13 && e.keyCode === 8 && e.keyCode !== 37 && e.keyCode !== 39 && document.activeElement.value === "") { // disallow enter, arrows, allow backspace
        document.activeElement.previousElementSibling.focus();
    }

    // navigate around boxes with arrow keys
    if (e.keyCode === 37) { // <- (left arrow)
        document.activeElement.previousElementSibling.focus();
    }

    if (e.keyCode === 39) { // -> (right arrow)
        try {
            document.activeElement.nextElementSibling.focus();
        } catch(e) {
            if (document.activeElement.name === undefined) {
                document.getElementsByName("1")[guess - 1].focus();
            }
        }
    }
}

// word submission
let passes = 0;

let userWord = "";
let userWordArray = [];

document.addEventListener("keydown", submit, false);
function submit(e) {
    if (e.keyCode === 13) { // enter key
        for (let i of boxes[guess - 1]) {
            if (!(i.value === "")) {
                passes += 1;
                userWordArray.push(i.value);
            }
        }

        if (passes === 5) {
            userWord = userWordArray.join("").toUpperCase();
            userWordArray = [];
            passes = 0;
            guess += 1;
            setSelectables();
        }

        passes = 0;
    }

    matchToGoal();
}

function matchToGoal() {
    let guessWord = userWord.split("");
    let goalCopy = [...goal];

    let result = ["grey", "grey", "grey", "grey", "grey"];

    // exact match
    for (let i = 0; i < 5; i++) {
        if (guessWord[i] === goalCopy[i]) {
            result[i] = "green";

            // remove matched
            goalCopy[i] = null;
            guessWord[i] = null;
        }
    }

    // wrong position but exists
    for (let i = 0; i < 5; i++) {
        if (guessWord[i] !== null) {
            let foundIndex = goalCopy.indexOf(guessWord[i]);

            if (foundIndex !== -1) {
                result[i] = "yellow";

                // remove a copy
                goalCopy[foundIndex] = null;
            }
        }
    }

    // colour
    for (let i = 0; i < 5; i++) {
        if (result[i] === "green") {
            boxes[guess - 2][i].style.background = "#f7ccff"; // pinck (aka greeen)
        } else if (result[i] === "yellow") {
            boxes[guess - 2][i].style.background = "#52c7d6"; // bleu (aka yellow)
        } else {
            boxes[guess - 2][i].style.background = "#999"; // grey (aka gray)
        }
    }

    // finish!
    if (!result.includes("grey") && !result.includes("grey")) {
        guess = 10;
        setSelectables();
        celebrate();
    } else if (guess === 7) {
        kill();
    }
}

function celebrate() {
    for (let i in document.children) {
        document["children"][i].style.background = "#52d65e"
    }
}


function kill() {
    for (let i in document.children) {
        document["children"][i].style.background = "#cb2a2a"
    }
}

let goal = ["B", "O", "R", "E", "D"]; // test value for now

function wordOfTheDay() {

}