// toggle audio
function toggleAudio(audio)
{
    if (audio.paused) {audio.play();}
    else {audio.pause();}
}

// generate random number from 1-5
var randomNumber = Math.floor(Math.random() * 5) + 1;

// select audio track
if ([1, 2].includes(randomNumber))
{
    var audio = new Audio("./assets/sounds/mercy.mp3");
}
else if ([3, 4].includes(randomNumber))
{
    var audio = new Audio("./assets/sounds/what must be done.mp3");
    audio.volume = 0.5;
}
else
{
    var audio = new Audio("./assets/sounds/conscience.mp3");
    audio.volume = 0.6;
}

// toggle audio on image clicks
document.images[0].addEventListener("click", function () {toggleAudio(audio);}, false);

// toggle audio on spacebar keypress
document.addEventListener("keypress", function(event)
{
    if (event.code == "Space" || event.keycode == 32) {toggleAudio(audio);}
});

// select profile image
var image = document.getElementsByClassName("image")
if ([1, 2].includes(randomNumber))
{
    image[0].src = "./assets/images/profile_2.png";
    image[0].alt = "artistic image of Orlando created using ChatGPT";
}