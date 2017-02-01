import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MapComponent } from "./map.component";

const mapRoutes: Routes = [
  {
    path: 'rehearsalRoomMap',
    component: MapComponent
  }
];

export const MapRouting: ModuleWithProviders = RouterModule.forChild(mapRoutes);