var randomNumber = Math.floor(Math.random() * 3) + 1; //1-3

var audio = document.getElementsByName("audio")[0];

if (randomNumber == 2)
{
    audio.setAttribute("src") = "./assets/sounds/what must be done.mp3";
}
else if (randomNumber == 3)
{
    audio.setAttribute("src") = "./assets/sounds/conscience.mp3";
}