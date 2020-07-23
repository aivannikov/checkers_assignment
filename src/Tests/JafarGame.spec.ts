import { JafarGame } from '../BusinessLogic/JafarGame';
import { Board } from '../BusinessLogic/Board';
import { Coordinates } from '../BusinessLogic/Coordinates';

describe("Incorrect Game Input", () => {
    it("Jafar pawn out of the border - X too big", () => {
        expect( () =>  new JafarGame(new Board(10), new Coordinates(12, 3), [new Coordinates(1,2), new Coordinates(3, 9)]))
            .toThrowError(new Error('Jafar pawn X coodinate should be less or equal the Board width.'));  
    });

    it("Jafar pawn out of the border - Y too big", () => {
        expect( () =>  new JafarGame(new Board(10), new Coordinates(3, 12), [new Coordinates(1,2), new Coordinates(3, 9)]))
            .toThrowError(new Error('Jafar pawn Y coodinate should be less or equal the Board height.'));  
    });

    it("Alladin pawn out of the border - X too big", () => {
        let board = new Board(10);
        let jafarPawn = new Coordinates(3, 3);
        let alladinPawns = [new Coordinates(1,2), new Coordinates(13, 8)];
        expect( () =>  new JafarGame(board, jafarPawn, alladinPawns))
            .toThrowError('Some Alladin pawns are out of the board ');  
    });

    it("Alladin pawn out of the border - Y too big", () => {
        let board = new Board(10);
        let jafarPawn = new Coordinates(3, 3);
        let alladinPawns = [new Coordinates(1,2), new Coordinates(4, 13)];
        expect( () =>  new JafarGame(board, jafarPawn, alladinPawns))
            .toThrowError('Some Alladin pawns are out of the board ');  
    });
    
    it("Jafar Pawn has same coordinates as Alladin pawn", () => {
        expect( () =>  new JafarGame(new Board(10), new Coordinates(4, 3), [new Coordinates(4,3), new Coordinates(3, 9)]))
            .toThrowError(new Error ('Jafar pawn has the same coordinates as one of Alladin pawns'));  
    });

    it("Alladin has duplicate pawns", () => {
        expect( () =>  new JafarGame(new Board(10), new Coordinates(4, 3), [new Coordinates(5,3), new Coordinates(3, 9), new Coordinates(5,3)]))
            .toThrowError("There are Alladin pawns with duplicate coordinates");
    });

});

describe("Correct Game Input", () => {
    
    it("Correct input for JafarGame", () => {
        let game = new JafarGame(new Board(10), new Coordinates(4, 3), [new Coordinates(5,3), new Coordinates(3, 9), new Coordinates(5,8)]);
        expect(game).toMatchObject(
            { 
                Board: {Height: 10, Width: 10}, 
                JafarPawn: {X: 4, Y: 3}, 
                AladdinPawns: [{X: 5, Y: 3}, {X: 3, Y: 9}, {X: 5, Y: 8}] 
            });   
    });


});