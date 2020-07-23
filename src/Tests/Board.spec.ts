import { Board } from '../BusinessLogic/Board';

describe("Incorrect board input", () => {
    // it("Height equals 2", () => {
    //     expect( () =>  new Board(2, 10))
    //         .toThrowError(new Error('Invalid height passed into contsructor. Expected Integer with the value more or equal 3.'));
    // });

    // it("Height equals 0", () => {
    //     expect( () =>  new Board(0, 10))
    //         .toThrowError(new Error('Invalid height passed into contsructor. Expected Integer with the value more or equal 3.'));
    // });

    // it("Height is negative", () => {
    //     expect( () =>  new Board(-3, 10))
    //         .toThrowError(new Error('Invalid height passed into contsructor. Expected Integer with the value more or equal 3.'));
    // });

    // it("Width equals 2", () => {
    //     expect( () =>  new Board(10, 2))
    //         .toThrowError(new Error('Invalid width passed into contsructor. Expected Integer with the value more or equal 3.'));
    // });

    // it("Width equals 0", () => {
    //     expect( () =>  new Board(10, 0))
    //         .toThrowError(new Error('Invalid width passed into contsructor. Expected Integer with the value more or equal 3.'));
    // });

    it("Size is negative", () => {
        expect( () =>  new Board(-10))
            .toThrowError(new Error('Invalid size passed into contsructor. Expected Integer with the value more or equal 1 and less or equal 30.'));
    });

    it("Size is zero", () => {
        expect( () =>  new Board(0))
            .toThrowError(new Error('Invalid size passed into contsructor. Expected Integer with the value more or equal 1 and less or equal 30.'));
    });

    it("Size is floating point number", () => {
        expect( () =>  new Board(1.75))
            .toThrowError(new Error('Invalid size passed into contsructor. Expected Integer with the value more or equal 1 and less or equal 30.'));
    });

    it("Size is more then 30", () => {
        expect( () =>  new Board(40))
            .toThrowError(new Error('Invalid size passed into contsructor. Expected Integer with the value more or equal 1 and less or equal 30.'));
    });



});

describe("Correct board input", () => {
    it("Size equals 1", () => {
        let board = new Board(3);
        expect(board).toMatchObject({ Height:3, Width:3 });
    });

    it("Size equals 30", () => {
        let board = new Board(30);
        expect(board).toMatchObject({ Height:30, Width:30 });
    });

    it("Size equals 10", () => {
        let board = new Board(10);
        expect(board).toMatchObject({ Height:10, Width:10 });
    });
});