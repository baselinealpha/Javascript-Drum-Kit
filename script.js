function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('pressplay');
}

function audioPlay(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('pressplay');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.drum-key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', audioPlay);