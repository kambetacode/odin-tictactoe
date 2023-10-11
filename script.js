/*
Brainstorm:

Tic tac toe game, what does it have? =>

-gameboard
-players

-how the gameboard will be? 
    each gameboard box will be in an array (stored in an object)
    goal:   little global code as possible  
    If I need ONE of something: use a module
    If I need multiple of something: use factories


*/

// Interface
const main = document.querySelector('main')
const gameBoardDiv = document.getElementById('game-board')

//

const gameBoard = (function() {

    let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let gameScore = [null, null, null, null, null, null, null, null, null]


    const drawGameBoard = () => {
        gameBoard.forEach((item) => {
            box = document.createElement('button')
            box.className = `${item} box`
            box.setAttribute('id', 'box')
            box.dataset.index = `${item}`

            box.addEventListener('click', (e) => {
                game(e, e.target.dataset.index)
            })

            gameBoardDiv.appendChild(box)
        })
    }

    const game = (e, index) => {
        if(gameScore[index] === null) {
            if(player) {
                e.target.innerHTML = 'X'
            } else {
                e.target.innerHTML = 'O'
            }
        } else {

        }
    }


    return {
        drawGameBoard,
    }
})();

gameBoard.drawGameBoard()
