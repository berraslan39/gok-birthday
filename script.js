

window.onload = function() {
  const audio = document.getElementById("bgAudio");
  const musicBtn = document.getElementById("musicBtn");

  window.toggleMusic = function() {
    if (audio.paused) {
      audio.play();
      musicBtn.src = "music-on.png"; // make sure this path is correct
    } else {
      audio.pause();
      musicBtn.src = "music-off.png"; 
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
    const infoBox = document.getElementById('info-box');
    const items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            infoBox.textContent = item.dataset.info;   // show text
            infoBox.style.display = 'block';
        });
    });
});

