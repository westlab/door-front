import {Component} from '@angular/core';
import {DomainCount} from '../shared/models/domain-count.model';
import {DrRankComponent} from '../dr-rank/dr-rank.component';

@Component({
    selector: 'as-dr-domain-rank',
    templateUrl: 'app/dr-domain-rank/dr-domain-rank.html',
    directives: [
        DrRankComponent
    ]
})
export class DrDomainRankComponent {
    domainCounts: DomainCount[];

    constructor() {
        this.domainCounts = [
            {'name': 'jojo.com', 'count': 100},
            {'name': 'west.com', 'count': 90},
            {'name': 'google.com', 'count': 70},
            {'name': 'fooo.com', 'count': 60},
            {'name': 'ladygaga.com', 'count': 50},
        ];
    }
}
