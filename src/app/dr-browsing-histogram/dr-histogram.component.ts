import {Component, OnChanges, OnInit, ElementRef} from '@angular/core';
// import * as d3 from 'd3';

@Component({
  selector: 'as-dr-histogram',
  template: ``,
  events: ['changed'],
  properties: ['data', 'width', 'height', 'margin']
})
export class HistogramComponent implements OnChanges, OnInit {
  data: any;
  histogram: any;
  height: number;
  width: number;
  margin: any;

  constructor(
    public elementRef: ElementRef) {
        let el: any = elementRef.nativeElement;
        this.histogram = d3.select(el).
          append('svg').
          attr('class', 'histogram');
  }

 ngOnInit() {
      this.histogram.
      attr('width', this.width + this.margin.left + this.margin.right).
      attr('height', this.height + this.margin.top + this.margin.bottom);
 }

  render(newValue: any) {
    if (!newValue) {return; }

    // scale
    let x: any = d3.scale.ordinal().
      domain(newValue.map((d: any) => d.name)).
      rangeRoundBands([0, this.width], .1);
    let y: any = d3.scale.linear().range([this.height, 0]);
    let formatPercent: any = d3.format('s');

    // axis
    let xAxis: any = d3.svg.
      axis().
      scale(x).
      orient('bottom');
    let yAxis: any = d3.svg.
      axis().
      scale(y).
      orient('left').
      tickFormat(formatPercent);

    // d3.tip ha atomawashigeri 
//    let tip: any = d3.tip().
//      attr('class', 'd3-tip').
//      offset([-10, 0]).
//      html((d: any)=>'<strong>count:</strong><span style=\'color:#fff\'>'+d.count+'</span>');

    let svg: any = this.histogram.
      append('g').
      attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

//    svg.call(tip);

    y.domain([0, d3.max(newValue, (d: any) => d.count)]);

    svg.append('g').
      attr('class', 'histogram__x-axis').
      attr('transform', 'translate(0,' + this.height + ')').
      call(xAxis);

    svg.append('g').
      attr('class', 'histogram__y-axis').
      call(yAxis).
      append('text').
      attr('transform', 'rotate(-90)').
      attr('y', 6).
      attr('dy', '.71em').
      style('text-anchor', 'end').
      text('Count');

    svg.selectAll('.histogram__bar').
      data(newValue).
      enter().
      append('rect').
      attr('class', 'histogram__bar').
      attr('x', (d: any) => x(d.name)).
      attr('width', x.rangeBand()).
      attr('y', (d: any) => y(d.count)).
      attr('height', (d: any) => this.height - y(d.count));
//      on('mouseover', tip.show).
//      on('mouseout',tip.hide);
//      svg.selectAll('.x_axis text').
//      attr('transform',(d: any)=>'translate'+this.get

//    //exit
//    divs.exit().remove();
  }

  ngOnChanges(changes: any) {
    this.render(this.data);
  }
}


