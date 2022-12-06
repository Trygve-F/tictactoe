
//PLAYERS FACTORY
const player = (name, marker) => {
    
    return {name, marker}
}  

//GAMEPLAY MODULE
const gameController = () => {



const gameArray = ["","","","","","","","",""];

const player1 = player("player1","x")
const player2 = player("player2","o")
let currentplayer = player1


const playturn = (e) => {
    if (e.currentTarget.textContent === "x" || e.currentTarget.textContent === "o") {
        return;
    } {
        i = e.currentTarget.id
        gameArray.splice(i, 1, currentplayer.marker)
        render(i)
        checkWin(currentplayer.marker)
        currentplayer === player1 ? currentplayer = player2 : currentplayer = player1;
}}



const checkWin = () => {
    if  (gameArray[0] === currentplayer.marker && gameArray[1] === currentplayer.marker && gameArray[2] === currentplayer.marker
        || gameArray[3] === currentplayer.marker && gameArray[4] === currentplayer.marker && gameArray[5] === currentplayer.marker
        || gameArray[6] === currentplayer.marker && gameArray[7] === currentplayer.marker && gameArray[8] === currentplayer.marker
        || gameArray[0] === currentplayer.marker && gameArray[3] === currentplayer.marker && gameArray[6] === currentplayer.marker
        || gameArray[1] === currentplayer.marker && gameArray[4] === currentplayer.marker && gameArray[7] === currentplayer.marker
        || gameArray[2] === currentplayer.marker && gameArray[5] === currentplayer.marker && gameArray[8] === currentplayer.marker
        || gameArray[0] === currentplayer.marker && gameArray[4] === currentplayer.marker && gameArray[8] === currentplayer.marker
        || gameArray[2] === currentplayer.marker && gameArray[4] === currentplayer.marker && gameArray[6] === currentplayer.marker)
        
        alert(currentplayer.marker + " wins"),
    restart()
        

    else if 
        (gameArray.includes("") === false)
        alert("tie!"),
        restart()
        
    else
        return

}

const render = (i) => {
    let cell = document.getElementById(i)
    cell.textContent = gameArray[i]
}

const clearBoard = (parent) => {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild)
        
    };
};


const restart = () => {
    i = 0;
    clearBoard(gameContainer);
    gameArray.splice(0, 9, "","","","","","","","","")
    gameArray.forEach((e) => {
        const gameCell = document.createElement('div');
        gameCell.textContent = e;
        gameCell.id = i;
        gameCell.value = e
        gameCell.className = "gameCell";
        gameCell.addEventListener('click', playturn)
        gameContainer.appendChild(gameCell);
        i++;
    })
}

const gameBoard = (() => {
    const restartButton = document.getElementById('New Game')
    restartButton.textContent = "Restart"
    restartButton.addEventListener('click', restart)
    buttonContainer.appendChild(restartButton)

    i = 0;

    gameArray.forEach((e) => {
        const gameCell = document.createElement('div');
        gameCell.textContent = e;
        gameCell.id = i;
        gameCell.value = e
        gameCell.className = "gameCell";
        gameCell.addEventListener('click', playturn)
        gameContainer.appendChild(gameCell);
        i++;
    })
    return gameArray;
})();

return {playturn, checkWin, gameBoard, restart}
};

//GAMEBOARD MODULE
const gameArray = (() => {
    const startGame = document.getElementById("buttonContainer")
    const newGameButton = document.createElement('button')
    newGameButton.addEventListener('click', gameController)
    newGameButton.textContent = "New Game"
    newGameButton.id = "New Game"
    startGame.appendChild(newGameButton)
    

})();
