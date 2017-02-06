import { Routes } from "@angular/router";
import { ListComponent } from "./modules/rehearsalRooms/list/list.component";
import { DetailsComponent } from "./modules/rehearsalRooms/details/details.component";
import { MapComponent } from "./modules/rehearsalRooms/map/map.component";
import { MapAllComponent} from "./modules/rehearsalRooms/map-all/map-all.component"; 

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
      path: "rehearsalRoomMapAll",
      component: MapAllComponent,
  },
  {
      path: "rehearsalRoom/:id", 
      component: DetailsComponent,
  }
];