// Fun text jQuery
$('h1').funText(33, ['#ea412c', '#0044f7', '#ea412c'])
/////////////////////////////////////

// Add Classes (Noughts / Crosses)
const player1 = 'X'
const player2 = 'O'
let currentTurn = 1
const square = $('.square')
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

// On Click puts 'X' or 'O' in
square.on('click', function () {
  if ($(this).text() === String.fromCharCode(160)) {
    // Converting ascii character from Non-breaking space to a string to compare it
    if (currentTurn === 1) {
      event.target.innerHTML = player1
      event.target.style.color = 'red'
      currentTurn++
    } else {
      event.target.innerHTML = player2
      event.target.style.color = 'blue'
      currentTurn--
    }
  }
})

// Check For Winning Combo

const winner = fucntion()

// Cannot choose Block twice
// const checkSquare = function () {
//   if ($(this).innerHTML === player1) {
//     let symbol = currentTurn
//     $(this).innerHTML === symbol
//   }
//   currentTurn = !currentTurn
// }

// Figure out Winner
//
//     const winningCombos = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ]
//   }
// }
// Reset the game / Reset Game

// Score Board (NOT REQURIED)
