import {Coordinate} from './coordinate.model';

export class Word {
    public name: string;
    public value: number;
    public coordinate: Coordinate;
    
    constructor(name: string, value: number, coordinate: Coordinate) {
        this.name = name;
        this.value = value;
        this.coordinate = coordinate;
    }
}
