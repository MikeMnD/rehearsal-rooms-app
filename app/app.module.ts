import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ListModule } from "./modules/rehearsalRooms/list/list.module";
import { DetailsModule } from "./modules/rehearsalRooms/details/details.module";
import { MapModule } from "./modules/rehearsalRooms/map/map.module";
import { appRoutes } from "./app.routes";
import { AppComponent } from "./app.component";

import { registerElement } from "nativescript-angular/element-registry";

const mapbox = require("nativescript-mapbox");
registerElement("Mapbox", () => mapbox.Mapbox);

@NgModule({    
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,        
        NativeScriptRouterModule,    
        NativeScriptRouterModule.forRoot(appRoutes),
        ListModule,
        DetailsModule,
        MapModule,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
