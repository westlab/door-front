/// <reference path="../../../typings/index.d.ts" />

import {Component, OnInit} from '@angular/core';
import {WordCount} from '../shared/models/word-count.model';
import {ICompTextSize} from './comp-text-size.interface';

@Component({
    selector: 'as-dr-word-cloud',
    templateUrl: 'app/dr-word-cloud/dr-word-cloud.html',
    styleUrls: [
        'app/dr-word-cloud/dr-word-cloud.css'
    ]
})
export class DrWordCloudComponent implements OnInit {
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

    ngOnInit() {
        this.displayWordCloud();
    }

    displayWordCloud() {
        let fill = d3.scale.category20<number>();

        d3.layout.cloud().size([300, 300])
            .words([
                'Hello', 'world', 'normally', 'you', 'want', 'more', 'words',
                'than', 'this'].map(function(d: string) {
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
}
