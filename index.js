// generate random number from 1-3
var randomNumber = Math.floor(Math.random() * 3) + 1;

// select random audio track
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

// set image
var image = document.querySelectorAll(".image");

// toggle audio on image clicks
image.addEventListener("click", function ()
{
    if (audio.paused) {audio.play();}
    else {audio.pause();}
});