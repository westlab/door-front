import {Cluster} from './cluster.model';
declare var Plotly: any;

export class PlotlyService {
    private data: any;
    private layout: any;
    setReturnedData(clusters: Cluster[]) {
        this.setScatterGraph(clusters);
        this.setLayout();
        Plotly.newPlot('js-plotly', this.data, this.layout);
    }
    setScatterGraph(clusters: Cluster[]) {
        let data = clusters.map(function(cluster) {
            return {
                x: cluster.xCoordinateCollection,
                y: cluster.yCoordinateCollection,
                z: cluster.zCoordinateCollection,
                text: cluster.unpackWordBy('name'),
                hoverinfo: 'text',
                type: 'scatter3d',
                marker: {
                    color: cluster.color,
                    size: cluster.unpackWordBy('value'),
                }
            };
        });
        this.data = data;
    }
    setLayout() {
        this.layout = {
            autosize: true,
            height: 700,
            margin: {
                t: 50
            },
            scene: {
                aspectratio: {
                    x: 1,
                    y: 1,
                    z: 1
                },
                camera: {
                    center: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    eye: {
                        x: 1.25,
                        y: 1.25,
                        z: 1.25
                    },
                    up: {
                        x: 0,
                        y: 0,
                        z: 1
                    }
                },
                xaxis: {
                    type: 'linear',
                    zeroilne: false
                },
                yaxis: {
                    type: 'linear',
                    zeroline: false
                },
                zaxis: {
                    type: 'linear',
                    zeroline: false
                },
                title: 'word clustering from SoR',
                width: 700
            }
        };
    }
}
