
/**
 *Represents a pawn as a coordinate of x and y value.
 *Coordinates should be started with 1, not with 0. Otherwise error.
 *
 * @export
 * @class Coordinates
 */
export class Coordinates {
    readonly X: Number;
    readonly Y: Number;
    constructor(x: Number, y:Number) {
        this.validateConstructorParameters(x, y);
        this.X = x;
        this.Y = y;    
    }

    private validateConstructorParameters = (x: Number, y:Number) => {
        if(!Number.isInteger(x) || x < 1 )
            throw new Error('Invalid x coordinate passed into contsructor. Expected Integer with the value more or equal 1.');
        if(!Number.isInteger(y) || y < 1 )
            throw new Error('Invalid y coordinate passed into contsructor. Expected Integer with the value more or equal 1.');
    } 
    
}