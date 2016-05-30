import {ICount} from '../interfaces/count.interface';


export class IpCount implements ICount {
    name: string;
    count: number;

    constructor(name: string, count: number) {
        this.name = name;
        this.count = count;
    }
}
