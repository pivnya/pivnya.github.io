const music = document.createElement("audio");
music.loop = true;
music.autoplay = true;
music.volume = 0.1;

const path = location.pathname;

window.onload = function() {
  switch(path) {
    case "/":
      console.log("dansi")
      music.src = "/snd/bg-index.mp3";
      music.play().catch(err => console.log(err));
      break;

    case "/reviews/":
      console.log("dansi")
      music.src = "/snd/bg-reviews.mp3";
      music.play().catch(err => console.log(err));
      break;

    case "/links/":
      console.log("dansi")
      music.src = "/snd/bg-links.mp3";
      music.volume = 0.6;
      music.play().catch(err => console.log(err));
      break;

    default:
      console.log("NO MUSIC ON THIS PAGE AHAHAHAHA")
      break;
  }
}