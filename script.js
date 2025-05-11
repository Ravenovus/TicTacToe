
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
       playerOne: Player("Person One", 1),//move these into init somehow
       playerTwo: Player("Person two", 2),
       init: function(){

       },

       placeMark: function(player, spot){
        this.gameBoard[spot] = player.showPlayerSign(); //for front end
        player.addPlacement(spot); //for back end
        if(this.checkWinCondition(player)){
            endGame();
        }
       },

       checkWinCondition: function(player){
        placementsToCheck = player.showPlacements();
        let victory = false;

        if(placementsToCheck.includes(0,1,2) || placementsToCheck.includes(3,4,5)|| placementsToCheck.includes(6,7,8) ||
            placementsToCheck.includes(0,3,6) || placementsToCheck.includes(1,4,7) || placementsToCheck.includes(2,5,8) ||
            placementsToCheck.includes(0,4,8) || placementsToCheck.includes(2,4,6)){
                victory = true;
            }
            return victory;
       },

       endGame : function(){

       }


       
        

    }
})