import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './homepage/homepage';
import { Getset } from './getset/getset';

export const routes: Routes = [
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'page1', component: Home },
    { path: 'page2', component: Counter },
    { path: 'page3', component: Getset }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }