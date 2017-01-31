import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListComponent } from "./list.component";

const listRoutes: Routes = [
  {
    path: 'rehearsalRoom/List',
    component: ListComponent
  }
];

export const ListRouting: ModuleWithProviders = RouterModule.forChild(listRoutes);