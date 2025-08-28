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

export const routes: Routes = [
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'page1', component: Home },
    { path: 'page2', component: Counter },
    { path: 'page3', component: Getset },
    { path: 'page4', component: Style },
    { path: 'page5', component: Ifelse },
    { path: 'page6', component: Switch },
    { path: 'page7', component: Forloop },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }