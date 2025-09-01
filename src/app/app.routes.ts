import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './homepage/homepage';
import { Getset } from './getset/getset';
import { Style } from './style/style';
import { Ifelse } from './ifelse/ifelse';
import { Switch } from './switch/switch';
import { Forloop } from './forloop/forloop';
import { Events } from './events/events';
import { Signal1 } from './signal/signal';
import { Effect } from './effect/effect';
import { Twoway } from './twoway/twoway';
import { Ngtutorial } from './ngtutorial/ngtutorial';
import { Routetest } from './routetest/routetest';
import { Routetest2 } from './routetest2/routetest2';

export const routes: Routes = [
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'page1', component: Home },
    { path: 'page2', component: Counter },
    { path: 'page3', component: Getset },
    { path: 'page4', component: Style },
    { path: 'page5', component: Ifelse },
    { path: 'page6', component: Switch },
    { path: 'page7', component: Forloop },
    { path: 'page8', component: Events },
    { path: 'page9', component: Signal1 },
    { path: 'page10', component: Effect },
    { path: 'page11', component: Twoway },
    { path: 'page12', component: Ngtutorial },
    { path: 'page13', component: Routetest },
    { path: 'page14', component: Routetest2 },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }