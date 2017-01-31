import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/platform";

import { ListRouting } from "./list.routes";
import { ListComponent } from "./list.component";
import * as common from "../../shared";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  imports: [
    NativeScriptModule,
    ListRouting,
    SharedModule,
  ],
  declarations: [
    ListComponent
  ],
  providers: [
      common.RehearsalRoomsService,     
  ]
})
export class ListModule {}