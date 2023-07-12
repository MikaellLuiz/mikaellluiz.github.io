var currentPlayer = 'X';
var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
var scoreX = 0;
var scoreO = 0;

function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    document.getElementsByTagName('td')[row * 3 + col].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  var winningCombinations = [
    [[0, 0], [0, 1], [0, 2]], // Horizontal
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]], // Vertical
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]], // Diagonal
    [[0, 2], [1, 1], [2, 0]]
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var combo = winningCombinations[i];
    var a = combo[0];
    var b = combo[1];
    var c = combo[2];

    if (board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]] && board[a[0]][a[1]] !== '') {
      updateScore(currentPlayer);
      resetGame();
      return;
    }
  }

  var isTie = true;
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      if (board[row][col] === '') {
        isTie = false;
        break;
      }
    }
  }

  if (isTie) {
    resetGame();
  }
}

function resetGame() {
    currentPlayer = 'X';
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  
    var cells = document.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
    }
  }
  
  function resetScore() {
    scoreX = 0;
    scoreO = 0;
    document.getElementById('scoreX').innerText = scoreX;
    document.getElementById('scoreO').innerText = scoreO;
  }
  
  function resetGameAndScore() {
    resetGame();
    resetScore();
  }

function updateScore(player) {
  if (player === 'X') {
    scoreX++;
    document.getElementById('scoreX').innerText = scoreX;
  } else if (player === 'O') {
    scoreO++;
    document.getElementById('scoreO').innerText = scoreO;
  }
}
