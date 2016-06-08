import {DrDashBoardComponent} from './dr-dashboard/dr-dashboard.component';
import {DrBrowsingHistogramComponent} from './dr-browsing-histogram/dr-browsing-histogram.component';
import {DrDomainRankComponent} from './dr-domain-rank/dr-domain-rank.component';
import {DrSrcIpRankComponent} from './dr-src-ip-rank/dr-src-ip-rank.component';
import {DrBrowsingTimelineComponent} from './dr-browsing-timeline/dr-browsing-timeline.component';
import {ClusterComponent} from './cluster/cluster.component';
import {DrWordCloudComponent} from './dr-word-cloud/dr-word-cloud.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: DrDashBoardComponent },
    { path: '/browsing', name: 'BrowsingHistogram', component: DrBrowsingHistogramComponent },
    { path: '/domainrank', name: 'DomainRanking', component: DrDomainRankComponent },
    { path: '/srciprank', name: 'SrcIpRanking', component: DrSrcIpRankComponent },
    { path: '/timeline', name: 'Timeline', component: DrBrowsingTimelineComponent },
    { path: '/cluster', name: 'Cluster', component: ClusterComponent },
    { path: '/wordcloud', name: 'WordCloud', component: DrWordCloudComponent }
];
