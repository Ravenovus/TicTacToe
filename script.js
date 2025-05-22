
const GameBoard = () => {
    //create board array
     let board = []
     for (i=0; i<9; i++) {
         board.push("")
     }
     return board;
    }

    //Player object type
function Player (playerName, sign){
    let score = 0;
    let name = playerName;
    let playerSign = sign;
    let placements = [];

    const setPlayerName = (a) => name = a;
    const setPlayerNum = (a) => playerSign = a;
    const showPlayerName = () => name;
    const showPlayerSign = () => playerSign;
    const addScore = () => score++;
    const showScore = () => score;
    const addPlacement = (a) => placements.push(a);
    const showPlacements = () => placements;

    return {showPlayerName, showPlayerSign, addScore, showScore, setPlayerName, setPlayerNum, addPlacement, showPlacements};
}

    //game object
(function (){
    let game = {
       gameBoard: GameBoard(),
       playerOne: new Player("Person One", "X"),//move these into init somehow
       playerTwo: new Player("Person two", "O"),
       currentTurn: false,
       init: function(){
        //when dom introduced, have a modal screen pop up and have a form for player one and two and only THEN start game proper
        this.createGrid();
       },

       placeMark: function(spot){
        if(this.currentTurn){
            player = this.playerOne;
        }
        else{
            player = this.playerTwo;
        }
        this.gameBoard[spot] = player.showPlayerSign(); //for front end
        player.addPlacement(spot); //for back end
        if(this.checkWinCondition(player)){
            this.endGame(player);
        }
        this.currentTurn = !this.currentTurn;
       },

       checkWinCondition: function(player){
        placementsToCheck = player.showPlacements();
        let victory = false;
        //checking for every condition
        if(this.checkArray(placementsToCheck,["0","1",'2']) || this.checkArray(placementsToCheck,['3','4','5'])|| this.checkArray(placementsToCheck,['6','7','8']) ||
            this.checkArray(placementsToCheck,['0','3','6']) || this.checkArray(placementsToCheck,['1','4','7']) || this.checkArray(placementsToCheck,['2','5','8']) ||
            this.checkArray(placementsToCheck,['0','4','8']) || this.checkArray(placementsToCheck,['2','4','6'])){

                victory = true;
            }
        return victory;
       },

       endGame : function(player){
        console.log(player.showPlayerName() + " won!");
       },

       createGrid : function(){
        const blockSize =  158;

        let grid = document.querySelector("#grid_container");
        for(let i=0;i<9;i++){
            let block = document.createElement("div");
            let symbol = document.createElement("p");
            symbol.classList.add("symbol");
            block.classList.add("block");
            block.id = i;
            block.style.width = `${blockSize}px`;
            block.style.height = `${blockSize}px`;
            block.appendChild(symbol);
            block.addEventListener(("click"), () => this.placeMark(block.id),{ once: true });
            block.addEventListener(("click"), () => this.writeMark(block, block.id), {once:true});
            grid.appendChild(block);
        }

       },

       writeMark: function(block, id){
            symbol = block.firstChild;
            symbol.innerHTML = this.gameBoard[id];
       },
       
       checkArray: function(array_b, array_a){
        let success = array_a.every(function(val) {
        return array_b.indexOf(val) !== -1;});
        return success;
       }
       
    } 

    game.init();

})()