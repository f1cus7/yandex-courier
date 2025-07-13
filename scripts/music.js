const audioMusic = new Audio("/audio/music.mp3");

let musicFirst = localStorage.getItem("musicFirst") || false;

if (musicFirst) {
  window.addEventListener("click", () => {
    audioMusic.play();
  });
} else {
  document.getElementById("modalStart").style.display = "flex";
}

let savedVolume = localStorage.getItem("musicVolume");
let volume = savedVolume ? parseFloat(savedVolume) : 0.5;
audioMusic.volume = volume;

const input = document.getElementById("inputMusic");
input.value = volume * 100;

const startMusic = () => {
  audioMusic.play();
};

input.addEventListener("input", (e) => {
  const volume = e.target.value / 100;
  audioMusic.volume = volume;
  localStorage.setItem("musicVolume", volume);
});

const btnMusicNo = document.getElementById("btn-music-no");
const btnMusicYes = document.getElementById("btn-music-yes");

btnMusicNo.addEventListener("click", () => {
  startMusic(0.0);
  document.getElementById("modalStart").style.display = "none";
  localStorage.setItem("musicFirst", true);
});

btnMusicYes.addEventListener("click", () => {
  startMusic(0.5);
  document.getElementById("modalStart").style.display = "none";
  localStorage.setItem("musicFirst", true);
});
