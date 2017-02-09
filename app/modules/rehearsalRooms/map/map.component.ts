import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RehearsalRoomsService } from "../../shared/rehearsalRooms.service";
var mapsModule = require("nativescript-google-maps-sdk");

@Component({
    moduleId: module.id,
    selector: 'rehearsalRooms-map',
    templateUrl: 'map.component.html',
    styleUrls: ["map.component.css"]
})
export class MapComponent {

    private id: string;

    private latitude: number = 42.6229251;
    private longitude: number = 23.5828561;
    private title: string;

    public constructor(private router: Router, private route: ActivatedRoute, private rehearsalRoomsSrv: RehearsalRoomsService) {
        this.route.params.subscribe((params) => {
            this.id = params["id"];
            this.rehearsalRoomsSrv.getById(this.id)
                .then(
                (data) => {
                    this.latitude = data.Address.latitude;
                    this.longitude = data.Address.longitude;
                    this.title = data.Name;
                });
        });
    }

    onMapReady(args) {
        var mapView = args.object;        
        var marker = new mapsModule.Marker();
        marker.position = mapsModule.Position.positionFromLatLng(this.latitude, this.longitude);
        marker.title = this.title;

        mapView.addMarker(marker);
    }

    onNavBtnTap() {
        this.router.navigate(["rehearsalRoom", this.id]);
    }
}