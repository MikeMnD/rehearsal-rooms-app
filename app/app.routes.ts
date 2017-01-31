import { Routes } from "@angular/router";
import { ListComponent } from "./modules/rehearsalRooms/list/list.component"
import { DetailsComponent } from "./modules/rehearsalRooms/details/details.component"
export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/rehearsalRoom/List",
    pathMatch: "full"
  },
  {
      path: "rehearsalRoom/:id", 
      component: DetailsComponent,
  }
];