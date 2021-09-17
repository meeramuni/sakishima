/*
Plays audio when clicked on
*/
support = !! (document.createElement('audio').canPlayType);
if (support) clips = [];

function soundfile(sound) {
 if (!clips[sound]) clips[sound] = new Audio('https://www.ocf.berkeley.edu/~sakishima/audio/'+sound);
 clips[sound].play();
}