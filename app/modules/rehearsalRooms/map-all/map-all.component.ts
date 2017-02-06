import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'rehearsalRoom-mapall',
  templateUrl: `map-all.component.html`,  
})
export class MapAllComponent {

  constructor(private router: Router) {

  }
      
  onNavBtnTap() {
      this.router.navigate(["rehearsalRoom/List"]);
  }

  onMapReady(args) {        
  }
}