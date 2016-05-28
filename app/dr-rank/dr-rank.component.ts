import {Component, Input} from '@angular/core';
import {Count} from '../shared/models/count.model';

@Component({
    selector: 'as-dr-rank',
    templateUrl: 'app/dr-rank/dr-rank.html',
    styleUrls: [
        'app/dr-rank/dr-rank.css'
    ]
})
export class DrRankComponent {
    @Input() title: string;
    @Input() counts: Count[];
}
