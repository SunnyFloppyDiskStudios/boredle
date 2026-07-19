// script for the game

const words = [
    "BORED","BORAD","BORID","BOROD","BORUD",
    "BARED","BARAD","BARID","BAROD","BARUD",
    "BERED","BERAD","BERID","BEROD","BERUD",
    "BIRED","BIRAD","BIRID","BIROD","BIRUD",
    "BURED","BURAD","BURID","BUROD","BURUD",
    "BOERD","BODER","OBRED","BROED","BOEDR",
    "BORDE","BEORD","BEARD","BOREM","BORES",
    "BOREF","BRODE","BAERD","BRAID","BRIAD",
    "MEOWM","BMEOW","BAAAH","BWAHA","HELPM",
    "BAHHH","BAAHH","BWAAH","AAAAA","BBBBB",
    "BREAD","BOURD"
];

const filler = "+";

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

    for (let i = 0; i <= 5; i++) { // for boxes
        for (let j of boxes[i]) { // for inputs
            j.disabled = i !== reference;
        }
    }
}

setSelectables();

// move box cursor
document.addEventListener("keydown", typed, false);
function typed(e) {
    // move to next box on typing
    if (e.keyCode !== (13 || 8 || 37 || 39) && document.activeElement.value !== "") { // disallow enter, arrows, backspace
        try {
            document.activeElement.nextElementSibling.focus();
        } catch(e) {
            if (document.activeElement.name === undefined) {
                document.getElementsByName("1")[guess - 1].focus();
            }
        }
    }

    // move to back box on backspacing
    if (e.keyCode === 8 && document.activeElement.value === "") { // backspace
        document.activeElement.previousElementSibling.focus();
    }

    // navigate around boxes with arrow keys
    if (e.keyCode === 37) { // <- (left arrow)
        try {
            document.activeElement.previousElementSibling.focus();
        } catch(e) {
            if (document.activeElement.name === undefined) {
                document.getElementsByName("5")[guess - 1].focus();
            }
        }
    } else if (e.keyCode === 39) { // -> (right arrow)
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

        matchToGoal();
    }
}

function matchToGoal() {
    let matches = [3,3,3,3,3]; // 1 = match, 2 = there, 3 = womp

    let goalArray = [];
    for (let i of goal) {
        goalArray.push(i);
    }

    let guessArray = [];
    for (let i of userWord) {
        guessArray.push(i);
    }

    // perfect match
    for (let i in goalArray) {
        if (goalArray[i] === guessArray[i]) {
            matches[i] = 1;
            goalArray[i] = filler;
            guessArray[i] = filler;
        }
    }

    // exists in match
    for (let i in goalArray) {
        if (goalArray.includes(guessArray[i]) && guessArray[i] !== filler) {
            matches[i] = 2;

            goalArray[goalArray.indexOf(guessArray[i])] = filler;
            guessArray[i] = filler;
        }
    }

    for (let i in matches) {
        if (matches[i] === 1) {
            boxes[guess - 2][i].style.background = "#f7ccff"; // pinck (aka greeen)
        } else if (matches[i] === 2) {
            boxes[guess - 2][i].style.background = "#527cd6"; // bleu (aka yellow)
        } else {
            boxes[guess - 2][i].style.background = "#999"; // grey (aka gray)
        }
    }

    if (!matches.includes(2) && !matches.includes(3)) {
        guess = 10;
        setSelectables();
        celebrate(true);
    } else if (guess > 6) {
        guess = 50;
        celebrate(false);
    }
}

function celebrate(doo) {
    for (let i in document.children) {
        if (doo) {
            document["children"][i].style.background = "#52d65e"
        } else {
            document["children"][i].style.background = "#cb2a2a"
        }
    }
}

let goal = "BORED"; // test value for now

function wordOfTheDay() {
    goal = words[Math.floor(Math.random() * words.length)];

}

wordOfTheDay();
console.log(goal);