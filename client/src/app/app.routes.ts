import { Routes } from "@angular/router";
import { TrendingsComponent } from "./pages/trendings/trendings.component";
import { SearchComponent } from "./pages/search/search.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "trendings",
        component: TrendingsComponent,
      },
      {
        path: "search",
        component: SearchComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];
