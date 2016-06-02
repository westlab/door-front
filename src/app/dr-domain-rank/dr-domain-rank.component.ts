import {Component, OnInit} from '@angular/core';
import {DomainCount} from '../shared/models/domain-count.model';
import {DrRankComponent} from '../dr-rank/dr-rank.component';
import {DoorService} from '../shared/api/door-service';

@Component({
    selector: 'as-dr-domain-rank',
    providers: [DoorService],
    templateUrl: 'app/dr-domain-rank/dr-domain-rank.html',
    directives: [
        DrRankComponent
    ]
})
export class DrDomainRankComponent implements OnInit {
    domainCounts: DomainCount[];

    constructor(private _doorService: DoorService) {}

    ngOnInit() {
        this.getCount();
    }

    private getCount(): void {
        this._doorService
            .FetchDomainRank()
            .subscribe((data: DomainCount[]) => this.domainCounts = data,
                error => console.log(error),
                () => console.log('Get all items complete'));
    }
}
