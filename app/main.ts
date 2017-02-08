// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import app = require('application');
import "reflect-metadata";

app.onLaunch = function(args: app.ApplicationEventData) {
    var analytics = require('nativescript-telerik-analytics');
    analytics.init({
        appId: 'jmbf8njcu046y26w',
        version: '0.9.0'});
    analytics.start();

};

app.on(app.exitEvent, function(args: app.ApplicationEventData) {
    var analytics = require('nativescript-telerik-analytics');
    analytics.stop();
})

platformNativeScriptDynamic().bootstrapModule(AppModule);
