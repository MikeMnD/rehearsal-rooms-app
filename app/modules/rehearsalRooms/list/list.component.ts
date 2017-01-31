import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import { RehearsalRoomsService } from "../../shared/rehearsalRooms.service";

@Component({
  moduleId: module.id,
  selector: 'rehearsalRooms-list',
  templateUrl: 'list.component.html',
  styleUrls: ["list.component.css"]
})

export class ListComponent {

    public rehearsalRooms: Observable<any>[] = [];

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
}