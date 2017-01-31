import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';
import * as shared from "../../shared";
const Everlive: any = require('../../sdks/everlive.js');

@
Injectable()
export class RehearsalRoomsService {
    private _data: any;

    constructor (
        private _provider: shared.backendServicesService
    ) {
        this._data = _provider.instance.data("RehearsalRoom");
    }

    get provider() {
        return this._provider.instance;
    }

    getAll(): Observable < any > {
        let promise: Promise < any > = new Promise(
            (resolve, reject) => {
                this._data
                    .get()
                    .then(data => resolve(data.result || []))
                    .catch(error => reject(error));
            }
        );
        
        return Observable.fromPromise(promise);
    }

    getById(rehearsalRoomId): Promise < any > {
        var filter = new Everlive.Query();
        filter.where().eq("Id", rehearsalRoomId);
        filter.take(1);

        let promise: Promise<any> = new Promise(
            (resolve, reject) => {
                this._data
                    .get(filter)
                    .then(data => resolve(data.result[0] || []))
                    .catch(error => reject(error));
            }
        );

        return promise;
    }
}