/// <reference path="../../../typings/index.d.ts" />

import {Component, OnInit} from '@angular/core';
import {WordCount} from '../shared/models/word-count.model';
import {ICompTextSize} from './comp-text-size.interface';
import {DoorService} from '../shared/api/door-service';
import {Observable} from 'rxjs/Rx';
import {ICount} from '../shared/interfaces/count.interface';

@Component({
    selector: 'as-dr-word-cloud',
    templateUrl: 'app/dr-word-cloud/dr-word-cloud.html',
    styleUrls: [
        'app/dr-word-cloud/dr-word-cloud.css'
    ],
    providers: [
        DoorService
    ]
})
export class DrWordCloudComponent implements OnInit {
    wordCounts: WordCount[];
    words: string[];

    constructor(private doorService: DoorService) {}

    ngOnInit() {
        this.words = [];
        this.wordCounts = [];
        this.getWord();
        // this.displayWordCloud();
    }

    public displayWordCloud(): void {
        let fill = d3.scale.category20<number>();

        d3.layout.cloud().size([300, 300])
            .words(this.words.map(function(d: string) {
                return {text: d, size: 10 + Math.random() * 90};
            }))
            .padding(5)
            .rotate(function() { return (Math.random() * 2) * 90; })
            .font('Impact')
            .fontSize(function(d: ICompTextSize) { return d.size; })
            .on('end', draw)
            .start();

        function draw(words: ICompTextSize[]) {
            d3.select('.word-cloud-canvas').append('svg')
                .attr('width', 300)
                .attr('height', 300)
                .append('g')
                .attr('transform', 'translate(150,150)')
                .selectAll('text')
                .data(words)
                .enter().append('text')
                .style('font-size', function(d: ICompTextSize) { return d.size + 'px'; })
                .style('font-family', 'Impact')
                .style('fill', function(d: ICompTextSize, i: number) { return fill(i); })
                .attr('text-anchor', 'middle')
                .attr('transform', function(d: ICompTextSize) {
                    return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
                })
                .text(function(d: ICompTextSize) { return d.text; });
        }
    }

    private getWord(): void {
        Observable.interval(2000).flatMap(() => {
            this.words = this.wordCounts.map((d: ICount) => {
                return d.name;
            });
            console.log(this.wordCounts);
            return this.doorService.FetchWordRank();
        }).subscribe(res => this.wordCounts = <ICount[]>res);

        Observable.interval(1000 * 10).subscribe((_) => {
            d3.select('.word-cloud-canvas svg').remove();
            this.displayWordCloud();
        });
    }
}
