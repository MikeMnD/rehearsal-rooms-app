import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/platform";

import { MapRouting } from "./map.routes";
import { MapComponent } from "./map.component";

@NgModule({
  imports: [
    NativeScriptModule,
    MapRouting
  ],
  declarations: [
    MapComponent
  ]
})
export class MapModule {}