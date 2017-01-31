import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DetailsComponent } from "./details.component";

const detailsRoutes: Routes = [
  {
    path: 'rehearsalRoom/:id',
    component: DetailsComponent
  }
];

export const DetailsRouting: ModuleWithProviders = RouterModule.forChild(detailsRoutes);