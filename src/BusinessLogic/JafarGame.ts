import { Board } from './Board';
import { Coordinates } from './Coordinates';
/**
 * Represents the game with exact board size and pawns positions as coordinates.
 *
 * @export
 * @class JafarGame
 */
export class JafarGame {
    readonly Board: Board;
    readonly JafarPawn: Coordinates;
    readonly AladdinPawns: Array<Coordinates>;
    /**
     *Creates an instance of JafarGame.
     * @param {Board} board Board object with it's size
     * @param {Coordinates} jafarPawn Coordinates for Jafar pawn
     * @param {Array<Coordinates>} aladdinPawns The list of coordinates for Aladdin pawns. 
     * @memberof JafarGame
     */
    constructor(board: Board, jafarPawn: Coordinates, aladdinPawns: Array<Coordinates>  ) {
        
        this.validateConstructorParameters(board, jafarPawn, aladdinPawns);
        
        this.Board  = board;
        this.JafarPawn = jafarPawn;
        this.AladdinPawns = aladdinPawns;
    }

    private validateConstructorParameters = (board: Board, jafarPawn: Coordinates, aladdinPawns: Array<Coordinates>) => {
        if(jafarPawn.X > board.Width)
            throw new Error('Jafar pawn X coodinate should be less or equal the Board width.');
        if(jafarPawn.Y > board.Height)
            throw new Error('Jafar pawn Y coodinate should be less or equal the Board height.');
        let alladinInvalidCheckers = aladdinPawns.filter(checker => checker.X > board.Width || checker.Y > board.Height);
        if(alladinInvalidCheckers.length)
           throw  new Error (`Some Alladin pawns are out of the board ${ alladinInvalidCheckers.toString() }`);    
        let intersectedPawns =  aladdinPawns.find((pawn) => pawn.X === jafarPawn.X && pawn.Y === jafarPawn.Y);
        if(intersectedPawns)
            throw new Error ('Jafar pawn has the same coordinates as one of Alladin pawns');
        
        aladdinPawns.forEach((element) => {
            let duplicates = aladdinPawns.filter((pawn) => pawn.X === element.X && pawn.Y === element.Y );
            if( duplicates.length > 1)
                throw new Error (`There are Alladin pawns with duplicate coordinates ${ duplicates[0] }`);
        });
        
        
        }        

    }  

