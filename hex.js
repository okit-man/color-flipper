const colorHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const hex_color = document.querySelector('.color');
const hexBtn = document.getElementById('btn');

// add event listener to the button using the # symbol
// #f66066
hexBtn.addEventListener ('click', function() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        // call the function to get a random hex color
        hex += colorHex[getHexColor ()]
    }

    document.body.style.backgroundColor = hex;
    hex_color.textContent = hex;
});

function getHexColor () {
    return Math.floor(Math.random () * colorHex.length);
};