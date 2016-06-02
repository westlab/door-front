import {Word} from './word.model';
import {Coordinate} from './coordinate.model';

export class Cluster {
    public name: string;
    public data: Word[];
    public color: string;
    public coordinate: Coordinate;
    constructor(name: string, color: string, data = [], coordinate: Coordinate) {
        this.name = name;
        this.data = data;
        this.color = color;
        this.coordinate = coordinate;
    }
}
