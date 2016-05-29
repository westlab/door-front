import {Injectable} from '@angular/core';
import {CLUSTERS} from './mock-clusters';
@Injectable()

export class ClusterService {
    getClusters() {
        return CLUSTERS;
    }
}
