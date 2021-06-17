// -----buttons
const buttons = document.querySelectorAll(".option");

// -------points
const points_left = document.querySelector(".points-left");
const points_right = document.querySelector(".points-right");

// -------symbols log
const left_player = document.querySelector(".left");
const right_player = document.querySelector(".right");

// ------symbols
const symbols = ["✊", "✋", "✌️"];

// ---------variables
let handSymbolYou = "";
let handSymbolComputer = "";
let log_you = "";
let log_comp = "";

// ----------------main logic
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handSymbolYou = e.target.outerText;
    YourTurn();
    ComputerTurn();
    PointsUpdate();
  });
});

function YourTurn() {
  log_you = document.createElement("p");
  //   log_you.classList.add("grey");
  log_you.innerText = handSymbolYou;
  left_player.appendChild(log_you);
}

const ComputerTurn = () => {
  log_comp = document.createElement("p");
  //   log_comp.classList.add("grey");
  handSymbolComputer = symbols[Math.floor(Math.random() * symbols.length)];
  log_comp.innerText = handSymbolComputer;
  right_player.appendChild(log_comp);
};

const PointsUpdate = () => {
  // ------rock-paper combo
  if (handSymbolYou === "✊" && handSymbolComputer === "✋") {
    points_right.innerText++;
    log_comp.classList.add("scale");
  }
  if (handSymbolYou === "✋" && handSymbolComputer === "✊") {
    points_left.innerText++;
    log_you.classList.add("scale");
  }

  //   ---------paper-scissor combo
  if (handSymbolYou === "✋" && handSymbolComputer === "✌️") {
    points_right.innerText++;
    log_comp.classList.add("scale");
  }
  if (handSymbolYou === "✌️" && handSymbolComputer === "✋") {
    points_left.innerText++;
    log_you.classList.add("scale");
  }

  //   ---------rock-scissor combo
  if (handSymbolYou === "✌️" && handSymbolComputer === "✊") {
    points_right.innerText++;
    log_comp.classList.add("scale");
  }
  if (handSymbolYou === "✊" && handSymbolComputer === "✌️") {
    points_left.innerText++;
    log_you.classList.add("scale");
  }
};

// -----------reset
const reset = () => {
  location.reload();
};
