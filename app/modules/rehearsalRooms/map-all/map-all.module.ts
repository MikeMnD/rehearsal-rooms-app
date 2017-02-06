import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/platform";

import { MapAllRouting } from "./map-all.routes";
import { MapAllComponent } from "./map-all.component";

@NgModule({
  imports: [
    NativeScriptModule,
    MapAllRouting
  ],
  declarations: [
    MapAllComponent
  ]
})
export class MapAllModule {}