const keys = document.querySelectorAll(".key");
console.log(keys);
function removeTransition(e) {
  console.log(e);
  if (e.propertyName === "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.play();
  key.classList.add("playing");
});

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

for (var i = 0; i < keys.length; i++) {
  const audioClick = document.querySelectorAll("audio");
  console.log(audioClick);
  (function(index) {
    keys[index].addEventListener("click", function() {
      audioClick[index].play();
      this.classList.add("playing");
    });
  })(i);
}
