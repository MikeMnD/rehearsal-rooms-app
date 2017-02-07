import { Injectable } from '@angular/core';

const Everlive: any = require('../../sdks/everlive.js');

@
Injectable()

export class backendServicesService {
    private _everlive: any;
    private _everliveQuery: any;
    private _options: {};

    constructor() {
        this._options = {
            appId: 'jmbf8njcu046y26w',
            scheme: 'https',
            caching: true
        }

        this._everlive = new Everlive(this._options);
        this._everliveQuery = new Everlive.Query();
    }

    get instance() {
        return this._everlive;
    }

    get query() {
        return this._everliveQuery;
    }
}

// START_CUSTOM_CODE_backendServices
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_backendServices  