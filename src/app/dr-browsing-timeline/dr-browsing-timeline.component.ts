import {Component, OnInit} from '@angular/core';
import {Browsing} from '../shared/models/browsing.model';
import {DoorService} from '../shared/api/door-service';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'as-dr-drowsing-timeline',
    templateUrl: 'app/dr-browsing-timeline/dr-browsing-timeline.html',
    styleUrls: [
        'app/dr-browsing-timeline/dr-browsing-timeline.css'
    ],
    providers: [
        DoorService
    ]
})
export class DrBrowsingTimelineComponent implements OnInit {
    browsings: Browsing[];

    constructor(private doorService: DoorService) {}

    ngOnInit() {
        this.getBrowsings();
    }


    public colorByBrowsingTime(browsing_time: number) {
        if (browsing_time < 5) {
            return 'browsing-time-c1';
        } else if (browsing_time >= 5 && browsing_time <= 10) {
            return 'browsing-time-c2';
        } else if (browsing_time >= 10 && browsing_time <= 20) {
            return 'browsing-time-c3';
        } else if (browsing_time >= 20 && browsing_time <= 30) {
            return 'browsing-time-c4';
        } else {
            return 'browsing-time-c5';
        }
    }

    private getBrowsings(): void {
        Observable.interval(1000 ).flatMap(() => {
            return this.doorService.FetchBrowsing();
        })
            .subscribe(res => this.browsings = <Browsing[]>res);
    }

}
