
/**
 * Represents the square board of Checkers game with the definite size.
 * Shares readonly properties Height and Width
 *
 * @export
 * @class Board
 */
export class Board {
    readonly Height: Number;
    readonly Width: Number;
    /**
     *Creates an instance of Board.
     * @param {Number} height { Accepts the height of the board }
     * @param {Number} width { Accepts the width of the board }
     * @memberof Board
     */
    constructor(size: Number) {
        this.validateConstructorParameters(size);
        this.Height = size;
        this.Width = size;     
    }

    private validateConstructorParameters = (size: Number) => {
        if(!Number.isInteger(size) || size < 1 || size > 30)
            throw new Error('Invalid size passed into contsructor. Expected Integer with the value more or equal 1 and less or equal 30.');
    }
}