// options

const helpButton = document.getElementById('helpButton');
const dismissHelpButton = document.getElementById('dismissHelp');
const helpMenu = document.getElementById('helpMenu');

helpButton.addEventListener('click', toggle)

dismissHelpButton.addEventListener('click', toggle)

let show = false;

function toggle() {
    show = !show;

    if (show) {
        helpMenu.style.display = 'flex';
    } else {
        helpMenu.style.display = 'none';
    }
}