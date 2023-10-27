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
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
] 

//

const gameBoard = (function() {

    let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let gameSymbols = [null, null, null, null, null, null, null, null, null]
    let player = true


    const drawGameBoard = () => {
        gameBoard.forEach((item) => {
            box = document.createElement('button')
            box.className = `${item} box`
            box.setAttribute('id', 'box')
            box.dataset.index = `${item}`

            box.addEventListener('click', (e) => {
                drawSymbol(e, e.target.dataset.index)
            })

            gameBoardDiv.appendChild(box)
        })
    }

    const drawSymbol = (e, index) => {
        if(gameSymbols[index] === null) {
            if(player) {
                e.target.innerHTML = 'X'
                handleGameSymbols(index)
                
            } else {
                e.target.innerHTML = 'O'
                handleGameSymbols(index)
            }
        } else {
        }
    }

    const handleGameSymbols = (index) => {
        gameSymbols[index] = player
        player = !player
    }


    return {
        drawGameBoard,
    }
})();

gameBoard.drawGameBoard()
