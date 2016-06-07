import {Component} from '@angular/core';
import {DrWordCloudComponent} from '../dr-word-cloud/dr-word-cloud.component';
import {DrDomainRankComponent} from '../dr-domain-rank/dr-domain-rank.component';
import {DrBrowsingTimelineComponent} from '../dr-browsing-timeline/dr-browsing-timeline.component';

@Component({
    selector: 'as-dashboard',
    templateUrl: 'app/dr-dashboard/dr-dashboard.html',
    styleUrls: [
      'app/dr-dashboard/dr-dashboard.css'
    ],
    directives: [
        DrWordCloudComponent,
        DrDomainRankComponent,
        DrBrowsingTimelineComponent,
    ]
})
export class DrDashBoardComponent {
    constructor() {
        console.log('dashboard init');
    }
}
