import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import * as common from "./";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        common.backendServicesService
    ]
})
export class SharedModule { }
