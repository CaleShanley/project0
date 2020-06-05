# Tic Tac Toe - By Cale

**Demo Link**
[https://caleshanley.github.io/project0/]

## The Process

                                \\_V_//
                                \/=|=\/
                                 [=v=]
                               __\___/_____
                              /..[  _____  ]
                             /_  [ [  M /] ]
                            /../.[ [ M /@] ]
                           <-->[_[ [M /@/] ]
                          /../ [.[ [ /@/ ] ]
     _________________]\ /__/  [_[ [/@/ C] ]
    <_________________>>0---]  [=\ \@/ C / /
       ___      ___   ]/000o   /__\ \ C / /
          \    /              /....\ \_/ /
       ....\||/....           [___/=\___/
      .    .  .    .          [...] [...]
     .      ..      .         [___/ \___]
     .    0 .. 0    .         <---> <--->

This was the first Porject of the course and was quite fun and confusing. It was pretty cool to see how many different would could get the same outcome. I tried to implement everything i've learned over the past couple of weeks into this project such as

- HTML
- CSS
- JavaScript
- jQuery

It was quite challenging especially since i'm not very good at JavaScript, i had to do a lot of research and trial and error to get the outcome i wanted.

I basically started with the layout of the project. Being **Tic Tac Toe** i started with the 3x3 grid on html and css and then worked on the mechanical side being JavaScript.

Once i got the layout i wanted I started with being able to click on a square and put either a 'X' or 'O' in it. Once i did that i had to figure out how the player/s would win.

I spent most of my time fiddling around with getting the code to check if the player/s had won or drawed ('Cats Game') and if so what the outcome would be.

I found a truthy / falsey statement online and used that to determine who would win.
Basically the code loops through the winning combos

`[0, 1, 2]`,
`[3, 4, 5]`,
`[6, 7, 8]`,
`[0, 3, 6]`,
`[1, 4, 7]`,
`[2, 5, 8]`,
`[0, 4, 8]`,
`[2, 4, 6]`

`const [a, b, c] = combos[i]` sets a,b,c the three numbers on the array so i.e, `[0,1,2]` and then

`if (board[a] && board[a] === board[b] && board[a] === board[c])`

the first `board[a]` is checking if there is a value in that particular square and the remainder of the condition makes sure they are all the same type (either X or O). Once i got that i added a modal to let the users know who won.

I added a jQuery plugin to get the confetti effect when the user won as well.

Once i got all that out of the way i basically setup the _RESET_ to wipe the board and let the players start from scratch.

Then i got back to the CSS. There isn't a lot there in terms of CSS but i wanted to make the theme for the game retro so i chose an `Press Start 2P` font to give it that theme.

A lot of issues i had with the project was related to JavaScript, Mostly getting the game to show up as a draw if all nine boxes where filled. The problem was that i had set a `If Else` statement at the top of my code which set the value to be equal to false (`line 35`) if the box wasn't clicked.

Since this happened i wasn't able to make another `If` statement on (`line 107`) to call the game a draw if they === ''. So instead of that i had to call it so the function (`if (!board.includes(false))`) didn't include false then it would draw the game.

I'm planning on adding a **scoreboard**, **name changer** and even **AI** in the near future.
