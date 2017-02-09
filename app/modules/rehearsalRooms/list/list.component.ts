import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import { RehearsalRoomsService } from "../../shared/rehearsalRooms.service";
import { RehearsalRoom } from "../../shared/entities/rehearsalRoom";
import {
    FlexboxLayout,
    FlexDirection,
    FlexWrap,
    JustifyContent,
    AlignItems,
    AlignContent,
    AlignSelf
} from "ui/layouts/flexbox-layout";
var Analytics = require('nativescript-telerik-analytics');

@Component({
  moduleId: module.id,
  selector: 'rehearsalRooms-list',
  templateUrl: 'list.component.html',
  styleUrls: ["list.component.css"]
})

export class ListComponent {

    public rehearsalRooms: RehearsalRoom[] = [];

    constructor(private router: Router, private rehearsalRoomsSvc: RehearsalRoomsService) {
        rehearsalRoomsSvc.getAll()
            .subscribe(  
                (data) => {
                    this.rehearsalRooms = data;
                });
    }

    goToDetails(item) {
        Analytics.trackEvent('List.OpenDetails');
        this.router.navigate(["/rehearsalRoom", item.Id]);
    }

    onNavMapTap() {
        Analytics.trackEvent('List.OpenMap');
        this.router.navigate(["/rehearsalRoomMapAll"]);
    }
}