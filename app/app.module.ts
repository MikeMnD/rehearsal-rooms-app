import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ListModule } from "./modules/rehearsalRooms/list/list.module";
import { DetailsModule } from "./modules/rehearsalRooms/details/details.module";

import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";

@NgModule({    
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,        
        NativeScriptRouterModule,    
        NativeScriptRouterModule.forRoot(appRoutes),
        ListModule,
        DetailsModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
