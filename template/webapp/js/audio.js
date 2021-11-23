/*
Plays audio when clicked on
*/
support = !! (document.createElement('audio').canPlayType);
if (support) clips = [];

function soundfile(sound) {
 if (!clips[sound]) clips[sound] = new Audio(sound);
 clips[sound].play();
}