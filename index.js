// generate random number from 1-3
var randomNumber = Math.floor(Math.random() * 3) + 1;

// play 1of3 audio tracks
if (randomNumber === 1)
{
    var audio = new Audio("./assets/sounds/mercy.mp3");
}
else if (randomNumber === 2)
{
    var audio = new Audio("./assets/sounds/what must be done.mp3");
}
else
{
    var audio = new Audio("./assets/sounds/conscience.mp3");
}
audio.play();