
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
        gameCell.addEventListener('click', playturn)
        gameContainer.appendChild(gameCell);
        i++;
    })
    return gameArray;
})();


//PLAYERS FACTORY
const players = () => {
    const _player = (name, score) => {
        const getName = () => name;
        const getScore = () => score;
            
        }
    
    return _player
}


//GAME FACTORY
const game = () => {
    

}
const gameCell = document.getElementsByClassName("gameCell")

function playturn() {
    let i = this.id
    console.log(gameArray[i])
    gameArray.splice(i, 1, "x")
    render(i)
}

function render(i) {
    cell = document.getElementById(i)
    cell.textContent = gameArray[i]

}


