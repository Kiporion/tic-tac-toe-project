// Player Object
const player = (name, mark) => {
  return { name, mark };
};

// Main Game Function
const GameBoard = (() => {
  const board = ["x", " ", "o", "o", "x", " ", "o", "x", "o"];
  // Login / Player Select
  function login() {
    const playerOne = player(document.querySelector("#player-one").value, "X");
    const playerTwo = player(document.querySelector("#player-two").value, "X");
  }

  // Board Generator / Render
  function render() {
    let gBoard = document.querySelector(".game-board");
    gBoard.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
      let square = document.createElement("div");
      square.setAttribute("class", "square");
      square.innerText = `${board[i]}`;
      gBoard.appendChild(square);
    }
  }
  document
    .querySelector("#sign-in")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      login();
    });
  render();
})();
