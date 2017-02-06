import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MapAllComponent } from "./map-all.component";

const mapRoutes: Routes = [
  {
    path: 'rehearsalRoomMapAll',
    component: MapAllComponent
  }
];

export const MapAllRouting: ModuleWithProviders = RouterModule.forChild(mapRoutes);