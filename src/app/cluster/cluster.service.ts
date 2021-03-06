import {Injectable} from '@angular/core';
import {Cluster} from './cluster.model';
import {Word} from './word.model';
import {Coordinate} from './coordinate.model';
import {CLUSTERS} from './mock-clusters';
@Injectable()

export class ClusterService {
    private clusters = [];
    // these coodinates and colors will set based on a number of clusters
    private coordinates = [
        new Coordinate(3, -3, 0),
        new Coordinate(3, 3, 3),
        new Coordinate(0, -3, 3),
        new Coordinate(0, 0, 3),
        new Coordinate(0, 0, 0),
        new Coordinate(0, 0, -3),
        new Coordinate(0, 3, -3),
        new Coordinate(-3, -3, -3),
        new Coordinate(-3, 3, 0)
    ];
    private colors = [
        '#EA5532',
        '#F6AD3C',
        '#AACF52',
        '#00A95F',
        '#00ADA9',
        '#00AFEC',
        '#4D4398',
        '#A64A97',
        '#E85298'
    ];
    convertCluster(): Cluster[] {
        for (let i = 0; i < CLUSTERS.length; i++) {
            let iter =  i % this.coordinates.length;
            let name = CLUSTERS[iter].name;
            let data = this.convertWord(CLUSTERS[iter].data);
            let color = this.colors[iter];
            let collection = this.collectCoordination(iter, data.length);
            let cluster = new Cluster(name, color, data, this.coordinates[iter], collection.x, collection.y, collection.z);
            this.clusters.push(cluster);
        }
        return this.clusters;
    }

    convertWord(data: {name: string, value: number}[]): Word[] {
        let words = [];
        for (let word of data) {
            let name = word.name;
            let value = word.value;
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
            let r = 0.5 + (Math.random() * 0.5);
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
