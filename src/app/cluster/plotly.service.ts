declare var Plotly: any;

export class PlotlyService {
    private layout: any;
    private data: any;
    setReturnedData() {
        this.layout = {
            title: 'hoge',
            height: 500,
            width: 1200
        };
        this.data = [
            {
                x: 20,
                y: 10,
                name: 'hoge',
                type: 'bar',
                orientation: 'v'
            }
        ];
        Plotly.newPlot('myPlotlyDiv', this.data, this.layout, null);
    }
}
