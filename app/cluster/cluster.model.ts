import {Word} from './word.model';
import {Coordinate} from './coordinate.model';

export class Cluster {
    public name: string;
    public data: Word[];
    public coordinate: Coordinate;
    
    constructor(name: string, data = [], coordinate: Coordinate) {
        this.name = name;
        this.data = data;
        this.coordinate = coordinate;
    }
}
