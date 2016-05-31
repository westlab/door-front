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
        let wordNum = data.length;
        for (let i = 0; i < wordNum; i++) {
            let name = data[i].name;
            let value = data[i].value;
            let coordinate = this.insertCoordinateToWord(iterOfCluster, i, wordNum);
            words.push(new Word(name, value, coordinate));
        }
        return words;
    }

    insertCoordinateToWord(iterOfCluster: number, iterOfWord: number, wordNum: number): Coordinate {
      debugger;
        let angle_xy = (2 * Math.PI / wordNum) * (iterOfWord + 1);
        let angle_z = Math.random() * Math.PI;
        // 0.5 <= r < 1.0
        let r = 0.5*(Math.random() + 1);
        return new Coordinate(
            (this.coordinates[iterOfCluster].x + r * Math.sin(angle_z) * Math.cos(angle_xy)),
            (this.coordinates[iterOfCluster].y + r * Math.sin(angle_z) * Math.sin(angle_xy)),
            (this.coordinates[iterOfCluster].z + r * Math.cos(angle_z))
        );
    }
}
