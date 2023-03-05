 // arrays to hold winning combination with empty arrys to hold player cominations
 const cells = Array.from(document.querySelectorAll(".cell"));
 const winner = [[1,2,3],[4,5,6],[7,8,9],[1,3,5],[2,4,6],[2,5,8],[4,7,9],[3,6,9]];
 let firstPlayer = [], secondPlayer = [], count = 0;



 //fuction to check array to determined winning combination
 function check(array){
    let finalResult = false;
    for(let item of winner){
        let result = item.every(value =>array.indexOf(value) !== -1);
        if(result){
            finalResult = true;
        }
    } return finalResult;
 }

 //function to create restart button
 function winningPlayer(winningPlayer){
    const game = document.createElement("div");
    const player = document.createTextNode(winningPlayer);
    const replay = document.createElement("button");
    game.classList.add("winner");
    game.appendChild(player);
    replay.appendChild(document.createTextNode("Restart"));
    replay.onClick= function() { restart()};
    game.appendChild(replay);
    document.body.appendChild(game);
 }

 //function to add X's and O's and display game winner
 function Turn(){
    if(this.classList == "square") {
        count++;
        if(count%2 !== O) {
            this.classList.add("X");
            firstPlayer.push(Number(this.dataset.index));
            if(check(firstPlayer)){
                winningPlayer("congrats player one you win");
                return true;
            }
        } else {
            this.classList.add("O");
            secondPlayer.push(Number(this.dataset.index));
            if(check(secondPlayer)) {
                winningPlayer("congrats player two you win");
                return true;
            }
        }
        if(count === 9) {
            winningPlayer("Draw");
        }
    }
}

//function to add X's and O's with a mouse click
cells.forEach(cell => cell.addEventListener("click", Turn));

//fuction to clear board and restart
function restart(){
    const newBoard = document.querySelector(".winner");
    firstPlayer = [];
    secondPlayer = [];
    count = 0;
    newBoard.remove();
    [].forEach.call(squares,function(reset) {
        reset.classList.remove("X");
        reset.classList.remove("O");
    });
}