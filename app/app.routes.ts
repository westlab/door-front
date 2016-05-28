import {HomeComponent} from './home/home.component';
import {TodolistComponent} from './todolist/todolist.component';
import {SimplebindComponent} from './simplebind/simplebind.component';
import {DrDomainRankComponent} from './dr-domain-rank/dr-domain-rank.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/simplebind', name: 'Simplebind', component: SimplebindComponent },
    { path: '/domainrank', name: 'DomainRanking', component: DrDomainRankComponent },
    { path: '/todolist', name: 'Todolist', component: TodolistComponent },
];
