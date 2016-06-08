import {Component, OnInit} from '@angular/core';
import {HistogramComponent} from './dr-histogram.component';
import {BrowseCount} from '../shared/models/browse-count.model';
import {DoorService} from '../shared/api/door-service';
// import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'as-dr-browsing-histogram',
    templateUrl: 'app/dr-browsing-histogram/dr-browsing-histogram.html',
    styleUrls: ['app/dr-browsing-histogram/dr-browsing-histogram.css'],
    directives: [HistogramComponent],
    providers: [DoorService]
})
export class DrBrowsingHistogramComponent implements OnInit {
    graphData: BrowseCount[];
    graphWidth: number;
    graphHeight: number;
    graphMargin: any;

    constructor(private doorService: DoorService) {

        this.graphWidth = 500;
        this.graphHeight = 400;
        this.graphMargin = { top: 20, right: 20, bottom: 60, left: 40 };

    }

    ngOnInit() {
        this.getBrowsingCount();
    }

    private getBrowsingCount(): void {
        this.graphData = [
            {'name': '11:00', 'count': 10},
            {'name': '11:30', 'count': 12},
            {'name': '12:00', 'count': 12},
            {'name': '12:30', 'count': 22},
            {'name': '13:00', 'count': 45},
            {'name': '13:30', 'count': 37}
        ];

//        Observable.interval(1000*5).flatMap(() => {
//            return this.doorService.FetchBrowsingCount();
//        })
//        .subscribe(res => this.data = <BrowseCount[]>res);
    }
}


