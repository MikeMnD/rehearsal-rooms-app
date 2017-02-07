import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import { RehearsalRoomsService } from "../../shared/rehearsalRooms.service";
import { RehearsalRoom } from "../../shared/entities/rehearsalRoom";

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
        this.router.navigate(["/rehearsalRoom", item.Id]);
    }

    onNavMapTap() {
        this.router.navigate(["/rehearsalRoomMapAll"]);
    }
}