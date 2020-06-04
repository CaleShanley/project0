// Fun text jQuery
$('h1').funText(33, ['#ea412c', '#0044f7', '#ea412c'])

// Init game data
let currentTurn = 1
const player1 = 'X'
const player2 = 'O'
let winnerDefault = ''
let board = []
const reset = $('.reset-button')

$(document).ready(() => {
  console.log('ready')
  function handleMove($element) {
    if ($element.text() === String.fromCharCode(160)) {
      if (currentTurn === 1) {
        $element.html(player1) // Sets player 1 as X and player 2 as O
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
      // Once the user clicks on the selected square puts either 'X or 'O' in it
      const $square = $(`#${i}`)
      if ($square.html() === player1 || $square.html() === player2) {
        board.push($square.html())
      } else {
        board.push(false)
      }
    }
  }

  const checkWinner = function () {
    const combos = [
      [0, 1, 2], // Winning grid combos for tic tac toe
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    // react way to get the winning combo
    for (let i = 0; i < combos.length; i++) {
      const [a, b, c] = combos[i] // sets a,b,c the three numbers on the array so i.e, [0,1,2]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // is a truthy falsy statement

        winnerDefault = board[a] // Determines which character Wins

        // Confetti Effect for when you win
        function fire(particleRatio, opts) {
          setTimeout(function () {
            confetti(
              Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
              })
            )
          }, 500)
        }
        fire(0.25, {
          spread: 26,
          startVelocity: 55
        })
        fire(0.2, {
          spread: 60
        })
        fire(0.35, {
          // this is just confetti effects
          spread: 100,
          decay: 0.91
        })
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92
        })
        fire(0.1, {
          spread: 120,
          startVelocity: 45
        })

        // This is confetti plugin (Needs to be set for it to work)
        const count = 200
        const defaults = {
          origin: { y: 0.7 }
        }

        // Displays on screen who won
        const modal = setTimeout(function () {
          $.sweetModal({
            content: `PLAYER ${winnerDefault} WON, WINNER WINNER CHICKEN DINNER! `,
            icon: $.sweetModal.ICON_SUCCESS
          })
        }, 1500)
      }
      // tried getting a draw to work but couldn't

      // $.sweetModal({
      //   content: `IT'S A DRAW, NO ONE WINS!`,
      //   icon: $.sweetModal.ICON_WARNING
      // })
    }
  }

  // Reset Button
  const reset = $('.reset-button')
  reset.on('click', (event) => {
    location.reload()
  })

  // Calls all the functions
  const $squares = $('.square')
  $squares.on('click', (event) => {
    handleMove($(event.target))
    updateBoard()
    checkWinner()
  })
})
