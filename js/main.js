// Add Classes (Noughts / Crosses)
const player1 = 'X'
const player2 = 'O'

let currentTurn = 1
let movesMade = 0

const square = $('.square')

square.on('click', function () {
  movesMade += 1

  if (currentTurn === 1) {
    event.target.innerHTML = player1
    event.target.style.color = 'red'
    currentTurn++
  } else {
    event.target.innerHTML = player2
    event.target.style.color = 'blue'
    currentTurn--
  }

  checkForWinner()
})

// Figure out Winner
const checkForWinner = function () {
  if (movesMade > 4) {
    let moves = Array.prototype.slice.call($('.square'))
    let results = moves.map(function (square) {
      return square.innerHTML
    })
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }
}
// Reset the game / Reset Game

// Score Board (NOT REQURIED)
