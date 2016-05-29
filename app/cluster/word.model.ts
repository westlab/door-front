interface Coordinate {
    x?: number;
    y?: number;
    z?: number;
}

export class Word implements Coordinate {
    public name: string;
    public value: number;
}
