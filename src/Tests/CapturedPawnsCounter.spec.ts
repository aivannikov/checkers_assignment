import { Board } from '../BusinessLogic/Board';
import { Coordinates } from '../BusinessLogic/Coordinates';
import { JafarGame } from '../BusinessLogic/JafarGame';
import { CountCapturedPawns } from '../BusinessLogic/CapturedPawnsCounter';

describe("How many pawns can be taken", () => {

      it("Board size equals 2", () => {
        let board: Board = new Board(2);
        let jafarPawn = new Coordinates(1, 1);
      let alladinPawns = [new Coordinates(2, 1), new Coordinates(2, 2)];    
        let game = new JafarGame(board, jafarPawn, alladinPawns);
        expect(CountCapturedPawns(game)).toEqual(0);  
      });

    it("Alladin's pawns are on the first or last horizontals/verticals", () => {
       let board: Board = new Board(10);
       let jafarPawn = new Coordinates(7, 9);
       let alladinPawns = [new Coordinates(1, 7), new Coordinates(10, 2), new Coordinates(3, 1), new Coordinates(5, 10)];    
       let game = new JafarGame(board, jafarPawn, alladinPawns);
       expect(CountCapturedPawns(game)).toEqual(0);
    });

    it("No pawns to capture", () => {
       let board: Board = new Board(10);
       let jafarPawn = new Coordinates(3, 3);
       let alladinPawns = [new Coordinates(2, 7), new Coordinates(4, 3)];    
       let game = new JafarGame(board, jafarPawn, alladinPawns);
       expect(CountCapturedPawns(game)).toEqual(0);
    });

    it("One pawn to capture", () => {
        let board: Board = new Board(10);
        let jafarPawn = new Coordinates(3, 3);
        let alladinPawns = [new Coordinates(2, 2), new Coordinates(4, 3)];    
        let game = new JafarGame(board, jafarPawn, alladinPawns);
        expect(CountCapturedPawns(game)).toEqual(1);
     });

     it("Two pawns to capture", () => {
        let board: Board = new Board(10);
        let jafarPawn = new Coordinates(4, 2);
        let alladinPawns = [new Coordinates(3, 3), new Coordinates(3, 5)];    
        let game = new JafarGame(board, jafarPawn, alladinPawns);
        expect(CountCapturedPawns(game)).toEqual(2);
     });

     it("One pawn to capture as field  occupied", () => {
      let board: Board = new Board(10);
      let jafarPawn = new Coordinates(4, 2);
      let alladinPawns = [new Coordinates(3, 3), new Coordinates(3, 5), new Coordinates(4, 6)];    
      let game = new JafarGame(board, jafarPawn, alladinPawns);
      expect(CountCapturedPawns(game)).toEqual(1);
   });


});