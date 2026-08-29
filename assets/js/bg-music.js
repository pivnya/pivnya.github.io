const DEFAULT_VOLUME = 0.3;
const VOLUME_STEP = 0.05;
const STORAGE_KEY = "player_state";

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const now_playing = document.getElementById("now-playing");

const prev_track = document.getElementById("prev-track");
const next_track = document.getElementById("next-track");

const inc_snd = document.getElementById("inc-snd");
const dcs_snd = document.getElementById("dcs-snd");

const curr_time = document.getElementById("current-time");
const total_duration = document.getElementById("total-duration");


const on = new Audio("/snd/msc-on.mp3");
const off = new Audio("/snd/msc-off.mp3");
const click = new Audio("/snd/msc-click.mp3");

const player_sounds = [on, off, click]

for (const sound of player_sounds) {
  sound.volume = DEFAULT_VOLUME;
}

const curr_track = new Audio();
curr_track.volume = DEFAULT_VOLUME;
curr_track.preload = "metadata";

let track_index = 0;
let isPlaying = false;
let update_timer;

const track_list = [
  {
    name: "Akira Yamaoka / FirebrandX - Mirrored Guilt",
    path: "/music/Silent Hill 2 CST - 1.01 - Mirrored Guilt.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - The Reverse Will",
    path: "/music/Silent Hill 2 CST - 1.02 - Mary's Invitation.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Looking for Mommy",
    path: "/music/Silent Hill 2 CST - 1.05 - Looking for Mommy.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Toluca Graveyard",
    path: "/music/Silent Hill 2 CST - 1.06 - Toluca Graveyard.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Maria's Purpose",
    path: "/music/Silent Hill 2 CST - 2.00b - Maria's Purpose.mp3",
  },
  {
    name: "Akira Yamaoka - Heaven's Night",
    path: "/music/Silent Hill 2 CST - 3.04 - Heaven's Night.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - True",
    path: "/music/Silent Hill 2 CST - 6.05 - True.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Ashes and Tears",
    path: "/music/Silent Hill 2 CST - 6.06 - Ashes and Tears.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Peace & Serenity",
    path: "/music/Silent Hill 2 CST - 7.02 - Peace & Serenity.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Pianissimo Epilogue",
    path: "/music/Silent Hill 2 CST - 7.03 - Pianissimo Epilogue.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Rebirth Ending",
    path: "/music/Silent Hill 2 CST - 8.05 - Rebirth Ending.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Ditching the Detective",
    path: "/music/Silent Hill 3 CST - 2.01 - Ditching the Detective.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Letter ~ from the Lost Days",
    path: "/music/Silent Hill 3 CST - 5.05 - Letter ~ from the Lost Days.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Planning at the Motel",
    path: "/music/Silent Hill 3 CST - 5.06 - Planning at the Motel.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - Casual Background",
    path: "/music/Silent Hill 3 CST - 8.14 - Casual Background.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - No Excuses",
    path: "/music/Silent Hill 3 CST - 9.02 - No Excuses.mp3",
  },
  {
    name: "Akira Yamaoka / FirebrandX - I've Been Losing You",
    path: "/music/Silent Hill 3 CST - 9.03 - I've Been Losing You.mp3",
  },
];

function formatTime(duration) {
  if (!Number.isFinite(duration)) return "00:00";

  const mins = Math.floor(duration / 60).toString().padStart(2, "0");
  const secs = Math.floor(duration % 60).toString().padStart(2, "0");

  return `${mins}:${secs}`
} 

function updateBtn() {
  play.classList.toggle("active", isPlaying);
  play.classList.toggle("disabled", !isPlaying);

  pause.classList.toggle("active", !isPlaying);
  pause.classList.toggle("disabled", isPlaying);
}

updateBtn();

function updateTimer() {
  if (!isNaN(curr_track.duration)) {
    curr_time.textContent = formatTime(curr_track.currentTime);
    total_duration.textContent = formatTime(curr_track.duration);
  }
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
}

function playClick(sound) {
  sound.currentTime = 0;
  sound.play().catch(console.error);
}

function loadTrack(track_index) {
  clearInterval(update_timer);
  resetValues();

  curr_track.src = track_list[track_index].path;
  curr_track.load();

  now_playing.textContent = track_list[track_index].name;

  update_timer = setInterval(updateTimer, 1000);
}

async function playTrack() {
  try {
    await curr_track.play();
    
    isPlaying = true;

    updateBtn();
  } catch (error) { 
    console.error(error);
  }
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;

  updateBtn();
}

function nextTrack() {
  const wasPlaying = isPlaying;

  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;

  loadTrack(track_index);
  wasPlaying ? playTrack() : pauseTrack();
}

function prevTrack() {
  const wasPlaying = isPlaying;

  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length - 1;

  loadTrack(track_index);
  wasPlaying ? playTrack() : pauseTrack();
}

function incVolume() {
  curr_track.volume = Math.min(1, curr_track.volume + VOLUME_STEP);

  on.volume = curr_track.volume;
  off.volume = curr_track.volume;

  click.volume = curr_track.volume;
  click.currentTime = 0;
  click.play().catch(console.error);

  console.log('Music volume', curr_track.volume);
  console.log('Click volume', click_volume.volume);
  console.log('On volume', on.volume);
  console.log('Off volume', off.volume);
}

function decVolume() {
  curr_track.volume = Math.max(0, curr_track.volume - VOLUME_STEP);

  on.volume = curr_track.volume;
  off.volume = curr_track.volume;

  click.volume = curr_track.volume;
  click.currentTime = 0;
  click.play().catch(console.error);

  console.log('Music volume', curr_track.volume);
  console.log('Click volume', click_volume.volume);
  console.log('On volume', on.volume);
  console.log('Off volume', off.volume);
}

function saveState() {
  try {
    const state = {
      track_index,
      currentTime: curr_track.currentTime,
      volume: curr_track.volume,
      isPlaying,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
}

function retrieveSave() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error(error);

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}

    return null;
  }
}

function loadState() {
  const save_state = retrieveSave();

  if (!save_state) {
    loadTrack(0);
    updateBtn();
    return;
  }

  track_index = save_state.track_index ?? 0;
  loadTrack(track_index);
  curr_track.volume = save_state.volume ?? DEFAULT_VOLUME;

  curr_track.addEventListener("loadedmetadata", () => {
    curr_track.currentTime = save_state.currentTime ?? 0;
    updateTimer();

    if (save_state.isPlaying) {
      curr_track.play();
      isPlaying = true;
      updateBtn();
    }

  }, { once: true });

  updateBtn();
};

window.addEventListener("beforeunload", saveState);

play.addEventListener("click", () => {
  playClick(on);
});

pause.addEventListener("click", () => {
  playClick(off);
});

next_track.addEventListener("click", () => {
  playClick(click);
});

prev_track.addEventListener("click", () => {
  playClick(click);
});

curr_track.addEventListener("timeupdate", updateTimer);
curr_track.addEventListener("loadedmetadata", updateTimer);
curr_track.addEventListener("ended", nextTrack);

loadState();