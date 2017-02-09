import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import { RehearsalRoomsService } from "../../shared/rehearsalRooms.service";
var mapsModule = require("nativescript-google-maps-sdk");

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
        var mapView = args.object;

        for (let room of this.rehearsalRooms) {            
            var marker = new mapsModule.Marker();
            marker.position = mapsModule.Position.positionFromLatLng(room.Address.latitude, room.Address.longitude);
            marker.title = room.Name;
            
            marker.userData = { id : room.Id};
            mapView.addMarker(marker);
        }
    }

    onMarkerInfoWindowTapped(args) {
        this.router.navigate(["rehearsalRoom/", args.marker.userData.id]);
    }
}