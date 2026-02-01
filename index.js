let guess = 1;

let userWord = "";
let userWordArray = [];

// all guess spots on the page
let guessArea1 = document.getElementById("guess1");
let guessArea2 = document.getElementById("guess2");
let guessArea3 = document.getElementById("guess3");
let guessArea4 = document.getElementById("guess4");
let guessArea5 = document.getElementById("guess5");
let guessArea6 = document.getElementById("guess6");

let boxes1 = [];
let boxes2 = [];
let boxes3 = [];
let boxes4 = [];
let boxes5 = [];
let boxes6 = [];

function findBoxes() {
    boxes1 = guessArea1.children;
    boxes2 = guessArea2.children;
    boxes3 = guessArea3.children;
    boxes4 = guessArea4.children;
    boxes5 = guessArea5.children;
    boxes6 = guessArea6.children;

    console.log(boxes1);
    console.log(boxes2);
    console.log(boxes3);
    console.log(boxes4);
    console.log(boxes5);
    console.log(boxes6);
}

findBoxes();

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
let selectedBox;

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

// move cursor
let currentNum = 1;

document.addEventListener("keydown", typed, false);
function typed(e) {
    console.log(e.keyCode);
    if (e.keyCode !== 13 && e.keyCode !== 8) { // DO NOT enter or backspace
        let box = document.activeElement;
        let boxNum = box.name;
        console.log(boxNum);

        let toFocus = document.getElementsByName(Number(boxNum) + 1)[guess - 1].focus();
    }
}

// submission
let pass1 = false;
let passes = 0;

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
            console.log(guess);
            console.log(userWord);
        }
    }
}

let goal = "BORED"; // test value for now

function wordOfTheDay() {

}