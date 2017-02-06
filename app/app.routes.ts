import { Routes } from "@angular/router";
import { ListComponent } from "./modules/rehearsalRooms/list/list.component"
import { DetailsComponent } from "./modules/rehearsalRooms/details/details.component"
import { MapComponent } from "./modules/rehearsalRooms/map/map.component"

export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/rehearsalRoom/List",
    pathMatch: "full"
  },  
  {
      path: "rehearsalRoomMap/:id",
      component: MapComponent,
  },
  {
      path: "rehearsalRoom/:id", 
      component: DetailsComponent,
  }
];