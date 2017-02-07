import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router";
import { RehearsalRoomsService } from "../../shared/rehearsalRooms.service";
import { Observable } from "rxjs/Observable";
import * as TNSPhone from 'nativescript-phone';
import dialogs = require("ui/dialogs");
import {
    FlexboxLayout,
    FlexDirection,
    FlexWrap,
    JustifyContent,
    AlignItems,
    AlignContent,
    AlignSelf
} from "ui/layouts/flexbox-layout";

@Component({
  moduleId: module.id,  
  selector: "rehearsalRooms-details",
  templateUrl: "details.component.html",
  styleUrls: ["details.component.css"],
})

export class DetailsComponent { 
    public id: string;
    public selectedRehearsalRoom: Observable < any >;
    public parsedPhoneNumbers: string[] = [];
    private isInitialized: boolean = false;
    
    private latitude: number;
    private longitude: number;
    private title: string;

    public constructor(private router: Router, private route: ActivatedRoute, private rehearsalRoomsSrv: RehearsalRoomsService) {                
        this.route.params.subscribe((params) => {
            this.id = params["id"];
            if (!this.isInitialized) {
                this.rehearsalRoomsSrv.getById(this.id)
                    .then(
                    (data) => {                    
                        this.selectedRehearsalRoom = data;
                        this.parsePhoneNumbers(data);   

                        this.latitude = data.Address.latitude;
                        this.longitude = data.Address.longitude;
                        this.title = data.Name;
                        
                        this.isInitialized = true;                 
                    });                
            }
        });
    }

    private parsePhoneNumbers(data) {
        if (data != null && data.PhoneNumber != undefined) {
        data.PhoneNumber.split(",")
                            .forEach(phone => {
                                this.parsedPhoneNumbers.push(phone.trim());
                            })
        };
    }

    public toTimeString(dateTime: Date): string {
        if (dateTime == null) {
            return ""; 
        }
        else {
            return ((dateTime.getHours() < 10 ? '0' : '') + dateTime.getHours()) + ":" + ((dateTime.getMinutes() < 10 ? '0' : '') + dateTime.getMinutes());
        }
    }

    public onItemTap(args) {
        this.call(this.parsedPhoneNumbers[args.index]);
    }

    onNavBtnTap() {
        this.router.navigate(["rehearsalRoom/List"]);
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

    private call(phoneNumber: string) {
        TNSPhone.dial(phoneNumber, true);
    }

    goToMap() {                
        this.router.navigate(["rehearsalRoomMap", this.id]);
    }
}