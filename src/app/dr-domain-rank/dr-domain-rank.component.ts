import {Component, OnInit} from '@angular/core';
import {DomainCount} from '../shared/models/domain-count.model';
import {DrRankComponent} from '../dr-rank/dr-rank.component';
import {DoorService} from '../shared/api/door-service';
import {Observable} from 'rxjs/Rx';
import {ICount} from '../shared/interfaces/count.interface';

@Component({
    selector: 'as-dr-domain-rank',
    templateUrl: 'app/dr-domain-rank/dr-domain-rank.html',
    directives: [
        DrRankComponent
    ],
    providers: [
        DoorService
    ]
})
export class DrDomainRankComponent implements OnInit {
    domainCounts: DomainCount[];

    constructor(private doorService: DoorService) {
        console.log('domain rank');
    }

    ngOnInit() {
        this.getDomainCount();
    }

    private getDomainCount(): void {
        Observable.interval(1000 * 5).flatMap(() => {
            return this.doorService.FetchDomainRank();
        })
        .subscribe(res => this.domainCounts = <ICount[]>res);
    }
}
