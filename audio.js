support = !! (document.createElement('audio').canPlayType);
         if (support) clips = [];

         function soundfile(sound) {
             if (!clips[sound]) clips[sound] = new Audio('audio/'+sound);
             clips[sound].play();
         }
