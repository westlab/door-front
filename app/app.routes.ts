import {HomeComponent} from './home/home.component';
import {DrDomainRankComponent} from './dr-domain-rank/dr-domain-rank.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/domainrank', name: 'DomainRanking', component: DrDomainRankComponent },
];
