import {HomeComponent} from './home/home.component';
import {DrDomainRankComponent} from './dr-domain-rank/dr-domain-rank.component';
import {DrSrcIpRankComponent} from './dr-src-ip-rank/dr-src-ip-rank.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/domainrank', name: 'DomainRanking', component: DrDomainRankComponent },
    { path: '/srciprank', name: 'SrcIpRanking', component: DrSrcIpRankComponent },
];
