
const colors = ['green', 'red', 'rgba(133,122,200)', '#BB6600', '#eba0e0'];
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

// add event listener to the button 
btn.addEventListener("click", function() {
    // console.log(document.body);

    // get a random number between 0 -4 in the array
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

