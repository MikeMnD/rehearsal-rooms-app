import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/platform";

import { DetailsRouting } from "./details.routes";
import { DetailsComponent } from "./details.component";

@NgModule({
  imports: [
    NativeScriptModule,
    DetailsRouting
  ],
  declarations: [
    DetailsComponent
  ]
})
export class DetailsModule {}