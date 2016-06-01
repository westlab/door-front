import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {Cluster} from './cluster.model';
import {ClusterService} from './cluster.service';
import {PlotlyService} from './plotly.service';

declare var Plotly: any;

@Component({
    selector: 'as-cluster',
    templateUrl: 'app/cluster/cluster.html',
    styleUrls: [
        'app/cluster/cluster.component.css'
    ],
    directives: [CORE_DIRECTIVES],
    providers: [
        ClusterService,
        PlotlyService
    ]
})

export class ClusterComponent implements OnInit {
    clusters: Cluster[];
    constructor(
        private clusterService: ClusterService,
        private plotlyService: PlotlyService
    ) { }
    getClusters() {
        this.clusters = this.clusterService.convertCluster();
    }
    drawClusters() {
        this.plotlyService.setReturnedData();
    }
    ngOnInit() {
        this.getClusters();
        this.drawClusters();
    }
}
