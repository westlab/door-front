import {Component} from '@angular/core';
import {Browsing} from '../shared/models/browsing.model';

@Component({
    selector: 'as-dr-drowsing-timeline',
    templateUrl: 'app/dr-browsing-timeline/dr-browsing-timeline.html',
    styleUrls: [
        'app/dr-browsing-timeline/dr-browsing-timeline.css'
    ]
})
export class DrBrowsingTimelineComponent {
    browsings: Browsing[];

    constructor() {
        this.browsings = [
            {
                'src_ip': '1.1.1.1', 'dst_ip': '2.2.2.2',
                'src_port': 1234, 'dst_port': 80,
                'timestamp': '2015-04-01 00:00:00',
                'created_at': '2015-04-01 00:00:00',
                'download' : 1, 'browsing_time': 8,
                'title': 'title', 'url': 'theworld.com/dio',
                'domain': 'theworld.com',
            },
            {
                'src_ip': '1.1.1.1', 'dst_ip': '2.2.2.2',
                'src_port': 3456, 'dst_port': 80,
                'timestamp': '2015-04-01 00:00:00',
                'created_at': '2015-04-01 00:00:00',
                'download' : 1, 'browsing_time': 11,
                'title': 'title', 'url': 'theworld.com/dio',
                'domain': 'theworld.com',
            },
            {
                'src_ip': '1.1.1.1', 'dst_ip': '2.2.2.2',
                'src_port': 7890, 'dst_port': 80,
                'timestamp': '2015-04-01 00:00:00',
                'created_at': '2015-04-01 00:00:00',
                'download' : 1, 'browsing_time': 21,
                'title': 'title', 'url': 'theworld.com/dio',
                'domain': 'theworld.com',
            },
        ];
    }

    colorByBrowsingTime(browsing_time: number) {
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

}
