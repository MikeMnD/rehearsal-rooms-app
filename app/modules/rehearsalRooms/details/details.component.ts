import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RehearsalRoomsService } from "../../shared/rehearsalRooms.service";
import { Observable } from "rxjs/Observable";
import * as TNSPhone from 'nativescript-phone';

@Component({
  moduleId: module.id,  
  selector: "rehearsalRooms-details",
  templateUrl: "details.component.html",
  styleUrls: ["details.component.css"],
})

export class DetailsComponent { 
    public id: string;
    public selectedRehearsalRoom: Observable < any >;
    
    public constructor(private route: ActivatedRoute, private rehearsalRoomsSrv: RehearsalRoomsService) {                
        this.route.params.subscribe((params) => {
            this.id = params["id"];
            this.rehearsalRoomsSrv.getById(this.id)
                .then(
                (data) => { 
                    this.selectedRehearsalRoom = data;                    
                });                
        });
    }

    public toTimeString(dateTime: Date): string {
        if (dateTime == null) {
            return ""; 
        }
        else {
            return ((dateTime.getHours() < 10 ? '0' : '') + dateTime.getHours()) + ":" + ((dateTime.getMinutes() < 10 ? '0' : '') + dateTime.getMinutes());
        }
    }

    public call(phoneNumber: string) {
        TNSPhone.dial(phoneNumber, true);
    }
}