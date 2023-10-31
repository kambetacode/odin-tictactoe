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
    
    let player1 = {
        symbol: 'X',
        combination: []
    }

    let player2 = {
        symbol: 'O',
        combination: []
    }



    const drawGameBoard = () => {
        gameBoard.forEach((item) => {
            box = document.createElement('button')
            box.className = `${item} box`
            box.setAttribute('id', 'box')
            box.dataset.index = `${item}`

            box.addEventListener('click', (e) => {
                drawSymbol(e, e.target.dataset.index)
                handleWin()
            })

            gameBoardDiv.appendChild(box)
        })
    }

    const drawSymbol = (e, index) => {
        if(gameSymbols[index] === null) {
            if(player) {
                e.target.innerHTML = 'X'
                handleGameSymbols(index)
                handlePlayer(true, index)
                
            } else {
                e.target.innerHTML = 'O'
                handleGameSymbols(index)
                handlePlayer(false, index)
            }
        } else {
        }
    }

    const handleGameSymbols = (index) => {
        gameSymbols[index] = player
        player = !player
    }

    const handlePlayer = (handler, target) => {
        if(handler) {
            player1.combination.push(parseInt(target))
        } else {
            player2.combination.push(parseInt(target))
        }
    }

    const handleWin = () => {
        winCombinations.forEach(item => {
            if(item.every(item => player1.combination.includes(item))) {
                setTimeout(() => {
                    alert('X wins, end of the game')
                    location.reload()
                }, 200);
                
            } else if (item.every(item => player2.combination.includes(item))) {
                setTimeout(() => {
                    alert('O wins, end of the game')
                    location.reload()
                }, 200);
            }
        })
    }


    return {
        drawGameBoard
    }
})();

gameBoard.drawGameBoard()
