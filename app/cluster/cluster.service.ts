import {Injectable} from '@angular/core';
import {Cluster} from './cluster.model'
import {Coordinate} from './coordinate.model';
import {CLUSTERS} from './mock-clusters';
@Injectable()

export class ClusterService {
    clusters: Cluster[];

    convertCluster(): Cluster[] {
        let coordinates = [
            new Coordinate(2, 0, 0),
            new Coordinate(0, 2, 0),
            new Coordinate(-2, 0, 0),
            new Coordinate(0, -2, 0)
        ];
        
        for (var i = 0; i <= CLUSTERS.length; i++) {
            // fetch data from mock
            let name = CLUSTERS[i].name;
            let data = CLUSTERS[i].data;
            let cluster = new Cluster(name, data, coordinates[i]);
            this.clusters[i] = cluster;
        }
        return this.clusters;
    }

}
