const music = document.querySelector("audio");
const tenSecForward = document.querySelector(".ten-sec-forward");
const tenSecBackForward = document.querySelector(".ten-sec-back-forward");
const playBtn = document.querySelector(".play");
const playOrPauseBtn = playBtn.querySelector("i");
const forwardBtn = document.querySelector(".forward");
const backForwardBtn = document.querySelector(".back-forward");
const musicCover = document.querySelector("img");
const musicTitle = document.querySelector("h1");

const musics = [
  {
    id: 1,
    src: "./public/musics/bende-naf-ta-khate-saf.mp3",
    cover: "./public/cover1.jpg",
    title: "بند ناف تا خط صاف",
    singer: "یاس",
  },
  {
    id: 2,
    src: "./public/musics/sefareshi.mp3",
    cover: "./public/cover2.jpg",
    title: "سفارشی",
    singer: "یاس",
  },
  {
    id: 3,
    src: "./public/musics/sarkoob.mp3",
    cover: "./public/cover3.jpg",
    title: "سرکوب",
    singer: "یاس",
  },
];

let mainMusicIndex = 0;

function tenSecForwardHandler() {
  music.currentTime += 10;
}

function tenSecBackForwardHandler() {
  music.currentTime -= 10;
}

function playOrPauseHandler() {
  if (playOrPauseBtn.className.includes("fa-play")) {
    music.play();
    playOrPauseBtn.classList.remove("fa-play");
    playOrPauseBtn.classList.add("fa-pause");
  } else {
    music.pause();
    playOrPauseBtn.classList.remove("fa-pause");
    playOrPauseBtn.classList.add("fa-play");
  }
}

function forwardHandler() {
  mainMusicIndex++;
  if (mainMusicIndex > 2) {
    mainMusicIndex = 0;
  }

  const mainMusic = musics[mainMusicIndex];

  musicCover.setAttribute("src", mainMusic.cover);
  music.setAttribute("src", mainMusic.src);
  musicTitle.innerHTML = `${mainMusic.title} - ${mainMusic.singer}`;

  music.play();
  playOrPauseBtn.classList.remove("fa-play");
  playOrPauseBtn.classList.add("fa-pause");
}

function backForwardHandler() {
  //* Codes (You)
}

tenSecForward.addEventListener("click", tenSecForwardHandler);
tenSecBackForward.addEventListener("click", tenSecBackForwardHandler);
playOrPauseBtn.addEventListener("click", playOrPauseHandler);
forwardBtn.addEventListener("click", forwardHandler);
backForwardBtn.addEventListener("click", backForwardHandler);
