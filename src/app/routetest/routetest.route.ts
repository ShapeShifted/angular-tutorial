import { Routes } from "@angular/router";
import { Home } from "../homepage/homepage";
import { Counter } from "../counter/counter";
import { Getset } from "../getset/getset";
import { Routetest2 } from "../routetest2/routetest2";

export const any_name_is_okay: Routes = [
      { path: '/page1', component: Home },
      { path: '/page2', component: Counter },
      { path: '/page3', component: Getset },
      { path: '/page14', component: Routetest2 },
]