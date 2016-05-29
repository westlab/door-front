import {Component} from '@angular/core';
import {IpCount} from '../shared/models/ip-count.model';
import {DrRankComponent} from '../dr-rank/dr-rank.component';

@Component({
    selector: 'as-src-ip-domain-rank',
    templateUrl: 'app/dr-src-ip-rank/dr-src-ip-rank.html',
    directives: [
        DrRankComponent
    ]
})
export class DrSrcIpRankComponent {
    srcIpCounts: IpCount[];

    constructor() {
        this.srcIpCounts = [
            {'name': '1.1.1.1', 'count': 100},
            {'name': '2.2.2.2', 'count': 90},
            {'name': '3.3.3.3', 'count': 70},
            {'name': '4.4.4.4', 'count': 60},
            {'name': '5.5.5.5', 'count': 50},
        ];
    }
}
