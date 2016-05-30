import {Injectable} from '@angular/core';
import {Cluster} from './cluster.model';
import {Word} from './word.model';
import {Coordinate} from './coordinate.model';
import {CLUSTERS} from './mock-clusters';
@Injectable()

export class ClusterService {
    clusters: Cluster[];
    words: Word[];
    coordinates = [
        new Coordinate(2, 0, 0),
        new Coordinate(0, 2, 0),
        new Coordinate(-2, 0, 0),
        new Coordinate(0, -2, 0)
    ];

    convertCluster(): Cluster[] {
        for (let i = 0; i <= CLUSTERS.length; i++) {
            // fetch data from mock
            let name = CLUSTERS[i].name;
            let data = this.convertWord(CLUSTERS[i].data);
            let cluster = new Cluster(name, data, this.coordinates[i]);
            this.clusters[i] = cluster;
        }
        return this.clusters;
    }

    convertWord(data: []): Word[] {
        for (let i = 0; i <= data.length; i++) {
            let name = data[i].name;
            let value = data[i].value;
            let word = this.insertCoordinate(i);
            this.words[i] =  new Word(name, value, word);
        }
        return this.words;
    }

    insertCoordinate(num: number): Coordinate {
        let angle_xy = 360 / CLUSTERS.length * num;
        let angle_z = Math.floor(Math.random() * 180);
        let r = Math.floor(Math.random());
        return new Coordinate();

    }



}
