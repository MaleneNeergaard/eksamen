/* video.html */

const videoPlayer = document.querySelector(".video-player");
const video = videoPlayer.querySelector(".video");
const playButton = videoPlayer.querySelector(".play-button");
const volume = videoPlayer.querySelector(".volume");
const currentTimeElement = videoPlayer.querySelector(".current");
const durationTimeElement = videoPlayer.querySelector(".duration");
const progress = videoPlayer.querySelector(".video-progress");
const progressBar = videoPlayer.querySelector(".video-progress-filled");

//Play og Pause knapper
playButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    e.target.textContent = "❚ ❚";
  } else {
    video.pause();
    e.target.textContent = "►";
  }
});

//volume
volume.addEventListener("mousemove", (e) => {
  video.volume = e.target.value;
});

//tid og resterende tid
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60);
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
  let durationMinutes = Math.floor(video.duration / 60);
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

  currentTimeElement.innerHTML = `${currentMinutes}:${
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
  }`;
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`;
};

video.addEventListener("timeupdate", currentTime);

//Viser hvor langt i proces
video.addEventListener("timeupdate", () => {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percentage}%`;
});

//on click - til visning af proces
progress.addEventListener("click", (e) => {
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressTime;
});

/* om.html */

var play = document.getElementById("play");

/* pop up funktion*/
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

var vid = document.getElementById("myVideo");

function playVid() {
  vid.play();
}

function pauseVid() {
  vid.pause();
}

/* om_intro.html */

function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "IMG/udenlys.png";
  } else {
    pic = "IMG/medlys.png";
  }
  document.getElementById("myImage").src = pic;
}
