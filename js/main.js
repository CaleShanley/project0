// Fun text jQuery
$('h1').funText(33, ['#ea412c', '#0044f7', '#ea412c'])
/////////////////////////////////////

// Init game data
let currentTurn = 1
const player1 = 'X'
const player2 = 'O'
let board = []
const reset = $('.reset-button')

$(document).ready(() => {
  console.log('ready')
  function handleMove($element) {
    if ($element.text() === String.fromCharCode(160)) {
      if (currentTurn === 1) {
        $element.html(player1)
        $element.css('color', 'red')
        currentTurn++
      } else {
        $element.html(player2)
        $element.css('color', 'blue')
        currentTurn--
      }
    }
  }

  const updateBoard = function () {
    board = []
    for (let i = 0; i < 9; i++) {
      const $square = $(`#${i}`)
      if ($square.html() === player1 || $square.html() === player2) {
        board.push($square.html())
      } else {
        board.push(false)
      }
    }
    console.log(board)
  }

  // reset board

  const checkWinner = function () {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < combos.length; i++) {
      const [a, b, c] = combos[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // Winning Row
        console.log('winner', board[a], board[b], board[c])
      } else {
        // console.log(board);
      }
    }
  }

  const $squares = $('.square')
  $squares.on('click', (event) => {
    handleMove($(event.target))
    updateBoard()
    checkWinner()
  })
})

// Going to add a Confetti plugin for jQuery when you win

// Also need to reset
