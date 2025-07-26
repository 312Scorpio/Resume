// toggle audio
function toggleAudio(audio)
{
    if (audio.paused) {audio.play();}
    else {audio.pause();}
}

// generate random number from 1-4
var randomNumber = Math.floor(Math.random() * 4) + 1;

// select audio track
if (randomNumber in [1, 2])
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

// toggle audio on image clicks
document.images[0].addEventListener("click", function () {toggleAudio(audio);}, false);

// toggle audio on spacebar keypress
document.addEventListener("keypress", function(event)
{
    if (event.code == "Space" || event.keycode == 32) {toggleAudio(audio);}
});