// Player Object
const player = (name, mark) => {
  return { name, mark };
};

// Main Game Function
const GameBoard = (() => {
  const board = ["x", "", "", "", "", "", "y", "", ""];
  // Login / Player Select
  function login() {
    const playerOne = player(document.querySelector("#player-one").value, "X");
    const playerTwo = player(document.querySelector("#player-two").value, "X");
  }

  function placeMark(index) {
    console.log(`place ${index}`);
    board[index].value = "X";
  }
  // Board Generator / Render
  function render() {
    let gBoard = document.querySelector(".game-board");
    gBoard.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
      //   let square = document.createElement("button");
      //   square.setAttribute("class", "square");
      //   square.innerHTML = board[i];
      //   square.addEventListener("onClick", placeMark(i));
      let square = document.createElement("div");
      square.setAttribute("class", "square");
      square.innerHTML = `<button class="sq-btn" onClick="placeMark(${i})"></button>`;
      placeMark(i);
      gBoard.appendChild(square);
    }
  }
  // Form Submit
  document
    .querySelector("#sign-in")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      login();
      this.style = "display:none;";
    });
  render();
})();
