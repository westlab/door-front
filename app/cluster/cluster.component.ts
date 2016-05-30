import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {Cluster} from './cluster.model';
import {ClusterService} from './cluster.service';

@Component({
    selector: 'as-cluster',
    templateUrl: 'app/cluster/cluster.html',
    directives: [CORE_DIRECTIVES],
    providers: [ClusterService]
})

export class ClusterComponent implements OnInit {
    clusters: Cluster[];
    constructor(
        private clusterService: ClusterService
    ) { }
    getClusters() {
        this.clusters = this.clusterService.convertCluster();
    }
    ngOnInit() {
        this.getClusters();
        console.log(this.clusters);
    }
}
