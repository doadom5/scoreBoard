let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

let countH = 0;
let countG = 0;

function home1() {
  countH = countH += 1;
  homeEl.textContent = countH;
  updateScores();
}
function home2() {
  countH = countH += 2;
  homeEl.textContent = countH;
  updateScores();
}
function home3() {
  countH = countH += 3;
  homeEl.textContent = countH;
  updateScores();
}

function guest1() {
  countG = countG += 1;
  guestEl.textContent = countG;
  updateScores();
}
function guest2() {
  countG = countG += 2;
  guestEl.textContent = countG;
  updateScores();
}
function guest3() {
  countG = countG += 3;
  guestEl.textContent = countG;
  updateScores();
}

function reset() {
  homeEl.textContent = 0;
  countH = 0;
  guestEl.textContent = 0;
  countG = 0;
  updateScores();
}
function updateScores() {
  homeEl.textContent = countH;
  guestEl.textContent = countG;

  if (countH > countG) {
    homeEl.style.color = "#80b918";
    guestEl.style.color = "#00ffffb3";
  } else if (countG > countH) {
    homeEl.style.color = "#00ffffb3";
    guestEl.style.color = "#80b918";
  } else {
    homeEl.style.color = "#00ffffb3";
    guestEl.style.color = "#00ffffb3";
  }
}
