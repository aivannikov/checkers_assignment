import { Coordinates } from '../BusinessLogic/Coordinates';

describe("Incorrect coordinates input", () => {
    it("X coordinate negative", () => {
        expect( () =>  new Coordinates(-2, 10))
            .toThrowError(new Error('Invalid x coordinate passed into contsructor. Expected Integer with the value more or equal 1.'));
    });

    it("X coordinate zero", () => {
        expect( () =>  new Coordinates(0, 10))
            .toThrowError(new Error('Invalid x coordinate passed into contsructor. Expected Integer with the value more or equal 1.'));
    });

    it("X coordinate float", () => {
        expect( () =>  new Coordinates(1.78, 10))
            .toThrowError(new Error('Invalid x coordinate passed into contsructor. Expected Integer with the value more or equal 1.'));        
    });

    it("Y coordinate negative", () => {
        expect( () =>  new Coordinates(10, -2))
            .toThrowError(new Error('Invalid y coordinate passed into contsructor. Expected Integer with the value more or equal 1.'));
    });

    it("Y coordinate zero", () => {
        expect( () =>  new Coordinates(10, 0))
            .toThrowError(new Error('Invalid y coordinate passed into contsructor. Expected Integer with the value more or equal 1.'));
    });

    it("Y coordinate float", () => {
        expect( () =>  new Coordinates(10, 1.78))
            .toThrowError(new Error('Invalid y coordinate passed into contsructor. Expected Integer with the value more or equal 1.'));        
    });

});

describe("Correct coordinates input", () => {

    it('Should return coordinates object', () => {
        let coordinates = new Coordinates(2,3);
        expect(coordinates).toMatchObject({X: 2, Y: 3 });
    });
});

