
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
       },

       //spot will be taken from DOM, We will make a grid like we did with the painting app and each block will have an ID, that ID is the spot.
       //on top of that after placing a mark and not ending the game the turn will switch
       //important note!!!!! find a way to deactivate the ability to press a block once it has been used. Instead of adding logic to check whether one was pressed
       // it should be easier to deactivate trackability.
       placeMark: function(player, spot){
        this.gameBoard[spot] = player.showPlayerSign(); //for front end
        player.addPlacement(spot); //for back end
        if(this.checkWinCondition(player)){
            endGame(player);
        }
        this.currentTurn = !this.currentTurn;
       },

       checkWinCondition: function(player){
        placementsToCheck = player.showPlacements();
        let victory = false;

        //checking for every condition
        if(placementsToCheck.includes(0,1,2) || placementsToCheck.includes(3,4,5)|| placementsToCheck.includes(6,7,8) ||
            placementsToCheck.includes(0,3,6) || placementsToCheck.includes(1,4,7) || placementsToCheck.includes(2,5,8) ||
            placementsToCheck.includes(0,4,8) || placementsToCheck.includes(2,4,6)){
                victory = true;
            }
            return victory;
       },

       endGame : function(player){
        console.log(player.showPlayerName() + " won!");
       }


       
        

    }
})()