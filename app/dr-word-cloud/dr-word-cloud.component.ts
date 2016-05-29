import * as d3 from 'd3';
import {Component} from '@angular/core';
import {WordCount} from '../shared/models/word-count.model';

@Component({
    selector: 'as-dr-word-cloud',
    templateUrl: 'app/dr-word-cloud/dr-word-cloud.html',
    styleUrls: [
        'app/dr-word-cloud/dr-word-cloud.css'
    ]
})
export class DrWordCloudComponent {
    wordCounts: WordCount[];

    constructor() {
        this.wordCounts = [
            {'name': '1.1.1.1', 'count': 100},
            {'name': '2.2.2.2', 'count': 90},
            {'name': '3.3.3.3', 'count': 70},
            {'name': '4.4.4.4', 'count': 60},
            {'name': '5.5.5.5', 'count': 50},
        ];
    }

    displayWordCloud() {
        console.log(d3);
    }
}
