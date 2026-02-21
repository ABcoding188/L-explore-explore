const video = document.getElementById("Video");
const playPause = document.querySelector(".play-pause-img");

playPause.addEventListener("click", () => {
    video.paused ? video.play() : video.pause();
    playPause.src = video.paused ? "img/play.png" : "img/pause.png";
});

video.addEventListener("ended", () => {
    playPause.src = "img/play.png";
    video.currentTime = 0;
});

const images = document.querySelectorAll(".image-text");

function revealImages() {
  images.forEach((image, index) => {
    const imageTop = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (imageTop < windowHeight) {
      image.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealImages);

