import {Component, ElementRef, ViewChild} from '@angular/core';
import {registerElement} from "nativescript-angular/element-registry";

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
  selector: 'rehearsalRooms-map',
  template: `
    <StackLayout>
      <MapView (mapReady)="onMapReady($event)"></MapView>
    </StackLayout>
  `
})
export class MapComponent {


    @ViewChild("MapView") mapView: ElementRef;

    //Map events
    onMapReady = (event) => {
        console.log("Map Ready");
    };

}