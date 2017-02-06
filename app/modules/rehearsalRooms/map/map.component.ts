import {Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {RehearsalRoomsService} from "../../shared/rehearsalRooms.service";

@Component({
  moduleId: module.id,
  selector: 'rehearsalRooms-map',
  templateUrl: 'map.component.html',
  styleUrls: ["map.component.css"]
})
export class MapComponent {

    private id:string;    
    
    private latitude: number;
    private longitude: number;
    private title: string; 

    public constructor(private route: ActivatedRoute, private rehearsalRoomsSrv: RehearsalRoomsService) {
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
        console.log("event called");
    }

    onMapReady(args) {
        args.map.addMarkers([
          {
            id: 1,
            lat: this.latitude,
            lng: this.longitude,  
            title: this.title,          
          }
        ]);
    }
}