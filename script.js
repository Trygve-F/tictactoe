
//PLAYERS FACTORY
const player = (name, marker) => {
    
    return {name, marker}
}  

//GAMEPLAY MODULE
const gameController = (() => {

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
        alert(currentplayer.marker + " wins")

    else if 
        (gameArray.includes("") === false)
        alert("tie!")
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
}

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
        gameCell.addEventListener('click', gameController.playturn)
        gameContainer.appendChild(gameCell);
        i++;
    })
}

return {playturn, checkWin, restart}
})();

//GAMEBOARD MODULE
const gameArray = (() => {
    const restart = document.getElementById("restart")
    restart.addEventListener('click', gameController.restart)
    const gameContainer = document.getElementById("gameContainer")
    const gameArray = ["","","","","","","","",""];

    i = 0;

    gameArray.forEach((e) => {
        const gameCell = document.createElement('div');
        gameCell.textContent = e;
        gameCell.id = i;
        gameCell.value = e
        gameCell.className = "gameCell";
        gameCell.addEventListener('click', gameController.playturn)
        gameContainer.appendChild(gameCell);
        i++;
    })
    

    return gameArray
})();

// 012
// 345
// 678
// 036
// 147
// 258
// 048
// 642