
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
        i = e.currentTarget.id
        gameArray.splice(i, 1, currentplayer.marker)
        render(i)
        currentplayer === player1 ? currentplayer = player2 : currentplayer = player1;
}
const render = (i) => {
    let cell = document.getElementById(i)
    cell.textContent = gameArray[i]
}
return {playturn}
})();

//GAMEBOARD MODULE
const gameArray = (() => {
    const gameContainer = document.getElementById("gameContainer")
    const gameArray = ["","","","","","","","",""];

    i = 0;
    
    gameArray.forEach((e) => {
        const gameCell = document.createElement('div');
        gameCell.textContent = e;
        gameCell.id = i;
        gameCell.className = "gameCell";
        gameCell.addEventListener('click', gameController.playturn)
        gameContainer.appendChild(gameCell);
        i++;
    })
    return gameArray;
})();
