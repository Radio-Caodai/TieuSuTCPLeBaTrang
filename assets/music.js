// assets/music.js
(function () {
  const audio = document.createElement('audio');
  audio.src = '/assets/nhacnen.mp3';
  audio.loop = true;
  audio.volume = 0.5;
  audio.autoplay = true;
  audio.hidden = true;
  document.body.appendChild(audio);

  // Đảm bảo phát nhạc sau khi người dùng tương tác (do trình duyệt có thể chặn autoplay)
  document.addEventListener('click', function playAudio() {
    if (audio.paused) {
      audio.play().catch(() => {});
    }
    document.removeEventListener('click', playAudio);
  });
})();
