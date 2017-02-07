import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import { RehearsalRoomsService } from "../../shared/rehearsalRooms.service";

@Component({
  moduleId: module.id,
  selector: 'rehearsalRoom-mapall',
  templateUrl: `map-all.component.html`,  
})
export class MapAllComponent {
    private rehearsalRooms: any[] = [];

    constructor(private router: Router, private rehearsalRoomsSvc: RehearsalRoomsService) {
            rehearsalRoomsSvc.getAll()
                .subscribe(  
                    (data) => {
                        this.rehearsalRooms = data;
                    });
    }
        
    onNavBtnTap() {
        this.router.navigate(["rehearsalRoom/List"]);
    }

    onMapReady(args) {
        for (let room of this.rehearsalRooms) {
            args.map.addMarkers([{
                id: room.Id,
                lat: room.Address.latitude,
                lng: room.Address.longitude,
                title: room.Name,
                onCalloutTap: () => {this.router.navigate(["rehearsalRoom/", room.Id])},                
            }])
        }
    }
}