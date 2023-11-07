function makeBbl() {
  var baby = "";

  for (var i = 0; i <= 59; i++) {
    var rn = Math.floor(Math.random() * 10);
    baby = baby + `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = baby;
}

var hitrn;
function newHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}

var score = 0;
function increaseScore() {
  score = score + 10;
  document.querySelector("#scoreval").textContent = score;
}

var timer = 30;
function runtimer() {
  var inter = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(inter);
      document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER !</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickednum = Number(details.target.textContent);
  if (clickednum === hitrn) {
    increaseScore();
    newHit();
    makeBbl();
  }
});

runtimer();

makeBbl();

newHit();
