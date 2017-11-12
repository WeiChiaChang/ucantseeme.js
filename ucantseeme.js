var ucantseeme = function () {
  var hatghost_data = 'https://weichiachang.github.io/happy-halloween/images/hatghost.gif'

  var john_cena_bg = document.createElement('div');

  function preloadImg(image) {
    var img = new Image();
    img.src = image;
  }

  // function preloadAudio(audio) {
  //   var voice = new Audio();
  //   voice.src = audio;
  // }

  preloadImg('https://weichiachang.github.io/happy-halloween/images/hatghost.gif');
  preloadImg('https://i.imgur.com/PZ7qDox.gif');
  // preloadAudio('https://weichiachang.github.io/happy-halloween/images/halloween.mp3');

  var hatghost = function () {
    var shock = document.createElement('div')
    var img = new Image()
    img.src = hatghost_data
    img.style.width = '200px'
    img.style.height = '240px'
    img.style.transition = '20s all'
    img.style.position = 'fixed'
    img.style.left = '-200px'
    img.style.top = '60px'
    img.style.zIndex = 99999

    document.body.appendChild(img)

    window.setTimeout(function () {
      img.style.left = 'calc(100% + 200px)'
    }, 50)

    window.setTimeout(function () {
      img.parentNode.removeChild(img)
    }, 20300)
  }

  var hatghost_trigger = function (data) {
    hatghost()
  };

  try {
    // Detect SpeechRecognition available or not at first
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    // console.log(recognition);
  } catch (e) {
    console.error(e);
  }

  recognition.continuous = true;

  recognition.onresult = function (event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
    if (!mobileRepeatBug) {
      // Print out the message
      console.log(transcript)
      if (transcript.toLowerCase().includes('john cena')) {

        // var sound = new Audio("https://weichiachang.github.io/happy-halloween/images/halloween.mp3");

        var audioInit = "";
        var sound = new Audio("data:audio/mp3;base64," + audioInit);
        // sound.play();
        // ohhh();

        sound.addEventListener("canplaythrough", function () {
          john_cena_bg.style.width = "100%";
          john_cena_bg.style.height = "100%";
          john_cena_bg.style.left = 0;
          john_cena_bg.style.top = 0;
          john_cena_bg.style.position = "fixed";
          john_cena_bg.style.zIndex = 9999;
          john_cena_bg.style.backgroundImage = "url('https://i.imgur.com/PZ7qDox.gif')";
          john_cena_bg.style.backgroundRepeat = "no-repeat";
          john_cena_bg.style.backgroundSize = "cover";
          john_cena_bg.style.backgroundPosition = "center";
          john_cena_bg.style.opacity = 1;
          document.body.appendChild(john_cena_bg);
          // Play the music
          sound.play();
          setTimeout(function () {
            // Stop the music after 9 secs
            sound.pause();
            // Remove john_cena_bg image after 9 secs
            john_cena_bg.parentNode.removeChild(john_cena_bg);
          }, 9000);
        }, false);

        hatghost_trigger(hatghost_data);
      }
    }
  };

  // Recognition setting, open your console for more details

  recognition.onstart = function () {
    console.log('#1 Voice recognition activated. Try speaking into the microphone please.');
  }

  recognition.onspeechend = function () {
    console.log('#2 You were quiet for a while so voice recognition turned itself off.');
  }

  recognition.onerror = function (event) {
    if (event.error == 'no-speech') {
      console.log('#3 No speech was detected. Try again please.');
    };
  }

  recognition.start();
}

module.exports = ucantseeme();
