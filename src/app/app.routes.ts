import {HomeComponent} from './home/home.component';
import {DrDomainRankComponent} from './dr-domain-rank/dr-domain-rank.component';
import {DrSrcIpRankComponent} from './dr-src-ip-rank/dr-src-ip-rank.component';
import {ClusterComponent} from './cluster/cluster.component';
import {DrWordCloudComponent} from './dr-word-cloud/dr-word-cloud.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/domainrank', name: 'DomainRanking', component: DrDomainRankComponent },
    { path: '/srciprank', name: 'SrcIpRanking', component: DrSrcIpRankComponent },
    { path: '/cluster', name: 'Cluster', component: ClusterComponent },
    { path: '/wordcloud', name: 'WordCloud', component: DrWordCloudComponent }
];
