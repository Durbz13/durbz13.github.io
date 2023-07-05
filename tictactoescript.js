var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
ctx.lineWidth = 2;

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.moveTo(0, 200);
ctx.lineTo(300, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(100, 300);
ctx.moveTo(200, 0);
ctx.lineTo(200, 300);
ctx.stroke();

var board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var activePlayer = 1;
var gameEnded = false;

var messageElement = document.getElementById("message");
var playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", resetGame);

canvas.addEventListener("click", handleClick);

function handleClick(event) {
  if (gameEnded) {
    return;
  }

  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  var row = Math.floor(y / 100);
  var col = Math.floor(x / 100);

  if (board[row][col] === 0) {
    board[row][col] = activePlayer;
    drawSymbol(row, col, activePlayer === 1 ? "X" : "O");

    if (checkWin(activePlayer)) {
      handleWin(activePlayer);
    } else if (checkDraw()) {
      handleDraw();
    } else {
      activePlayer = activePlayer === 1 ? 2 : 1;
    }
  }
}

function drawSymbol(row, col, symbol) {
  ctx.font = "48px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";

  var x = col * 100 + 50;
  var y = row * 100 + 50;

  ctx.fillText(symbol, x, y);
}

function checkWin(player) {
  for (var i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
  }

  for (var j = 0; j < 3; j++) {
    if (
      board[0][j] === player &&
      board[1][j] === player &&
      board[2][j] === player
    ) {
      return true;
    }
  }

  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }

  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }

  return false;
}

function handleWin(player) {
  var message = "Player " + (player === 1 ? "X" : "O") + " wins!";
  messageElement.textContent = message;
  playAgainButton.style.display = "block";
  gameEnded = true;
}

function checkDraw() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

function handleDraw() {
  messageElement.textContent = "It's a draw!";
  playAgainButton.style.display = "block";
  gameEnded = true;
}

function resetGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(300, 100);
  ctx.moveTo(0, 200);
  ctx.lineTo(300, 200);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100, 0);
  ctx.lineTo(100, 300);
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 300);
  ctx.stroke();

  board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  activePlayer = 1;
  gameEnded = false;

  messageElement.textContent = "";
  playAgainButton.style.display = "none";
}