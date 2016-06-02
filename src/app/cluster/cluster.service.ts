import {Injectable} from '@angular/core';
import {Cluster} from './cluster.model';
import {Word} from './word.model';
import {Coordinate} from './coordinate.model';
import {CLUSTERS} from './mock-clusters';
@Injectable()

export class ClusterService {
    private clusters = [];
    private coordinates = [
        new Coordinate(2, 0, 0),
        new Coordinate(0, 2, 0)
    ];
    private colors = [
        'rgb(23, 190, 207)',
        'rgb(23, 19, 207)'
    ];
    convertCluster(): Cluster[] {
        for (let i = 0; i < CLUSTERS.length; i++) {
            let name = CLUSTERS[i].name;
            let data = this.convertWord(CLUSTERS[i].data);
            let color = this.colors[i];
            let collection = this.collectCoordination(i, data.length);
            console.log(collection);
            let cluster = new Cluster(name, color, data, this.coordinates[i], collection.x, collection.y, collection.z);
            this.clusters.push(cluster);
        }
        return this.clusters;
    }

    convertWord(data: {name: string, value: number}[]): Word[] {
        let words = [];
        let wordNum = data.length;
        for (let i = 0; i < wordNum; i++) {
            let name = data[i].name;
            let value = data[i].value;
            words.push(new Word(name, value));
        }
        return words;
    }
    collectCoordination(iterOfCluster: number, dataNum: number): {x: number[], y: number[], z: number[]} {
        let xCoordinateCollection = [];
        let yCoordinateCollection = [];
        let zCoordinateCollection = [];
        for (let i = 0; i < dataNum; i++) {
            let angle_xy = (2 * Math.PI / dataNum) * (i + 1);
            let angle_z = Math.random() * Math.PI;
            // 0.5 <= r < 1.0
            let r = 0.5 * (Math.random() + 1);
            let x = this.coordinates[iterOfCluster].x + r * Math.sin(angle_z) * Math.cos(angle_xy);
            let y = this.coordinates[iterOfCluster].y + r * Math.sin(angle_z) * Math.sin(angle_xy);
            let z = this.coordinates[iterOfCluster].z + r * Math.cos(angle_z);
            xCoordinateCollection.push(x);
            yCoordinateCollection.push(y);
            zCoordinateCollection.push(z);
        }
        return { x: xCoordinateCollection, y: yCoordinateCollection, z: zCoordinateCollection };
    }
}
