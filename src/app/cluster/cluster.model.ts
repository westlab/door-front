import {Word} from './word.model';
import {Coordinate} from './coordinate.model';

export class Cluster {
    public name: string;
    public data: Word[];
    public color: string;
    public coordinate: Coordinate;
    public xCoordinateCollection: number[];
    public yCoordinateCollection: number[];
    public zCoordinateCollection: number[];
    constructor(name: string, color: string, data = [], coordinate: Coordinate, x: number[], y: number[], z: number[]) {
        this.name = name;
        this.data = data;
        this.color = color;
        this.coordinate = coordinate;
        this.xCoordinateCollection = x;
        this.yCoordinateCollection = y;
        this.zCoordinateCollection = z;
    }
    unpackWordBy(key: string): any {
        switch (key) {
            case 'value':
                const ZOOMINGRATE = 100;
                return this.data.map(function (word) { return word[key] * ZOOMINGRATE });
            default:
                return this.data.map(function(word) { return word[key]; });
        }
    }
}
