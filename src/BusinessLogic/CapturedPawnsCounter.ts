import { Coordinates } from './Coordinates'; 
import { Board } from './Board';
import { JafarGame } from './JafarGame';
/**
 * Counts the number of pawns that can be beaten.
 *
 * @param {JafarGame} game Accepts the instance of type JafarGame
 * @returns The number of captured pawns
 */
export const CountCapturedPawns = (game: JafarGame) => {
    
    // check the board size
    if(game.Board.Height < 3)
        return 0;
    // Check if there are any pawns to capture
    let possibleCapturedPawns = game.AladdinPawns.filter(
         (pawn) => ExcludeEdgePositionsPredicate(pawn, game.Board)  
    );
    if(!possibleCapturedPawns.length)
      return 0;
    
    // Try to find any pawn to capture.    
    let numberCapturedPawns = 0;
    let continueBeat = true;
    let jaffarPawn =  game.JafarPawn;
    let aladdinPawns = game.AladdinPawns;   
    while(continueBeat) {
        let beatResult = TryBeatPawn(jaffarPawn, aladdinPawns, game.Board);
        if(beatResult.isBeaten) {
            numberCapturedPawns++
            jaffarPawn = beatResult.jafarNewCoordinates;
            aladdinPawns = beatResult.alladinRemainedPawns;
        }        
        else {
            continueBeat = false;
        }
                
    }
    return numberCapturedPawns;


}

const ExcludeEdgePositionsPredicate = (pawn: Coordinates, board: Board) => {
    return (pawn.X !== 1 && pawn.X !== board.Width) && (pawn.Y !== 1 && pawn.Y !== board.Height);
}



const TryBeatPawn = (jafarPawn, aladdinPawns: Array<Coordinates>, board: Board) => {
    let pawnToBeat;
    let occupiedCell;
    let searchPawnCoordinates;
    
    // try up left
    searchPawnCoordinates = { X: jafarPawn.X - 1, Y: jafarPawn.Y + 1 };
    pawnToBeat = aladdinPawns.find((pawn) => pawn.X == searchPawnCoordinates.X && pawn.Y == searchPawnCoordinates.Y && ExcludeEdgePositionsPredicate(pawn, board) );
    occupiedCell =aladdinPawns.find((pawn) => pawn.X == (searchPawnCoordinates.X - 1) && pawn.Y == (searchPawnCoordinates.Y + 1)  );
    if(pawnToBeat && !occupiedCell)
        return {
            isBeaten: true, 
            jafarNewCoordinates: new Coordinates(jafarPawn.X - 2, jafarPawn.Y + 2 ), 
            alladinRemainedPawns:aladdinPawns.filter((pawn) => pawn.X !== pawnToBeat.X || pawn.Y !== pawnToBeat.Y) 
           }

    // try up right
    searchPawnCoordinates = { X: jafarPawn.X + 1, Y: jafarPawn.Y + 1 };       
    pawnToBeat =aladdinPawns.find((pawn) => pawn.X == searchPawnCoordinates.X && pawn.Y == searchPawnCoordinates.Y && ExcludeEdgePositionsPredicate(pawn, board) );
    occupiedCell =aladdinPawns.find((pawn) => pawn.X == (searchPawnCoordinates.X + 1) && pawn.Y == (searchPawnCoordinates.Y + 1)  );
    if(pawnToBeat && !occupiedCell)
        return {
            isBeaten: true, 
            jafarNewCoordinates: new Coordinates(jafarPawn.X + 2, jafarPawn.Y + 2 ), 
            alladinRemainedPawns:aladdinPawns.filter((pawn) => pawn.X !== pawnToBeat.X || pawn.Y !== pawnToBeat.Y) 
           }
    
    // try down left
    searchPawnCoordinates = { X: jafarPawn.X - 1, Y: jafarPawn.Y - 1 };
    pawnToBeat = aladdinPawns.find((pawn) => pawn.X == searchPawnCoordinates.X && pawn.Y == searchPawnCoordinates.Y && ExcludeEdgePositionsPredicate(pawn, board)  );
    occupiedCell = aladdinPawns.find((pawn) => pawn.X == (searchPawnCoordinates.X - 1) && pawn.Y == (searchPawnCoordinates.Y - 1)  );
    if(pawnToBeat && !occupiedCell)
        return {
            isBeaten: true, 
            jafarNewCoordinates: new Coordinates(jafarPawn.X - 2, jafarPawn.Y - 2 ), 
            alladinRemainedPawns:aladdinPawns.filter((pawn) => pawn.X !== pawnToBeat.X || pawn.Y !== pawnToBeat.Y) 
           }
           
    // try down right
    searchPawnCoordinates = { X: jafarPawn.X + 1, Y: jafarPawn.Y - 1 };
    pawnToBeat = aladdinPawns.find((pawn) => pawn.X == searchPawnCoordinates.X && pawn.Y == searchPawnCoordinates.Y && ExcludeEdgePositionsPredicate(pawn, board)  );
    occupiedCell = aladdinPawns.find((pawn) => pawn.X == (searchPawnCoordinates.X + 1) && pawn.Y == (searchPawnCoordinates.Y - 1)  );
    if(pawnToBeat && !occupiedCell)
        return {
            isBeaten: true, 
            jafarNewCoordinates: new Coordinates(jafarPawn.X + 2, jafarPawn.Y - 2 ), 
            alladinRemainedPawns: aladdinPawns.filter((pawn) => pawn.X !== pawnToBeat.X || pawn.Y !== pawnToBeat.Y) 
           }
    
    // no pawn was beaten       
    return {
        isBeaten: false,
        jafarNewCoordinates: jafarPawn,
        alladinRemainedPawns: aladdinPawns
    }       

}