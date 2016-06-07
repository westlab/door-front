import {DrDomainRankComponent} from './dr-domain-rank/dr-domain-rank.component';
import {DrSrcIpRankComponent} from './dr-src-ip-rank/dr-src-ip-rank.component';
import {DrBrowsingTimelineComponent} from './dr-browsing-timeline/dr-browsing-timeline.component';
import {ClusterComponent} from './cluster/cluster.component';
import {DrWordCloudComponent} from './dr-word-cloud/dr-word-cloud.component';
import {DrDashBoardComponent} from './dr-dashboard/dr-dashboard.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: DrDashBoardComponent },
    { path: '/domainrank', name: 'DomainRanking', component: DrDomainRankComponent },
    { path: '/srciprank', name: 'SrcIpRanking', component: DrSrcIpRankComponent },
    { path: '/timeline', name: 'Timeline', component: DrBrowsingTimelineComponent },
    { path: '/cluster', name: 'Cluster', component: ClusterComponent },
    { path: '/wordcloud', name: 'WordCloud', component: DrWordCloudComponent }
];
