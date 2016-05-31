import {Injectable} from '@angular/core';
import {Cluster} from './cluster.model';
import {Word} from './word.model';
import {Coordinate} from './coordinate.model';
import {CLUSTERS} from './mock-clusters';
@Injectable()

export class ClusterService {
    clusters = [];
    coordinates = [
        new Coordinate(2, 0, 0),
        new Coordinate(0, 2, 0)
    ];
    convertCluster(): Cluster[] {
        for (let i = 0; i < CLUSTERS.length; i++) {
            let name = CLUSTERS[i].name;
            let data = this.convertWord(i, CLUSTERS[i].data);
            let cluster = new Cluster(name, data, this.coordinates[i]);
            this.clusters.push(cluster);
        }
        return this.clusters;
    }

    convertWord(iterOfCluster: number, data: {name: string, value: number}[]): Word[] {
        let words = [];
        for (let i = 0; i < data.length; i++) {
            let name = data[i].name;
            let value = data[i].value;
            let coordinate = this.insertCoordinateToWord(iterOfCluster, i);
            words.push(new Word(name, value, coordinate));
        }
        return words;
    }

    insertCoordinateToWord(iterOfCluster: number, iterOfWord: number): Coordinate {
        let angle_xy = (2 * Math.PI / CLUSTERS.length) * iterOfWord;
        let angle_z = Math.random() * Math.PI;
        let r = Math.random();
        return new Coordinate(
            (this.coordinates[iterOfCluster].x + r * Math.sin(angle_xy) * Math.cos(angle_z)),
            (this.coordinates[iterOfCluster].y + r * Math.sin(angle_xy) * Math.sin(angle_z)),
            (this.coordinates[iterOfCluster].z + r * Math.cos(angle_z))
        );
    }
}
