import {Cluster} from './cluster.model';
declare var Plotly: any;

export class PlotlyService {
    private data: any;
    private layout: any;
    setReturnedData(clusters: Cluster[]) {
        this.data = this.setScatterGraph();
        this.layout = this.setLayout();
        Plotly.newPlot('js-plotly', this.data, this.layout);
    }
    
    setScatterGraph() {
        this.data = [{
            x: [0, 1, 2],
            y: [0, 2, 2],
            z: [0, 4, 2],
            text: ['hoge', 'fuga', 'noge'],
            hoverinfo: 'text',
            mode: 'markers',
            type: 'scatter3d',
            marker: {
                color: [
                    'rgb(23, 190, 207)',
                    'rgb(23, 190, 2)',
                    'rgb(23, 1, 207)'
                ],
                size: 2
            }
        }, {
            x: [2, 3, 12],
            y: [2, 5, 12],
            z: [2, 5, 12],
            text: ['hoge', 'fuga', 'noge'],
            hoverinfo: 'text',
            mode: 'markers',
            type: 'scatter3d',
            marker: {
                color: [
                    'rgb(23, 190, 207)',
                    'rgb(23, 190, 2)',
                    'rgb(23, 1, 207)'
                ],
                size: 2
            }
        }, {
            alphahull: 7,
            opacity: 0.1,
            type: 'mesh3d',
            color: 'rgb(12, 12, 12)',
            x: [2, 1, 2],
            y: [2, 2, 2],
            z: [2, 4, 2]
        }];
    }

    setLayout() {
        this.layout = {
            autosize: true,
            height: 700,
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
