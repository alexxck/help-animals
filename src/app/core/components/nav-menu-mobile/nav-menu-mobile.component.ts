import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-menu-mobile',
  templateUrl: './nav-menu-mobile.component.html',
  styleUrls: ['./nav-menu-mobile.component.css']
})
export class NavMenuMobileComponent implements OnInit {

  showMenu = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeMenuShow(): void {
    this.showMenu = !this.showMenu;
  }

}
