import { Coordinates } from './BusinessLogic/Coordinates';
import { Board } from './BusinessLogic/Board';
import { JafarGame } from './BusinessLogic/JafarGame';

let game: JafarGame = new JafarGame(new Board(10), new Coordinates(2,2), [new Coordinates(3,3), new Coordinates(4,4)]);
