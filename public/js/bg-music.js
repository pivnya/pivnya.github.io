const music = document.createElement("audio");
music.loop = true;
music.autoplay = true;
music.volume = 0.1;

const path = location.pathname;

window.onload = function() {
  switch(path) {
    case "/":
      console.log("dansi")
      music.src = "/snd/bg-index.flac";
      music.play().catch(err => console.log(err));
      break;

    case "/reviews/":
      console.log("dansi")
      music.src = "/snd/bg-reviews.flac";
      music.play().catch(err => console.log(err));
      break;

    default:
      console.log("NO MUSIC ON THIS PAGE AHAHAHAHA")
      break;
  }
}